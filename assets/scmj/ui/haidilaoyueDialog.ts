import Constants from "../../common/constants";
import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import adOrder = require("../../common/protos/ad-order")
import { scmjUtil } from "../scmjUtil";
import { Types } from "../../framework/plugin/pluginTypes"

const {ccclass, property} = cc._decorator;

@ccclass
export default class haidilaoyueDialog extends BaseUI {

    ackParams: adOrder.AdOrderNot
    adStatus = 0
    gameAdId: string = "108"

    @property(cc.Label)
    titleLabel: cc.Label = null

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        this.initEvent()
        this.initButton()
    }

    start () {
        izx.ad.showBanner()
    }

    onClose() {
        izx.ad.hideBanner()
    }

    onOpen() {
        this.initParams(this.initParam)
    }

    // update (dt) {}

    initEvent() {
        izx.on(Constants.EventName.UPDATE_AD_ORDER_STATUS_ACK, this.updateAdOrderStatusAck, this)
        izx.on(Constants.EventName.GET_AD_ORDER_AWARD_ACK, this.getAdOrderAwardAck, this)
        izx.on(Constants.EventName.AD_ORDER_CURRENT_AD_CALLBACK_INFO, this.updateAdInfo, this)
    }
    initButton() {
        izx.bindButtonClick("content/LookBtn", this.node, () => {
            
        })
        izx.bindButtonClick("content/GetBtn", this.node, () => {
            this.adOrderUpdateStatus()
        })
        izx.bindButtonClick("content/CloseBtn", this.node, () => {
            izx.dispatchEvent(Constants.EventName.AD_ORDER_UNREGEDIT_CURRENT_AD_INFO,  {
            })
            izx.popDialog(this)
        })
    }
    initParams (msg) {
        this.ackParams = msg
        this.ackParams.params = this.ackParams.params || []

        this.ackParams.award = this.ackParams.award || []
        this.ackParams.award.forEach(element => {
            if (element.index == 0) {
                let formatNum = izx.getMoneyformat(Number(element.num))
                this.titleLabel.string = "+"+formatNum+"y"
                return
            }
        })
        this.ackParams.params.forEach(element => {
            if (element.key == "cards") {
                let vaule = element.value
                let mapMj = JSON.parse(vaule)
                cc.log("initParams mapMj==", mapMj)
                mapMj.forEach((element1,index) => {
                    let node = cc.find("content/node"+(index+1), this.node)
                    if (node) {
                        // 发财显示特效
                        cc.find("db_dibu", node).active = (element1 == 42)
                        cc.find("db_light", node).active = (element1 == 42)
                        cc.find("me_gray", node).active = !(element1 == 42)
                        let mjBg = cc.find("me_stand", node)
                        if (mjBg) {
                            let sptValue = new cc.Node()
                            let sprite = sptValue.addComponent(cc.Sprite)
                            let path = "pics/atlas_images/preload/mj_card_num/mj_cardnum_mahjong_" + element1
                            let spriteFrame = <cc.SpriteFrame>scmjUtil.loadPic(path)
                            sprite.spriteFrame = spriteFrame
                            sptValue.parent = mjBg;
                            sptValue.scaleX = 1
                            sptValue.scaleY = 1
                        }
                    }
                });
                return
            }
        });
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
        } else {
            this.adStatus = 3
        }
    }

    adOrderUpdateStatus() {
        cc.log("chb ads")
        // 接受看广告
        izx.dispatchEvent(Constants.EventName.AD_ORDER_UPDATE_STATUS,  {
            uid : izx.user.uid,
            service : this.ackParams.service,
            orderId : this.ackParams.orderId,
            state: adOrder.AdOrderState.Accept
        })
    }

    updateAdOrderStatusAck (msg: adOrder.UpdateAdOrderStatusAck) {
        if (msg.service !== this.ackParams.service || msg.orderId !== this.ackParams.orderId) {
            return
        }

        if (msg.errCode == 0) {
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
        }else {
            izx.pushDialog("tips","prefabs/tipsDialog", null, {"initParam":{tips:msg.errMsg,callback:null}})
        }
    }

    getAdOrderAward () {
        cc.log("getAdOrderAward")
        // 领取广告奖励
        if (this.ackParams.errCode == 0) {
            izx.dispatchEvent(Constants.EventName.AD_ORDER_AWARD,  {
                uid : izx.user.uid,
                service : this.ackParams.service,
                orderId : this.ackParams.orderId,
            })
        }else {
            izx.pushDialog("tips","prefabs/tipsDialog", null, {"initParam":{tips:this.ackParams.errMsg,callback:null}})
        }
    }

    getAdOrderAwardAck(msg: adOrder.IGetAdOrderAwardAck) {
        cc.log("getAdOrderAwardAck",msg)
        if (msg.service !== this.ackParams.service || msg.orderId !== this.ackParams.orderId) {
            return
        }
        if (msg.errCode == 0) {
            izx.pushDialog("bonus","prefabs/gxhdDialog", null, {initParam:{
                award:msg.award
            }})
        }else {
            izx.pushDialog("tips","prefabs/tipsDialog", null, {initParam:{
                tips:msg.errMsg,
                callback:()=>{

                },closeCallBack:()=>{
                
                }
            }})
        }
        this.adStatus = 0
        this.pop()
    }
}
