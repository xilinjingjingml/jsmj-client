import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { VIP_EVENT } from "../vip_evnets";
import Constants, {AdPos, COMMON_CONSTANT} from "../../common/constants";
import { AdAreaId } from "../../lobby/constants_lobby_scene";
import { AdOrderNot, AdOrderState } from "../../common/protos/ad-order";
//import { AD_EVENT } from "../../ad/adEvents";
//import { AdPos } from "../../ad/adConstants";

import adOrder = require("../../common/protos/ad-order")
import { Types } from "../../framework/plugin/pluginTypes";
import { AD_EVENT } from "../../ad/adEvents";


const {ccclass, property} = cc._decorator;

@ccclass
export default class SendVipMain extends BaseUi {
    _canGetAward = true // 可领取奖励

    _sptTip: cc.Node = null
    _lblTip: cc.Label = null
    ackParams : adOrder.IAdOrderNot = {}
    gameAdId : "111"
    
    onOpen() {
        this.initEvent()
        this.initButton()
        this.updateAdCount()
        let btnWatchViedo = this.node.getChildByName("BtnWatchViedo")
        btnWatchViedo.active = true

        this._sptTip = this.node.getChildByName("SptTip")
        this._lblTip = this._sptTip.getChildByName("LblTip").getComponent(cc.Label)

        izx.dispatchEvent(VIP_EVENT.GET_SEND_VIP_CONFIG_REQ, {})
    }

    initEvent() {
        izx.on(VIP_EVENT.GET_SEND_VIP_CONFIG_RSP, this.getSendVipConfigRsp, this)
        izx.on(AD_EVENT.GET_AD_SPOT_ACK, this.updateAdCount, this)
        izx.on(Constants.EventName.AD_ORDER_NOTI, this.adOrderNoti, this)

        izx.on(Constants.EventName.UPDATE_AD_ORDER_STATUS_ACK, this.updateAdOrderStatusAck, this)
        izx.on(Constants.EventName.AD_ORDER_CURRENT_AD_CALLBACK_INFO, this.updateAdInfo, this)
        izx.on(Constants.EventName.GET_AD_ORDER_AWARD_ACK, this.getAdOrderAwardAck, this)

    }

    initButton() {
        izx.bindButtonClick("BtnWatchViedo", this.node, (sender, data) => {
            izx.log("on BtnWatchViedo")
            izx.audioMgr.playBtn()
            //izx.dispatchEvent(AD_EVENT.INIT_AD_ORDER_REQ, {adPos: AdPos.Vip})
            izx.dispatchEvent(Constants.EventName.AD_ORDER_INIT, {
                areaId: 5,
                uid: izx.user.uid
            })

        })
        izx.bindButtonClick("BtnClose", this.node, (sender, data) => {
            if (this.initParam && this.initParam.callback) {
                this.initParam.callback()
            }
            this.pop()
        })
    }

    updateAdCount() {
        let btnWatchViedo = this.node.getChildByName("BtnWatchViedo")
        btnWatchViedo.active = true
        let adInfo = izx.ad.getAreaInfo(AdPos.Vip)
        izx.log("updateAdCount adInfo = ", adInfo)
        if (adInfo.curNum >= adInfo.maxNum) {
            let sptAwarded = this.node.getChildByName("SptAwarded")
            sptAwarded.active = true
            let btnWatchViedo = this.node.getChildByName("BtnWatchViedo")
            btnWatchViedo.active = false
            btnWatchViedo.getComponent(cc.Button).interactable = false
        } else {
            let btnWatchViedo = this.node.getChildByName("BtnWatchViedo")
            btnWatchViedo.active = true
        }
        if (adInfo.curNum == 1) { // 看升vip广告一次
            izx.dispatchEvent("upt_task_progress_by_index_req", {
                uid: izx.user.uid,
                id: 2,
                inc: 1,
            })
        }
    }

