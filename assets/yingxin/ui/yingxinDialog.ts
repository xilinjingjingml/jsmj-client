import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class yingxinDialog extends BaseUI {

    onOpen() {
        this.initButton()
    }


    initButton() {
        izx.bindButtonClick("yingxin/btnClose", this.node, () => {
            this.pop()
        })
    }
}
