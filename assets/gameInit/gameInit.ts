import { izx } from "../framework/izx";
import Constants, { LoadingMsgType } from "../common/constants";
import { App } from "../common/common";
import Account from "../common/account"
import Servers from "../common/servers"
import Ad from "../common/ad"

// bundleName
const GAME_BUNDLE_NAME = "gameInit"

const GET_ONLINE_PRAMA = "api/mcbeam-version-api/config/get?key=jsmj"


export default class GameInit {

    static _instance = null
    static getInstance(): GameInit {
        if (!GameInit._instance) {
            GameInit._instance = new GameInit()
            GameInit._instance._init()
        }

        return GameInit._instance
    }

    start() {
        // 初始化插件
        this._initPlugins()

        // 初始化环境
        App.start()

        // 加载音频
        izx.initAudio()

        // 初始化Account
        Account.getInstance()

        // 初始化Ad
        Ad.getInstance()

        // 初始化Server
        Servers.getInstance()

        // this._initScene()
        
        // this._onGetOnlineParam()
        this._getOnlineParam()
    }

    onInitFinish() {

    }

    onDestroy() {
        izx.offByTag(this)
    }

    private _init() {
        // 注册登录完成回调
        izx.on(Constants.EventName.ACCOUNT_ON_LOGIN, this._onLogin, this)
        izx.on(Constants.EventName.GAME_CLOSE_LOADING, this._closeLoading, this)
        izx.on(Constants.EventName.GAME_LOAD_COMPLETE, this._loadComplete, this)
    }

    private _loadComplete() {
        //izx.dispatchEvent(Constants.EventName.ROOM_ENTER_GAME, {})
        izx.dispatchEvent(Constants.EventName.LOBBY_SHOW_MAIN, {})
        let gameData = izx.getData("ReconnectGame")
        if (gameData) {
            izx.dispatchEvent(Constants.EventName.ROOM_ENTER_GAME, {})
        }
    }

    private _initScene() {
        // 初始化场景
        let self = this
        izx.pushScene(GAME_BUNDLE_NAME, "prefabs/Loading", () => {
            izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, { type: LoadingMsgType.GetOnlineParam, abs: 0, info: App.tips.GAME_INIT })
            self._getOnlineParam()
        })
    }

    private _initPlugins() {
        izx.log("==plugin init==")
        // 初始化插件
        izx.pluginMgr.onInit()
    }

    private _getOnlineParam() {
        izx.log("getOnlineParam:" + izx.authUrl)
        izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, { type: LoadingMsgType.GetOnlineParam, abs: 0, info: App.tips.GAME_INIT })
        // 获取在线参数
        let self = this
        let url = izx.authUrl + GET_ONLINE_PRAMA
        //url += ("." + izx.packetName.replace(/\./g, "_"))
        izx.log("getOnlineParam:" + url)
        izx.httpGet(url, {}, (res, evt) => {
            if (res === null) {
                izx.emit(Constants.EventName.GAME_UPDATE_PROGRESS, { type: LoadingMsgType.GetOnlineParam, abs: 0, error: App.tips.GAME_ONLINE_PARAM_FAILED, callback: self._getOnlineParam.bind(self) })
                return
            }
            izx.log("getOnlineParam Data:", res)
            let response = res
            izx.setData("onlineParam", response)
            self._onGetOnlineParam(response)
        })
    }

    private _onGetOnlineParam(res?: any) {
        izx.log("==_onGetOnlineParam==")
        izx.adType = "AdsTTAds"
        // 获取在线参数 更新.1
        izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, { type: LoadingMsgType.GetOnlineParam, abs: 100, info: App.tips.GAME_LOADING })
        this._checkVersion(res)
    }

    private _checkVersion(res) {
        // 手机版本更新
        let self = this
        if (CC_JSB) {
            // if (res && izx.versionCompare(res.version, localStorage.getItem("version"))) {
                // const url = "http://192.168.20.69:8888/download/"
                // izx.hotUpdate({
                //     remoteManifestUrl: url + "project.manifest",
                //     remoteVersionUrl: url + "version.manifest",
                //     packageUrl: url
                // }, (cur: number, total: number) => {
                //     izx.dispatchEvent(Constants.EventName.GAME_HOT_UPDATE_PROGRESS, { type: LoadingMsgType.HotUpdate, abs: cur/total*100, info: `${cur}/${total}` })
                // }, (err: string) => {
                //     if (err) {
                //         izx.log("update err")
                //         izx.dispatchEvent(Constants.EventName.GAME_HOT_UPDATE_FAILED, { type: LoadingMsgType.HotUpdate, error: err })
                //         return
                //     }
                //     izx.dispatchEvent(Constants.EventName.GAME_HOT_UPDATE_SUCCESS, { type: LoadingMsgType.HotUpdate, info: App.tips.GAME_UPDATE_FINISH})
                //     izx.emit(Constants.EventName.ACCOUNT_CHECK_ACCOUNT)
                //     self._startPreload()
                // })
            // }
            // else {
                izx.dispatchEvent(Constants.EventName.GAME_HOT_UPDATE_SUCCESS, { type: LoadingMsgType.HotUpdate, abs: 100, info: App.tips.GAME_UPDATE_FINISH })
                izx.emit(Constants.EventName.ACCOUNT_CHECK_ACCOUNT)
                self._startPreload()
            // }
        }
        else if (cc.sys.WECHAT_GAME === cc.sys.platform) { // 重启微信 后面处理
            izx.dispatchEvent(Constants.EventName.GAME_HOT_UPDATE_PROGRESS, { type: LoadingMsgType.HotUpdate, abs: 100 })
            izx.emit(Constants.EventName.ACCOUNT_CHECK_ACCOUNT)
            self._startPreload()
        }
        else if (cc.sys.isBrowser) { // H5不存在更新直接进
            izx.dispatchEvent(Constants.EventName.GAME_HOT_UPDATE_PROGRESS, { type: LoadingMsgType.HotUpdate, abs: 100 })
            izx.emit(Constants.EventName.ACCOUNT_CHECK_ACCOUNT)
            self._startPreload()
        }
    }

    private _startPreload() {
        izx.log("==_startPreload==")
        izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, { type: LoadingMsgType.LoadRes, abs: 0 })
        if (izx.preloadBundle.length > 0) {
            izx.preload(izx.preloadBundle,
                (progress) => {
                    // 强制100%的刷新在完成回调函数中完成
                    if (progress == 1)
                        progress = 0.99
                    izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, { type: LoadingMsgType.LoadRes, abs: progress * 100, info: App.tips.GAME_PRELOAD })
                },
                (err, res) => {
                    // 账号处理
                    if (err) {
                        izx.log(err)
                    }
                    izx.log("succ")
                    izx.LoadBundle("scmj", ()=>{
                        izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, { type: LoadingMsgType.LoadRes, abs: 100 })
                    })
                })
        }
        else {
            izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, { type: LoadingMsgType.LoadRes, abs: 100 })
        }
    }

    private _onLogin(isSuccess, msg, callback) {
        izx.log("==_onLogin==", isSuccess)
        if (isSuccess) {
            izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, { type: LoadingMsgType.Login, abs: 100, info: App.tips.GAME_INIT_FINISH })
        } else {
            izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, { type: LoadingMsgType.Login, abs: 90, error: App.tips.GAME_LOGIN_FAILED, callback: ()=>{
                if (typeof (callback) === "function") {
                    callback()
                }
            } })
        }
    }

    private _closeLoading() {
        izx.closeScene("loading")
    }
}

// let gameStart = App.gameStart
// App.gameStart = () => {
//     gameStart()
//     GameInit.getInstance().start()
// }