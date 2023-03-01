/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-02 10:40:56
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-02-01 09:30:04
 */
import { izx } from "../framework/izx";
import Constants from "../common/constants";
import CommonMode from "./mode/commonMode";

const GAME_BUNDLE_NAME = "common"

export const HTTP_URL = {
    [izx.OFFICIAL_ENV]: "http://jsmj.mcbeam.pro/",
    [izx.MIRROR_ENV]: "",
    [izx.TEST_ENV]: "https://jsmj.mcbeam.cc/",
}

export const AUTH_URL = {
    [izx.OFFICIAL_ENV]: "https://mcbeam.mcbeam.pro/",
    [izx.MIRROR_ENV]: "",
    [izx.TEST_ENV]: "https://mcbeam.mcbeam.cc/"
  }

export const SOCKET_URL = {
    [izx.OFFICIAL_ENV]: "jsmj.mcbeam.pro/websocket",
    [izx.MIRROR_ENV]: "",
    [izx.TEST_ENV]: "jsmj.mcbeam.cc/websocket",
}



export namespace App {
    let _common: CommonMode = new CommonMode()
    export enum tips {
        GAME_INIT = "正在获取服务器信息",
        GAME_ONLINE_PARAM_FAILED = "获取服务器信息失败",
        GAME_ENV = "初始化环境",
        GAME_INIT_RES = "初始化资源",
        GAME_ACCOUNT = "初始化账号信息",
        GAME_LOAD_RES = "加载资源",

        GAME_LOADING = "获取更新信息",
        GAME_UPDATE = "正在更新",
        GAME_UPDATE_FINISH = "更新完成",
        GAME_PRELOAD = "加载资源",
        GAME_LOGIN = "获取用户信息",
        GAME_INIT_FINISH = "已经为您准备好牌局",
        GAME_LOGIN_FAILED = "登录失败"
    }

    function init() {
        izx.curEnv = izx.urlParams["env"] === "t" ? izx.TEST_ENV : parseInt(localStorage.getItem("GAME_ENV")) || izx.OFFICIAL_ENV
        izx.log("==init==", izx.curEnv, cc.sys.isNative)

        if (CC_JSB) {
            
        } else {
            izx.imei = izx.urlParams["imei"] || localStorage.getItem("IMEI") || (("" + Math.random() * 100000).replace(".", ""))
            localStorage.setItem("IMEI", izx.imei)

            izx.packetName = izx.urlParams["pn"] || izx.packetName
            izx.device = izx.urlParams["device"] || localStorage.getItem("device") || (("" + Math.random() * 100000).replace(".", ""))
            localStorage.setItem("device", izx.device)
        }
        
        izx.log("==imei==device==mid==pn==", izx.imei, izx.device, izx.mid, izx.packetName)
        
        izx.gameName = "zxmj"

        izx.httpUrl = izx.urlParams["hs"] || HTTP_URL[izx.curEnv]
        izx.socketUrl = izx.urlParams["ws"] || SOCKET_URL[izx.curEnv]
        izx.authUrl = izx.urlParams["as"] || AUTH_URL[izx.curEnv]
    
        izx.preloadBundle.push("scmj")
        izx.preloadBundle.push("lobby")
        izx.preloadBundle.push("vip")
        izx.preloadBundle.push("unires")
    }

    export function start() {
        init()
        _common.load()
    }

    export function gameStart() {
        izx.log("gameStart")
    }
}



