/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-13 13:44:29
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-12-28 19:46:10
 */
import { CardArea, OperatorCode } from "../scmjConstants";
import { izx } from "../../framework/izx";
import { SCMJ_EVENT } from "../scmjEvents";
import { scmjUtil } from "../scmjUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameOperatorChiGang extends cc.Component {

    cards = []
    itemData = null
    valuePicPath = "pics/atlas_images/preload/mj_card_num/mj_cardnum_mahjong_"
    
    onLoad () {
        for (let index = 0; index < 4; index++) {
            let card = cc.find("card"+index, this.node)
            if (card) {
                card.active = false
                this.cards.push(card)
            }
        }
    }

    initChiGang(itemData) {
        this.itemData = itemData
        this.cards.forEach(element => {
            element.active = false
            cc.find("SptGray", element).active = false
        });
        this.itemData.cardsInfo.forEach((itemCard,index) => {
            //杠牌只显示一张牌
            if (this.itemData.cardsInfo.length == 4) {
                if (index > 0) {
                    return
                }
            }
            let itemNode = this.cards[index]
            itemNode.active = true
            let cardSpt = cc.find("SptValue", itemNode).getComponent(cc.Sprite)
            cardSpt.spriteFrame = <cc.SpriteFrame>scmjUtil.loadPic(this.valuePicPath + itemCard)
            if (itemCard == this.itemData.card) {
                cc.find("SptGray", itemNode).active = true
            }
            itemNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEndChiGang, this)
        });
    }

    onTouchEndChiGang() {
        let ackOpcode = this.itemData.opcode
        let ackOpCard = this.itemData.card
        let ackArr = []
        if (typeof ackOpCard === "number") {
            ackArr.push(ackOpCard)
        } else {
            ackArr =  ackOpCard
        }
        izx.dispatchEvent(SCMJ_EVENT.OPERATE_ACK,{
          opCode: ackOpcode,
          cards: ackArr,
          serial:this.itemData.serial
        })
        izx.dispatchEvent(SCMJ_EVENT.OPERATE_FINISH)
        
    }
}
