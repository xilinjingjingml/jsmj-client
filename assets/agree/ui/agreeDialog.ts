import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AgreeDialog extends BaseUI {

    onLoad() {
        if (cc.winSize.width < 720) {
            this.node.getChildByName("agree").setScale(0.8, 0.8)
        } 
    }
    
    onOpen() {
        this.initButton()
    }

    initButton() {
        izx.bindButtonClick("agree/closeBtn", this.node, () => {
            this.pop()
        })
    }
}
