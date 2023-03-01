/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-10-22 19:58:56
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-10-23 18:27:15
 */
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { izx } from "../izx";
import BaseUI from "./baseUI";

const { ccclass, property, requireComponent, disallowMultiple} = cc._decorator;

@ccclass
@requireComponent(cc.Animation)
@disallowMultiple
export default class baseUICloseTransition extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    _closeClip: cc.AnimationClip = null

    onLoad() {
        izx.on("BaseUI_Close_Transition_OK" + this.node.name, this.onCloseAniOver, this)
    }

    start () {
        let ani = this.getComponent(cc.Animation)
        ani.on("finished", (st, as: cc.AnimationState)=>{
            if (as) {
                if (as.clip === this._closeClip) {
                    izx.emit("BaseUI_Close_Transition_OK" + this.node.name)
                }
            }
        })
    }

    // 自定义Close动画，动画结束要doAniOver()
    doCloseAni() {
        let ani = this.getComponent(cc.Animation)
        let clips = ani.getClips()
        if (clips.length >= 1) {
            if (clips[0]) {
                this._closeClip = clips[0]
                ani.play(clips[0].name)
            }
        }
    }

    // 动画结束时回调
    doAniOver() {
        izx.emit("BaseUI_Close_Transition_OK" + this.node.name)
    }

    onCloseAniOver() {
        let bu = this.node.getComponent(BaseUI)
        bu && bu.onTransitionClose()
    }

    onDestroy() {
        izx.offByTag(this)
    }

    // update (dt) {}
}
