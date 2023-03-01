import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import adOrder = require("../../common/protos/ad-order")
import Constants, {} from "../../common/constants"
import { Types } from "../../framework/plugin/pluginTypes"

const {ccclass, property} = cc._decorator;

@ccclass
export default class jsmjFbhbDialog extends BaseUI {

    ackParams: adOrder.IAdOrderNot = {}
    adStatus: number = 0
    gameAdId: string = "104"
    isNeedDispathch = true

    onLoad() {
        this.initEvent()
        this.initButton()
    }

    start() {
        izx.ad.showBanner()
        izx.UnBlockUI()
    }

    onClose() {
        izx.ad.hideBanner()
        if (this.isNeedDispathch) {
            izx.dispatchEvent(Constants.EventName.Game_Hong_Bao_Dispatch)
        }
    }

    onOpen() {
        this.initParams(this.initParam)
    }

    initEvent() {
        izx.on(Constants.EventName.UPDATE_AD_ORDER_STATUS_ACK, this.updateAdOrderStatusAck, this)
        izx.on(Constants.EventName.GET_AD_ORDER_AWARD_ACK, this.getAdOrderAwardAck, this)
        izx.on(Constants.EventName.AD_ORDER_CURRENT_AD_CALLBACK_INFO, this.updateAdInfo, this)
    }

    initButton() {
        izx.bindButtonClick("chb/lqBtn", this.node, () => {
            this.adOrderUpdateStatus()
        })
        izx.bindButtonClick("chb/fblqBtn", this.node, () => {
            this.doFBdonghua()
        })

        izx.bindButtonClick("chb/closeBtn", this.node, () => {
            izx.dispatchEvent(Constants.EventName.AD_ORDER_UPDATE_STATUS,  {
                uid : izx.user.uid,
                service : this.ackParams.service,
                orderId : this.ackParams.orderId,
                state: adOrder.AdOrderState.Reject
            })
            this.pop()
        })
    }

    doFBdonghua () {
        cc.find("chb/moneyArea/moneyNum", this.node).active = false
        cc.find("chb/moneyArea/moneyGundong", this.node).active = true

        setTimeout(() => {
            cc.find("chb/moneyArea/moneyGundong", this.node).active = false
            cc.find("chb/moneyArea/moneyNum", this.node).active = true
            this.ackParams.award.forEach(element => {
                if (element.index == 0) {
                    cc.find("chb/moneyArea/moneyNum", this.node).getComponent(cc.Label).string = izx.getMoneyformat(Number(element.num * 2)) + "元"
                    return
                }
            });
        }, 500)
    }

    initParams (msg) {
        this.ackParams = msg
    }

    /**
     * 看广告 免费拿回奖励
    */
    adOrderUpdateStatus() {
        izx.log("chb ads")
        // 接受看广告
        if (this.ackParams.errCode == 0) {
            izx.dispatchEvent(Constants.EventName.AD_ORDER_UPDATE_STATUS,  {
                uid : izx.user.uid,
                service : this.ackParams.service,
                orderId : this.ackParams.orderId,
                state: adOrder.AdOrderState.Accept
            })
        }else {
            izx.pushDialog("tips","prefabs/tipsDialog", null, {mask:true, maskClose:true,"initParam":{tips:this.ackParams.errMsg,callback:null}}) 
        }
    }

    updateAdOrderStatusAck(msg: adOrder.UpdateAdOrderStatusAck) {
        if (msg.service !== this.ackParams.service || msg.orderId !== this.ackParams.orderId) {
            return
        }

        if (msg.errCode == 0) {
            if (this.ackParams.errCode == 0) {
                izx.dispatchEvent(Constants.EventName.AD_ORDER_REGEDIT_CURRENT_AD_INFO,  {
                    uid : izx.user.uid + "",
                    service : this.ackParams.service,
                    orderId : this.ackParams.orderId,
                })  
                izx.ad.show(this.gameAdId, {
                    uid: izx.user.uid + "",
                    service: this.ackParams.service,
                    orderId: this.ackParams.orderId,
                })      
            }
        }else {
            //提示
            izx.pushDialog("tips","prefabs/tipsDialog", null, {mask:true, maskClose:true,"initParam":{tips:msg.errMsg,callback:null}})
        }
    }

    updateAdInfo(msg: Types.PluginAdResultData) {
        if (!(msg.adsInfo.service === this.ackParams.service && msg.adsInfo.orderId === this.ackParams.orderId)) {
            return
        }
        if (msg.AdsResultCode == Types.PluginAdResultCode.RESULT_CODE_REWARTVIDEO_SUCCEES) {//激励视频广告播放成功
            this.adStatus = 1
            this.getAdOrderAward()
        } else if (msg.AdsResultCode == Types.PluginAdResultCode.RESULT_CODE_REWARTVIDEO_FAIL) {//激励视频广告播放失败
            this.adStatus = 2
        }else {
            this.adStatus = 3
        }
    }

    getAdOrderAward() {
        izx.log("sqmgx ads award")
        // 领取广告奖励
        izx.dispatchEvent(Constants.EventName.AD_ORDER_AWARD,  {
            uid : izx.user.uid,
            service : this.ackParams.service,
            orderId : this.ackParams.orderId,
        })
    }

    getAdOrderAwardAck(msg: adOrder.IGetAdOrderAwardAck) {
        izx.log("getAdOrderAwardAck",msg)
        if (msg.service !== this.ackParams.service || msg.orderId !== this.ackParams.orderId) {
            return
        }
        if (msg.errCode == 0) {
            this.isNeedDispathch = false
            izx.pushDialog("bonus","prefabs/gxhdDialog", null, {mask:true, maskClose:false,"initParam":msg})
            this.pop()
        }else {
            izx.pushDialog("tips","prefabs/tipsDialog", null, {mask:true, maskClose:true,"initParam":{tips:msg.errMsg,callback:null}})
        }
        this.pop()
    }
}
