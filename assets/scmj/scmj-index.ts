/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-12-14 17:41:51
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-12-28 18:53:33
 */
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseUI from "../framework/base/baseUI";
import { izx } from "../framework/izx";
import Scmj, {} from "./scmj"
import Constants from "../common/constants"

const {ccclass, property} = cc._decorator;

@ccclass
export default class ScmjIndex extends BaseUI {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        izx.log("==scmj init==")
        Scmj.getInstance()
    }

    start () {
        

        // izx.dispatchEvent(Constants.EventName.ROOM_READY_TO_GAME, { gameId: "dzmj", ruleId: "dzmj.redpack.xs" })
    }

    // update (dt) {}
}
