import { izx } from "../../framework/izx"

import proto = require("../../common/protos/room")
import gameBase = require("../../common/protos/gamebase")
import Constants from "../../common/constants"
import BaseMode from "../../framework/base/baseMode"
import { Fsm } from "../../framework/base/fsm"
import { Items, Item } from "../../framework/base/item"

const enum ROOM_STATUS{
    ROOM_NONE = 0,
    START_GAME = 1,
    CANCEL_GAME = 2,
    ENTER_ROOM = 3,
    LEAVE_ROOM = 4,
    STAET_GAME_NOTIFY = 5,

    SOCKET_CLOSE = 6,

    CONFIRM_ENTER = 7,
}

interface RoomInfo {
    gameId?: string
    metaData?: string
    roomId?: string
    ruleId?: string
    serverId?: string

    ruleHead?: string
}

export default class RoomMode extends BaseMode {
    _fsm: Fsm = null
    _room = null
    constructor() {
        super()
        this.autoRegHander()

        // 设置proto协议
        izx.setProto("room", proto)
        izx.setProto("gameBase", gameBase)

        this._fsm = izx.createFsm("room")
        this._fsm.regState(ROOM_STATUS.START_GAME, [ROOM_STATUS.ROOM_NONE, ROOM_STATUS.LEAVE_ROOM], this._startGame.bind(this))
        // this._fsm.regState(ROOM_STATUS.STAET_GAME_NOTIFY, [ROOM_STATUS.ROOM_NONE, ROOM_STATUS.START_GAME], this._joinRoom.bind(this))
        this._fsm.regState(ROOM_STATUS.CONFIRM_ENTER, [ROOM_STATUS.ROOM_NONE, ROOM_STATUS.START_GAME], this._confirmEnter.bind(this))
        this._fsm.regState(ROOM_STATUS.ENTER_ROOM, [ROOM_STATUS.ROOM_NONE, ROOM_STATUS.START_GAME, ROOM_STATUS.CONFIRM_ENTER], this._enterRoom.bind(this))
        this._fsm.regState(ROOM_STATUS.LEAVE_ROOM, [ROOM_STATUS.START_GAME, ROOM_STATUS.STAET_GAME_NOTIFY, ROOM_STATUS.ENTER_ROOM], this._leaveRoom.bind(this))        
        this._fsm.regState(ROOM_STATUS.ROOM_NONE, [ROOM_STATUS.ENTER_ROOM, ROOM_STATUS.START_GAME, ROOM_STATUS.STAET_GAME_NOTIFY, ROOM_STATUS.LEAVE_ROOM], this._leaveRoom.bind(this))        
        this._fsm.regState(ROOM_STATUS.CANCEL_GAME, ROOM_STATUS.START_GAME, this._closeGame.bind(this))
        this._fsm.regState(ROOM_STATUS.SOCKET_CLOSE, [ROOM_STATUS.START_GAME, ROOM_STATUS.STAET_GAME_NOTIFY, ROOM_STATUS.ENTER_ROOM], this._closeGame.bind(this))
        this._fsm.initState(ROOM_STATUS.ROOM_NONE)
    }

    InTable() {
        izx.log("==State==", this._fsm.getState())
        return this._fsm.getState() === ROOM_STATUS.ENTER_ROOM
    }
    InLobby() {
        izx.log("==State==", this._fsm.getState())
        return this._fsm.getState() === ROOM_STATUS.ROOM_NONE
    }

    private _startGame(msg) {
        izx.dispatchEvent(Constants.EventName.ROOM_READY_SUCC, msg)
    }

    // private _joinRoom(msg) {
    //     this._room = msg
    //     izx.dispatchEvent(Constants.EventName.ROOM_JOIN_NOTIFY, msg)
    //     this.EnterRoomReq(msg.room)
    // }
    private _confirmEnter(msg) {
        izx.dispatchEvent(Constants.EventName.ROOM_JOIN_NOTIFY, msg)
        this.EnterRoomReq(msg)
    }

    private _enterRoom(msg) {
        let room = msg.roomInfo as RoomInfo
        room.ruleHead = room.serverId + "." + room.ruleId
        izx.setData("room", room)
        izx.dispatchEvent(Constants.EventName.ROOM_ENTER_GAME, room)
        this.HeartBeatReq()
    }

    private _leaveRoom(msg) {
        this._room = null
        izx.dispatchEvent(Constants.EventName.ROOM_EXIT_GAME, msg)
    }

    private _closeGame(msg) {
        this._room = null
        izx.dispatchEvent(Constants.EventName.ROOM_CANCEL_GAME, msg)
    }


    UpdateItemNotHandler(msg) {
        msg = msg.packet
        let data = msg.update || {}
        data.forEach(item => {
            izx.item.setItem(item) 
        });
    }
    GetJoinRoomNotify() {
        izx.dispatchEvent(Constants.EventName.ROOM_JOIN_NOTIFY, this._room)
    }

    StartJoinRoomReq(msg) {
        izx.log("==StartJoinRoomReq==", msg)
        if (!msg || !msg.ruleId) {      
            izx.logW("ruleId is null")
            return
        }
        izx.notify("mcbeam-server-manager-srv.Room.StartGame", "StartJoinRoomReq", {
            uid: izx.user.uid,
            gameId: "jsmj-server-game-srv",//msg.gameId,
            ruleId: "jsmj-server-game-srv.redpack.xs",//msg.ruleId,
        })
    }

