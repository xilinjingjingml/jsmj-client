// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseUI from "../../framework/base/baseUI";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RankItem extends BaseUI {

    @property(cc.Label)
    index: cc.Label = null;
    @property(cc.Sprite)
    headimg: cc.Sprite = null;
    @property(cc.Label)
    username: cc.Label = null;
    @property(cc.Label)
    moneynum: cc.Label = null;

}
