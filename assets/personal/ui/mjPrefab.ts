/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2021-1-20
 * @LastEditors: wangxinfeng
 * @LastEditTime: 2021-1-20
 */

const {ccclass, property} = cc._decorator;

@ccclass
export default class MjPrefab extends cc.Component {
  
  // 花色数值
  cValue: number = 0;
  // 牌背图片名称
  bgPic: string = "";
  // 花色图片名称
  valuePic: string = "";
  // 花色精灵
  sptValue: cc.Node = null;
  // 牌背
  sptBg: cc.Node = null;
  // 缩放系数
  scale: number = 0.7;
  // 花色y轴位移
  offsetY: number = 6;
  // 花色缩放系数
  valueScale = 1.2;

  // 计算麻将图片以及缩放系数
  calcMjPic() {
    this.valuePic = "pics/mj_card_num_small/mj_cardnum_mahjong_s_" + this.cValue
    this.bgPic =  "pics/mj_card_bg/me_face"
  }
  
  loadPic(pathName):cc.SpriteFrame {
    let bundle = cc.assetManager.getBundle("scmj")
    if (bundle) {
      let asset = bundle.get(pathName)
      if (asset) {
        return new cc.SpriteFrame(<cc.Texture2D>asset)
      } else {
        return null
      }
    } else {
      return null
    }
  }

  // 创建麻将
  createMj() {
    if (this.sptBg == null) {
      this.sptBg = new cc.Node()
      let sprite = this.sptBg.addComponent(cc.Sprite);
      sprite.spriteFrame = <cc.SpriteFrame>this.loadPic(this.bgPic)
      this.sptBg.parent = this.node;
      this.sptBg.zIndex = 1
      if (this.cValue > 0) {
        this.sptValue = new cc.Node()
        let sprite = this.sptValue.addComponent(cc.Sprite);
        sprite.spriteFrame = <cc.SpriteFrame>this.loadPic(this.valuePic)
        this.sptValue.parent = this.node;
        this.sptValue.zIndex = 2
        this.sptValue.y = this.offsetY
        this.sptValue.scale = this.valueScale
      }
    }
    this.node.scale = this.scale
  }

  // 初始化牌值
  initMj(cValue) {
    this.cValue = cValue
    this.calcMjPic()
    this.createMj()
    this.node.setContentSize(100, 100)
  }

  mjSize(): cc.Size {
    let size = cc.size(0,0)
    if (this.sptBg) {
      let rect = this.sptBg.getBoundingBox()
      size.width = rect.width
      size.height = rect.height
    }
    return size
  }

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start () {

  }

  // update (dt) {}
}
