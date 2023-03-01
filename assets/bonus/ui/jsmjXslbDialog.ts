/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-12-29 09:59:56
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-11 11:50:41
 */
import Constants from "../../common/constants";
import { Ad, AdOrderState } from "../../common/protos/ad-order";
import adSpot = require("../../common/protos/ad-spot")
import adOrder = require("../../common/protos/ad-order")
import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class jsmjXslbDialog extends BaseUI {

    @property(cc.Label)
    hongbaoNum:cc.Label = null

    ackParams: adSpot.IGetXinShouHaoLiAck
    adStatus: number = 0
    
    onLoad () {
        this.initEvent()
    }

    start () {
        izx.ad.showBanner()
    }

    onOpen() {
        this.initParams(this.initParam)
    }

    initEvent() {
        izx.on(Constants.EventName.UPDATE_AD_ORDER_STATUS_ACK, this.updateAdOrderStatusAck, this)
        izx.on(Constants.EventName.GET_AD_ORDER_AWARD_ACK, this.getAdOrderAwardAck, this)
    }
    
    initParams (msg: adSpot.IGetXinShouHaoLiAck) {
        this.ackParams = msg
        if (this.ackParams.adOrder) {
            this.ackParams.adOrder.award.forEach(element => {
                if (element.index == 0) {
                    this.hongbaoNum.string = izx.getMoneyformat(Number(element.num))
                    return
                }
            });  
        }
    }

    onPressLinQu () {
        this.adOrderUpdateStatus()
    }

    onPressClose () {
        izx.popDialog(this)
    }
    // update (dt) {}

    adOrderUpdateStatus() {
        // 接受看广告
        izx.dispatchEvent(Constants.EventName.AD_ORDER_UPDATE_STATUS,  {
            uid : izx.user.uid,
            service : this.ackParams.adOrder.service,
            orderId : this.ackParams.adOrder.orderId,
            state: AdOrderState.Accept
        })
    }

    updateAdOrderStatusAck(msg: adOrder.UpdateAdOrderStatusAck) {
        if (msg.service !== this.ackParams.adOrder.service || msg.orderId !== this.ackParams.adOrder.orderId) {
            return
        }

        if (msg.errCode == 0) {
            this.getAdOrderAward()
        }else {
            //提示
        }
    }

    getAdOrderAward () {
        // 领取广告奖励
        izx.dispatchEvent(Constants.EventName.AD_ORDER_AWARD,  {
            uid : izx.user.uid,
            service : this.ackParams.adOrder.service,
            orderId : this.ackParams.adOrder.orderId,
        })
    }

    getAdOrderAwardAck(msg: adOrder.IGetAdOrderAwardAck) {
        izx.log("getAdOrderAwardAck",msg)
        if (msg.service !== this.ackParams.adOrder.service || msg.orderId !== this.ackParams.adOrder.orderId) {
            return
        }

        this.pop()
        izx.pushDialog("bonus","prefabs/gxhdDialog", null, {mask:true, maskClose:false,initParam:{
            award:msg.award,
            callback:()=>{
                izx.dispatchEvent(Constants.EventName.AD_SPOT_Deng_Lu_Jiang_Li_Req,{
                    uid : izx.user.uid
                })
            },closeCallBack:()=>{
                izx.dispatchEvent(Constants.EventName.AD_SPOT_Deng_Lu_Jiang_Li_Req,{
                    uid : izx.user.uid
                })
            }
        }})
    }

    onClose() {
        izx.ad.hideBanner()
    }
}
