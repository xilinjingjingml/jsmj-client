import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { ACTIVITY_EVENT } from "../activity_evnets";
import { ACTIVITY_CONSTANT } from "../activity_constants";
import Constants, {AdState} from "../../common/constants";
import { Types } from "../../framework/plugin/pluginTypes";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ActivityBcs extends BaseUi {

    @property(cc.SpriteFrame)
    xshdYlq = null;
    @property(cc.SpriteFrame)
    xshdYellow = null;
    @property(cc.SpriteFrame)
    xshdVideo = null;
    @property(cc.SpriteFrame)
    xshdGray = null;

    realClose: boolean = false
    curProgId: any = null
    curCallBack: any = null

    onOpen() {
        this.initEvent()
        this.initButton()
        this.initView()
    }

    onClose() {
        console.log("Sign onClose")
        super.onClose()
      }

    initEvent() {
        izx.on(ACTIVITY_EVENT.UPT_ACTIVITY_PROGRESS_BY_INDEX_RSP, this.uptActivityProgressByIndexRsp, this)
        izx.on(ACTIVITY_EVENT.UPT_ACTIVITY_PROGRESS_BY_GROUP_RSP, this.uptActivityProgressByGroupRsp, this)
        izx.on(ACTIVITY_EVENT.UPT_ACTIVITY_PROGS_NOT, this.uptActivityProgsNot, this)


        izx.on(Constants.EventName.AD_ORDER_CURRENT_AD_CALLBACK_INFO, this.updateAdInfo, this)
    }

    initButton() {
        izx.bindButtonClick("BtnClose", this.node, (sender, data) => {
            if (this.realClose) {
                izx.dispatchEvent(ACTIVITY_EVENT.GET_ACTIVITY_PROGRESS_REQ, {
                    type: 0,
                    uid: izx.user.uid,
                })
                this.pop()
            } else {
                this.realClose = true
                izx.dispatchEvent(ACTIVITY_EVENT.GET_ACTIVITY_AWARD_REQ, {
                    uid: izx.user.uid,
                    progIds: this.curProgId,
                    type: ACTIVITY_CONSTANT.AWARD_BCS,
                    double: 0
                }, this.curCallBack)
            }
        })
    }

    touchMain() {
    }

    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchMain, this ,true);
    }

    onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchMain, this,true);
    }

    initView() {
        for (let activity of this.initParam) {
            if (activity.type == 3) { // 限时活动
                let lblMoney = this.node.getChildByName("LblMoney")
                lblMoney.getComponent(cc.Label).string = activity.awards[0].min_num
                let lblFragments = this.node.getChildByName("LblFragments")
                lblFragments.getComponent(cc.Label).string = activity.awards[1].min_num
                let lblTip = this.node.getChildByName("LblTip")
                lblTip.getComponent(cc.Label).string = activity.desc
                let BtnAward = this.node.getChildByName("BtnAward")
                let BtnAwardNormal = this.node.getChildByName("BtnAwardNormal")
                let awarded = () => {
                    this.realClose = true
                    BtnAwardNormal.active = false
                    BtnAward.getComponent(cc.Button).interactable = false
                    BtnAward.getChildByName("SptStatus").getComponent(cc.Sprite).spriteFrame = this.xshdYlq
                    BtnAward.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.xshdGray
                }
                if (activity.status == 1) { // 未完成
                } else if (activity.status == 2) { // 可领取
                    BtnAward.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.xshdYellow
                    BtnAward.getChildByName("SptStatus").getComponent(cc.Sprite).spriteFrame = this.xshdVideo
                    izx.bindButtonClick(BtnAward, this.node, () => {
                        izx.audioMgr.playBtn()
                        izx.dispatchEvent(ACTIVITY_EVENT.UPT_BCS_AD_STATE_REQ, {
                            uid: izx.user.uid,
                            state: AdState.OrderInit
                        }, activity.prog_id, awarded)
                    })
                    BtnAwardNormal.active = true
                    izx.bindButtonClick(BtnAwardNormal, this.node, () => {
                        izx.audioMgr.playBtn()
                        izx.dispatchEvent(ACTIVITY_EVENT.GET_ACTIVITY_AWARD_REQ, {
                            uid: izx.user.uid,
                            progIds: activity.prog_id,
                            type: ACTIVITY_CONSTANT.AWARD_BCS,
                            double: 0
                        }, awarded)
                    })
                    this.curProgId = activity.prog_id
                    this.curCallBack = awarded
                } else if (activity.status == 3) { // 已领取
                    awarded()
                }
            }
        }
    }

    uptActivityProgressByIndexRsp(msg) {
    }

    uptActivityProgressByGroupRsp(msg) {
    }

    uptActivityProgsNot(msg) {
        if (!msg || !msg.msg)
            return

        msg = msg.msg
    }
    
    updateAdInfo(msg: Types.PluginAdResultData) {
        if (msg.AdsResultCode == Types.PluginAdResultCode.RESULT_CODE_REWARTVIDEO_SUCCEES) {//激励视频广告播放成功
            izx.dispatchEvent(ACTIVITY_EVENT.UPT_BCS_AD_STATE_REQ, {uid: izx.user.uid, state: AdState.OrderFinish})
        } else if (msg.AdsResultCode == Types.PluginAdResultCode.RESULT_CODE_REWARTVIDEO_FAIL) {//激励视频广告播放失败
            izx.dispatchEvent(ACTIVITY_EVENT.UPT_BCS_AD_STATE_REQ, {uid: izx.user.uid, state: AdState.OrderCancel})
        } else {
        }
    }
}
