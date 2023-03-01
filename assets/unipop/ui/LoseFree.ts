/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2021-1-14
 * @LastEditors: wangxinfeng
 * @LastEditTime: 2021-1-14
 */
//import { AdPos } from "../../ad/adConstants";
//import { AD_EVENT } from "../../ad/adEvents";
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoseFree extends BaseUi {
  @property(cc.Node)
  ndHide: cc.Node = null
  @property(cc.Node)
  ndBg: cc.Node = null
  @property(cc.Node)
  ndContent: cc.Node = null
  @property(cc.Node)
  ndMergeDesc: cc.Node = null
  @property(cc.Node)
  ndFind: cc.Node = null
  @property(cc.Label)
  lblMoney: cc.Label = null
  @property(cc.Node)
  ndCoin: cc.Node = null

  onOpen() {
    console.log("LoseFree onOpen")
    super.onOpen()
    this.registerEvent()
    this.initData()
    this.scheduleOnce(()=>{
      this.playAnimation()
    }, 0.1)
  }

  onClose() {
    console.log("LoseFree onClose")
    super.onClose()
  }
  // 注册事件
  registerEvent() {

  }

  initData() {
    izx.log("LoseFree initData")
    this.initParam.money = this.initParam.money || 0
    this.lblMoney.string = this.initParam.money + ""
    let gap = 8
    this.ndFind.x = 0
    let w = this.ndFind.width
    this.lblMoney.node.x = w + gap
    w = this.lblMoney.node.x + this.lblMoney.fontSize*this.lblMoney.string.length
    this.ndCoin.x = w + gap
    w = this.ndCoin.x + this.ndCoin.width
    this.ndMergeDesc.x = -w/2
    this.scheduleOnce(()=>{
      this.ndContent.active = true
    }, 0.5)
  }

  playAnimation() {
    izx.log("LoseFree playAnimation")
    this.ndHide.active = true
    let disp = this.ndBg.getComponent(dragonBones.ArmatureDisplay)
    disp.playAnimation("newAnimation", 1)
  }

  onBtnVideo() {
    // console.log("LoseFree onBtnVideo")
    // let adInfo = izx.ad.getAreaInfo(AdPos.LoseFree)
    // if (adInfo) {
    //   adInfo.oid = this.initParam.oid
    //   izx.ad.showAd(AdPos.LoseFree)
    // }
    // this.pop()
  }

  onBtnClose() {
    console.log("LoseFree onBtnClose")
    this.pop()
  }

  // LIFE-CYCLE CALLBACKS:
  onLoad () {
    
  }

  start () {

  }
  // update (dt) {}
}
