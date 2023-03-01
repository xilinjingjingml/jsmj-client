import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends BaseUI {

    onOpen() {
        this.initButton()
    }

    initButton() {
        izx.bindButtonClick("backBtn", this.node, () => {
            this.pop()
        })
    }
}
