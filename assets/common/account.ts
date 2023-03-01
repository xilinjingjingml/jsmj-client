/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-02 10:40:56
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-26 13:33:39
 */
import Login from "./mode/login"
import { izx } from "../framework/izx"
import Constants from "../common/constants"
import Auth from "./mode/auth"

export default class Account {
    static _instacne: Account = null
    static getInstance(): Account {
        izx.log("==Account getInstance==")
        if (!Account._instacne) {
            Account._instacne = new Account()
            Account._instacne._init()
        }

        return Account._instacne
    }    

    _auth: Auth = null
    _login: Login = null

    private _init() {

        // 初始化账号系统
        this._auth = new Auth()
        this._login = new Login()

        izx.on(Constants.EventName.ACCOUNT_CHECK_ACCOUNT, this.checkAccount, this)
        izx.on(Constants.EventName.ACCOUNT_WEB_AUTH, this.login, this)
        izx.on(izx.SOCKET_CONNECT, this._login.LoginReq, this._login)
        // izx.on(izx.SOCKET_RECONNECT, this._login.LoginReq, this._login)
        izx.on(izx.SOCKET_FAILED, this._login.LoginFailed, this._login)

    }

    checkAccount() {
        this._auth.guestLogin()
    }

    login(isSuccess, msg: string) {
        izx.log("login",isSuccess,msg)
        let self = this
        if (isSuccess) {
            this._login.login()
        } else {
            izx.dispatchEvent(Constants.EventName.ACCOUNT_ON_LOGIN, false, msg, ()=>{
                self.checkAccount()
            })
        }
    }
}

// let account = Account.getInstance()