/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-10-21 14:43:52
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-10-23 18:58:49
 */

import { izx } from "../izx";
import { UiMgr } from "../mgr/uiMgr";
import baseUICloseTransition from "./baseUICloseTransition";

// 基础ui组件
const { ccclass, property } = cc._decorator;

@ccclass
export default class BaseUI extends cc.Component {

    initParam: any = null
    closeCb: Function = null

    // 是否是scene，此处的scene不是cocos的Scene
    protected _isScene: boolean = true
    // 当前UI的弹出框
    protected _dialog: BaseUI[] = []
    // 资源路径
    protected _resPath: string = ""
    // 当前UI的横竖屏,只有scene可以指定横竖屏
    protected _orientation: izx.Orientation =  izx.DEFAULT_ORIENTATION

    public get isScene(): boolean {
        return this._isScene
    }
    public set isScene(value: boolean) {
        this._isScene = value
    }
    public get orientation(): izx.Orientation {
        return this._orientation
    }
    public set orientation(value: izx.Orientation) {
        this._orientation = value
    }

    // onLoad() {}

    // start() {}

    // onEnable() {}

    // onDisable() {}

    onOpen() {
        izx.log("==onOpen==")
    }

    onTransitionOpen() {
        izx.log("==onTransitionOpen==")
    }

    onTransitionClose() {
        izx.log("==onTransitionClose==")
    }

    onResume() {
        izx.log("==onResume==")
    }

    onPause() {
        izx.log("==onPause==")
    }

    onClose(callback?: Function) {
        izx.log("==onClose==")
        // let aniTransition = this.getComponent(baseUICloseTransition)
        // if (aniTransition)
        //     aniTransition.doCloseAni()

        this.closeCb && this.closeCb();
    }

    onDestroy() {
        izx.log("==onDestroy==")
        izx.offByTag(this)
    }

    pushDialog(dialog: BaseUI) {
        if (!this._isScene) {
            izx.logE(`Failed! pushDialog can only be used with scene NOT dialog!`)
            return
        }
        if (dialog._isScene) {
            izx.logE(`Failed! pushDialog's param must be a dialog!`)
            return
        }
        this._dialog.push(dialog)
    }

    popDialog(dialog: BaseUI | string) {
        if (dialog instanceof BaseUI) {
            if (dialog._isScene) {
                izx.logE(`Failed! popDialog can only be used with scene NOT dialog! can use "this.pop()"`)
                return
            }
            for (let n = this._dialog.length, i = n - 1; i >= 0; i--) {
                if (this._dialog[i] === dialog) {
                    let ds = this._dialog.splice(i, 1)
                    if (ds && ds.length == 1) {
                        let closeAnddistroy = function () {
                            try {
                                ds[0].onClose()
                            } finally {
                                ds[0].node.destroy()
                            }
                        }

                        let aniTransition = ds[0].getComponent(baseUICloseTransition)
                        if (aniTransition) {
                            let func = () => {
                                closeAnddistroy()
                                izx.off("BaseUI_Close_Transition_OK" + ds[0].node.name, func)
                            }
                            izx.on("BaseUI_Close_Transition_OK" + ds[0].node.name, func)
                            try {
                                aniTransition.doCloseAni()
                            } finally {

                            }
                        } else {
                            closeAnddistroy()
                        }
                    }
                    break
                }
            }
        } else if (typeof dialog === "string") {
            for (let n = this._dialog.length, i = n - 1; i >= 0; i--) {
                if (this._dialog[i].name === dialog) {
                    let ds = this._dialog.splice(i, 1)
                    ds && ds.length == 1 && ds[0].node.destroy()
                    // TODO: 如果存在多个名字相同的Dialog?
                    break
                }
            }
        }
    }

    popAllDialog() {
        if (!this._isScene) {
            izx.logE(`Failed! popAllDialog can only be used with dialog NOT scene!`)
            return
        }
        for (let n = this._dialog.length, i = n - 1; i >= 0; i--) {
            let d = this._dialog[i]
            if (d) {
                this.popDialog(d)
            }
        }
        // fast clear
        this._dialog.length = 0
    }

    /**
     * 如果是Dialog则从当前Scene移除
     * 如果是Scene，从场景移除，同时移除场景上所有Dialog
     */
    pop() {
        if (this._isScene) {
            UiMgr.PopScene(this)
        } else {
            UiMgr.PopDialog(this)
        }
    }

    lastDialog() {
        return this._dialog.length > 0 ? this._dialog[this._dialog.length - 1] : null
    }
}
