import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import WxWrapper from "../../framework/plugin/WxWrapper";

const {ccclass, property} = cc._decorator;

@ccclass
export default class KefuDialog extends BaseUI {

    onLoad() {
        if (cc.winSize.width < 720) {
            this.node.getChildByName("kefu").setScale(0.8, 0.8)
        } 
    }

    onOpen() {
        this.initButton()
    }

    start () {
        izx.UnBlockUI()
    }

    initButton() {
        izx.bindButtonClick("kefu/closeBtn", this.node, () => {
            this.pop()
        })
    }

    setClipboardData () {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            WxWrapper.setClipboardData("金山麻将", (ret) => {
                if (ret) {
                    izx.pushDialog("tips","prefabs/smallTipsDialog", null, 
                        {"initParam":{tips:"复制到剪切板成功",callback:null}})
                } else {
                    izx.pushDialog("tips","prefabs/smallTipsDialog", null, 
                    {"initParam":{tips:"复制到剪切板失败",callback:null}})
                }
            })
        } else {
            izx.pushDialog("tips","prefabs/smallTipsDialog", null, 
            {"initParam":{tips:"平台暂不支持复制到剪切板功能",callback:null}})
        }
    }

}
