import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BlockUI extends BaseUI {

    @property(cc.Label)
    msgLabel: cc.Label = null;

    timeout = -1
    msg = "正在获取数据，请稍后..."

    onLoad () {
        if (this.initParam && this.initParam.timeout) {
            this.timeout = this.initParam.timeout  
        }
        if (this.initParam && this.initParam.msg) {
            this.msg = this.initParam.msg
            this.msgLabel.string = this.msg
        }
    }

    start () {
        if (this.timeout == -1) {
            
        }else if (this.timeout > 0) {
            let self = this
            cc.tween(this.node)
            .delay(this.timeout)
            .call(() => {
                izx.popDialog(self)
            })
            .start()
        }       
    }

    onClose() {
        cc.tween(this.node).stop() 
    }

    // update (dt) {}
}
