import Constants from "../../common/constants";
import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { GameModule } from "../../scmj/scmjConstants";
import { SCMJ_EVENT } from "../../scmj/scmjEvents";


const {ccclass, property} = cc._decorator;

@ccclass
export default class jsmjSmallTipsDialog extends BaseUI {


    @property(cc.Label)
    tips:cc.Label=null

    onOpen () {
        if (this.initParam.tips) {
            this.tips.string =  this.initParam.tips
        }

        setTimeout(() => {
            this.pop()
        }, 2000);
    }
}
   
