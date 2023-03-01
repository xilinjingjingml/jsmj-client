import BaseUi from "../../framework/base/baseUI";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BasePopExt extends BaseUi {

    @property(cc.Button)
    btnMask: cc.Button = null;

    @property(cc.Button)
    btnValid: cc.Button = null;

    @property
    _bBtnMaskCloseEnable: boolean = false;

    setMaskCloseEnable(bEnable) {
        this._bBtnMaskCloseEnable = bEnable;
    }

    onBtnMaskClicked() {
      console.log('BasePopExt Mask button clicked!');
      if (this._bBtnMaskCloseEnable) {
          this.node.parent.active = false;
      }
    }

    onBtnValidClicked() {
        console.log('BasePopExt Valid button clicked!');
    }

    resizeButton() {
        console.log('BasePopExt resizeButton!');
        this.btnMask.node.width = cc.winSize.width;
        this.btnMask.node.height = cc.winSize.height;
        this.btnValid.node.width = this.node.parent.width;
        this.btnValid.node.height = this.node.parent.height;
    }

    onLoad () {
        console.log('BasePopExt onLoad!');
        this.resizeButton();
    }

    start () {
        console.log('BasePopExt start!');

    }
}
