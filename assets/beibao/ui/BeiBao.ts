import BaseUi from "../../framework/base/baseUI";
import {izx} from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BeiBao extends BaseUi {
    //手型
    @property(cc.SpriteFrame)
    shouxing1: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    shouxing2: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    shouxing3: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    shouxing4: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    shouxing5: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    shouxingbg: cc.SpriteFrame = null;

    //特效
    @property(cc.SpriteFrame)
    texiao1: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    texiao2: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    texiao3: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    texiao4: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    texiao5: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    texiaobg: cc.SpriteFrame = null;

    shouxingConfig = [
        {name:"默认手型",desc:"基础手型，没有装饰的打牌手型",isUsed:true,num:1,max:1},
        {name:"猫爪手型",desc:"打牌的效果，猫爪碎片合成",isUsed:false,num:0,max:1},
        {name:"钢铁侠手型",desc:"打牌的效果，钢铁侠碎片合成",isUsed:false,num:0,max:1},
        {name:"猫爪手型碎片",desc:"在背包中合成猫爪手型",isUsed:false,num:0,max:150},
        {name:"钢铁侠手型碎片",desc:"在背包中合成钢铁侠手型",isUsed:false,num:0,max:400},
    ]

    texiaoConfig = [
        {name:"闪电特效",desc:"基础特效，没有特殊的胡牌效果",isUsed:true,num:1,max:1},
        {name:"天火降临",desc:"胡牌特效，碎片合成或转盘中获得",isUsed:false,num:0,max:1},
        {name:"樱花飞舞",desc:"胡牌特效，樱花飞舞碎片合成",isUsed:false,num:0,max:1},
        {name:"天火降临碎片",desc:"在背包中合成天火降临特效",isUsed:false,num:0,max:150},
        {name:"樱花飞舞碎片",desc:"在背包中合成樱花飞舞特效",isUsed:false,num:0,max:400},
    ]

    // onLoad () {}

    start () {       
        this.showItemInfo1(1)
        this.showItemInfo2(1)
    }

    showItemInfo1 (index) {
        if (index < 1 || index > this.shouxingConfig.length) {
            return
        }
        let itemData = this.shouxingConfig[index-1]

        let node1 = cc.find("bg/ContentTop/top_bg1/kuangNode/BgSprite",this.node)
        if (index == 1 || index == 2 || index == 3) {
            node1.active = false
        }else {
            node1.getComponent(cc.Sprite).spriteFrame = this["shouxing"+"bg"]
            node1.active = true
        }

        let item1 = cc.find("bg/ContentTop/top_bg1/kuangNode/ItemSprite",this.node)
        item1.getComponent(cc.Sprite).spriteFrame = this["shouxing"+index]

        let name1 = cc.find("bg/ContentTop/top_bg1/nameNode/name",this.node)
        let desc1 = cc.find("bg/ContentTop/top_bg1/nameNode/desc",this.node)

        name1.getComponent(cc.Label).string = itemData.name
        desc1.getComponent(cc.Label).string = itemData.desc

        if (itemData.isUsed) {
            cc.find("bg/ContentTop/top_bg1/statusNode/status_0",this.node).active = true
            cc.find("bg/ContentTop/top_bg1/statusNode/status_1",this.node).active = false
            cc.find("bg/ContentTop/top_bg1/statusNode/status_2",this.node).active = false
            cc.find("bg/ContentTop/top_bg1/numNode",this.node).active = false
        }else if (index == 1 || index == 2 || index == 3) {
            cc.find("bg/ContentTop/top_bg1/statusNode/status_0",this.node).active = false
            cc.find("bg/ContentTop/top_bg1/statusNode/status_1",this.node).active = true
            cc.find("bg/ContentTop/top_bg1/statusNode/status_2",this.node).active = false
            cc.find("bg/ContentTop/top_bg1/numNode",this.node).active = false
        }else {
            cc.find("bg/ContentTop/top_bg1/statusNode/status_0",this.node).active = false
            cc.find("bg/ContentTop/top_bg1/statusNode/status_1",this.node).active = false
            cc.find("bg/ContentTop/top_bg1/statusNode/status_2",this.node).active = true
            cc.find("bg/ContentTop/top_bg1/numNode",this.node).active = true
            cc.find("bg/ContentTop/top_bg1/numNode/processnum",this.node).getComponent(cc.Label).string = itemData.num+"/"+itemData.max
        }
    }

    showItemInfo2 (index) {
        if (index < 1 || index > this.texiaoConfig.length) {
            return
        }
        let itemData = this.texiaoConfig[index-1]

        let node2 = cc.find("bg/ContentTop/top_bg2/kuangNode/BgSprite",this.node)
        if (index == 1 || index == 2 || index == 3) {
            node2.active = false
        }else {
            node2.getComponent(cc.Sprite).spriteFrame = this["texiao"+"bg"]
            node2.active = true
        }

        let item2 = cc.find("bg/ContentTop/top_bg2/kuangNode/ItemSprite",this.node)
        item2.getComponent(cc.Sprite).spriteFrame = this["texiao"+index]

        let name2 = cc.find("bg/ContentTop/top_bg2/nameNode/name",this.node)
        let desc2 = cc.find("bg/ContentTop/top_bg2/nameNode/desc",this.node)
        name2.getComponent(cc.Label).string = itemData.name
        desc2.getComponent(cc.Label).string = itemData.desc

        if (itemData.isUsed) {
            cc.find("bg/ContentTop/top_bg2/statusNode/status_0",this.node).active = true
            cc.find("bg/ContentTop/top_bg2/statusNode/status_1",this.node).active = false
            cc.find("bg/ContentTop/top_bg2/statusNode/status_2",this.node).active = false
            cc.find("bg/ContentTop/top_bg2/numNode",this.node).active = false
        }else if (index == 1 || index == 2 || index == 3) {
            cc.find("bg/ContentTop/top_bg2/statusNode/status_0",this.node).active = false
            cc.find("bg/ContentTop/top_bg2/statusNode/status_1",this.node).active = true
            cc.find("bg/ContentTop/top_bg2/statusNode/status_2",this.node).active = false
            cc.find("bg/ContentTop/top_bg2/numNode",this.node).active = false
        }else {
            cc.find("bg/ContentTop/top_bg2/statusNode/status_0",this.node).active = false
            cc.find("bg/ContentTop/top_bg2/statusNode/status_1",this.node).active = false
            cc.find("bg/ContentTop/top_bg2/statusNode/status_2",this.node).active = true
            cc.find("bg/ContentTop/top_bg2/numNode",this.node).active = true
            cc.find("bg/ContentTop/top_bg2/numNode/processnum",this.node).getComponent(cc.Label).string = itemData.num+"/"+itemData.max
        }
    }

    onToggleTable (sender, customEventData) {
        cc.log("onToggleTable",customEventData)
        if ("1" == customEventData) {
            cc.find("bg/ContentTop/top_bg1",this.node).active = true
            cc.find("bg/ContentTop/top_bg2",this.node).active = false
            cc.find("bg/ContentButtom/buttom_bg1",this.node).active = true
            cc.find("bg/ContentButtom/buttom_bg2",this.node).active = false 
        }else if("2" == customEventData) {
            cc.find("bg/ContentTop/top_bg1",this.node).active = false
            cc.find("bg/ContentTop/top_bg2",this.node).active = true
            cc.find("bg/ContentButtom/buttom_bg1",this.node).active = false
            cc.find("bg/ContentButtom/buttom_bg2",this.node).active = true 
        }
    }

    onToggleItem1 (sender, customEventData) {
        cc.log("onToggleItem1",customEventData)
        cc.find("bg/ContentTop/top_bg1",this.node).active = true
        cc.find("bg/ContentTop/top_bg2",this.node).active = false
        this.showItemInfo1(customEventData)
    }

    onToggleItem2 (sender, customEventData) {
        cc.log("onToggleItem2",customEventData)
        cc.find("bg/ContentTop/top_bg1",this.node).active = false
        cc.find("bg/ContentTop/top_bg2",this.node).active = true
        this.showItemInfo2(customEventData)
    }

    onPressBtnClose () {
        izx.popDialog(this)
    }
    // update (dt) {}
}
