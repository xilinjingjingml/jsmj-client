import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import {COMMON_CONSTANT} from "../../common/constants"
import {PERSONAL_EVENT} from "../personal_events";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EditHeadMain extends BaseUi {
    @property(cc.Prefab)
    headItem = null;

    @property(cc.SpriteFrame)
    tx01 = null;
    @property(cc.SpriteFrame)
    tx02 = null;
    @property(cc.SpriteFrame)
    tx03 = null;
    @property(cc.SpriteFrame)
    tx04 = null;
    @property(cc.SpriteFrame)
    tx05 = null;
    @property(cc.SpriteFrame)
    tx06 = null;
    @property(cc.SpriteFrame)
    tx07 = null;
    @property(cc.SpriteFrame)
    tx08 = null;
    @property(cc.SpriteFrame)
    tx09 = null;

    lastHeadIndex = 1 // 之前索引
    curHeadIndex = 1 // 当前索引

    headName = ["小美","珍珠","波妹","火火","小帅","飞飞","闪电","妞妞","乐乐"]

    onOpen() {
        this.initButton()
        this.initView()
    }

    initButton() {
        izx.bindButtonClick("BtnConfirm", this.node, (sender, data) => {
            izx.audioMgr.playBtn()
            if (this.curHeadIndex != this.lastHeadIndex) {
                izx.dispatchEvent(PERSONAL_EVENT.UPDATE_HEAD_REQ, {
                    uid: izx.user.uid,
                    index: this.curHeadIndex,
                })
            }
            this.pop()
        })
        izx.bindButtonClick("BtnClose", this.node, (sender, data) => {
            this.pop()
        })
    }

    initView() {
        let layout = this.node.getChildByName("Layout")
        let curSptChoose = null
        this.lastHeadIndex = izx.item.getItemNum(COMMON_CONSTANT.ITEM_HEAD)
        this.curHeadIndex = this.lastHeadIndex
        for (let i = 1; i <= 9 ;i++) {
            let nItem = cc.instantiate(this.headItem)
            let lblNickname = nItem.getChildByName("LblNickname")
            lblNickname.getComponent(cc.Label).string = this.headName[i - 1]
            let sptHead = nItem.getChildByName("SptHead")
            sptHead.getComponent(cc.Sprite).spriteFrame = this["tx0" + i]
            if (this.curHeadIndex == i) {
                let sptChoose = nItem.getChildByName("SptChoose")
                sptChoose.active = true
                curSptChoose = sptChoose
            }
            izx.bindButtonClick("BtnChoose", nItem, (sender, data) => {
                console.log("LobbyHead onOpen = ", i)
                izx.audioMgr.playBtn()
                this.curHeadIndex = i
                if (curSptChoose) {
                    curSptChoose.active = false
                }
                let sptChoose = nItem.getChildByName("SptChoose")
                sptChoose.active = true
                curSptChoose = sptChoose
            })
            layout.addChild(nItem)
        }
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
