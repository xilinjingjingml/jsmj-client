/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-02 10:40:56
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-20 14:22:32
 */
import { izx } from "../../framework/izx";

import proto = require("../../common/protos/lobby-login")
import Constants from "../../common/constants";
import BaseMode from "../../framework/base/baseMode";
import Servers from "../servers";

export default class Login extends BaseMode {
    constructor() {
        super()
        this.autoRegHander()

        izx.setProto("login", proto)
    }


    
    login() {
        izx.login(izx.socketUrl)
    }

    LoginFailed(msg) {
        izx.log("==Socket Connect Failed==", msg)
    }

    LoginReq() {
        izx.notify("mcbeam-lobby-login-srv.Player.Login", "LoginReq", {
            guid: izx.user.guid,
            token: izx.user.token,
            mid: izx.mid,
            pn: izx.packetName,
        })
    }
    
    LoginRspHandler(msg) {
        msg  = msg.packet

        // 登录失败
        if (msg.errCode && msg.errCode !== 0) {
            // 广播错误
            izx.dispatchEvent(Constants.EventName.COMMON_DIALOG, { msg: msg.errCode})
            izx.emit("")
            // 重新从Auth开始登录, 登录之前先手动关闭socket
            izx.close()
            setTimeout(()=>{
                izx.emit(Constants.EventName.ACCOUNT_CHECK_ACCOUNT)
            }, 1000)
            return 
        }

        izx.setConnected()

        izx.user.uid = msg.uid
        izx.user.sex = msg.sex
        izx.user.pic = msg.pic
        izx.user.money = msg.money
        izx.user.vip = msg.vip
        
        izx.item.init(msg.items)

        // 断线重连
        if (msg.gameData && msg.gameData.roomId) {
            izx.setData("ReconnectGame", msg.gameData)
            // izx.notify(msg.gameData.gameId + ".Handler.EnterRoom", "EnterRoomReq", {
            //     uid: izx.user.uid,
            //     token: izx.user.token,
            //     roomId: msg.gameData.roomId,
            // })
            // Servers.getInstance()._room.Reconnect(msg.gameData)
        }

        izx.dispatchEvent(Constants.EventName.ACCOUNT_ON_LOGIN, true)
    }
}