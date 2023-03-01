import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HonorInfoMain extends BaseUi {
    @property(cc.SpriteFrame)
    icon_1_1 = null;
    @property(cc.SpriteFrame)
    icon_1_2 = null;
    @property(cc.SpriteFrame)
    icon_1_3 = null;

    @property(cc.SpriteFrame)
    icon_2_1 = null;
    @property(cc.SpriteFrame)
    icon_2_2 = null;
    @property(cc.SpriteFrame)
    icon_2_3 = null;

    @property(cc.SpriteFrame)
    icon_3_1 = null;
    @property(cc.SpriteFrame)
    icon_3_2 = null;
    @property(cc.SpriteFrame)
    icon_3_3 = null;

    @property(cc.SpriteFrame)
    icon_4_1 = null;
    @property(cc.SpriteFrame)
    icon_4_2 = null;
    @property(cc.SpriteFrame)
    icon_4_3 = null;

    @property(cc.SpriteFrame)
    icon_5_1 = null;
    @property(cc.SpriteFrame)
    icon_5_2 = null;
    @property(cc.SpriteFrame)
    icon_5_3 = null;

    @property(cc.SpriteFrame)
    icon_6_1 = null;
    @property(cc.SpriteFrame)
    icon_6_2 = null;
    @property(cc.SpriteFrame)
    icon_6_3 = null;

    @property(cc.SpriteFrame)
    icon_mask_1 = null;
    @property(cc.SpriteFrame)
    icon_mask_2 = null;
    @property(cc.SpriteFrame)
    icon_mask_3 = null;
    @property(cc.SpriteFrame)
    icon_mask_4 = null;
    @property(cc.SpriteFrame)
    icon_mask_5 = null;
    @property(cc.SpriteFrame)
    icon_mask_6 = null;

    onOpen() {
        this.initButton()

        if (this.initParam && this.initParam.items) {
            let index = 1
            for (let task of this.initParam.items) {
                let NodeItem = cc.find("NodeItem" + index, this.node)
                let SptItem = NodeItem.getChildByName("SptItem")
                SptItem.getComponent(cc.Sprite).spriteFrame = this["icon_" + this.initParam.index + "_" + index]
                let SptMask = NodeItem.getChildByName("SptMask")
                SptMask.getComponent(cc.Sprite).spriteFrame = this["icon_mask_" + this.initParam.index]
                let lblDesc = NodeItem.getChildByName("LblDesc")
                lblDesc.getComponent(cc.Label).string = task.desc

                if (task.cur_num && Number(task.cur_num) >= Number(task.cond_num)) {
                    SptMask.active = false
                }
                index += 1
            }
        }
    }

    initButton() {
        izx.bindButtonClick("BtnClose", this.node, (sender, data) => {
            this.pop()
        })
    }
    
    touchMain() {
    }

    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchMain, this ,true);
    }

    onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchMain, this,true);
    }
}
