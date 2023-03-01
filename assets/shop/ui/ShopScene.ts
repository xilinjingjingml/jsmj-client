import { AD_EVENT } from "../../ad/adEvents";
import Constants, { AdPos } from "../../common/constants";
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { AdAreaId } from "../../lobby/constants_lobby_scene";
import { SHOP_EVENT } from "../shop_events";
import adOrder = require("../../common/protos/ad-order")
import { AdOrderState } from "../../common/protos/ad-order";
import { Types } from "../../framework/plugin/pluginTypes";
const {ccclass, property} = cc._decorator;

@ccclass
export default class ShopScene extends BaseUi {

    _layout: cc.Node = null // 详情介绍
    ackParams : adOrder.IAdOrderNot = {}
    gameAdId : "1"

    @property(cc.Label)
    lblJrsy = null;
    @property(cc.Prefab)
    shopBox = null;

    @property(cc.Prefab)
    prefab_shop_item: cc.Prefab = null

    contentNode: cc.Node = null

    shopPageData = []
    onLoad () {
        this.contentNode = cc.find("Bg/ShopScrollView/view/content", this.node)
    }

    onOpen() {
        this._layout = this.node.getChildByName("Layout")

        this.initEvent()
        this.initButton()
        this.updateAdCount()

        izx.dispatchEvent(SHOP_EVENT.GET_CONFIG_REQ, {
            uid: izx.user.uid
        })
    }

    start () {
        izx.bindButtonClick("CloseButton", this.node, () => {
            cc.log("CloseButton", "")
            this.pop()
        })
        
    }

    initEvent() {
        izx.on(SHOP_EVENT.GET_CONFIG_RSP, this.getConfigRsp, this)
        izx.on(AD_EVENT.GET_AD_SPOT_ACK, this.updateAdCount, this)

        izx.on(Constants.EventName.AD_ORDER_NOTI, this.adOrderNoti, this)
        izx.on(Constants.EventName.UPDATE_AD_ORDER_STATUS_ACK, this.updateAdOrderStatusAck, this)
        izx.on(Constants.EventName.AD_ORDER_CURRENT_AD_CALLBACK_INFO, this.updateAdInfo, this)
        izx.on(Constants.EventName.GET_AD_ORDER_AWARD_ACK, this.getAdOrderAwardAck, this)

    }

    initButton() {
        let btnJrsy = cc.find("Bg/sptBanner/btnAd", this.node)
        izx.bindButtonClick(btnJrsy, this.node, (sender, data) => {
          izx.log("On btn SptAdAward")
          izx.audioMgr.playBtn()
          izx.dispatchEvent(Constants.EventName.AD_ORDER_INIT, 
            {
                areaId: AdPos.Shop,
                uid: izx.user.uid
            })
        })

        izx.bindButtonClick("close", this.node, (sender, data) => {
            this.pop()
        })
    }

    getConfigRsp(msg) {
        let boxList = msg.box_list
        if (!boxList || boxList.length == 0)
            return

        this.shopPageData = []
        let temp3 = []
        boxList.forEach((element,index) => {
            temp3.push(element)
            if (temp3.length == 3) {
                this.shopPageData.push(temp3)
                temp3 = []
            }else if (index == boxList.length - 1) {
                this.shopPageData.push(temp3)
            }
        });
        this.contentNode.removeAllChildren()

        this.shopPageData.forEach((groupData, group) => {
            let itemPage = cc.instantiate(this.prefab_shop_item)
            itemPage.parent = this.contentNode
            itemPage.active = true
            itemPage.getChildByName("box0").active = false
            itemPage.getChildByName("box1").active = false
            itemPage.getChildByName("box2").active = false
            groupData.forEach((itemData, index) => {
                let node = itemPage.getChildByName("box"+index)
                if (node) {
                    cc.find("price/PriceNum",node).getComponent(cc.Label).string = '' + itemData.need_item.num
                    cc.find("desc/ItemNum",node).getComponent(cc.Label).string = '' + itemData.get_item.num
                    node.active = true
                    izx.bindButtonClick("BuyButton", node, () => {
                        izx.audioMgr.playBtn()
                        izx.dispatchEvent(SHOP_EVENT.EXCHANGE_BOX_REQ, {
                            uid: izx.user.uid,
                            index: itemData.index,
                        })
                    })
                    // 远程 url 带图片后缀名
                    if (groupData.icon) {
                        let icon = node.getChildByName("icon")
                        cc.assetManager.loadRemote(groupData.icon, function (err, texture) {
                            if (err) {
                                return
                            }
                            icon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(<cc.Texture2D>texture)
                        });
                    }
                }
            });
        });
    }

    updateAdCount() {
        this.lblJrsy.string = ""
        let adInfo = izx.ad.getAreaInfo(AdPos.Shop)
        izx.log("updateAdCount adInfo = ", adInfo)
        if (adInfo) {
          this.lblJrsy.string = (adInfo.maxNum - adInfo.curNum) + "/" + adInfo.maxNum
        }
    }
    
    adOrderNoti(msg) {
        switch (msg.areaId) {
            case AdAreaId.SHOP:
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

    // update (dt) {}
}