    StartJoinRoomRspHandler(msg) {
        msg = msg.packet
        if (msg.errCode && msg.errCode !== 0) {
            izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: msg.errCode, msg: msg.errMsg})
            return
        }

        if (msg.gameData) {
            this._fsm.updateState(ROOM_STATUS.CONFIRM_ENTER, msg.gameData)
        } else {
            this._fsm.updateState(ROOM_STATUS.START_GAME, msg)
        }
    }

    Reconnect(gameData) {
        this._fsm.updateState(ROOM_STATUS.CONFIRM_ENTER, gameData)
    }

    StartJoinRoomNotHandler(msg) {
        msg = msg.packet
        // if (msg.room) {
        //     this._fsm.updateState(ROOM_STATUS.STAET_GAME_NOTIFY, msg)
        // }
        this.EnterRoomConfirmReq(msg)
    }

    EnterRoomConfirmReq(msg) {
        if (!msg) {
            izx.logW("ruleId is null")
            return
        }
        izx.notify("mcbeam-server-manager-srv.Room.EnterRoomConfirm", "EnterRoomConfirmReq", {
            //    roomId: msg.roomId,
            confirmed: true
        })
    }

    EnterRoomConfirmRspHandler(msg) {
        msg = msg.packet
        if (msg.errCode && msg.errCode !== 0) {
            izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, { code: msg.errCode, msg: msg.errMsg })
            return
        }

        if (msg && msg.room)
            this._fsm.updateState(ROOM_STATUS.CONFIRM_ENTER, msg.room)
    } 

    EnterRoomReq(msg) {
        if (!msg || !msg.roomId)
            return
        if (!msg.roomId) {
            izx.logW("roomId is null")
            return
        }
        izx.notify(msg.gameId + ".Base.EnterRoom", "EnterRoomReq", {
            uid: izx.user.uid,
            token: izx.user.token,
            roomId: msg.roomId,
        })
    }

    EnterRoomRspHandler(msg) {
        msg = msg.packet
        if (msg.errCode === -1) {
            //this._fsm.updateState(ROOM_STATUS.LEAVE_ROOM)
            this._fsm.updateState(ROOM_STATUS.ROOM_NONE)
        } else if (msg.errCode && msg.errCode !== 0) {
            izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, { code: msg.errCode, msg: msg.errMsg })
            return
        } else {
            this._fsm.updateState(ROOM_STATUS.ENTER_ROOM, msg)   
        }
    }

    EnterRoomNotHandler(msg) {
        msg = msg.packet
        izx.dispatchEvent(Constants.EventName.ROOM_ENTER_NOTI, msg)
    }
      
    ExitRoomReq(msg = null) {
        //this._fsm.updateState(ROOM_STATUS.LEAVE_ROOM)
        this._fsm.updateState(ROOM_STATUS.ROOM_NONE, {backToLobby: false})
        let room = izx.getData("room")
        if (!room)
            return

        if (!msg || msg.needReq) {
            izx.notify(room.gameId + ".Base.ExitRoom", "ExitRoomReq", {})
        }

        if (this._heartAction) {
            this._heartAction.stop()
        }

        izx.setData("room", null)
    }
      
    ExitRoomRspHandler(msg) {
        msg = msg.packet
        if (msg.errCode && msg.errCode !== 0) {
            return
        }
        // this._fsm.updateState(ROOM_STATUS.LEAVE_ROOM)
        // this._fsm.updateState(ROOM_STATUS.ROOM_NONE)
    }

    ExitRoomNotHandler(msg) {
        msg = msg.packet
        izx.dispatchEvent(Constants.EventName.ROOM_EXIT_NOTI, msg)
        if (msg.uid == izx.user.uid) {
            izx.log("==ExitRoomNotHandler==", msg)
            this.ExitRoomReq({ needReq: false })
        }
    }

    RoomListReq() {
        izx.notify("mcbeam-server-manager-srv.Room.GetRoomList", "RoomListReq", {})
    }

    RoomListRspHandler(msg) {
        izx.log("roomListRsp")
        msg = msg.packet
        if (msg.errCode && msg.errCode !== 0) {
            izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: msg.errCode, msg: msg.errMsg})
            return
        }
        if (msg.roomList.length > 0) {
            
        }
        // izx.dispatchEvent(Constants.EventName.ROOM_LIST_RSP, {list: msg.roomList})
    }

    _heartNode: cc.Node = null
    _heartAction: cc.Tween = null
    _heartLostTimer: number = 0
    getHeartNode() {
        if (!this._heartNode) {
            this._heartNode = cc.find("HeartTimer", cc.Camera.main.node)
            if (!this._heartNode) {
                this._heartNode = new cc.Node()
                this._heartNode.name = "HeartTimer"
                this._heartNode.parent = cc.Camera.main.node
            }
        }

        return this._heartNode
    }
    HeartBeatReq() {
        izx.notify(izx.getData("room.gameId") + ".Base.HeartBeat", "HeartBeatReq", { reqTime: Date.now() })
        if (this._heartAction) {
            this._heartAction.stop()
        }

        this._heartAction = cc.tween(this.getHeartNode())
            .delay(5)
            .call(() => {
                this._heartLostTimer++
                if (this._heartLostTimer >= 3) {
                    izx.log("==HeartBeatReq Timeout==")
                    this.ExitRoomReq({ needReq: false })
                    return
                }
                this.HeartBeatReq()
            })
            .start()
    }
    HeartBeatRspHandler(msg) {
        if (this._heartAction) {
            this._heartAction.stop()
        }

        this._heartAction = cc.tween(this.getHeartNode())
            .delay(5)
            .call(() => this.HeartBeatReq())
            .start()
    }

    KickPlayerNotHandler(msg) {
        izx.log("==KickPlayerNot==", msg)
        this.ExitRoomReq({ needReq: false })
    }
} 