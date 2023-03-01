/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-12-14 11:37:11
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-11 13:34:52
 */
import { izx } from "../framework/izx";
import Constants, { AdPos } from "../common/constants";
import AdMode, {} from "./mode/adMode"
import { Types } from "../framework/plugin/pluginTypes"
import { AD_EVENT } from "../ad/adEvents";

const GAME_BUNDLE_NAME = "ad"

export interface AdBannerConfig {
    pluginName: string  // 插件名称
    adId: string        // 广告渠道的广告ID
}

export interface AdSpot {
    gameAdId: string    // 游戏定义的广告点ID
    adType: Types.AdType// 广告类型
    pluginName: string  // 插件名称
    adId: string        // 广告渠道的广告ID
}

export class AdConfig {
    AdBanner: AdBannerConfig = {
        pluginName: "AdsTTAds",
        adId: "945664759"
    }
    AdSpotList: Array<AdSpot> = [
        { gameAdId: "108", pluginName: "AdsTTAds", adId: "945664939", adType: Types.AdType.ADS_TYPE_REWARTVIDEO },   // 结算赢-海底捞月
        { gameAdId: "104", pluginName: "AdsTTAds", adId: "945664944", adType: Types.AdType.ADS_TYPE_REWARTVIDEO },   // 结算赢-赢钱翻倍
        { gameAdId: "105", pluginName: "AdsTTAds", adId: "945664947", adType: Types.AdType.ADS_TYPE_REWARTVIDEO },   // 结算输-本局免输
        { gameAdId: "110", pluginName: "AdsTTAds", adId: "945665141", adType: Types.AdType.ADS_TYPE_REWARTVIDEO },   // 结算输-破产补助
        { gameAdId: "111", pluginName: "AdsTTAds", adId: "945664930", adType: Types.AdType.ADS_TYPE_REWARTVIDEO },   // 转盘
        { gameAdId: "113", pluginName: "AdsTTAds", adId: "945664925", adType: Types.AdType.ADS_TYPE_REWARTVIDEO },   // 每日登录奖励
        { gameAdId: "114", pluginName: "AdsTTAds", adId: "945665139", adType: Types.AdType.ADS_TYPE_REWARTVIDEO },   // 3局游戏-幸运红包
        { gameAdId: "112", pluginName: "AdsTTAds", adId: "945664935", adType: Types.AdType.ADS_TYPE_REWARTVIDEO },   // 5局游戏-拆红包 
    ]
}

export default class Ad {
    private static _instance: Ad = null
    static getInstance(): Ad {
        izx.log("==Ad getInstance==")
        if (!Ad._instance) {
            Ad._instance = new Ad()
            izx.ad = Ad._instance
            Ad._instance._init()
        }

        return Ad._instance
    }

    curAdInfo: Array<Types.PluginAdInfo> = []
    _ad: AdMode = null
    _adConfig: AdConfig = new AdConfig

    get AdConfig() {
        return this._adConfig
    }
    set AdConfig(value: AdConfig) {
        this._adConfig = value
    }
    showBanner() {
        let bannerConfig = this._adConfig.AdBanner
        izx.pluginMgr.showAds(bannerConfig.pluginName, Types.AdType.ADS_TYPE_BANNER, {
            adWidth: "" + Math.ceil(cc.view.getFrameSize().width),
            adHeight: "" + Math.ceil(cc.view.getFrameSize().height / 4),
            adId: bannerConfig.adId,
            adType: "" + Types.AdType.ADS_TYPE_BANNER
        }) 
    }
    hideBanner() {
        izx.pluginMgr.hideAds(Types.AdType.ADS_TYPE_BANNER)
    }

    show(gameAdId: string, params: any|null) {
        let onlineMap = izx.getData("onlineParam") || {}
        let adOnline = onlineMap.ad || []
        for (let i of this._adConfig.AdSpotList) {
            if (i.gameAdId === gameAdId) {
                params = params || {}
                params["adId"] = i.adId
                params["adType"] = i.adType + ""
                params["pluginName"] = i.pluginName
                for (const iterator of adOnline) {
                    if (iterator.gameAdId == gameAdId) {
                        let gameAdInfo = iterator.gameAdInfo || []
                        let total = gameAdInfo.length
                        let ranInd = Math.floor(Math.random()*100)%(total+1)
                        if (gameAdInfo[ranInd]) {
                            params["adId"] = gameAdInfo[ranInd].adId
                            params["adType"] = gameAdInfo[ranInd].adType
                            params["pluginName"] = gameAdInfo[ranInd].pluginName
                        }
                        break
                    } 
                }
                izx.pluginMgr.showAds(params["pluginName"], params["adType"], params)
                break
            }
        }
    }
    hide(gameAdId: string) {
        for (let i of this._adConfig.AdSpotList) {
            if (i.gameAdId === gameAdId) {
                izx.pluginMgr.hideAds(i.adType)
                break
            }
        }
    }

