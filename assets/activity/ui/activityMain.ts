import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { ACTIVITY_EVENT } from "../activity_evnets";
import { ACTIVITY_CONSTANT } from "../activity_constants";
import Constants, {AdPos, AdState, COMMON_CONSTANT} from "../../common/constants";
import { Types } from "../../framework/plugin/pluginTypes";
import { AdAreaId } from "../../lobby/constants_lobby_scene";
import adOrder = require("../../common/protos/ad-order")
import { AdOrderState } from "../../common/protos/ad-order";
import { AD_EVENT } from "../../ad/adEvents";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ActivityMain extends BaseUi {

    _btnRchd: cc.Node = null // 日常活动按钮
    _btnYbwl: cc.Node = null // 一本万利按钮
    _btnSbwj: cc.Node = null // 送百万金按钮
    _btnXshd: cc.Node = null // 显示活动按钮

    _nodeRchd: cc.Node = null // 日常活动界面
    _sptYbwlBg: cc.Node = null // 一本万利界面
    _sptSbwjBg: cc.Node = null // 送百万金界面
    _nodeXshd: cc.Node = null // 限时活动界面

    _ybwlContent: cc.Node = null // 一本万利列表
    _sbwjContent: cc.Node = null // 送百万金列表

    _sptTip: cc.Node = null
    _lblTip: cc.Label = null

    ackParams : adOrder.IAdOrderNot = {}

    @property(cc.SpriteFrame)
    rchd1 = null;
    @property(cc.SpriteFrame)
    rchd2 = null;
    @property(cc.SpriteFrame)
    xshd1 = null;
    @property(cc.SpriteFrame)
    xshd2 = null;
    @property(cc.SpriteFrame)
    rchdTitle = null;
    @property(cc.SpriteFrame)
    xshdTitle = null;
    @property(cc.SpriteFrame)
    sbwjBg = null;
    @property(cc.SpriteFrame)
    sbwjYes = null;
    @property(cc.SpriteFrame)
    xshdYlq = null;
    @property(cc.SpriteFrame)
    xshdYellow = null;
    @property(cc.SpriteFrame)
    xshdVideo = null;
    @property(cc.SpriteFrame)
    ybwlYellow = null;
    @property(cc.SpriteFrame)
    ybwlLq = null;
    @property(cc.SpriteFrame)
    xshdGray = null;

    @property(cc.SpriteFrame)
    txk11 = null;
    @property(cc.SpriteFrame)
    txk12 = null;
    @property(cc.SpriteFrame)
    txk13 = null;

    @property(cc.Prefab)
    ybwlItem = null;
    @property(cc.Prefab)
    sbwjItem = null;
   
    onOpen() {
        this._btnRchd = cc.find("SptUp/BtnRchd", this.node)
        this._btnYbwl = cc.find("SptUp/NodeRchd/SptBtnBg/BtnYbwl", this.node)
        this._btnSbwj = cc.find("SptUp/NodeRchd/SptBtnBg/BtnSbwj", this.node)
        this._btnXshd = cc.find("SptUp/BtnXshd", this.node)

        this._nodeRchd = cc.find("SptUp/NodeRchd", this.node)
        this._sptYbwlBg = cc.find("SptUp/NodeRchd/SptYbwlBg", this.node)
        this._sptSbwjBg = cc.find("SptUp/NodeRchd/SptSbwjBg", this.node)
        this._nodeXshd = cc.find("SptUp/NodeXshd", this.node)

        this._ybwlContent = cc.find("SptUp/NodeRchd/SptYbwlBg/ScrollView/view/content", this.node)
        this._sbwjContent = cc.find("SptUp/NodeRchd/SptSbwjBg/ScrollView/view/content", this.node)

        this._sptTip = this.node.getChildByName("SptTip")
        this._lblTip = this._sptTip.getChildByName("LblTip").getComponent(cc.Label)

        this.initEvent()
        this.initButton()

        if (this.initParam && this.initParam.lenght >= 0) {
            this.getActivityProgressRsp(this.initParam)
        } else {
            izx.dispatchEvent(ACTIVITY_EVENT.GET_ACTIVITY_PROGRESS_REQ, {
                type: 0,
                uid: izx.user.uid,
            })
        }
    }

    onClose() {
        console.log("activity onClose")
        super.onClose()
      }

    initEvent() {
        izx.on(ACTIVITY_EVENT.GET_ACTIVITY_PROGRESS_RSP, this.getActivityProgressRsp, this)
        izx.on(ACTIVITY_EVENT.UPT_ACTIVITY_PROGRESS_BY_INDEX_RSP, this.uptActivityProgressByIndexRsp, this)
        izx.on(ACTIVITY_EVENT.UPT_ACTIVITY_PROGRESS_BY_GROUP_RSP, this.uptActivityProgressByGroupRsp, this)
        izx.on(ACTIVITY_EVENT.UPT_ACTIVITY_PROGS_NOT, this.uptActivityProgsNot, this)
        izx.on(ACTIVITY_EVENT.SWITCH_TAB, this.switchTab, this)

        

    }

    initButton() {
        izx.bindButtonClick("BtnBack", this.node, (sender, data) => {
            izx.dispatchEvent(ACTIVITY_EVENT.GET_ACTIVITY_PROGRESS_REQ, {
                type: 0,
                uid: izx.user.uid,
            })
            this.pop()
        })
        izx.bindButtonClick(this._btnRchd, this.node, (sender, data) => {
            izx.audioMgr.playBtn()
            izx.dispatchEvent(ACTIVITY_EVENT.SWITCH_TAB, ACTIVITY_CONSTANT.TAB_RCHD)
        })
        izx.bindButtonClick(this._btnYbwl, this.node, (sender, data) => {
            izx.audioMgr.playBtn()
            izx.dispatchEvent(ACTIVITY_EVENT.SWITCH_TAB, ACTIVITY_CONSTANT.TAB_YBWL)
        })
        izx.bindButtonClick(this._btnSbwj, this.node, (sender, data) => {
            izx.audioMgr.playBtn()
            izx.dispatchEvent(ACTIVITY_EVENT.SWITCH_TAB, ACTIVITY_CONSTANT.TAB_SBWJ)
        })
        izx.bindButtonClick(this._btnXshd, this.node, (sender, data) => {
            izx.audioMgr.playBtn()
            izx.dispatchEvent(ACTIVITY_EVENT.SWITCH_TAB, ACTIVITY_CONSTANT.TAB_XSHD)
        })
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

    getActivityProgressRsp(msg) {
        if (!msg || msg.length === 0)
            return

        this._ybwlContent.removeAllChildren()
        this._sbwjContent.removeAllChildren()
        for (let activity of msg) {
            if (activity.type == 1) { // 一本万利
                let nItem = cc.instantiate(this.ybwlItem)
                nItem.active = true
                let lblNum = nItem.getChildByName("LblNum")
                lblNum.getComponent(cc.Label).string = activity.awards[0].min_num / 10000 + "w"
                let lblDesc = nItem.getChildByName("LblDesc")
                lblDesc.getComponent(cc.Label).string = activity.desc
                let progressBar = nItem.getChildByName("ProgressBar")
                progressBar.getComponent(cc.ProgressBar).progress = (activity.cur_num ? activity.cur_num : 0) / activity.cond_num
                let lblProgress = cc.find("ProgressBar/LblProgress", nItem)
                lblProgress.getComponent(cc.Label).string = (activity.cur_num ? activity.cur_num : 0) + "/" + activity.cond_num
                let BtnAward = nItem.getChildByName("BtnAward")
                let awarded = () => {
                    nItem.getChildByName("SptAwarded").active = true
                    BtnAward.active = false
                }
                if (activity.status == 1) { // 未完成
                } else if (activity.status == 2) { // 领取
                    BtnAward.getComponent(cc.Sprite).spriteFrame = this.ybwlYellow
                    BtnAward.getChildByName("SptStatus").getComponent(cc.Sprite).spriteFrame = this.ybwlLq
                    izx.bindButtonClick(BtnAward, nItem, () => {
                        izx.audioMgr.playBtn()
                        izx.dispatchEvent(ACTIVITY_EVENT.GET_ACTIVITY_AWARD_REQ, {
                            uid: izx.user.uid,
                            progIds: activity.prog_id,
                            type: ACTIVITY_CONSTANT.AWARD_YBWL,
                            double: 0
                        }, awarded)
                    })
                } else if (activity.status == 3) {
                    awarded()
                }
                this._ybwlContent.addChild(nItem)
            } else if (activity.type == 2) { // 送百万金
                let nItem = cc.instantiate(this.sbwjItem)
                nItem.active = true
                let lblNum1 = cc.find("SptAwardBg/LblNum1", nItem)
                lblNum1.getComponent(cc.Label).string = activity.awards[0].min_num
                let lblNum2 = cc.find("SptAwardBg/LblNum2", nItem)
                lblNum2.getComponent(cc.Label).string = activity.awards[1].min_num
                let lblDay = nItem.getChildByName("LblDay")
                lblDay.getComponent(cc.Label).string = activity.title
                let lblProgress = nItem.getChildByName("LblProgress")
                lblProgress.getComponent(cc.Label).string = "进度：" + (activity.cur_num ? activity.cur_num : 0) + "/" + activity.cond_num
                let sptAward = nItem.getChildByName("SptAward")
                let btnAward = nItem.getChildByName("BtnAward")
                let btnAward1 = cc.find("SptAwardBg/BtnAward1", nItem)
                izx.bindButtonClick(btnAward1, nItem, (sender, data) => {
                    izx.audioMgr.playBtn()
                    this._lblTip.string = activity.awards[0].tip

                    let worldPos = sender.target.parent.convertToWorldSpaceAR(sender.target.position)
                    let localPos = this.node.convertToNodeSpaceAR(worldPos)
                    this._sptTip.setPosition(localPos.x, localPos.y + sender.target.height/2)
                    this._sptTip.active = true
                })
                // 更新奖励图片
                if (activity.awards[1].prop_id == COMMON_CONSTANT.ITEM_HEAD_FRAME && activity.awards[1].prop_index) {
                    let sptExp = cc.find("SptAwardBg/SptExp", nItem)
                    sptExp.getComponent(cc.Sprite).spriteFrame = this["txk" + activity.awards[1].prop_index]
                }
                let btnAward2 = cc.find("SptAwardBg/BtnAward2", nItem)
                izx.bindButtonClick(btnAward2, nItem, (sender, data) => {
                    izx.audioMgr.playBtn()
                    this._lblTip.string = activity.awards[1].tip

                    let worldPos = sender.target.parent.convertToWorldSpaceAR(sender.target.position)
                    let localPos = this.node.convertToNodeSpaceAR(worldPos)
                    this._sptTip.setPosition(localPos.x, localPos.y + sender.target.height/2)
                    this._sptTip.active = true
                })
                if (activity.status == 1) { // 未完成
                } else {
                    let awarded = () => {
                        nItem.getChildByName("SptAwarded").active = true
                        lblProgress.active = false
                        sptAward.active = false
                        btnAward.active = false
                        nItem.getChildByName("SptDown").getComponent(cc.Sprite).spriteFrame = this.sbwjYes
                    }

                    nItem.getChildByName("SptBg").getComponent(cc.Sprite).spriteFrame = this.sbwjBg
                    lblDay.active = false
                    let lblDayAward = nItem.getChildByName("LblDayAward")
                    lblDayAward.active = true
                    lblDayAward.getComponent(cc.Label).string = activity.title

                    if (activity.status == 2) { // 领取
                        sptAward.active = false
                        btnAward.active = true
                        izx.bindButtonClick(btnAward, nItem, () => {
                            izx.audioMgr.playBtn()
                            izx.dispatchEvent(ACTIVITY_EVENT.GET_ACTIVITY_AWARD_REQ, {
                                uid: izx.user.uid,
                                progIds: activity.prog_id,
                                type: ACTIVITY_CONSTANT.AWARD_SBWJ,
                                double: 0
                            }, awarded)
                        })
                    } else if (activity.status == 3) {
                        awarded()
                    }
                }
                if (activity.title == "100") {
                    nItem.getChildByName("SptDown").active = false
                }
                this._sbwjContent.addChild(nItem)
            } else if (activity.type == 3) { // 限时活动
                let lblMoney = cc.find("SptUp/NodeXshd/LblMoney", this.node)
                lblMoney.getComponent(cc.Label).string = activity.awards[0].min_num
                let lblFragments = cc.find("SptUp/NodeXshd/LblFragments", this.node)
                lblFragments.getComponent(cc.Label).string = activity.awards[1].min_num
                let lblTip = cc.find("SptUp/NodeXshd/LblTip", this.node)
                lblTip.getComponent(cc.Label).string = activity.desc
                let BtnAward = cc.find("SptUp/NodeXshd/BtnAward", this.node)
                let BtnAwardNormal = cc.find("SptUp/NodeXshd/BtnAwardNormal", this.node)
                let awarded = () => {
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

    switchTab(msg) {
        let sptRchdBg = this._btnRchd.getChildByName("Background").getComponent(cc.Sprite)
        let sptYbwl = this._btnYbwl.getChildByName("Background")
        let sptSbwj = this._btnSbwj.getChildByName("Background")
        let sptXshdBg = this._btnXshd.getChildByName("Background").getComponent(cc.Sprite)
        let sptTitle = cc.find("SptDown/SptTitle", this.node)
        let lblYwbl = this._btnYbwl.getChildByName("Label")
        let lblSbwj = this._btnSbwj.getChildByName("Label")
        if (msg == ACTIVITY_CONSTANT.TAB_RCHD) {
            this._nodeRchd.active = true
            this._nodeXshd.active = false
            sptRchdBg.spriteFrame = this.rchd1
            sptXshdBg.spriteFrame = this.xshd2
            sptTitle.getComponent(cc.Sprite).spriteFrame = this.rchdTitle
        } else if (msg == ACTIVITY_CONSTANT.TAB_XSHD) {
            this._nodeRchd.active = false
            this._nodeXshd.active = true
            sptRchdBg.spriteFrame = this.rchd2
            sptXshdBg.spriteFrame = this.xshd1
            sptTitle.getComponent(cc.Sprite).spriteFrame = this.xshdTitle
        } else if (msg == ACTIVITY_CONSTANT.TAB_YBWL) {
            this._sptYbwlBg.active = true
            this._sptSbwjBg.active = false
            sptYbwl.active = true
            sptSbwj.active = false
            lblYwbl.color = new cc.Color(255,255,255,255)
            lblSbwj.color = new cc.Color(138,76,41,255)
        }else if (msg == ACTIVITY_CONSTANT.TAB_SBWJ) {
            this._sptYbwlBg.active = false
            this._sptSbwjBg.active = true
            sptYbwl.active = false
            sptSbwj.active = true
            lblYwbl.color = new cc.Color(138,76,41,255)
            lblSbwj.color = new cc.Color(255,255,255,255)
        }
    }

    
}
