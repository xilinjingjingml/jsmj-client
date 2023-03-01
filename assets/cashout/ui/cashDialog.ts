import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CashDialog extends BaseUI {

    onOpen() {
        this.initButton()
    }

    initButton() {
        izx.bindButtonClick("backBtn", this.node, () => {
            this.pop()
        })
    }
}
