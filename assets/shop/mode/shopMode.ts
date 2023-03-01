import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import { SHOP_EVENT } from "../shop_events"
import Constants from "../../common/constants";

const GET_CONFIG = "jsmj-lobby-shop-srv/shop/getConfig"
const EXCHANGE_BOX = "jsmj-lobby-shop-srv/shop/exchangeBox"

export default class ShopMode extends BaseMode{
    constructor() {        
        super()
        this.autoRegHander()
        this.init()
        //izx.setProto("lobby", proto)
    }

    init() {
        izx.log("ShopMode init")
        izx.on(SHOP_EVENT.GET_CONFIG_REQ, this.getConfigReq, this)
        izx.on(SHOP_EVENT.EXCHANGE_BOX_REQ, this.exchangeBoxReq, this)
    }

    unLoad() {
        izx.offByTag(this)
        izx.unsetProto("shop")
    }

    getConfigReq(msg) {
        let url = izx.httpUrl + GET_CONFIG
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.code.id !== 1) {
                izx.logW("get config err!", res.code.id)
                return
            }

            izx.dispatchEvent(SHOP_EVENT.GET_CONFIG_RSP, res)
        })
    }


    exchangeBoxReq(msg) {
        let url = izx.httpUrl + EXCHANGE_BOX
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.code.id !== 1) {
                izx.logW("exchange box err!", res.code.id)
                if (res.code.id == -9) {
                    izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: res.code.id, msg: "您正在游戏中，无法进行操作"})
                } else {
                    izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: res.code.id, msg: "钻石不足"})
                }
                return
            }

            izx.dispatchEvent(SHOP_EVENT.EXCHANGE_BOX_RSP, res)
            izx.pushDialog("unipop","prefabs/AwardsMain", null, {"initParam":{"award":[{index:0, num:res.get_item.num}]}, mask:true})
        })
    }
}