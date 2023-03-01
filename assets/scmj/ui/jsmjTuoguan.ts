import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import Scmj from "../scmj";
import { OperatorCode } from "../scmjConstants";
import { SCMJ_EVENT } from "../scmjEvents";
import { scmjUtil } from "../scmjUtil";
import mjLayer from "./scmjLayer";
import scmjMain from "./ScmjMain";
import proto_mj = require("../protos/proto_mj")
import Servers, { } from "../../common/servers";
import Constants from "../../common/constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class JsmjTuoguan extends BaseUI {

    chairId = 0

    onLoad() {
        console.log("")
        this.initEvent()
        this.initButton()
    }

    initEvent() {
        izx.on(SCMJ_EVENT.AUTO_NOTI, this.autoNoti, this)
        izx.on(SCMJ_EVENT.INIT_SELF_VIEW_SERVER_CHAIR_ID, this.init_self_view_chair_id, this)
        izx.on(SCMJ_EVENT.GAME_RESULT_NOTI, this.closeMyTuoguan, this)
    }

    initButton () {

        // 取消托管
        izx.bindButtonClick("tuoguanArea/BtnCancelTuoG", this.node, (sender, data) => {
            cc.find("tuoguanArea",  this.node).active = false
            // 发送取消托管的请求
            izx.dispatchEvent(SCMJ_EVENT.AUTO_REQ, {autoFlag: 0, autoType:1})
        })
    }
    // 托管广播通知
    autoNoti(msg) {
        if(msg.chairID === this.chairId) {
            if (msg.autoFlag === 0) {
                cc.find("tuoguanArea",  this.node).active = false
            } else {
                cc.find("tuoguanArea",  this.node).active = true
            }
        } else {
            izx.dispatchEvent(SCMJ_EVENT.TUO_GUAN_DISPATCH, msg)
        }
    }

    closeMyTuoguan() {
        cc.find("tuoguanArea",  this.node).active = false
    }

    s2c(index) {
        let maxPlyNum = 4
        return (index - this.chairId + maxPlyNum) % maxPlyNum
    }
    c2s(index) {
        let maxPlyNum = 4
        return (this.chairId + index + maxPlyNum) % maxPlyNum
    }
    init_self_view_chair_id(server_chair_id) {
        this.chairId = server_chair_id
    }
}