    adOrderNoti(msg) {
        switch (msg.areaId) {
            case AdAreaId.SONG_VIP:
                this.ackParams = msg
                izx.dispatchEvent(Constants.EventName.AD_ORDER_UPDATE_STATUS,  {
                    uid : izx.user.uid,
                    service : this.ackParams.service,
                    orderId : this.ackParams.orderId,
                    state: AdOrderState.Accept
                })    
                break;
            default:
                break;
        }
    }

    updateAdOrderStatusAck (msg) {
        if (msg.errCode == 0) {
            if (this.ackParams) {
                izx.dispatchEvent(Constants.EventName.AD_ORDER_REGEDIT_CURRENT_AD_INFO,  {
                    uid : izx.user.uid + "",
                    service : this.ackParams.service,
                    orderId : this.ackParams.orderId,
                })
                izx.ad.show("111", {
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
        if (msg.AdsResultCode == Types.PluginAdResultCode.RESULT_CODE_REWARTVIDEO_SUCCEES) {//激励视频广告播放成功
            this.getAdOrderAward()
        } else if (msg.AdsResultCode == Types.PluginAdResultCode.RESULT_CODE_REWARTVIDEO_FAIL) {//激励视频广告播放失败
        } else {
        }
    }

    getAdOrderAward () {
        // 领取广告奖励
        if (this.ackParams) {
            izx.dispatchEvent(Constants.EventName.AD_ORDER_AWARD,  {
                uid : izx.user.uid,
                service : this.ackParams.service,
                orderId : this.ackParams.orderId,
            })
        }
    }

    getAdOrderAwardAck(msg: adOrder.IGetAdOrderAwardAck) {
        cc.log("getAdOrderAwardAck",msg)
        if (msg.service !== this.ackParams.service || msg.orderId !== this.ackParams.orderId) {
            return
        }
        //this.pop()
        if (msg.errCode == 0) {
            izx.pushDialog("unipop","prefabs/AwardsMain", null, {"initParam":msg, mask:true})
            izx.dispatchEvent(AD_EVENT.GET_AD_SPOT_REQ, {uid: izx.user.uid})
        }else {
            izx.pushDialog("tips","prefabs/tipsDialog", null, {"initParam":{tips:msg.errMsg,callback:null}})
        }
 
    }

    touchMain() {
        if (this._sptTip) {
            this._sptTip.active = false
        }
    }

    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchMain, this ,true);
    }

    onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchMain, this,true);
    }

    getSendVipConfigRsp(res) {
        for (let item of res) {
            if (item.prop_id == undefined || item.prop_id == COMMON_CONSTANT.ITEM_JINBI) {
                let lblJd = cc.find("BtnJinBi/LblJd", this.node)
                lblJd.getComponent(cc.Label).string = item.min_num/10000 + "w"

                izx.bindButtonClick("BtnJinBi", this.node, (sender, data) => {
                    izx.audioMgr.playBtn()
                    this._lblTip.string = item.tip

                    let worldPos = sender.target.parent.convertToWorldSpaceAR(sender.target.position)
                    let localPos = this.node.convertToNodeSpaceAR(worldPos)
                    this._sptTip.setPosition(localPos.x, localPos.y + sender.target.height/2)
                    this._sptTip.active = true
                })
            } else if (item.prop_id == COMMON_CONSTANT.ITEM_VIP_EXP) {
                let lblExp = cc.find("BtnExp/LblExp", this.node)
                lblExp.getComponent(cc.Label).string = item.min_num
                
                izx.bindButtonClick("BtnExp", this.node, (sender, data) => {
                    izx.audioMgr.playBtn()
                    this._lblTip.string = item.tip

                    let worldPos = sender.target.parent.convertToWorldSpaceAR(sender.target.position)
                    let localPos = this.node.convertToNodeSpaceAR(worldPos)
                    this._sptTip.setPosition(localPos.x + sender.target.width, localPos.y + sender.target.height/2)
                    this._sptTip.active = true
                })
            }
        }
    }
}
