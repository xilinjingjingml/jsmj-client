/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-02 10:40:56
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-02-01 09:58:30
 */
import { EventMgr } from "./mgr/eventMgr";
import { LogMgr } from "./mgr/logMgr";
import { AudioMgr } from "./mgr/audioMgr";
import { UiMgr } from "./mgr/uiMgr";
import { Jsons } from "./util/jsons";
import { URLParam } from "./util/urlParam";
import { HttpMgr } from "./net/httpMgr";
import { GateMgr } from "./net/gateMgr";
import { DataMgr } from "./mgr/dataMgr";
import { HotUpdate } from "./util/hotUpdate";
import { IPluginProxyWrapper } from "./plugin/IPluginProxyWrapper";
import { Utils } from "./util/utils";
import { PluginMgr, EPlatformEvent } from "./plugin/pluginMgr";
import { ProgressBar } from "./util/progressBar";
import { Items } from "./base/item";
import User from "./base/user";
import { FsmMgr } from "./mgr/fsmMgr";
import { Button } from "./util/button";
import Servers from "../common/servers";
import RoomMode from "../common/mode/roomMode";
import { Types } from "../framework/plugin/pluginTypes"
import Ad from "../common/ad"

const enum ENV {
    OFFICIAL_ENV,
    MIRROR_ENV,
    TEST_ENV,
}

export interface IBundle {
    name: string,
    err: Error,
    bundle: cc.AssetManager.Bundle
}

export interface ConfirmBoxOpt {
    title: string
    msg: string
    btnText: string
    btnCanelText: string
    closeCallBack: Function
    callback: Function
}

export interface BlockUIOpt {
    timeout: number
    msg: string
}

export namespace izx {
    // env
    export const OFFICIAL_ENV = ENV.OFFICIAL_ENV
    export const MIRROR_ENV = ENV.MIRROR_ENV
    export const TEST_ENV = ENV.TEST_ENV

    // 当前环境
    export let curEnv = OFFICIAL_ENV

    // 当前PN
    export let mid: string = ""
    export let packetName: string = ""
    export let imei: string = ""
    export let device: string = ""
    
    export enum Orientation {
        Unknown,
        Portrait,
        PortraitUpsideDown,
        LandscapeLeft,
        Landscape = 3,
        LandscapeRight,
        AutoRotation
    }

    export let DEFAULT_ORIENTATION: Orientation = Orientation.Landscape

    // 游戏名称
    export let gameName: string = ""

    // http和socket地址 通过外部注入
    export let httpUrl = ""
    export let socketUrl = ""
    export let authUrl = ""

    // SOCKET
    export let SOCKET_CONNECT = "SOCKET_CONNECT"
    export let SOCKET_FAILED = "SOCKET_FAILED"
    export let SOCKET_RECONNECT = "SOCKET_RECONNECT"
    export let SOCKET_CLOSE = "SOCKET_CLOSE"
    export let SOCKET_DISCONNECT = "SOCKET_DISCONNECT"

    // event
    export let on = EventMgr.on
    export let once = EventMgr.once
    export let off = EventMgr.off
    export let offByTag = EventMgr.offByTag
    export let dispatchEvent = EventMgr.dispatchEvent
    export let emit = EventMgr.dispatchEvent

    // log
    export let log = LogMgr.log
    export let logI = LogMgr.info
    export let logW = LogMgr.warn
    export let logE = LogMgr.error

    // audioMgr
    export let initAudio = AudioMgr.init
    export let setMusicVol = AudioMgr.setMusicVolume
    export let getMusicVol = AudioMgr.getMusicVolume
    export let setEffectVol = AudioMgr.setEffectVolume
    export let getEffectVol = AudioMgr.getEffectVolume
    export let playMusic = AudioMgr.playMusic
    export let playEffect = AudioMgr.playEffect
    export let audioMgr = AudioMgr


    // uiMgr
    export let preload = UiMgr.preLoad
    // export let popScene = UiMgr.popScene
    export let closeScene = UiMgr.closeScene

    export let pushScene = UiMgr.PushScene
    export let replaceScene = UiMgr.ReplaceScene
    export let showScene = UiMgr.ShowScene
    export let popScene = UiMgr.PopScene
    export let pushDialog = UiMgr.PushDialog
    export let popDialog = UiMgr.PopDialog
    export let loadPic = UiMgr.loadPic


