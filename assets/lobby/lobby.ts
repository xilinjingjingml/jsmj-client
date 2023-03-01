/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-10-21 14:43:52
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-10-23 17:55:28
 */
import { izx } from "../framework/izx";
import Constants from "../common/constants";
import lobbySceneMode from "./mode/lobbySceneMode";
import {LOBBY_SCENE_EVENT} from "./evnets_lobby_scene";

const GAME_BUNDLE_NAME = "lobby"
export default class Lobby {
    private static _instance = null
    static getInstance(): Lobby {
        if (!Lobby._instance) {
            Lobby._instance = new Lobby()
            Lobby._instance._init()
        }

        return Lobby._instance
    }

    _lobbySceneMode = new lobbySceneMode()

    private _init() {
        izx.on(Constants.EventName.LOBBY_SHOW_MAIN, this._onShowLobby, this)        
    }

    private _onShowLobby(msg) {
        this._lobbySceneMode.getPlayerInfoReq()
        izx.pushScene(GAME_BUNDLE_NAME, "prefabs/LobbyScene", () => {
            izx.dispatchEvent(Constants.EventName.GAME_CLOSE_LOADING)
            izx.dispatchEvent(Constants.EventName.ROOM_ENTER_FROM_LOBBY, msg)
            izx.dispatchEvent(LOBBY_SCENE_EVENT.AWARDS_TIP_NOT, this._lobbySceneMode.awardsTip)
        }, {initParam: this._lobbySceneMode.awardsTip})
    }
}

let lobby = Lobby.getInstance()