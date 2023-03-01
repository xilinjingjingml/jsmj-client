/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-12-31 16:30:59
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-12-31 18:26:12
 */
import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { SCMJ_EVENT } from "../../scmj/scmjEvents";
import adOrder = require("../../common/protos/ad-order")
import Constants, {} from "../../common/constants"

const {ccclass, property} = cc._decorator;

@ccclass
export default class jsmjGxhdDialog extends BaseUI {

    @property(cc.Label)
    awardNum:cc.Label = null

    @property(cc.Prefab)
    gxhd_donghua2_ske: cc.Prefab = null;
    

    onOpen() {
        this.initButton()
        this.initEvent()
        this.initDragonbones()

        if (this.initParam && this.initParam.award) {
            this.initParam.award.forEach(element => {
                if (element.index == 0) {
                    this.awardNum.string = izx.getMoneyformat(element.num) + "元"
                    return
                }
            });   
        }
    }

    initDragonbones () {
        let gxgdNode = cc.find("gxhd/gxhdDragon", this.node)
        gxgdNode.getChildByName("gxhd_donghua_ske").getComponent(dragonBones.ArmatureDisplay).on(dragonBones.EventObject.COMPLETE, (event)=>{
            gxgdNode.removeAllChildren()
            let gongxifacai_donghua2 = cc.instantiate(this.gxhd_donghua2_ske)
            gxgdNode.addChild(gongxifacai_donghua2)
            
        },this)
    }

    initButton() {
        izx.bindButtonClick("gxhd/closeBtn", this.node, () => {
            if (this.initParam && this.initParam.closeCallBack) {
                this.initParam.closeCallBack()
            }
            this.pop()
        })

        izx.bindButtonClick("gxhd/mflqBtn", this.node, () => {
            if (this.initParam && this.initParam.callback) {
                this.initParam.callback()
            }
            this.pop()
        })
    }

    initEvent() {
    }
   
}