    private _init() {
        this._ad = new AdMode()

        // 注册消息
        izx.on(Constants.EventName.AD_ORDER_INIT, this.initAd, this)
        izx.on(Constants.EventName.AD_ORDER_AWARD, this.getAdOrderAwardReq, this)
        izx.on(Constants.EventName.AD_ORDER_UPDATE_STATUS, this.updateAdOrderStatusReq, this)
        izx.on(Constants.EventName.AD_ORDER_REGEDIT_CURRENT_AD_INFO, this.regeditCurAdInfo, this)
        izx.on(Constants.EventName.AD_ORDER_UNREGEDIT_CURRENT_AD_INFO, this.unRegeditCurAdInfo, this)
        izx.on("PluginAdsCallBack", this.onAdCallback, this)

        izx.on(Constants.EventName.AD_SPOT_Xin_Shou_Hao_Li_Req, this.xinShouHaoLi, this)
        izx.on(Constants.EventName.AD_SPOT_Zhuan_Pan_Chou_Jiang_Req, this.zhuanPanChouJiang, this)
        izx.on(Constants.EventName.AD_SPOT_Deng_Lu_Jiang_Li_Req, this.dengLuJiangLi, this)
        izx.on(Constants.EventName.AD_SPOT_Deng_Lu_Jiang_Li_Get_Award_Req, this.getLoginRewardReq, this)
        izx.on(Constants.EventName.AD_SPOT_Zhuan_Pan_Get_Award_Req, this.getZhuanPanRewardReq, this)
        izx.on(Constants.EventName.AD_SPOT_Deng_Lu_Jiang_Li_Get_Daily_First_Login_Req, this.getFirstLoginRewardReq, this)

        izx.on(AD_EVENT.GET_AD_SPOT_REQ, this.GetAdSpotsReq, this)

    }

    GetAdSpotsReq (msg){
        this._ad.GetAdSpotsReq(msg)
    }

    initAd(msg) {
        this._ad.AdOrderReq(msg)
    }

    getFirstLoginRewardReq(msg) {
        this._ad.GetDailyFirstLoginReq(msg)
    }

    getZhuanPanRewardReq(msg) {
        this._ad.GetZhuanPanRewardReq(msg)
    }
    getLoginRewardReq(msg) {
        this._ad.GetLoginRewardReq(msg)
    }

    getAdOrderAwardReq(msg) {
        this._ad.GetAdOrderAwardReq(msg)
    }

    updateAdOrderStatusReq(msg) {
        this._ad.UpdateAdOrderStatusReq(msg)
    }

    regeditCurAdInfo(msg: Types.PluginAdInfo) {
        this.curAdInfo.push(msg)
    }

    unRegeditCurAdInfo(msg: Types.PluginAdInfo) {
        for (let i=0;i<this.curAdInfo.length;i++) {
            let info = this.curAdInfo[i]
            if (info.service === msg.service && info.orderId === msg.orderId) {
                this.curAdInfo.splice(i, 1)
                break
            }
        }
    }
    onAdCallback(data: Types.PluginAdResultData) {
        izx.log("==onAdCallback==", data)
        let adInfo = data.adsInfo || { service: "", orderId: ""}
        let service = adInfo.service,
            orderId = adInfo.orderId
        for (let info of this.curAdInfo) {
            if (info.service === service && info.orderId === orderId) {
                this.unRegeditCurAdInfo(info)
                this._ad.OnAdCallBackHandler(data)
                break
            }
        }
    }

    xinShouHaoLi(msg) {
        this._ad.GetXinShouHaoLiReq(msg)
    }
    zhuanPanChouJiang(msg) {
        this._ad.GetZhuanPanChouJiangReq(msg)
    }
    dengLuJiangLi(msg) {
        this._ad.DengLuJiangLiReq(msg)
    }

    getAreaInfo(id: AdPos) {
        izx.log("getAreaInfo id = ", id)
        let areas = this._ad.adRecords
        if (areas!= null && areas[id] != null) {
          return areas[id]
        }
        return null
      }
}