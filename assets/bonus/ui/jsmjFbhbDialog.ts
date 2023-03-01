import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import adOrder = require("../../common/protos/ad-order")
import { SCMJ_EVENT } from "../../scmj/scmjEvents";
import Constants, {} from "../../common/constants"
import { Types } from "../../framework/plugin/pluginTypes"

const {ccclass, property} = cc._decorator;

@ccclass
export default class jsmjFbhbDialog extends BaseUI {

    ackParams: adOrder.IAdOrderNot = {}
    adStatus: number = 0
    gameAdId: string = "104"

    @property(cc.Prefab)
    fbhb_2_ske:cc.Prefab = null
    @property(cc.Prefab)
    fbhb_3_ske:cc.Prefab = null

    onLoad() {
        this.initEvent()
        this.initButton()
    }

    start() {
        izx.ad.showBanner()
    }

    onClose() {
        izx.ad.hideBanner()
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
        izx.bindButtonClick("chb/fbhbDragon", this.node, () => {
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

    /**
     * 拆红包
     */
    chaihb() {
        cc.log("chaihb")
        let chbDragonNode = cc.find("chb/fbhbDragon", this.node)
        chbDragonNode.removeAllChildren()
        let chaihongbao_2 = cc.instantiate(this.fbhb_2_ske)
        chbDragonNode.addChild(chaihongbao_2)
        chaihongbao_2.getComponent(dragonBones.ArmatureDisplay).on(dragonBones.EventObject.COMPLETE, (event)=>{

            chbDragonNode.removeAllChildren()
            let chaihongbao_3 = cc.instantiate(this.fbhb_3_ske)
            chbDragonNode.addChild(chaihongbao_3)

            izx.bindButtonClick("chb/fbhbDragon", this.node, () => {
            })

            cc.find("chb/moneyArea/moneyNum", this.node).active = true
            cc.find("chb/fblqBtn", this.node).active = true
            //cc.find("chb/ptlq", this.node).active = true
       
            this.ackParams.award = this.ackParams.award || []    
            this.ackParams.award.forEach(element => {
                if (element.index == 0) {
                    cc.find("chb/moneyArea/moneyNum", this.node).getComponent(cc.Label).string = izx.getMoneyformat(Number(element.num)) + "元"
                    return
                }
            });
        },this)
        
    }

    initParams (msg) {
        this.ackParams = msg
    }

    /**
     * 看广告 免费拿回奖励
    */
    adOrderUpdateStatus() {
        cc.log("chb ads")
        // 接受看广告
        if (this.ackParams.errCode == 0) {
            izx.dispatchEvent(Constants.EventName.AD_ORDER_UPDATE_STATUS,  {
                uid : izx.user.uid,
                service : this.ackParams.service,
                orderId : this.ackParams.orderId,
                state: adOrder.AdOrderState.Accept
            })
        }else {
            izx.pushDialog("tips","prefabs/tipsDialog", null, {"initParam":{tips:this.ackParams.errMsg,callback:null}}) 
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
            izx.pushDialog("tips","prefabs/tipsDialog", null, {"initParam":{tips:msg.errMsg,callback:null}})
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
        cc.log("sqmgx ads award")
        // 领取广告奖励
        izx.dispatchEvent(Constants.EventName.AD_ORDER_AWARD,  {
            uid : izx.user.uid,
            service : this.ackParams.service,
            orderId : this.ackParams.orderId,
        })
    }

    getAdOrderAwardAck(msg: adOrder.IGetAdOrderAwardAck) {
        cc.log("getAdOrderAwardAck",msg)
        if (msg.service !== this.ackParams.service || msg.orderId !== this.ackParams.orderId) {
            return
        }
        if (msg.errCode == 0) {
            izx.pushDialog("bonus","prefabs/gxhdDialog", null, {"initParam":msg})
            this.pop()
        }else {
            izx.pushDialog("tips","prefabs/tipsDialog", null, {"initParam":{tips:msg.errMsg,callback:null}})
        }
        this.pop()
    }
}
