import { izx } from "../framework/izx";
import Constants from "../common/constants";
import PersonalMode from "./mode/personalMode";
import {PERSONAL_EVENT} from "./personal_events";
import proto = require("./protos/personal_proto")

// bundleName
const GAME_BUNDLE_NAME = "personal"

export default class Personal {
    private static _instance: Personal
    static getInstance(): Personal {
        if (!Personal._instance) {
            Personal._instance = new Personal()
            Personal._instance._init()
        }

        return Personal._instance
    }

    private _personalMode: PersonalMode = new PersonalMode()

    private _init() {        
        izx.setProto("personal", proto)
        izx.on(Constants.EventName.PERSONAL_SHOW_MAIN, this.ShowPersonal, this)
        izx.on(PERSONAL_EVENT.SHOW_HONOR_INFO, this.showHonorInfo, this)
        izx.on(PERSONAL_EVENT.SHOW_EDIT_HEAD, this.showEditHead, this)
    }

    private ShowPersonal() {
        izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/PersonalMain", (res) => {
          izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
        })
    }

    private showHonorInfo(msg) {
        izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/HonorInfoMain", (res) => {
            izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
        }, msg)
    }

    private showEditHead(msg) {
        izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/EditHeadMain", (res) => {
            izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
        }, msg)
    }
}

let personal = Personal.getInstance()