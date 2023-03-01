import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import Constants from "../../common/constants"
import { PHONE_EVENT } from "../evnets_phone"

const SEND_PHONE_CODE = "auth/sendPhoneCode"
const PHONE_CODE_LOGIN = "auth/phoneCodeLogin"

export default class PhoneAuth extends BaseMode{
    constructor() {
        super()
        this.autoRegHander()
    }

    sendPhoneCode(phone: string) {
        let url = izx.httpUrl + SEND_PHONE_CODE
        let body = {
            guid: izx.getData(izx.imei + "uid"),
            phone: phone,
        }

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (res) {
                izx.log("发送验证码 ", res)
                // izx.dispatchEvent(PHONE_EVENT.SHOW_POP, res)
            } else {
                izx.log("获取验证码失败，服务器未响应")
                // izx.dispatchEvent(PHONE_EVENT.SEND_CODE_FAIL)
            }
        })
    }

    phoneCodeLogin(phone: string, phoneCdoe: string, guid?: string) {
        let url = izx.httpUrl + PHONE_CODE_LOGIN
        let body = {
            mid: izx.mid,
            pn: izx.packetName,
            imei: izx.imei,
            device: izx.device,
            phone: phone,
            phone_code: phoneCdoe,
            guid: guid,
        }

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.code !== "00000") {
                izx.logW("phoneauth login err!")
                izx.logI(body)
                // izx.dispatchEvent(PHONE_EVENT.SHOW_POP, "登录失败，服务器未响应")
                return
            }

            if (guid) {
                izx.user.uid = res.guid
                izx.user.token = res.token
                izx.user.nickname = res.nickname
                izx.user.sex = res.sex
                izx.user.pic = res.headimgurl

                izx.setData("last_login", "guest", true)

                izx.setData(izx.imei + "uid", res.guid)
                izx.setData(izx.imei + "token", res.token)
                izx.setData(izx.imei + "nickname", res.nickname)
            }

            izx.dispatchEvent(Constants.EventName.ACCOUNT_PHONE_AUTH)
        })
    }
}