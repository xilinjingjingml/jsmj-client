const {ccclass, property} = cc._decorator;

@ccclass
export default class HeadFrameItem extends cc.Component {

    @property(cc.SpriteFrame)
    txk01 = null
    @property(cc.SpriteFrame)
    txk02 = null
    @property(cc.SpriteFrame)
    txk03 = null
    @property(cc.SpriteFrame)
    txk04 = null
    @property(cc.SpriteFrame)
    txk05 = null
    @property(cc.SpriteFrame)
    txk06 = null
    @property(cc.SpriteFrame)
    txk07 = null
    @property(cc.SpriteFrame)
    txk08 = null
    @property(cc.SpriteFrame)
    txk09 = null
    @property(cc.SpriteFrame)
    txk10 = null
    @property(cc.SpriteFrame)
    txk11 = null
    @property(cc.SpriteFrame)
    txk12 = null
    @property(cc.SpriteFrame)
    txk13 = null
    @property(cc.SpriteFrame)
    txk14 = null
    @property(cc.SpriteFrame)
    txk15 = null
    @property(cc.SpriteFrame)
    headFrameUse = null

    _index = 0

    setSpriteFrameByIndex(index) {
        this._index = index
        let sptFrame = this.node.getChildByName("SptFrame")
        if (this._index < 10) {
            sptFrame.getComponent(cc.Sprite).spriteFrame = this["txk0" + this._index]
        } else {
            sptFrame.getComponent(cc.Sprite).spriteFrame = this["txk" + this._index]
        }
    }

    setSpriteFrameChoose() {
        let sptChoose = this.node.getChildByName("SptChoose")
        sptChoose.active = true
        return sptChoose
    }

    setSpriteFrameUse() {
        let sptChoose = this.node.getChildByName("SptChoose")
        sptChoose.getComponent(cc.Sprite).spriteFrame = this.headFrameUse
        sptChoose.active = true
        return sptChoose
    }

    getSpriteFrame() {
        if (this._index < 10) {
            return this["txk0" + this._index]
        } else {
            return this["txk" + this._index]
        }
    }

    getSpriteFrameIndex() {
        return this._index
    }
}
