/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-02 10:40:56
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-14 18:56:40
 */
import { izx } from "../../framework/izx";

import adOrder = require("../../common/protos/ad-order")
import adSpot = require("../../common/protos/ad-spot")
import sign = require("../../common/protos/sign")
import Constants from "../../common/constants";
import BaseMode from "../../framework/base/baseMode";
import { Types } from "../../framework/plugin/pluginTypes"

export default class AdMode extends BaseMode {
    constructor() {
        super()
        this.autoRegHander()

        izx.setProto("ad", adOrder)
        izx.setProto("ad-spot", adSpot)
        izx.setProto("sign", sign)
    }
    
    AdOrderReq(msg) {
        izx.log(msg)
        izx.log("====AdOrderReq====")
        izx.notify("jsmj-lobby-ad-srv.Ad.InitOrder", "AdOrderReq", {
            uid: msg.uid,
            areaId: msg.areaId
        })
    }

    AdOrderNotHandler(msg) {
        msg = msg.packet
        izx.log(msg)
        izx.dispatchEvent(Constants.EventName.AD_ORDER_NOTI, msg)
    }

    // 获取转盘奖励
    GetZhuanPanRewardReq(msg) {
        izx.log(msg)
        izx.notify("jsmj-lobby-ad-srv.AdSpot.GetLotteryReward", "GetZhuanPanChouJiangAwardReq", {
            uid: izx.user.uid,
            service: msg.service,
            orderId: msg.orderId,
        })
    }

    GetZhuanPanChouJiangAwardAckHandler(msg){
        msg = msg.packet
        izx.log(msg)
        izx.dispatchEvent(Constants.EventName.AD_SPOT_Zhuan_Pan_Get_Award_Ack, msg)
    }

    // 获取登录奖励
    GetLoginRewardReq(msg) {
        izx.log(msg)
        izx.notify("jsmj-lobby-sign-srv.Sign.GetLoginReward", "GetLoginRewardReq", {
            uid: izx.user.uid,
            service: msg.service,
            orderId: msg.orderId,
            day: msg.day,
        })
    }

    GetAdOrderAwardReq(msg) {
        izx.log(msg)
        izx.notify("jsmj-lobby-ad-srv.Ad.OrderAward", "GetAdOrderAwardReq", {
            uid: izx.user.uid,
            service: msg.service,
            orderId: msg.orderId,
        })
    }

    GetAdOrderAwardAckHandler(msg) {
        msg = msg.packet
        izx.log(msg)
        izx.dispatchEvent(Constants.EventName.GET_AD_ORDER_AWARD_ACK, msg)
    }

    UpdateAdOrderStatusReq(msg) {
        izx.log(msg)
        izx.notify("jsmj-lobby-ad-srv.Ad.UpdateOrderStatus", "UpdateAdOrderStatusReq", {
            uid: izx.user.uid,
            service: msg.service,
            orderId: msg.orderId,
            state: msg.state,
        })
    }

    UpdateAdOrderStatusAckHandler(msg) {
        msg = msg.packet
        izx.log(msg)
        izx.dispatchEvent(Constants.EventName.UPDATE_AD_ORDER_STATUS_ACK, msg)
    }

    OnAdCallBackHandler(msg: Types.PluginAdResultData) {
        // msg = JSON.parse(msg)
        izx.log(msg)
        izx.dispatchEvent(Constants.EventName.AD_ORDER_CURRENT_AD_CALLBACK_INFO, msg)
    }
    //广告点主动触发
    //新手豪礼
    GetXinShouHaoLiReq(msg) {
        izx.log(msg)
        izx.notify("jsmj-lobby-ad-srv.AdSpot.XinShouHaoLi", "GetXinShouHaoLiReq", {
            uid: izx.user.uid
        }) 
    }
    GetXinShouHaoLiAckHandler(msg) {
        msg = msg.packet
        izx.log(msg)
        izx.dispatchEvent(Constants.EventName.AD_SPOT_Xin_Shou_Hao_Li_Ack, msg) 
    }
    //转盘
    GetZhuanPanChouJiangReq(msg) {
        izx.log(msg)
        izx.notify("jsmj-lobby-ad-srv.AdSpot.ZhuanPan", "GetZhuanPanChouJiangReq", {
            uid: izx.user.uid
        }) 
    }
    GetZhuanPanChouJiangAckHandler(msg) {
        msg = msg.packet
        izx.log(msg)
        izx.dispatchEvent(Constants.EventName.AD_SPOT_Zhuan_Pan_Chou_Jiang_Ack, msg) 
    }
    //每日登录是否领取
    GetDailyFirstLoginReq(msg) {
        izx.log(msg)
        izx.notify("jsmj-lobby-sign-srv.Sign.DailyFirstLogin", "GetDailyFirstLoginReq", {
            uid: izx.user.uid
        })
    }
    GetDailyFirstLoginAckHandler(msg) {
        msg = msg.packet
        izx.log(msg)
        izx.dispatchEvent(Constants.EventName.AD_SPOT_Deng_Lu_Jiang_Li_Get_Daily_First_Login_Ack, msg) 
    }
    //登录奖励
    DengLuJiangLiReq(msg) {
        izx.log(msg)
        izx.notify("jsmj-lobby-sign-srv.Sign.DengLuJiangLi", "GetMeiRiDengLuJiangLiReq", {
            uid: izx.user.uid
        })  
    }
    GetMeiRiDengLuJiangLiAckHandler(msg) {
        msg = msg.packet
        izx.log(msg)
        izx.dispatchEvent(Constants.EventName.AD_SPOT_Deng_Lu_Jiang_Li_Ack, msg) 
    }

    //海底捞月
    AdSpotHaiDiLaoYueHandler(msg) {
        msg = msg.packet
        izx.log(msg)
        izx.dispatchEvent(Constants.EventName.AD_SPOT_HAI_DI_LAO_YUE, msg)
    }
}