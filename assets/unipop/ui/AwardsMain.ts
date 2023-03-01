import Constants, { COMMON_CONSTANT } from "../../common/constants";
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AwardsMain extends BaseUi {
  @property(cc.SpriteFrame)
  prop0 = null;
  @property(cc.SpriteFrame)
  propIcon0 = null;
  @property(cc.SpriteFrame)
  prop1001 = null;
  @property(cc.SpriteFrame)
  propIcon1001 = null;
  @property(cc.SpriteFrame)
  prop1002 = null;
  @property(cc.SpriteFrame)
  propIcon1002 = null;
  @property(cc.SpriteFrame)
  prop1006 = null;
  @property(cc.SpriteFrame)
  prop1008 = null;
  @property(cc.SpriteFrame)
  propIcon1008 = null;
  @property(cc.SpriteFrame)
  LevelTitle = null;
  @property(cc.Sprite)
  sptTitle: cc.Sprite = null;
  @property(cc.Label)
  lblLevel: cc.Label = null;

  @property(cc.Prefab)
  awardItem = null;

  @property(cc.SpriteFrame)
  zsFrame = null
  @property(cc.SpriteFrame)
  vipExpFrame = null

  onOpen() {
    this.initEvent()
    this.initButton()
    this.initBgTitle()
    this.initAwards()
  }

  initBgTitle() {
    if (this.initParam && this.initParam.level) {
      this.sptTitle.spriteFrame = this.LevelTitle
      this.lblLevel.node.active = true
      this.lblLevel.string = "LV." + this.initParam.level
    }
  } 

  initEvent() {
  }

  initAwards() {
    if (this.initParam && this.initParam.award) {
      let layoutAwards = cc.find("Layout/LayoutAwards", this.node)
      if (this.initParam.award.length == 1) {
        layoutAwards.getComponent(cc.Layout).type = cc.Layout.Type.NONE
      }
      for (let award of this.initParam.award) {
        award.index == null && (award.index = 0)
        let awardItem = cc.instantiate(this.awardItem)
        let lblAward = awardItem.getChildByName("LblAward")
        lblAward.getComponent(cc.Label).string = "x" + award.num
        let sptAward = awardItem.getChildByName("SptAward")
        let sptType = awardItem.getChildByName("SptType")
        let descBg = awardItem.getChildByName("DescBg")
        if (award.index == COMMON_CONSTANT.ITEM_HEAD_FRAME) {
          izx.loadPic("unires", "head_frame/txk" + award.headFrameIndex, (res) => {
            sptAward.getComponent(cc.Sprite).spriteFrame = res
          })
        } else {
          sptAward.getComponent(cc.Sprite).spriteFrame = this["propIcon" + award.index]
        }
        sptType.getComponent(cc.Sprite).spriteFrame = this["prop" + award.index]
        let disp = awardItem.getChildByName("Explode").getComponent(dragonBones.ArmatureDisplay)
        // disp.addEventListener(dragonBones.EventObject.COMPLETE, () => {
          
        // }, this)
        disp.playAnimation("newAnimation", 1)
        sptAward.active = false
        sptType.active = false
        lblAward.active = false
        descBg.active = false
        this.scheduleOnce(() => {
          sptAward.active = true
          sptType.active = true
          lblAward.active = true
          descBg.active = true
          let disp2 = awardItem.getChildByName("Loop").getComponent(dragonBones.ArmatureDisplay)
          disp2.playAnimation("newAnimation", 0)
        }, 1.0)
        layoutAwards.addChild(awardItem)
      }
      this.scheduleOnce(() => {
        izx.audioMgr.playAward()
      }, 1.0)
    }
  }

  initButton() {
    let BtnAward = cc.find("Layout/BtnAward", this.node)
    izx.bindButtonClick(BtnAward, this.node, (sender, data) => {
      this.pop()
    })
    let BtnClose = cc.find("Layout/SptTitleBg/BtnClose", this.node)
    izx.bindButtonClick(BtnClose, this.node, (sender, data) => {
      this.pop()
    })
  }
}
