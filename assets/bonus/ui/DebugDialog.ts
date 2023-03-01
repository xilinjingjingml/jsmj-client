import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DebugDialog extends BaseUI {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    onPressShowXinShouHaoLi () {
        izx.pushDialog("bonus", "prefabs/xinshouhaoliDialog")
    }
    onPressShowHaiDiLaoYue () {
        izx.pushDialog("scmj", "prefabs/haidilaoyueDialog")
    }
    onPressShowYinQianFanBei () {
        izx.pushDialog("bonus", "prefabs/fbhbDialog")
    }
    onPressShowBenJuMianShu () {
        izx.pushDialog("bonus", "prefabs/sqmgxDialog")
    }
    onPressShowPoChanBuZhu () {
        izx.pushDialog("bonus", "prefabs/pcbzDialog")
    }
    onPressShowZhuanPanChouJiang () {
        izx.pushDialog("zhuanpan", "prefabs/zhuanpanDialog")
    }
    onPressShowChaiHongBao () {
        izx.pushDialog("bonus", "prefabs/djdlDialog")
    }
    onPressShowLeiJiDengLu() {
        izx.pushDialog("qiandao","prefabs/qiandaoDialog")
    }
    onPressShowXinYunHongBao() {
        izx.pushDialog("bonus","prefabs/gxfcDialog")
        //izx.pushDialog("tips","prefabs/tipsDialog",null, {"initParam":{tips:"确定离开吗", callback:()=>{izx.pushDialog("qiandao","prefabs/qiandaoDialog")}}})
    }

    onPressClose() {
        izx.popDialog(this)
    }
}
