import { izx } from "../framework/izx";
import Constants from "../common/constants";
import {PHONE_EVENT} from "./evnets_phone";
import PhoneLogin from "./mode/phoneLogin";
import PhoneAuth from "./mode/phoneAuth";

// bundleName
const GAME_BUNDLE_NAME = "phone"

export default class Phone {
    private static _instance: Phone
    static getInstance(): Phone {
        if (!Phone._instance) {
            Phone._instance = new Phone()
            Phone._instance._init()
        }

        return Phone._instance
    }

    // _phoneAuth: PhoneAuth = null
    // _phoneLogin: PhoneLogin = null

    private _init() {
        // // 初始化账号系统
        // this._phoneAuth = new PhoneAuth()
        // this._phoneLogin = new PhoneLogin()

        izx.on(Constants.EventName.PHONE_SHOW_MAIN, this.ShowPhone, this)
        izx.on(PHONE_EVENT.SHOW_POP, this.ShowPop, this)
        // izx.on(Constants.EventName.ACCOUNT_PHONE_AUTH, this.login, this)
        // izx.on(izx.SOCKET_CONNECT, this._phoneLogin.LoginReq, this._phoneLogin)
    }

    private ShowPhone(msg) {
        izx.pushScene(GAME_BUNDLE_NAME, "prefabs/PhoneMain", (res) => {

        })
    }

    private ShowPop(msg) {
        izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/BasePop", (res) => {

        })
    }

    // login() {
    //     this._phoneLogin.login()
    // }
}

let phone = Phone.getInstance()