import BaseUi from "../../framework/base/baseUI";
import {izx} from "../../framework/izx"
const {ccclass, property} = cc._decorator;

@ccclass
export default class ShopConfirm extends BaseUi {

    @property(cc.Label)
    content: cc.Label = null
    // onLoad () {}

    start () {
        let money = 0
        this.initParam.boxcontent.forEach(content => {
            if (content["index"] == 0) {
                money = content["num"]
            }
        });
        this.content.getComponent(cc.Label).string = "您确定要购买" + money + "金豆吗？"

        izx.bindButtonClick("Bg/ConfirmButton", this.node, () =>{
            //调用支付插件
            cc.log("ConfirmButton", this.initParam)
            this.pop()
        })

        izx.bindButtonClick("Bg/CloseButton", this.node, () =>{
            this.pop()
        })
    }

    // update (dt) {}
}
