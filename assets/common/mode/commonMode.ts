import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import Constants, { COMMON_CONSTANT } from "../../common/constants"

const GET_ITEM_NUM = "mjzz-lobby-item-srv/Item/GetItemNum"

export default class CommonMode extends BaseMode{
  private _ndBlockUI:cc.Node = null
  private _uids = null

  constructor() {        
    super()
    this._uids = {}   
  }

  load() {
    izx.log("CommonMode load")
    this.autoRegHander()
    izx.on(Constants.EventName.GET_ITEM_NUM_REQ, this.getItemNumReq, this)
    izx.on(Constants.EventName.BLOCK_UI, this.blockUI, this)
    izx.on(Constants.EventName.UN_BLOCK_UI, this.unBlockUI, this)
    izx.on(Constants.EventName.SHOW_TIPS, this.showTips, this)
    izx.on(Constants.EventName.COMMON_ERR_INFO, this.showCommonErrors, this)
    izx.on(Constants.EventName.SHOW_SMALL_TIPS, this.showSmallTips, this)
    izx.on(Constants.EventName.SHOW_KEFU, this.showKefu, this)
    izx.on(Constants.EventName.SHOW_SETTING, this.showSetting, this)
    izx.on(Constants.EventName.SHOW_RULE, this.showRule, this)
    izx.on(Constants.EventName.DRAW_ICON_BY_ID, this.drawIconById, this)
    cc.game.on(cc.game.EVENT_SHOW, () => {
      console.log("==foreground==")
      izx.isForeground = true
      izx.emit(Constants.EventName.FOREGROUND)
    });

    cc.game.on(cc.game.EVENT_HIDE, () => {
      console.log("==background==")
      izx.isForeground = false
      izx.emit(Constants.EventName.BACKGROUND)
    });
  }

  unLoad() {
    izx.log("CommonMode unLoad")
    izx.offByTag(this)
  }

  blockUI(msg) {
    izx.log("CommonMode blockUI msg = ", msg)
    if (this._ndBlockUI) {
      // this._ndBlockUI.removeFromParent()
      // this._ndBlockUI = null
      return
    }
    if (izx.prefabBlockUI) {
      this._ndBlockUI = cc.instantiate(izx.prefabBlockUI)
      this._ndBlockUI.parent = cc.director.getScene()
      cc.Camera.main.unschedule(this.autoUnBloukUI)
      cc.Camera.main.scheduleOnce(this.autoUnBloukUI, 10.0)
    }
  }

  autoUnBloukUI() {
    izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
  }

  unBlockUI(msg) {
    izx.log("CommonMode unBlockUI msg = ", msg)
    cc.Camera.main.unschedule(this.autoUnBloukUI)
    if (this._ndBlockUI) {
      this._ndBlockUI.removeFromParent()
      this._ndBlockUI = null
    }
  }

  getItemNumReq(msg) {
    // izx.log("CommonMode getItemNumReq msg = ", msg)
    let url = izx.httpUrl + GET_ITEM_NUM
    let body = {
      uid: msg.uid,
      item_list: msg.item_list
    }
    // izx.log("url = ", url)
    // izx.log("body = ", body)
    izx.httpPost(url, null, body, (rsp) => {
      // izx.log("getItemNumReq rsp = ", rsp)
      if (rsp == null) {
        // izx.log("unknown error")
        msg.callback && msg.callback({})
        return 
      }
      if (rsp.err_code && rsp.err_code < 0) {
        // izx.log("rsp.err_code = ", rsp.err_code)
        // izx.log("rsp.err_msg = ", rsp.err_msg)
        msg.callback && msg.callback({})
        return
      }
      if (rsp.items) {
        // izx.log("rsp.items = ", rsp.items)
      }
      msg.callback && msg.callback(rsp.items ? rsp.items : {})
    })
  }

  showTips(msg) {
    izx.log("showTips msg = ", JSON.stringify(msg))
    if (msg && msg.msg == "游戏币不足") {
      return
    }
    if (msg && msg.msg == "请求不合法") {
      return
    }
    if (msg && msg.msg == "加载超时，请重试") {
      return
    }
    izx.pushDialog("tips","prefabs/tipsDialog", null, {"initParam":{tips:msg.msg,callback:msg.callback, closeCallBack:msg.closeCallBack}}) 
  }

  showCommonErrors(msg) {
    izx.log("showCommonErrors msg = ", msg)
    this.showTips(msg)
  }

  showSmallTips(msg) {
    izx.log("showSmallTips msg = ", msg)
    izx.pushDialog("tips","prefabs/smallTipsDialog", null, {"initParam":{tips:msg.msg}})
  }

  showKefu(msg) {
    izx.log("showKefu msg = ", msg)
    izx.pushDialog("kefu", "prefabs/kefuDialog")
  }

  showSetting(msg) {
    izx.log("showSetting msg = ", msg)
    izx.pushDialog("setting", "prefabs/settingDialog")
  }

  showRule(msg) {
    izx.log("showRule msg = ", msg)
    izx.pushDialog("rule", "prefabs/ruleDialog")
  }

  getDefalutIconIndex(uid, pid) {
    if (pid == COMMON_CONSTANT.ITEM_HEAD) {
      return uid%9 + 1
    } else if(pid == COMMON_CONSTANT.ITEM_HEAD_FRAME) {
      return 0
    } else if(pid == COMMON_CONSTANT.ITEM_VIP) {
      return 1
    } else {
      return 0
    }
  }

  getDefalutIconPrefix(pid) {
    if (pid == COMMON_CONSTANT.ITEM_HEAD) {
      return "head/tx"
    } else if(pid == COMMON_CONSTANT.ITEM_HEAD_FRAME) {
      return "head_frame/txk"
    } else if(pid == COMMON_CONSTANT.ITEM_VIP) {
      return "vip/"
    } else {
      return ""
    }
  }

  drawIconById(msg) {
    // izx.log("drawIconById msg = ", msg)
    let uid = msg.uid
    let callback = msg.callback
    let pid = msg.pid
    let index = 0
    let prifix = this.getDefalutIconPrefix(pid)
    if (uid == izx.user.uid) {
      index = izx.item.getItemNum(pid)
      index = index ? index : this.getDefalutIconIndex(uid, pid)
      // izx.log("index = ", index)
      izx.loadPic("unires", prifix + index, callback)
    } else {
      if (this._uids[uid] && this._uids[uid][pid]) {
        index = this._uids[uid][pid]
        izx.loadPic("unires", prifix + index, callback)
      } else {
        let msg2 = {
          uid: uid,
          item_list: pid,
          callback: null
        }
        msg2.callback = (items) => {
          // izx.log("msg2.callback items = ", items)
          this._uids[uid] = this._uids[uid] ? this._uids[uid] : {}
          if (items[pid]) {
            this._uids[uid][pid] = items[pid]
            index = this._uids[uid][pid]
          } else {
            index = this.getDefalutIconIndex(uid, pid)
          }
          izx.loadPic("unires", prifix + index, callback)
        }
        izx.dispatchEvent(Constants.EventName.GET_ITEM_NUM_REQ, msg2)
      }
    }
  }
}