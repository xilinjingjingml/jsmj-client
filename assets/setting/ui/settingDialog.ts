import baseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { AudioMgr } from "../../framework/mgr/audioMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SettingDialog extends baseUI {

    @property(cc.Toggle)
    musicToggleNode: cc.Toggle = null

    @property(cc.Toggle)
    soundToggleNode: cc.Toggle = null

    onLoad() {
        let musicV = cc.sys.localStorage.getItem('soundVolume', "1.0");
        let effectsV = cc.sys.localStorage.getItem('effectVolume', "1.0"); 
        if (parseFloat(musicV) == 1.0) {
            this.musicToggleNode.isChecked = true
        } else {
            this.musicToggleNode.isChecked = false
        }
        if (parseFloat(effectsV) == 1.0) {
            this.soundToggleNode.isChecked = true
        } else {
            this.soundToggleNode.isChecked = false
        }
    }

    onOpen() {
        this.initButton()
    }

    start () {
        izx.UnBlockUI()
    }

    initButton() {
        izx.bindButtonClick("setting/backBtn", this.node, () => {
            this.pop()
        })

        izx.bindButtonClick("setting/userAgree", this.node, () => {
            izx.pushDialog("agree", "prefabs/userAgreeDialog", null, {mask:true, maskClose:true})
        })

        izx.bindButtonClick("setting/privacyAgree", this.node, () => {
            izx.pushDialog("agree", "prefabs/agreeDialog", null, {mask:true, maskClose:true})
        })
    }

    musicToggle (event) {
        if (event.isChecked) {
            AudioMgr.setMusicVolume(1.0)
        } else {
            AudioMgr.setMusicVolume(0.0)
        }
        izx.log("music:", event.isChecked)
    }

    soundToggle (event, target) {
        if (event.isChecked) {
            AudioMgr.setEffectVolume(1.0)
        } else {
            AudioMgr.setEffectVolume(0.0)
        }
        izx.log("sound:", event.isChecked)
    }
}
