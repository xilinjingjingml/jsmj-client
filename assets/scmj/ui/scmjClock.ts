import { izx } from "../../framework/izx";
import { SCMJ_EVENT } from "../scmjEvents";
import Scmj from "../scmj"

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameClock extends cc.Component {

    chairId = -1
    second = 0
    onLoad() {
        this.init()
        let serverChairId = Scmj.getInstance()._scmj.serverChairId
        this.chairId = serverChairId
        this.initWir(this.chairId)
        this.registerEvent()
    }

    start() {
                
    }

    registerEvent() {
        izx.on(SCMJ_EVENT.INIT_SELF_VIEW_SERVER_CHAIR_ID, this.initWir, this)
        izx.on(SCMJ_EVENT.COUNT_DOWN_NOTI, this.countDownNoti, this)
    }

    init() {
        let dir = []
        dir.push("BgEswn/East")
        dir.push("BgEswn/South")
        dir.push("BgEswn/West")
        dir.push("BgEswn/North")
        for (let index = 0; index < 4; index++) {
            this["dir_"+index] = cc.find(dir[index], this.node)
        }
        this["BgEswn"] = cc.find("BgEswn", this.node)
        this["lbl_clocktick"] = cc.find("Timer01", this.node)
        this["lbl_clocktick2"] = cc.find("Timer02", this.node)

        this.unscheduleClientTimer()
    }

    s2c(index) {
        let maxPlyNum = 4
        return (index - this.chairId + maxPlyNum) % maxPlyNum
    }
    
    c2s(index) {
        let maxPlyNum = 4
        return (this.chairId + index + maxPlyNum) % maxPlyNum
    }

    initWir(msg) {
        izx.log("==initWir==", msg)
        this.chairId = msg
        //东指向服务器的0号位
        let angle = this.s2c(0) * 90
        this["BgEswn"].angle = angle
    }

    countDownNoti(msg) {
        this.startClientTimer(msg.seconds, msg.chairID)
    }

    unscheduleClientTimer() {
        this.node.stopAllActions()
        this["lbl_clocktick"].active = true
        this["lbl_clocktick"].getComponent(cc.Label).string = '00'
        for (let i = 0; i < 4; i++) {
            this["dir_"+i].active = false
            this["dir_"+i].stopAllActions()
        }
    }

    startClientTimer(second, chairid) {
        izx.log("startClientTimer", second, chairid)
        this.unscheduleClientTimer()
        if (second <= 0) {
            return
        }

        this.second = second
        this.chairId = chairid
        this.node.active = true
        this["lbl_clocktick"].active = true

        let showDir = chairid >= -1 ? true : false
        if (showDir && chairid >= 0) {
            for (let i = 0; i < 4; i++) {
                if (i == chairid) {
                    this["dir_"+i].active = true
                    this["dir_"+i].runAction(cc.repeatForever(cc.sequence(
                        cc.fadeIn(0.5),
                        cc.fadeOut(0.5),
                    )))
                }
            }
        }

        this.scheduleRepeat(1, this.onClientTimer.bind(this))
    }

    scheduleRepeat(delay, callback, reverse?) {
        let actions = [
            cc.callFunc(callback),
            cc.delayTime(delay),
        ]
        reverse == false && actions.reverse()

        this.node.stopAllActions()
        this.node.runAction(cc.repeatForever(cc.sequence(actions)))
    }

    onClientTimer() {
        if (this.chairId == 0 && this.second <= 5) {
            //playSound('audio_clock')
        }

        this["lbl_clocktick"].getComponent(cc.Label).string = (this.second < 10 ? '0' : '') + this.second
        this.second--

        if (this.second < 0) {
            this.unscheduleClientTimer()
        }
    }

    onDestroy () {
        this.node.stopAllActions()
        for (let i = 0; i < 4; i++) {
            if (this["dir_"+i]) {
                this["dir_"+i].stopAllActions()
            }
        }
        izx.offByTag(this)
    }

}
