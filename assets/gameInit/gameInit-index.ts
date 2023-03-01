/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-02 10:40:56
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-11 18:25:57
 */
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseUI from "../framework/base/baseUI";
import GameInit from "./gameInit"
import { izx } from "../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class gameInitIndex extends BaseUI {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        izx.log("==gameInit==")
        let bundle = cc.assetManager.getBundle("gameInit")
        bundle.loadDir("prefabs", ()=>{
            bundle.loadDir("platform", () => {
                izx.pushScene("gameInit", "prefabs/Loading", () => {
                    GameInit.getInstance().start()
                })
            })
        })
    }

    // update (dt) {}
}
