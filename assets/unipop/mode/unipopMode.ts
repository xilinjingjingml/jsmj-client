import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import Constants from "../../common/constants"

export default class UnipopMode extends BaseMode{
constructor() {        
    super()     
  }

  load() {
    izx.log("UnipopMode load")
    this.autoRegHander()
    izx.on(Constants.EventName.SHOW_AWARDS, this.popAwards, this)
  }

  unLoad() {
    izx.log("UnipopMode unLoad")
    izx.offByTag(this)
  }

  popAwards(msg) {
    izx.log("popAwards msg = ", msg)
    izx.pushDialog("unipop","prefabs/AwardsMain", null, {initParam: msg}) 
  }
}