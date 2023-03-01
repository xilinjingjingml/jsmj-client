/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2020-11-2 10:08:00
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-12 16:54:57
 */
import { izx } from "../framework/izx"
import Constants from "../common/constants"
import ScmjMode from "./mode/scmjMode"
import { SCMJ_EVENT } from "./scmjEvents"
import { scmjUtil } from "./scmjUtil";
import Servers from "../common/servers"
import { JsmjAudioUtil } from "./JsmjAudioUtil";

const GAME_BUNDLE_NAME = "scmj"

export default class Scmj {
    private static _instance: Scmj
    static getInstance(): Scmj {
        if (!Scmj._instance) {
            Scmj._instance = new Scmj()
            Scmj._instance._init()
        }

        return Scmj._instance
    }

    _scmj: ScmjMode = new ScmjMode()
    _onGame: boolean = false

    private _init() {
        // izx.preloadBundle.push(GAME_BUNDLE_NAME)

        izx.on(Constants.EventName.BACKGROUND, () => {
            
        })
        izx.on(Constants.EventName.FOREGROUND, () => {
            this._scmj.needAutoReady = false
            if (this._onGame) {
                izx.emit(SCMJ_EVENT.COMPLETE_REQ)
            }
        })
        // izx.on(Constants.EventName.ROOM_JOIN_NOTIFY, this.enterGame, this)
        izx.on(Constants.EventName.ROOM_ENTER_GAME, this.enterGame, this)
        izx.on(Constants.EventName.ROOM_EXIT_GAME, this.exitGame, this)
        izx.on(SCMJ_EVENT.READY_REQ, this._scmj.ReadyReq, this)
        izx.on(SCMJ_EVENT.OPERATE_ACK, this._scmj.OperateAck, this)
        izx.on(SCMJ_EVENT.COMPLETE_REQ, this._scmj.CompleteReq, this)

        izx.on(SCMJ_EVENT.AUTO_REQ, this._scmj.AutoReq, this)
    }

    private enterGame(msg) {
        // 判断是否需要重连
        let gameData = izx.getData("ReconnectGame")
        if (gameData) {
            izx.log("==reconnectGame==", msg)
            izx.setData("ReconnectGame", null)
            Servers.getInstance()._room.Reconnect(gameData)
        } else {
            izx.log("==enterGame==", msg)
            if (this._onGame === false) {
                this.loadGame()
                this._onGame = true
            } else {
                izx.log("==Already In Game==", msg)
            }
        }
    }

    private exitGame(msg: { backToLobby: boolean }) {
        if (msg.backToLobby) {
            if (this._onGame) {
                this._scmj.unLoad()
                this._onGame = false
                izx.closeScene(GAME_BUNDLE_NAME+"_prefabs_ScmjMain")
                izx.dispatchEvent(Constants.EventName.LOBBY_SHOW_MAIN, {})
                JsmjAudioUtil.stopBackground()
            }
        }
    }

    private loadGame() {
        this._scmj.load()
        scmjUtil.preLoadPic(() => {
            izx.pushScene(GAME_BUNDLE_NAME, "prefabs/ScmjMain", (res) => {
                izx.dispatchEvent(Constants.EventName.LOBBY_CLOSE_MAIN)
            })
        })
    }
}


// let scmj = Scmj.getInstance()