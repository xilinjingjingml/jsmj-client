import Constants from "../../common/constants";
import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import sign = require("../../common/protos/sign")
import { AdOrderState } from "../../common/protos/ad-order";
import { Types } from "../../framework/plugin/pluginTypes"
import adOrder = require("../../common/protos/ad-order")

const {ccclass, property} = cc._decorator;

@ccclass
export default class QiandaoDialog extends BaseUI {
    ackParams: sign.IGetMeiRiDengLuJiangLiAck= {}
    adStatus:number = 0
    adSelectId:number = 0
    gameAdId: string = "113"

    // 点击领取
    @property(cc.SpriteFrame)
    sptStatusDJLQ: cc.SpriteFrame = null;
    // 已领取
    @property(cc.SpriteFrame)
    sptStatusYLQ: cc.SpriteFrame = null;
    // 已失效
    @property(cc.SpriteFrame)
    sptStatusYSQ: cc.SpriteFrame = null;
    // 待领取
    @property(cc.SpriteFrame)
    sptStatusDLQ: cc.SpriteFrame = null;

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

        let today = this.initParam.today

        for (let index = 1; index < 8; index++) {
            let node = cc.find("qiandao/content/day0"+(index),this.node)
            let kuangSpr = cc.find("xzxgq",node)
            if (kuangSpr) {
                if (today === (index)) {
                    kuangSpr.active = true 
                }else{
                    kuangSpr.active = false
                }
            }
        }
    }

    initButton() {
        izx.bindButtonClick("qiandao/mflqBtn", this.node, () => {
            //this.getAdOrderAward()
        })
        izx.bindButtonClick("qiandao/mrzlBtn", this.node, () => {
            //this.pop()
        })
        izx.bindButtonClick("qiandao/backBtn", this.node, () => {
            this.pop()
        })
    }
    onPressDay1() {
        this.adOrderItemUpdateStatus(0)
    } 
    onPressDay2() {
        this.adOrderItemUpdateStatus(1)
    } 
    onPressDay3() {
        this.adOrderItemUpdateStatus(2) 
    } 
    onPressDay4() {
        this.adOrderItemUpdateStatus(3) 
    } 
    onPressDay5() {
        this.adOrderItemUpdateStatus(4) 
    } 
    onPressDay6() {
        this.adOrderItemUpdateStatus(5) 
    } 
    onPressDay7() {
        this.adOrderItemUpdateStatus(6)
    }
    initEvent() {
        izx.on(Constants.EventName.UPDATE_AD_ORDER_STATUS_ACK, this.updateAdOrderStatusAck, this)
        izx.on(Constants.EventName.GET_AD_ORDER_AWARD_ACK, this.getAdOrderAwardAck, this)
        izx.on(Constants.EventName.AD_ORDER_CURRENT_AD_CALLBACK_INFO, this.updateAdInfo, this)
    }
    initParams (msg) {
        this.ackParams = msg
        if (this.ackParams.errCode != 0){
            this.adStatus = 3
        }
        let isCanGet = false
        this.ackParams.AllItems = this.ackParams.AllItems || []
        this.ackParams.AllItems.forEach((element,index) => {
            let node = cc.find("qiandao/content/day0"+(index+1),this.node)
            let ylq = cc.find("ylq", node)
            let wpk1 = cc.find("wpk1", node)
            let xzxgq = cc.find("xzxgq", node)
            let buqian = cc.find("buqian", node)
            let top = cc.find("top", node)
            let hb01 = cc.find("hb01", node)
            if (element.day <= this.ackParams.today) {
                if (element.State == 0) {
                    node.getComponent(cc.Button).interactable = true
                    isCanGet = true
                    ylq.active = false
                    wpk1.active = false
                    xzxgq.active = true
                    buqian.active = true
                    top.active = false
                    if (element.day == this.ackParams.today) {
                        buqian.active = false
                        top.active = true
                    }

                    if (hb01.getComponent(cc.Sprite)) {
                        hb01.getComponent(cc.Sprite).spriteFrame = this.sptStatusDJLQ
                    }
                }else if (element.State == 1) {
                    node.getComponent(cc.Button).interactable = false
                    ylq.active = true
                    wpk1.active = true
                    xzxgq.active = false
                    buqian.active = false
                    top.active = true
                    
                    if (hb01.getComponent(cc.Sprite)) {
                        hb01.getComponent(cc.Sprite).spriteFrame = this.sptStatusYLQ
                    }
                }else if (element.State == 2) {
                    node.getComponent(cc.Button).interactable = false
                    ylq.active = false
                    wpk1.active = true
                    xzxgq.active = false
                    buqian.active = false
                    top.active = true
                    
                    if (hb01.getComponent(cc.Sprite)) {
                        hb01.getComponent(cc.Sprite).spriteFrame = this.sptStatusYSQ
                    }
                } 
            }else{
                node.getComponent(cc.Button).interactable = false
                ylq.active = false
                wpk1.active = false
                xzxgq.active = false
                buqian.active = false
                top.active = true

                if (hb01.getComponent(cc.Sprite)) {
                    hb01.getComponent(cc.Sprite).spriteFrame = this.sptStatusDLQ
                }
            }           
        });
        cc.find("qiandao/mflqBtn", this.node).active = false//isCanGet
        cc.find("qiandao/mrzlBtn", this.node).active = false//!isCanGet
    }
    adOrderItemUpdateStatus(index) {
        // 接受看广告
        if (this.ackParams.AllItems[index]) {
            this.adSelectId = index
            izx.dispatchEvent(Constants.EventName.AD_ORDER_UPDATE_STATUS,  {
                uid : izx.user.uid,
                service : this.ackParams.AllItems[index].service,
                orderId : this.ackParams.AllItems[index].orderId,
                day : index + 1,
                state: AdOrderState.Accept
            })   
        }else{
            izx.pushDialog("tips","prefabs/tipsDialog", null, {mask:true, maskClose:true,"initParam":{tips:this.ackParams.errMsg,callback:null}})
        } 
    }

    updateAdOrderStatusAck(msg: adOrder.UpdateAdOrderStatusAck) {
        if (msg.service !== this.ackParams.AllItems[this.adSelectId].service || msg.orderId !== this.ackParams.AllItems[this.adSelectId].orderId) {
            return
        }

        if (msg.errCode == 0) {
            if (this.ackParams.AllItems[this.adSelectId]) {
                izx.dispatchEvent(Constants.EventName.AD_ORDER_REGEDIT_CURRENT_AD_INFO,  {
                    uid : izx.user.uid + "",
                    service : this.ackParams.AllItems[this.adSelectId].service,
                    orderId : this.ackParams.AllItems[this.adSelectId].orderId,
                })
                izx.ad.show(this.gameAdId, {
                    uid: izx.user.uid + "",
                    service: this.ackParams.AllItems[this.adSelectId].service,
                    orderId: this.ackParams.AllItems[this.adSelectId].orderId,
                })  
            } 
        }else {
            //提示
            izx.pushDialog("tips","prefabs/tipsDialog", null, {mask:true, maskClose:true,"initParam":{tips:msg.errMsg,callback:null}})
        }
    }

    updateAdInfo(msg: Types.PluginAdResultData) {
        let isFind = false
        this.ackParams.AllItems.forEach(element => {
            if (element.orderId == msg.adsInfo.orderId && element.service == msg.adsInfo.service) {
                isFind = true
                return
            }
        });
        if (!isFind) {
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

    getAdOrderAward () {
        // 领取广告奖励
        if (this.ackParams.AllItems[this.adSelectId]) {
            izx.dispatchEvent(Constants.EventName.AD_SPOT_Deng_Lu_Jiang_Li_Get_Award_Req,  {
                uid : izx.user.uid,
                service : this.ackParams.AllItems[this.adSelectId].service,
                orderId : this.ackParams.AllItems[this.adSelectId].orderId,
                day : this.adSelectId + 1
            })
        }
    }

    getAdOrderAwardAck(msg: adOrder.IGetAdOrderAwardAck) {
        izx.log("getAdOrderAwardAck",msg)
        if (msg.service !== this.ackParams.AllItems[this.adSelectId].service || msg.orderId !== this.ackParams.AllItems[this.adSelectId].orderId) {
            return
        }
        
        if (msg.errCode == 0) {
            // izx.pushDialog("bonus","prefabs/gxhdDialog", null, {mask:true, maskClose:false,initParam:{
            //     award:msg.award
            // }})
            izx.pushDialog("unipop","prefabs/AwardsMain", null, {"initParam":{"award":msg.award}, mask:true})
        }else {
            izx.pushDialog("tips","prefabs/tipsDialog", null, {mask:true, maskClose:true,initParam:{
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