    // dataMgr
    export let setData = DataMgr.setData
    export let getData = DataMgr.getData
    export let feed = DataMgr.feed
    export let dataMgr = DataMgr


    // pluginMgr
    export let pluginMgr = PluginMgr
    export let pluginEPlatformEvent = EPlatformEvent
    export let pluginEAdsType = Types.AdType
    export let pluginEAdsResult = Types.PluginAdResultCode

    // machineMgr
    export let createFsm = FsmMgr.createFsm
    export let getFsm = FsmMgr.getFsm
    
    // http
    export let httpGet = HttpMgr.get
    export let httpPost = HttpMgr.post

    // socket
    export let login = GateMgr.login
    export let close = GateMgr.close
    export let notify = GateMgr.notify
    export let request = GateMgr.request
    export let setProto = GateMgr.setProto
    export let unsetProto = GateMgr.unsetProto  
    export let setConnected = GateMgr.setConnected 

    // hotupdate
    export let checkUpdate = HotUpdate.checkUpdate
    export let hotUpdate = HotUpdate.hotUpdate

    // plugins
    export let pluginWrapper:IPluginProxyWrapper = null

    // url param
    export let urlParams = URLParam.parseSearch()

    // preload prefab
    export let preloadBundle: string[] = []

    // util
    export let isJson = Jsons.isJSON
    export let versionCompare = Utils.versionCompare
    export let getMoneyformat = Utils.getMoneyformat
    export let utils = Utils

    // compUtil
    export let setProgressValue = ProgressBar.setProgress
    export let bindButtonClick = Button.bindButtonClick
    

    // 基本数据
    export let user = User
    export let item = Items

    export let roomMode: RoomMode = null
    export let servers: Servers = null

    export let adType: string = null
    export let ad: Ad = null

    
    export let confirmBox = (params: ConfirmBoxOpt | {msg: string}) => {
        pushDialog("gameInit", "prefabs/ConfirmBox", null, { initParam: params})
    }

    export let StartBlockUI = (params : (BlockUIOpt|any)) => {
        UiMgr.PushDialog("gameInit", "prefabs/BlockUI", null, { initParam: params })
    }

    export let StopBlockUI = () => {
        UiMgr.PopDialog("gameInit", "prefabs/BlockUI")
    }
    
    let timeOut :number
    export let BlockUI = (params : (BlockUIOpt|any)) => {
        let msg = params.msg || "正在获取数据，请稍后..."
        let timeout = params.timeout || 120
        let blockUIRoot = cc.find("BlockUI", cc.director.getScene())

        let parentNode = cc.find("UI", blockUIRoot)
        let msgNode = cc.find("UI/sptTips/msg", blockUIRoot)
        parentNode.active = true
        msgNode.getComponent(cc.Label).string = msg

        timeOut = setTimeout(() => {
            parentNode.active = false
        }, timeout * 1000);
    }

    export let UnBlockUI = () => {
        let blockUIRoot = cc.find("BlockUI", cc.director.getScene())
        let parentNode = cc.find("UI", blockUIRoot)
        parentNode.active = false
        clearTimeout(timeOut)
    }

    export enum LoadBundleEvent {
        LoadBundleProgress = "LoadBundleProgress",
        LoadBundleFinish = "LoadBundleFinish",
        LoadBundleFail = "LoadBundleFail",
    }
    export let LoadBundle = (name: string, callback?: Function) => {
        let b = cc.assetManager.getBundle(name)
        if (b == null) {
            LogMgr.info("==LoadBundle==", name)
            let promise = new Promise((resolve, reject) => {
                cc.assetManager.loadBundle(name, (err, bundle) => {
                    if (err) {
                        LogMgr.error("LoadBundle: [" + name + "] Error: " + err)
                        reject({
                            err: err
                        })
                    } else {
                        LogMgr.info("LoadBundle: [" + name + "] Success!")
                        resolve({
                            name: name,
                            err: err,
                            bundle: bundle
                        })
                    }
                })
            })
            promise.then((ret: IBundle) => {
                UiMgr.PushScene(ret.name, "main", callback, {bundle: true})
            }).catch((ret: IBundle) => { 
                callback && callback(ret)
            })
        } else {
            LogMgr.info("==Bundle already load==", name)
            UiMgr.PushScene(name, "main", callback, { bundle: true })
        }
    }
}