/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-02 10:40:56
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-26 15:18:39
 */
import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import Constants, {LoadingMsgType} from "../../common/constants"
import { App } from "../common"
import WxWrapper from "../../framework/plugin/WxWrapper"

const GUEST_LOGIN = "mcbeam-authen-srv/auth/accountLogin"

interface ISessionSuccess {
    code: string
    account: string
    guid: string
    headimgurl: string
    nickname: string
    password: string
    sex: number
    token: string
    new_user: boolean
}
interface IWebFailed {
    Id: string
    Code: number
    Detail: string
    Status: string
}

export default class Auth extends BaseMode{
    constructor() {
        super()
        this.autoRegHander()
        // 登录回调
        izx.on("PluginSessionCallBack", this.onSessionResult, this)
    }

    guestLogin() {
        izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, { type: LoadingMsgType.Login, abs: 0, info: App.tips.GAME_LOGIN })
        if (CC_JSB) {
            let p = {
                sessionType: "SessionGuest",
                auth_type: "1",
                mid: izx.mid,
                LoginHost: "mcbeam-authen-srv/auth/accountLogin"
            }
            let account = izx.getData("account_" + izx.imei)
            let password = izx.getData("password_" + izx.imei)
            izx.log("guestLogin:" + account + " : " + password)
            if (account && password) {
                p["account"] = account
                p["password"] = password
            }

            izx.pluginMgr.login(p)
        } else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            WxWrapper.login((res) => {
                izx.log("WxWrapper.login:",res)

                if (!res || res.code !== "00000") {
                    izx.logW("auth login err!")
                    izx.dispatchEvent(Constants.EventName.ACCOUNT_WEB_AUTH, false, "Auth Error")
                    return
                }

                this.setResultData(res)

                izx.setData("last_login", "guest", true)

                izx.dispatchEvent(Constants.EventName.ACCOUNT_WEB_AUTH, true)
            }, false)
        // } else {
        } else {
            let url = izx.authUrl + GUEST_LOGIN
            let body = {
                mid: izx.mid,
                pn: izx.packetName,
                imei: izx.imei,
                device: izx.device,
                auth_type: "1",
            }

            let account = izx.getData("account_" + izx.imei)
            let password = izx.getData("password_" + izx.imei)

            izx.log(account + " : " + password)
            if (account) body["account"] = account
            if (password) body["password"] = password

            izx.log(body)

            izx.httpPost(url, null, body, (res) => {
                if (!res || res.code !== "00000") {
                    izx.logW("auth login err!")
                    izx.logI(body)
                    izx.dispatchEvent(Constants.EventName.ACCOUNT_WEB_AUTH, false, "Auth Error")
                    return
                }

                this.setResultData(res)

                izx.setData("last_login", "guest", true)

                izx.dispatchEvent(Constants.EventName.ACCOUNT_WEB_AUTH, true)
            })
        }
    }

    setResultData(sessionInfo: ISessionSuccess) {
        if (sessionInfo.new_user) {
            if (sessionInfo.account) {
                izx.setData("account_" + izx.imei, sessionInfo.account, true)
            }
            if (sessionInfo.password) {
                izx.setData("password_" + izx.imei, sessionInfo.password, true)
            }
        }
        izx.user.guid = sessionInfo.guid
        izx.user.token = sessionInfo.token
        izx.user.nickname = sessionInfo.nickname
        izx.user.sex = sessionInfo.sex
        izx.user.pic = sessionInfo.headimgurl
    }

    onSessionResult(data: { SessionResultCode: number, msg: string, sessionInfo: ISessionSuccess }) {
        if (data.SessionResultCode === 0) {
            if (typeof(data.sessionInfo.code) !== "undefined") {
                this.setResultData(data.sessionInfo)     
                izx.setData("last_login", "guest", true)

                izx.dispatchEvent(Constants.EventName.ACCOUNT_WEB_AUTH, true)           
            }
        } else {
            izx.log("==onSessionResult==plugin login failed==", data.SessionResultCode, data.msg)
            izx.dispatchEvent(Constants.EventName.ACCOUNT_WEB_AUTH, false, "Auth Error: " + data.msg)     
        }
    }
}