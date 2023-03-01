import Constants from "../../common/constants";
import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { GameModule } from "../../scmj/scmjConstants";
import { SCMJ_EVENT } from "../../scmj/scmjEvents";


const {ccclass, property} = cc._decorator;

@ccclass
export default class jsmjTipsDialog extends BaseUI {


    @property(cc.Label)
    tips:cc.Label=null

    onLoad () {
    }

    onOpen () {
        this.initButton()
        if (this.initParam.tips) {
            this.tips.string =  this.initParam.tips
        }
    }

    initButton () {

        izx.bindButtonClick("tips/close", this.node, (sender, data) => {
            if (this.initParam && this.initParam.closeCallBack) {
                this.initParam.closeCallBack()
            }
            this.pop()
        })

        izx.bindButtonClick("tips/btn01", this.node, (sender, data) => {
            if (this.initParam && this.initParam.callback) {
                this.initParam.callback()
            }
            this.pop()
        })
    }
}
