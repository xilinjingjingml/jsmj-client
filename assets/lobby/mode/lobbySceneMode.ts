import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import {LOBBY_SCENE_EVENT} from "../evnets_lobby_scene";
import proto = require("../protos/item_proto")
import {COMMON_CONSTANT} from "../../common/constants";
import Constants from "../../common/constants"
//import { AdPos } from "../../ad/adConstants";
//import { AD_EVENT } from "../../ad/adEvents";

export default class LobbySceneMode extends BaseMode{
    awardsTip: string[] = new Array()

    constructor() {
        super()

        this.autoRegHander()
        izx.setProto("lobby", proto)
        izx.on(Constants.EventName.QUICK_START_GAME, this.quickStartGame, this)
        izx.on(Constants.EventName.DEAL_WITH_MONEY, this.dealWithMoney, this)
    }

    load() {
      
    }

    unLoad() {
        izx.offByTag(this)
        izx.unsetProto("lobby")
    }

    getPlayerInfoReq() {
        let url = izx.httpUrl + "jsmj-lobby-item-srv/item/getPlayerInfo"
        let body = {
            uid_list: izx.user.uid.toString(),
        }

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            izx.log("getPlayerInfoRsp res = ", res)
            if (!res || res.err_code !== 1) {
                izx.logW("get player info err!")
                izx.logI(body)
                return
            }

            if (res.info_list && res.info_list[0] && res.info_list[0].items) {
                for (let item of res.info_list[0].items) {
                    izx.item.setItem(item)
                }
            }

            izx.dispatchEvent(Constants.EventName.REFRESH_ITEM_JINBI)
            izx.dispatchEvent(Constants.EventName.REFRESH_ITEM_DIAMOND)
            izx.dispatchEvent(Constants.EventName.REFRESH_ITEM_VIP)
            izx.dispatchEvent(Constants.EventName.REFRESH_ITEM_VIP_EXP)
            izx.dispatchEvent(Constants.EventName.REFRESH_ITEM_LEVEL_EXP)
            izx.dispatchEvent(Constants.EventName.REFRESH_ITEM_LEVEL)
            izx.dispatchEvent(Constants.EventName.REFRESH_ITEM_HEAD)
            izx.dispatchEvent(Constants.EventName.REFRESH_ITEM_HEADFRAME)

            izx.dispatchEvent(LOBBY_SCENE_EVENT.GET_PLAYER_INFO_RSP)
        })
    }

    UpdateItemNotHandler(msg) {
        msg = msg.packet
        izx.log(msg)
        if (msg && msg.update.length>0) {
            for (let item of msg.update) {
                if (item.id == COMMON_CONSTANT.ITEM_JINBI) {
                    izx.user.money += item.change
                    izx.dispatchEvent(Constants.EventName.REFRESH_ITEM_JINBI)
                    izx.dispatchEvent(Constants.EventName.SERVER_UPDATE)
                    break
                }
            }
        }
    }

    UpdateMjzzItemNotHandler(msg) {
        msg = msg.packet
        izx.log("UpdateMjzzItemNotHandler", msg)
        if (msg && msg.update.length>0) {
            for (let item of msg.update) {
                izx.item.setItemNum(item.id, item.num)
                if (item.id == COMMON_CONSTANT.ITEM_DIAMOND) {
                    izx.dispatchEvent(Constants.EventName.REFRESH_ITEM_DIAMOND)
                } else if (item.id == COMMON_CONSTANT.ITEM_VIP_EXP) {
                    izx.dispatchEvent(Constants.EventName.REFRESH_ITEM_VIP_EXP)
                } else if (item.id == COMMON_CONSTANT.ITEM_VIP) {
                    izx.dispatchEvent(Constants.EventName.REFRESH_ITEM_VIP)
                } else if (item.id == COMMON_CONSTANT.ITEM_LEVEL_EXP) {
                    izx.dispatchEvent(Constants.EventName.REFRESH_ITEM_LEVEL_EXP)
                } else if (item.id == COMMON_CONSTANT.ITEM_LEVEL) {
                    izx.dispatchEvent(Constants.EventName.REFRESH_ITEM_LEVEL)
                } else if (item.id == COMMON_CONSTANT.ITEM_HEAD) {
                    izx.dispatchEvent(Constants.EventName.REFRESH_ITEM_HEAD)
                } else if (item.id == COMMON_CONSTANT.ITEM_HEAD_FRAME) {
                    izx.dispatchEvent(Constants.EventName.REFRESH_ITEM_HEADFRAME)
                }                
            }
        }
    }

    VipAwardNotHandler(msg) {
        msg = msg.packet
        msg.target = "btnVip"
        let bExist = false
        this.awardsTip.forEach((v: any) => {
            if (v.target == msg.target) {
                v.haveRewards = msg.haveRewards
                bExist = true
            }
        })
        if (!bExist) {
            this.awardsTip.push(msg)
        }

        izx.dispatchEvent(LOBBY_SCENE_EVENT.AWARDS_TIP_NOT, this.awardsTip)
    }

    ActivityAwardNotHandler(msg) {
        izx.log("ActivityAwardNotHandler")
        msg = msg.packet
        msg.target = "btnHd"
        let bExist = false
        this.awardsTip.forEach((v: any) => {
            if (v.target == msg.target) {
                v.haveRewards = msg.haveRewards
                bExist = true
            }
        })
        if (!bExist) {
            this.awardsTip.push(msg)
        }

        if (msg.haveRewards) {
            izx.dispatchEvent(LOBBY_SCENE_EVENT.GET_ACTIVITY_PROGRESS_REQ, {
                type: 0,
                uid: izx.user.uid,
            })
        }

        izx.dispatchEvent(LOBBY_SCENE_EVENT.AWARDS_TIP_NOT, this.awardsTip)
    }

    TaskAwardNotHandler(msg) {
        msg = msg.packet
        msg.target = "btnRw"
        let bExist = false
        this.awardsTip.forEach((v: any) => {
            if (v.target == msg.target) {
                v.haveRewards = msg.haveRewards
                bExist = true
            }
        })
        if (!bExist) {
            this.awardsTip.push(msg)
        }

        izx.dispatchEvent(LOBBY_SCENE_EVENT.AWARDS_TIP_NOT, this.awardsTip)
    }
    
    SignAwardNotHandler(msg) {
        msg = msg.packet
        msg.target = "btnQd"
        let bExist = false
        this.awardsTip.forEach((v: any) => {
            if (v.target == msg.target) {
                v.haveRewards = msg.haveRewards
                bExist = true
            }
        })
        if (!bExist) {
            this.awardsTip.push(msg)
        }

        izx.dispatchEvent(LOBBY_SCENE_EVENT.AWARDS_TIP_NOT, this.awardsTip)
    }

    quickStartGame(msg) {
      let xlch = izx.dataMgr.getServerList("xlch")
      if (!xlch) {
        izx.dispatchEvent(Constants.EventName.SHOW_SMALL_TIPS, {msg: "很抱歉，未能找到游戏场次"})
        return
      }
      let server = izx.dataMgr.getBestServer(xlch, izx.user.money)
      if (!server) {
        izx.dispatchEvent(Constants.EventName.SHOW_SMALL_TIPS, {msg: "很抱歉，未能匹配到合适的场次"})
        return
      }
      izx.dispatchEvent(Constants.EventName.ROOM_READY_TO_GAME, {gameId: xlch.id, ruleId: xlch.id + "." + xlch.type + "." + server.type})
      izx.dispatchEvent(Constants.EventName.UPDATE_BET, server)
    }

    // 处理破产补助和金币不足
  dealWithMoney(msg) {
//     let serverInfo = izx.dataMgr.getCurrentServer()
//     let money = izx.user.money
//     let borkenMoney = izx.dataMgr.getBrokenLimit()
//     if (money >= serverInfo.gold_limit.min) {
//       msg.callback && msg.callback(false)
//       return 
//     }
//     izx.dispatchEvent(Constants.EventName.ROOM_EXIT_REQ, {needReq: false, isReJoin: true})
//     if (money < borkenMoney) {
//       let adInfo = izx.ad.getAreaInfo(AdPos.BrokenRelief)
//       if (adInfo && adInfo.maxNum - adInfo.curNum > 0) {
//         izx.dispatchEvent(Constants.EventName.DISP_BROKEN_RELIEF_DIALOG, {callback : (bDisp) => {
//           if (msg.inGame && !bDisp) {
//             if (money < serverInfo.gold_limit.min) {
//               let adInfo = izx.ad.getAreaInfo(AdPos.LackMoney)
//               if (adInfo && adInfo.maxNum - adInfo.curNum > 0 && msg.inResult) {
//                 izx.dispatchEvent(AD_EVENT.POP_AD_LACK_MONEY)
//                 return
//               } else {
//                 izx.dispatchEvent(Constants.EventName.NO_FIT_SERVER)
//                 izx.dispatchEvent(Constants.EventName.SHOW_SMALL_TIPS, {msg: "金豆不足，无法进行对局游戏"})
//               }
//             }
//           }
//         }})
//         msg.callback && msg.callback(true)
//         return 
//       }
//     }
//     if (msg.inGame && money < serverInfo.gold_limit.min) {
//       let adInfo = izx.ad.getAreaInfo(AdPos.LackMoney)
//       if (adInfo && adInfo.maxNum - adInfo.curNum > 0 && msg.inResult) {
//         izx.dispatchEvent(AD_EVENT.POP_AD_LACK_MONEY)
//       } else if (money >= borkenMoney){
//         izx.dispatchEvent(Constants.EventName.QUICK_START_GAME)
//       } else {
//         izx.dispatchEvent(Constants.EventName.NO_FIT_SERVER)
//         izx.dispatchEvent(Constants.EventName.SHOW_SMALL_TIPS, {msg: "金豆不足，无法进行对局游戏"})
//       }
//       msg.callback && msg.callback(true)
//       return 
//     }
//     izx.dispatchEvent(Constants.EventName.SHOW_SMALL_TIPS, {msg: "金豆不足，无法进行对局游戏"})
//     izx.dispatchEvent(Constants.EventName.NO_FIT_SERVER)
//     msg.callback && msg.callback(true)
//     return 
   }
}