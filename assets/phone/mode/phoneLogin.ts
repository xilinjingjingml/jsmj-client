import { izx } from "../../framework/izx";

import proto = require("../../common/protos/lobby-login")
import Constants from "../../common/constants";
import BaseMode from "../../framework/base/baseMode";

export default class PhoneLogin extends BaseMode {
    constructor() {
        super()
        this.autoRegHander()
        
        izx.setProto("login", proto)
    }   
    
    login() {
        izx.login(izx.socketUrl)
    }

    LoginReq() {
        izx.notify("login.Handler.Verify", "LoginReq", {
            guid: izx.user.uid,
            token: izx.user.token,
            mid: izx.mid,
            pn: izx.packetName,
        })
    }
    
    LoginRspHandler(msg) {
        msg = msg.packet

        if (msg.error && msg.error !== "") {
            izx.dispatchEvent(Constants.EventName.COMMON_DIALOG, {msg: msg.code})
            return 
        }

        izx.user.uid = msg.uid
        izx.user.sex = msg.sex
        izx.user.pic = msg.pic
        izx.user.money = msg.money
        izx.user.vip = msg.vip
        
        izx.item.init(msg.items)

        izx.dispatchEvent(Constants.EventName.ACCOUNT_ON_LOGIN)
    }
}