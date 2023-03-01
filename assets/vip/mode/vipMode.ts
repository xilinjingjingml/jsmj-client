import Constants, { COMMON_CONSTANT } from "../../common/constants"
import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import { VIP_EVENT } from "../vip_evnets"

const GET_VIP_CONFIG = "jsmj-lobby-vip-srv/vip/getVipConfig"
const GET_SEND_VIP_CONFIG = "jsmj-lobby-vip-srv/vip/getSendVipConfig"
const GET_VIP_USER_LEVEL = "jsmj-lobby-vip-srv/vip/getVipUserLevel"
const GET_VIP_AWARDS = "jsmj-lobby-vip-srv/vip/getVipAwards"

export default class VipMode extends BaseMode{
    constructor() {        
        super()
        this.autoRegHander()
        this.init()
    }

    init() {
        izx.log("VipMode init")
        izx.on(VIP_EVENT.GET_VIP_CONFIG_REQ, this.getVipConfigReq, this)
        izx.on(VIP_EVENT.GET_SEND_VIP_CONFIG_REQ, this.getSendVipConfigReq, this)
        izx.on(VIP_EVENT.GET_VIP_USER_LEVEL_REQ, this.getVipUserLevelReq, this)
        izx.on(VIP_EVENT.GET_VIP_AWARDS_REQ, this.getVipAwardsReq, this)
    }

    unLoad() {
        izx.offByTag(this)
        izx.unsetProto("vip")
    }

    getVipConfigReq(msg) {
        let url = izx.httpUrl + GET_VIP_CONFIG
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.code.id !== 1) {
                izx.logW("get vip config err!", res.code.id)
                return
            }

            izx.dispatchEvent(VIP_EVENT.GET_VIP_CONFIG_RSP, res.vip_configs)
        })
    }

    getSendVipConfigReq(msg) {
        let url = izx.httpUrl + GET_SEND_VIP_CONFIG
        let body = msg

        izx.log(body)
        izx.httpPost(url, null, body, (res) => {
            if (!res || res.code.id !== 1) {
                izx.logW("get send vip config err!", res.code.id)
                return
            }

            izx.dispatchEvent(VIP_EVENT.GET_SEND_VIP_CONFIG_RSP, res.awards_list)
        })
    }

    getVipUserLevelReq(msg) {
        let url = izx.httpUrl + GET_VIP_USER_LEVEL
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.code.id !== 1) {
                izx.logW("get vip user level err!", res.code.id)
                return
            }

            izx.dispatchEvent(VIP_EVENT.GET_VIP_USER_LEVEL_RSP, res.info)
        })
    }

    getVipAwardsReq(msg) {
        let url = izx.httpUrl + GET_VIP_AWARDS
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.code.id !== 1) {
                izx.logW("get vip awards err!", res.code.id)
                if (res.code.id == -9) {
                    izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: res.code.id, msg: "您正在游戏中，无法进行操作"})
                }
                return
            }
            
            let awards = new Array(res.awards.length)
            for(var i = 0; i<res.awards.length; i++) {
                let award = res.awards[i]
                let id = award.prop_id ? award.prop_id : 0
                if (id == COMMON_CONSTANT.ITEM_HEAD_FRAME) {
                    awards[i] = {index:id, num:award.min_num, headFrameIndex:award.max_num}
                } else {
                    awards[i] = {index:id, num:award.min_num}
                }
            }
            
            //izx.dispatchEvent(Constants.EventName.SHOW_AWARDS, {awards: awards})
            izx.pushDialog("unipop","prefabs/AwardsMain", null, {"initParam":{"award":awards}, mask:true})
            izx.dispatchEvent(VIP_EVENT.GET_VIP_AWARDS_RSP, res)
        })
    }
}