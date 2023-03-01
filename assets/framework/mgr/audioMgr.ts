import { LogMgr } from "./logMgr"

let _soundVolume: number = 0
let _effectVolume: number = 0


export namespace AudioMgr {
    export function setMusicVolume(value: number) {
        cc.audioEngine.setMusicVolume(_soundVolume)
        localStorage.setItem("soundVolume", value.toString())
    }

    export function getMusicVolume() : number {
        return _soundVolume
    }

    export function setEffectVolume(value: number) {
        cc.audioEngine.setMusicVolume(_effectVolume)
        localStorage.setItem("effectVolume", value.toString())
    }

    export function getEffectVolume() : number {
        return _effectVolume
    }

    export function playMusic(name: string) {
        cc.resources.load(name, cc.AudioClip, (err, res: cc.AudioClip) => {
            if (err) {
                LogMgr.info(name + " music not exists!")
                return 
            }

            cc.audioEngine.playMusic(res, true) 
        })
    }

    export function playEffect(name: string, loop?: boolean | Function, cb?: Function) {
        if (typeof loop === "function") {
            cb = loop
            loop = null
        }
        cc.resources.load(name, cc.AudioClip, (err, res: cc.AudioClip) => {
            if (err) {
                LogMgr.info(name + " music not exists!")
                return 
            }

            if (typeof loop !== "boolean") {
                loop = false
            }

            let id = cc.audioEngine.playEffect(res, loop)
            if (cb) {
                cc.audioEngine.setFinishCallback(id, cb);
            }
        })
    }

    export function init() {
        LogMgr.log("==audio init==")
        _soundVolume = parseFloat(localStorage.getItem("soundVolume")) | 1
        _effectVolume = parseFloat(localStorage.getItem("effectVolume")) | 1

        cc.audioEngine.setMusicVolume(_soundVolume)
        cc.audioEngine.setEffectsVolume(_effectVolume)
    }
}

// AudioMgr.init()
