/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-13 13:44:29
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-11-20 16:06:28
 */


import { SCMJ_EVENT } from "../scmjEvents";
import { izx } from "../../framework/izx";
import {ScmjType} from "./scmjTypes"
import GameOperatorChiGang from "./scmjItemChiGang"
import GameOperatorTingGang from "./scmjItemTingCard"

const {ccclass, property} = cc._decorator;

@ccclass
export default class PopupItem extends cc.Component {
    @property(cc.Prefab)
    prefab_popup_item_chigang: cc.Prefab = null;

    @property(cc.Prefab)
    prefab_popup_item_tingcard: cc.Prefab = null;

    @property(cc.Button)
    btn_close: cc.Button = null;

    popup_item_chigang: cc.Node = null
    popup_item_tingcard: cc.Node = null

    start () {
        izx.on(SCMJ_EVENT.OPERATE_MENU_ChiGang, this.init, this)
        izx.on(SCMJ_EVENT.OPERATE_MENU_Ting, this.init, this)
        izx.on(SCMJ_EVENT.OPERATE_NOTI, this.finish, this)

        this.popup_item_chigang = cc.find("ContentCards/popup_item_chigang", this.node)
        this.popup_item_tingcard = cc.find("ContentCards/popup_item_tingcard", this.node)

        izx.bindButtonClick("ButtonClose", this.node, (sender, data) => {            
            this.node.active = false
            izx.dispatchEvent(SCMJ_EVENT.OPERATE_MENU_HIDE)
        })
        this.node.active = false
    }

    init(event: ScmjType.OperateChoose) {
        let operFlag = event.operFlag
        let vecDatas = event.vecDatas
        let parent: cc.Node = null
        let item = null
        if (operFlag === 1) {
            parent = this.popup_item_chigang
            item = this.prefab_popup_item_chigang
        } else if (operFlag === 2) {
            parent = this.popup_item_chigang
            item = this.prefab_popup_item_chigang
        } else if (operFlag === 3) {
            parent = this.popup_item_tingcard
            item = this.prefab_popup_item_tingcard
        }

        this.node.active = true
        this.popup_item_chigang.active = false
        this.popup_item_tingcard.active = false
        if (operFlag === ScmjType.OPType.CHI || operFlag === ScmjType.OPType.GANG) {
            parent.removeAllChildren()
            parent.active = true
            vecDatas.forEach(itemData => {
                let itemNode = cc.instantiate(item)
                itemNode.parent = parent
                let co: GameOperatorChiGang = itemNode.getComponent("scmjItemChiGang")
                co.initChiGang(itemData)
            });
        } else if (operFlag === ScmjType.OPType.HU) {
            parent.removeAllChildren()
            parent.active = true
            vecDatas.forEach(itemData => {
                itemData.cardsInfo.forEach(value => {
                    let itemNode = cc.instantiate(item)
                    let co: GameOperatorTingGang = itemNode.getComponent("scmjItemTingCard")
                    co.init(value)
                    itemNode.parent = parent
                })
            });
        }  
    }

    finish() {
        this.node.active = false
        this.popup_item_chigang.removeAllChildren()
        this.popup_item_tingcard.removeAllChildren()
    }

    onPressClose() {
        this.node.active = false
        izx.emit(SCMJ_EVENT.OPERATE_MENU_HIDE)
    }

    // update (dt) {}
}
