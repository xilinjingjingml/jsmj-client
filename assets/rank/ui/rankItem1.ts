// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseUI from "../../framework/base/baseUI";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RankItem1 extends BaseUI {

    @property(cc.Label)
    username1: cc.Label = null;
    @property(cc.Label)
    moneynum1: cc.Label = null;
    @property(cc.Sprite)
    headimg1: cc.Sprite = null;

    @property(cc.Label)
    username2: cc.Label = null;
    @property(cc.Label)
    moneynum2: cc.Label = null;
    @property(cc.Sprite)
    headimg2: cc.Sprite = null;

    @property(cc.Label)
    username3: cc.Label = null;
    @property(cc.Label)
    moneynum3: cc.Label = null;
    @property(cc.Sprite)
    headimg3: cc.Sprite = null;
    

}
