import BaseUi from "../../framework/base/baseUI";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BasePop extends BaseUi {

    @property(cc.Prefab)
    maskPrefab: cc.Prefab = null;

    @property(cc.Node)
    _mask: cc.Node = null;

    @property
    maskCloseEnable: boolean = false;

    addMask() {
        console.log('BasePop addMask!');
        if (this._mask) {

        } else {
            this._mask = cc.instantiate(this.maskPrefab);
            // this._mask.getComponent('BasePopExt').setMaskCloseEnable(this.maskCloseEnable);
            this.node.addChild(this._mask, -9999);
        }
    }

    constructor() {
        super();
        console.log('BasePop constructor');
    }

    onLoad () {
        console.log('BasePop onLoad');
        this.addMask();
    }

    start () {
        console.log('BasePop start');
    }
}
