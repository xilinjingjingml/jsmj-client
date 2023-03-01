/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2020-11-3
 * @LastEditors: wangxinfeng
 * @LastEditTime: 2020-11-4
 */
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { SCMJ_EVENT } from "../scmjEvents";
import { LackType } from "../scmjConstants";
import Constants from "../../common/constants";
import { gamebase } from "../../common/protos/gamebase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UserHead extends BaseUi {
    // 用户id
    uid: number = 0;
    // 座位 0-3
    chairId: number = -1;
    // vip等级
    vipLevel: number = 0;
    // 准备状态
    ready: number = 0;
    // 金豆
    gold: number = 0;
    // 用户金豆
    @property(cc.Label)
    lblGold: cc.Label = null;
    // 庄家
    bBanker: boolean = false;
    // 定缺
    lack: LackType = LackType.None;
    // 头像框
    @property(cc.Sprite)
    sptFrame: cc.Sprite = null;
    // 头像
    @property(cc.Sprite)
    sptHead: cc.Sprite = null;
    // vip图片
    @property(cc.Sprite)
    sptVip: cc.Sprite = null;
    // 左边准备图片
    @property(cc.Sprite)
    sptLeftReady: cc.Sprite = null;
    // 右边准备图片
    @property(cc.Sprite)
    sptRightReady: cc.Sprite = null;

    // 庄图片
    @property(cc.Sprite)
    sptBanker: cc.Sprite = null;
    // 定缺图片
    @property(cc.Sprite)
    sptLack: cc.Sprite = null;

    @property([cc.SpriteFrame])
    headImgArr: cc.SpriteFrame[] = [];

    // 默认头像
    @property(cc.SpriteFrame)
    sptDefaultHead: cc.SpriteFrame = null;
    
    onOpen() {

    }

    onClose() {
        console.log("UserHead onClose")
        super.onClose()
    }
    // 注册事件
    registerEvent() {
        // 玩家的加入，离开，准备，开始，掉线，重连，游戏，结束，等待开始，游戏状态
        izx.on(Constants.EventName.ROOM_ENTER_NOTI, this.onPlayerEnter, this)
        izx.on(Constants.EventName.ROOM_EXIT_NOTI, this.onPlayerExit, this)
        izx.on(SCMJ_EVENT.READY_NOTI, this.updateReady, this)
        izx.on(SCMJ_EVENT.BEGIN_GAME_NOTI, this.onStartGameNoti, this)
        izx.on(SCMJ_EVENT.SET_DEALER_NOTI_BANKER, this.onBankerNoti, this)
        izx.on(SCMJ_EVENT.UPDATE_USER_GOLD, this.onUpdateGold, this)
    }
    onPlayerEnter(msg: gamebase.IEnterRoomNot) {
        if (msg.uid == this.uid) {

        }
    }
    onPlayerExit(msg: gamebase.IExitRoomNot) {
        if (msg.uid == this.uid && msg.uid != izx.user.uid) {
            this.sptHead.spriteFrame = this.sptDefaultHead
            this.sptBanker.node.active = false
            this.lblGold.string = ""
            this.reset()
        }
    }
    clearView () {
        this.sptHead.spriteFrame = this.sptDefaultHead
        this.sptBanker.node.active = false
        this.lblGold.string = ""

        this.reset()
    }
    // 更新准备按钮显示隐藏
    updateReady(noti) {
        console.log("UserHead updateReady noti = ", noti)
        if (!noti || !noti.isReady) return
        if (noti.uid != this.uid) return

        if (noti.isReady) {
            if (this.chairId == 1 || this.chairId == 2) {
                this.sptLeftReady.node.active = true
            } else {
                this.sptRightReady.node.active = true
            }
        } else {
            this.sptLeftReady.node.active = false
            this.sptRightReady.node.active = false
        }
    }
    // 游戏开始通知
    onStartGameNoti(noti) {
        if (!noti) return
        this.sptLeftReady.node.active = false
        this.sptRightReady.node.active = false
        this.sptVip.node.active = false
    }
    // 置庄通知
    onBankerNoti(noti) {
        if (noti.uid == this.uid) {
            this.sptBanker.node.active = true
        }
    }
    // 更新金豆
    onUpdateGold(noti) {
        if (!noti || !noti.gold || !noti.uid) return
        if (noti.uid == this.uid) {
            this.lblGold.string = izx.getMoneyformat(noti.gold)
        }
    }
    // 重置参数
    reset() {
        this.chairId = -1
        this.vipLevel = 0
        this.uid = 0
        this.ready = 0
        this.bBanker = false
        this.gold = 0
        this.lack = LackType.None
        // TODO: 重置头像、头像框、vip、金豆、准备、庄、定缺等图片
    }
    // 初始化
    init(params) {
        console.log("UserHead init params = ", params)
        if (!params) return

        this.reset()

        if (params.chairId) {
            this.chairId = params.chairId
        }
        if (params.data.uid) {
            this.uid = params.data.uid
        }
        if (params.data.score) {
            this.gold = params.data.score
            this.lblGold.string = izx.getMoneyformat(params.data.score)
        }
        // if (params.data.nickname) {
        //   this.nickname = params.data.nickname
        // }
        if (params.ready) {
            this.ready = params.ready
        }
        if (params.vipLevel) {
            this.vipLevel = params.vipLevel
        }

        if (params.data.uid) {
            this.sptHead.spriteFrame = this.headImgArr[params.chairId]
        }

    }

    // LIFE-CYCLE CALLBACKS:
    onLoad() {
        //this.onOpen()
        this.registerEvent()
    }

    start() {

    }

    // update (dt) {}
}
