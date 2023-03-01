import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GongGaoDetail extends BaseUI {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        cc.find("bg/NameLabel",this.node).getComponent(cc.Label).string = this.initParam.title
        cc.find("bg/ScrollView/view/content/item",this.node).getComponent(cc.Label).string = this.initParam.content
        cc.find("bg/GroupNameLabel",this.node).getComponent(cc.Label).string = this.initParam.groupName
        cc.find("bg/DateLabel",this.node).getComponent(cc.Label).string = this.initParam.date
    }

    onPressBtnClose() {
        izx.popDialog(this)
    }

    // update (dt) {}
}
