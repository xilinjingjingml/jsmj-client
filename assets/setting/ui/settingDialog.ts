import baseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SettingDialog extends baseUI {

    onLoad() {
        if (cc.winSize.width < 720) {
            this.node.getChildByName("setting").setScale(0.8, 0.8)
        } 
    }

    onOpen() {
        this.initButton()
    }

    initButton() {
        izx.bindButtonClick("setting/backBtn", this.node, () => {
            this.pop()
        })

        izx.bindButtonClick("setting/userAgree", this.node, () => {
            izx.pushDialog("agree", "prefabs/agreeDialog")
        })

        izx.bindButtonClick("setting/privacyAgree", this.node, () => {
            izx.pushDialog("agree", "prefabs/agreeDialog")
        })
    }
}
