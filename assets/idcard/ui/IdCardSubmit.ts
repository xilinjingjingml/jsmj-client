import BaseUi from "../../framework/base/baseUI";
import {utils} from "../../framework/util/utils";
import {izx} from "../../framework/izx";
const {ccclass, property} = cc._decorator;

@ccclass
export default class IdCardSubmit extends BaseUi {

    @property(cc.Label)
    nameText: cc.Label = null;

    @property(cc.Label)
    idText: cc.Label = null;

    @property(cc.EditBox)
    nameEditBox: cc.EditBox = null;

    @property(cc.EditBox)
    idEditBox: cc.EditBox = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    onPressBtnSubmit () {
        console.log('BtnSubmit clicked!');
        //检查姓名
        let name = this.nameEditBox.string
        let ret = utils.checkName(name);
        if (!ret.pass) {
            console.log(ret.tip);
            this.nameText.string = ret.tip
            //izx.dispatchEvent(PHONE_EVENT.SHOW_POP, ret.tip)
            return;
        }else {
            this.nameText.string = ""
        }
        //检查号码
        let id = this.idEditBox.string
        ret = utils.checkIdCardNo(id);
        if (!ret.pass) {
            console.log(ret.tip);
            this.idText.string = ret.tip
            //izx.dispatchEvent(PHONE_EVENT.SHOW_POP, ret.tip)
            return;
        }else {
            this.idText.string = ""
        }

        izx.popDialog(this)
        izx.pushDialog("idcard", "prefabs/IdCardAward")
    }

    onPressBtnClose () {
        izx.popDialog(this)
    }

    // update (dt) {}
}
