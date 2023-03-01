/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-02 10:40:56
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-12-22 16:53:30
 */
/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-10-21 14:43:52
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-12-09 15:30:22
 */
import { izx } from "../framework/izx";
import Constants from "../common/constants";

const GAME_BUNDLE_NAME = "lobby"
export default class Lobby {
    private static _instance = null
    static getInstance(): Lobby {
        izx.log("==lobby getInstance==")
        if (!Lobby._instance) {
            Lobby._instance = new Lobby()
            Lobby._instance._init()
        }

        return Lobby._instance
    }

    private _init() {
        // izx.preloadBundle.push(GAME_BUNDLE_NAME)
        izx.on(Constants.EventName.LOBBY_SHOW_MAIN, this._onShowLobby, this)
        izx.on(Constants.EventName.LOBBY_CLOSE_MAIN, this._onCloseLobby, this)
        izx.on(Constants.EventName.GAME_LOBBY_SHOW_MAIN, this._onGameToShowLobby, this)

    }

    private _onShowLobby() {
        izx.log("==enter lobby==")
        izx.pushScene(GAME_BUNDLE_NAME, "prefabs/LobbyScene", () => {
            izx.dispatchEvent(Constants.EventName.GAME_CLOSE_LOADING)
        })
    }

    private _onGameToShowLobby () {
        izx.pushScene(GAME_BUNDLE_NAME, "prefabs/LobbyScene", () => {
            izx.dispatchEvent(Constants.EventName.GAME_CLOSE_MAIN)
        })
    }
    
    private _onCloseLobby() {
        izx.closeScene("lobby")
    }
}

// let lobby = Lobby.getInstance()