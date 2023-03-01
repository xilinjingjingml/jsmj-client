import { izx } from "../../framework/izx"

import BaseMode from "../../framework/base/baseMode";
import proto = require("../protos/lobby-rank")
import Constants from "../../common/constants";
import { HttpMgr } from "../../framework/net/httpMgr";
import { Rank_EVENT } from "../evnets_rank";

const {ccclass, property} = cc._decorator;



export default class Rank extends BaseMode {
    constructor() {
        super()
        this.autoRegHander()
        izx.setProto("rank", proto)
    }   

    /**
     * 盈利排行榜
     */
    GetWinMoneyRankReq(gameId) {

        izx.dispatchEvent(Rank_EVENT.LOBBY_SHOW_WIN_RSP, {})

        // const CONFIG_URL: string = "jsmj/rank/winMoneyRank?uid=" + izx.user.uid 
        // +"&game_id="+gameId+"&page_index=1&page_count=200&end_time=1603952368&begin_time=1603606768"
        // let url = izx.httpUrl + CONFIG_URL
        // HttpMgr.get(url, null, (res) => {
        //     if (res.errCode != 0) {
        //         izx.dispatchEvent(Constants.EventName.COMMON_DIALOG, {msg: res.errCode})
        //         return
        //     }
        //     izx.dispatchEvent(Rank_EVENT.LOBBY_SHOW_WIN_RSP, res)
        // })
    }
    GetWinMoneyRankAckHandler(msg) {
        msg = msg.packet
        if (msg.error && msg.error !== "") {
            izx.dispatchEvent(Constants.EventName.COMMON_DIALOG, {msg: msg.code})
            return 
        }
        izx.dispatchEvent(Rank_EVENT.LOBBY_SHOW_WIN_RSP, {list: msg})
    }
    /**
     * 财富排行榜
     */
    GetRichRankReq() {
        izx.notify("rank.Handler.RichRank", "LoginReq", {
            uid: izx.user.uid,
            page_index: 1,
            page_count: 200
        })
        
    }
    GetRichRankAckHandler(msg) {
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
    }
}
