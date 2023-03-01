import BaseUi from "../../framework/base/baseUI";
import {izx} from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class IdCardAward extends BaseUi {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    onPressBtnClose () {
        izx.popDialog(this)
    }

    onPressBtonRenZhen () {
        izx.popDialog(this)
        izx.pushDialog("idcard", "prefabs/IdCardSubmit")
    }
    // update (dt) {}
}
