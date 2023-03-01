/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-02 10:40:56
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-26 13:11:50
 */
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import Constants, {LoadingMsgType} from "../../common/constants";
import Auth from "../../common/mode/auth";

const {ccclass, property} = cc._decorator;

interface LoadingMsg {
    error: string
    info: string
    type: LoadingMsgType
    inc: number // 取值为0-100, 增量
    abs: number // 取值为0-100，最终值
    callback: Function  // 重试的回调
}

interface LoadingTypeProcess {
    total: number
}

@ccclass
export default class LoadingScene extends BaseUi {

    _progress: cc.ProgressBar = null
    _msg: cc.Label = null

    _progressVal: number = 0

    // 记录每种LoadingType的进度
    _progressData: Array<number> = []
    _progressDtMax: number

    onLoad() {
        izx.on(Constants.EventName.GAME_UPDATE_PROGRESS, this.updateProgress, this)
        izx.on(Constants.EventName.GAME_SHOW_LOGIN, this.showLogin, this)
        izx.on(Constants.EventName.GAME_HOT_UPDATE_PROGRESS, this.updateProgress, this)
        izx.on(Constants.EventName.GAME_HOT_UPDATE_FAILED, this.updateProgress, this)
        izx.on(Constants.EventName.GAME_HOT_UPDATE_SUCCESS, this.updateProgress, this)

        this._progressDtMax = 1 / LoadingMsgType.TotalType
        for (let i = 0; i < LoadingMsgType.TotalType; i++) {
            this._progressData[i] = 0
        }
    }

    start() {
        this.initButton()
    }

    initButton() {
        izx.bindButtonClick("login/guestLogin", this.node, () => {
            this.checkGuestAccount()
        })
    }

    checkGuestAccount() {
        const _auth = new Auth()
        _auth.guestLogin()
    }

    onOpen() {
        izx.log("loading scene on open scene")   
    }

    updateProgress(msg: LoadingMsg) {
        izx.log("==updateProgress==", msg.type, msg.abs || ",", msg.inc || ",", msg.info || ",", msg.error || ",", this._progressData)
        if (typeof(msg.type) == "undefined")
            return

        if (!this._progress) {
            this._progress = cc.find("progress", this.node).getComponent(cc.ProgressBar)
        }

        if (this._progress.progress >= 1) {
            return
        }

        let cur = this._progressData[msg.type]
        if (cur < 100) {
            if (typeof(msg.abs) == "number" && msg.abs <= 100) {
                this._progressData[msg.type] = msg.abs
            } else if (typeof(msg.inc) == "number" && msg.inc <= 100) {
                this._progressData[msg.type] = this._progressData[msg.type] + msg.inc
                if (this._progressData[msg.type] > 100)
                    this._progressData[msg.type] = 100
            }
        }

        if (!this._msg) {
            this._msg = cc.find("msg", this.node).getComponent(cc.Label)
        }

        let total = 0
        this._progressData.forEach((num: number)=>total+=num)
        total /= (LoadingMsgType.TotalType * 100)

        if (typeof(msg.error) == "string" && msg.error.length > 0) {
            izx.confirmBox({
                msg: msg.error,
                title: "提示",
                btnText: "重试",
                callback: ()=>{
                    if (typeof (msg.callback) === "function") {
                        msg.callback()
                        return
                    } else {
                        // izx.emit(Constants.EventName.ACCOUNT_CHECK_ACCOUNT)
                    }
                }
            })
            // cc.find("dragon", this.node).active = false
        } else if (typeof(msg.info) == "string" && msg.info.length > 0) {
            this._msg.string = msg.info
        }
        
        izx.log("==progress==", total)
        this._progress.progress = total
        
        if (total == 1) {
            izx.log("==load complete==")
            izx.emit(Constants.EventName.GAME_LOAD_COMPLETE)
        }
    }

    showLogin() {
        this.node.getChildByName("msg").active = false
        this.node.getChildByName("progress").active = false
        this.node.getChildByName("login").active = true
    }

    onCloseScene() {

    }
}
