/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2021-1-13
 * @LastEditors: wangxinfeng
 * @LastEditTime: 2021-1-13
 */
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import Constants from "../../common/constants"
//import { AdPos, AdState } from "../../ad/adConstants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BrokenRelief extends BaseUi {

  reliefInfo = null
  @property(cc.Label)
  lblMoney: cc.Label = null;
  @property(cc.Label)
  lblLeftTime: cc.Label = null;

  onOpen() {
    console.log("BrokenRelief onOpen")
    this.registerEvent()
    this.reliefInfo = this.initParam.reliefInfo || {leftCount: 0, money: 0}
    this.lblLeftTime.string = this.reliefInfo.leftCount + ""
    this.lblMoney.string = this.reliefInfo.money + ""
  }

  onClose() {
    console.log("BrokenRelief onClose")
    super.onClose()
  }
  // 注册事件
  registerEvent() {
    // izx.on(SCMJ_EVENT.UPDATE_BILL, this.updateBill, this)
  }

  onBtnVideo() {
    console.log("BrokenRelief onBtnVideo")
    izx.dispatchEvent(Constants.EventName.UPT_RELIEF_AD_STATE_REQ, {
      uid: izx.user.uid,
      //state: AdState.OrderInit,
    })
    this.pop()
  }

  onBtnClose() {
    console.log("BrokenRelief onBtnClose")
    izx.dispatchEvent(Constants.EventName.GET_RELIEF_AWARDS_REQ, {
      uid: izx.user.uid,
      type: 1,
    })
    this.pop()
  }


  // LIFE-CYCLE CALLBACKS:
  onLoad () {
 
  }

  start () {

  }

  // update (dt) {}
}
