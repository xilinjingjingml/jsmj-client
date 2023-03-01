import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import adOrder = require("../../common/protos/ad-order")
import Constants, {} from "../../common/constants"
import { Types } from "../../framework/plugin/pluginTypes"

const {ccclass, property} = cc._decorator;

@ccclass
export default class jsmjGxfcDialog extends BaseUI {

    //3局游戏-幸运红包
    ackParams: adOrder.IAdOrderNot = {}
    gameAdId: string = "114"

    @property(cc.Prefab)
    gongxifacai_donghua2_ske: cc.Prefab = null;

    onLoad() {
        this.initEvent()
        this.initButton()
        this.initDragonbones()
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

    initDragonbones () {
        let gxfcNode = cc.find("gxfc/gxfcDragon", this.node)
        gxfcNode.getChildByName("gongxifacai_donghua1_ske").getComponent(dragonBones.ArmatureDisplay).on(dragonBones.EventObject.COMPLETE, (event)=>{
            gxfcNode.removeAllChildren()
            let gongxifacai_donghua2 = cc.instantiate(this.gongxifacai_donghua2_ske)
            gxfcNode.addChild(gongxifacai_donghua2)
            
        },this)
    }

    initButton() {
        izx.bindButtonClick("gxfc/mflqBtn", this.node, () => {
            this.adOrderUpdateStatus()
            //this.pop()
        })
        izx.bindButtonClick("gxfc/closeBtn", this.node, () => {
            this.pop()
        })
    }

    initEvent() {
        izx.on(Constants.EventName.UPDATE_AD_ORDER_STATUS_ACK, this.updateAdOrderStatusAck, this)
        izx.on(Constants.EventName.AD_ORDER_CURRENT_AD_CALLBACK_INFO, this.updateAdInfo, this)
        izx.on(Constants.EventName.GET_AD_ORDER_AWARD_ACK, this.getAdOrderAwardAck, this)
    }
    
    initParams (msg) {
        this.ackParams = msg
        this.ackParams.award = this.ackParams.award || []    
        this.ackParams.award.forEach(element => {
            if (element.index == 0) {
                cc.find("gxfc/moneyNum", this.node).getComponent(cc.Label).string = izx.getMoneyformat(Number(element.num)) + "元"
                return
            }
        });
    }

    /**
     * 看广告 免费拿回奖励
    */
    adOrderUpdateStatus() {
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
            this.getAdOrderAward()
        } else if (msg.AdsResultCode == Types.PluginAdResultCode.RESULT_CODE_REWARTVIDEO_FAIL) {//激励视频广告播放失败
        } else {
        }
    }

    getAdOrderAward () {
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
        }else {
            izx.pushDialog("tips","prefabs/tipsDialog", null, {"initParam":{tips:msg.errMsg,callback:null}})
        }
        this.pop()
    }
}
