/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2021-01-11 17:29:04
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-11 18:43:24
 */
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ConfirmBox extends BaseUI {

    @property(cc.Label)
    title: cc.Label = null;

    @property(cc.Button)
    confirmBtn: cc.Button = null;

    @property(cc.Button)
    cancelBtn: cc.Button = null;

    @property(cc.Label)
    content: cc.Label = null;

    @property(cc.Layout)
    container: cc.Layout = null;

    @property(cc.Label)
    btnText: cc.Label = null

    @property(cc.Label)
    btnCanelText: cc.Label = null

    @property(cc.ScrollView)
    scollView: cc.ScrollView = null

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let param = this.initParam || {}
        if (typeof(param.title) === "string") {
            this.title.string = param.title
        }
        if (typeof(param.msg) === "string") {
            this.content.string = param.msg
        }
        if (typeof (param.btnText) === "string") {
            this.btnText.string = param.btnText
        }
        if (typeof (param.btnCanelText) === "string") {
            this.btnCanelText.string = param.btnCanelText
        }
        if (typeof (param.closeCallBack) === "undefined") {
            this.cancelBtn.node.active = false
        }
    }

    start () {
        if (this.content.node.height < this.scollView.node.height) {
            let w = this.container.getComponent(cc.Widget)
            w.isAlignVerticalCenter = true
        }
    }

    onPressConfirm() {
        if (typeof (this.initParam) === "object" && typeof (this.initParam.callback) === "function") {
            this.initParam.callback()
        }
        this.pop()
    }

    onPressCancel() {
        if (typeof (this.initParam) === "object" && typeof (this.initParam.closeCallBack) === "function") {
            this.initParam.closeCallBack()
        }
        this.pop()
    }

    // update (dt) {}
}
