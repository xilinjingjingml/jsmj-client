import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import Constants from "../../common/constants"
//import { AdPos, AdState } from "../../ad/adConstants"
//import { EAdsResult } from "../../framework/plugin/IPluginProxy"
//import { AD_EVENT } from "../../ad/adEvents"

const GET_RELIEF_INFO = "mjzz-lobby-item-srv/Relief/GetReliefInfo"
const UPT_RELIEF_AD_STATE = "mjzz-lobby-item-srv/Relief/UptReliefAdState"
const GET_RELIEF_AWARDS = "mjzz-lobby-item-srv/Relief/GetReliefAwards"

export default class ReliefMode extends BaseMode{
  reliefInfo = null

  constructor() {        
    super()     
  }

  load() {
    izx.log("ReliefMode load")
    this.autoRegHander()
    //izx.on(Constants.EventName.PLUGIN_ADS_CALLBACK, this.onPluginAdsCallback, this)
    izx.on(Constants.EventName.DISP_BROKEN_RELIEF_DIALOG, this.PopAdBrokenRelief, this)
    izx.on(Constants.EventName.GET_RELIEF_INFO_REQ, this.GetReliefInfoReq, this)
    izx.on(Constants.EventName.UPT_RELIEF_AD_STATE_REQ, this.UptReliefAdStateReq, this)
    izx.on(Constants.EventName.GET_RELIEF_AWARDS_REQ, this.GetReliefAwardsReq, this)
  }

  unLoad() {
    izx.log("ReliefMode unLoad")
    izx.offByTag(this)
  }

  onPluginAdsCallback(msg) {
    // izx.log("ReliefMode onPluginAdsCallback")

    // if (msg == null) {
    //   return
    // }
    // let adInfo = msg.adsInfo
    // if (adInfo.adArea != AdPos.BrokenRelief) {
    //   return
    // }
    // if (msg.AdsResultCode == EAdsResult.RESULT_CODE_REWARTVIDEO_SUCCEES) {
    //   this.UptReliefAdStateReq({uid: izx.user.uid, state: AdState.OrderFinish})
    // } else if (msg.AdsResultCode == EAdsResult.RESULT_CODE_REWARTVIDEO_FAIL){
    //   izx.log("ad play fail msg = ", msg.msg)
    //   this.UptReliefAdStateReq({uid: izx.user.uid, state: AdState.OrderCancel})
    // }
  }

  PopAdBrokenRelief(msg) {
    izx.log("PopAdBrokenRelief msg = ", msg)
    let callback = () => {
      if (this.reliefInfo.leftCount <= 0) {
        izx.log("relief left count = ", this.reliefInfo.leftCount)
        return
      }
      izx.pushDialog("unipop","prefabs/BrokenRelief", null, {initParam: {reliefInfo: this.reliefInfo}}) 
    }
    if (this.reliefInfo == null) {
      this.GetReliefInfoReq({callback: callback})
    } else {
      callback()
    }
  }

  GetReliefInfoReq(msg) {
    izx.log("GetReliefInfoReq msg = ", msg)
    let url = izx.httpUrl + GET_RELIEF_INFO
    let body = {
      uid: izx.user.uid
    }
    izx.log("url = ", url)
    izx.log("body = ", body)
    izx.httpPost(url, null, body, (rsp) => {
      izx.log("GetReliefInfoRsp rsp = ", rsp)
      if (rsp == null) {
        izx.log("unknown error")
        return 
      }
      if (rsp.err_code && rsp.err_code !== 0) {
        izx.log("rsp.err_code = ", rsp.err_code)
        izx.log("rsp.err_msg = ", rsp.err_msg)
        return
      }
      this.reliefInfo = {
        leftCount: rsp.count,
        money: rsp.money,
      }
      izx.log("this.reliefInfo = ", this.reliefInfo)
      if (msg.callback) {
        izx.log("GetReliefCountReq callback")
        msg.callback()
      }
    })
  }

  UptReliefAdStateReq(msg) {
    // izx.log("UptReliefAdStateReq msg = ", msg)
    // let url = izx.httpUrl + UPT_RELIEF_AD_STATE
    // let body = msg
    // izx.log("url = ", url)
    // izx.log("body = ", body)
    // izx.httpPost(url, null, body, (rsp) => {
    //   izx.log("UptReliefAdStateRsp rsp = ", rsp)
    //   if (rsp == null) {
    //     izx.log("unknown error")
    //     return 
    //   }
    //   if (rsp.err_code && rsp.err_code !== 0) {
    //     izx.log("rsp.err_code = ", rsp.err_code)
    //     izx.log("rsp.err_msg = ", rsp.err_msg)
    //     return
    //   }
    //   if (msg.state == AdState.OrderInit) {
    //     izx.dispatchEvent(AD_EVENT.SHOW_AD_ON_SPOT, {adPos: AdPos.BrokenRelief})
    //   }
    //   else if (msg.state == AdState.OrderFinish) {
    //     izx.dispatchEvent(Constants.EventName.GET_RELIEF_AWARDS_REQ, {uid: izx.user.uid, type: 2})
    //   }
    // })
  }

  GetReliefAwardsReq(msg) {
    izx.log("ReliefMode GetReliefAwardsReq msg = ", msg)
    let url = izx.httpUrl + GET_RELIEF_AWARDS
    let body = msg
    izx.log("url = ", url)
    izx.log("body = ", body)
    izx.httpPost(url, null, body, (rsp) => {
      izx.log("GetReliefAwardsRsp rsp = ", rsp)
      if (rsp == null) {
        izx.log("unknown error")
        return 
      }
      if (rsp.err_code && rsp.err_code !== 0) {
        izx.log("rsp.err_code = ", rsp.err_code)
        izx.log("rsp.err_msg = ", rsp.err_msg)
        return
      }
      if (rsp.awards) {
        izx.log("rsp.awards = ", rsp.awards)
      }
      this.reliefInfo.leftCount--
      if (this.reliefInfo.leftCount < 0) {
        this.reliefInfo.leftCount = 0
      }
    })
  } 
}