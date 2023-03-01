/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-12-15 11:43:50
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-12-15 11:47:25
 */
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseUI from "../framework/base/baseUI";
import { izx } from "../framework/izx";
import Lobby, {} from "./lobby"

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyIndex extends BaseUI {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        izx.log("==lobby init==")
        Lobby.getInstance()
    }

    // update (dt) {}
}
