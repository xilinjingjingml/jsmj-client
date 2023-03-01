import { AudioConfig } from "./JsmjAudioConfig";
import { scmjUtil } from "./scmjUtil";

const {ccclass, property} = cc._decorator;

export namespace JsmjAudioUtil {

	export function playMusic(name) {
		
        if (!AudioConfig.audio_sounds_table['sound'][name]) {
            return false
        }
        let audioUrl = this.addSoundPath(AudioConfig.audio_sounds_table['sound'][name])
        scmjUtil.loadRes(audioUrl, (res) => {
            if (!res) {
                izx.log(res)
            }else {
                cc.audioEngine.playMusic(res, true)
            }
        });
	}

	export function playSound(name, sex) {
		if (sex != null) {
			var sexname = name + "woman"//((sex == 1) ? 'woman' : 'man')
			if (this.ccPlaySound(sexname)) {
				return
			}
		}
		this.ccPlaySound(name)
	}
	
	export function playBackground() {
		this.playMusic('bg_music')
	}

    export function stopBackground() {
        cc.audioEngine.stopMusic()
    }
	
	export function ccPlaySound(audioName) {		
		
        if (!AudioConfig.audio_sounds_table['sound'][audioName]) {
            return false
        }
        let audioUrl = this.addSoundPath(AudioConfig.audio_sounds_table['sound'][audioName])
        scmjUtil.loadRes(audioUrl, (res) => {
            if (!res) {
                izx.log(res)
            }else {
                cc.audioEngine.playEffect(res, false)
            }
        });
        return true
    }
    
    export function addSoundPath(path) {
		return "pics/" + path
	}
}