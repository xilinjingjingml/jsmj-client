/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2021-1-13
 * @LastEditors: wangxinfeng
 * @LastEditTime: 2021-1-13
 */
//import { AdPos } from "../../ad/adConstants";
//import { AD_EVENT } from "../../ad/adEvents";
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LackMoney extends BaseUi {
  
  @property(cc.Label)
  lblMoney: cc.Label = null;
  @property(dragonBones.ArmatureDisplay)
  bgAni: dragonBones.ArmatureDisplay = null;

  onOpen() {
    console.log("LackMoney onOpen")
    this.registerEvent()
    this.bgAni.playAnimation("newAnimation", 0)
  }

  onClose() {
    console.log("LackMoney onClose")
    super.onClose()
  }
  // 注册事件
  registerEvent() {
    // izx.on(SCMJ_EVENT.UPDATE_BILL, this.updateBill, this)
  }

  onBtnVideo() {
    console.log("LackMoney onBtnVideo")
    //izx.dispatchEvent(AD_EVENT.INIT_AD_ORDER_REQ, {adPos: AdPos.LackMoney})
    this.pop()
  }

  onBtnGoLower() {
    console.log("LackMoney onBtnGoLower")
    this.pop()
  }


  // LIFE-CYCLE CALLBACKS:
  onLoad () {
 
  }

  start () {

  }

  // update (dt) {}
}
