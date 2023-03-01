import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class zhuanpanDialog extends BaseUI {

    @property(cc.Node)
    nodeZhuanpan:cc.Node = null

    nextForward:number = 0

    onOpen () {
        this.initButton()
    }

    initButton() {
        izx.bindButtonClick("zhuanpan/btnClose", this.node, () => {
            this.pop()
        })

        izx.bindButtonClick("zhuanpan/sptBtn", this.node, () => {
            this.btnClick()
        })
    }

    btnClick () {

        const clickTimes = 3
        const rounds = 10
        //停留的随机位置
        let randomAngle = Math.random() * (25) + 10//[10,35]
        let curAngle = this.nodeZhuanpan.angle
        let curIndex = Math.floor(curAngle/45)
        let remain = curAngle - curIndex * 45
        curIndex = curIndex % 8

        this.nextForward = (this.nextForward + 1) % 8
        let diff = this.getNextAngle(curIndex,this.nextForward)
        const rotateBy01 = cc.rotateBy(clickTimes, -(45-remain+randomAngle+diff))
        this.nodeZhuanpan.runAction(rotateBy01)
    }

    getNextAngle (cur: number,next: number) {
        let diff = (next - cur + 8) % 8 - 1
        diff += ((Math.floor(Math.random()*100))%2+1) * 8
         
        return diff * 45
    }
    
}
