/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2021-01-07 19:28:34
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-11 11:32:32
 */
export namespace Types {
    export interface PluginAdInfo {
        service: string
        orderId: string
    }
    export interface PluginAdResultData {
        AdsResultCode: number
        msg: string
        adsInfo: PluginAdInfo
    }
    export enum PluginAdResultCode {
        RESULT_CODE_INTER_SUCCEES = 10,				//插屏广告播放成功
        RESULT_CODE_INTER_FAIL = 11,				//插屏广告播放失败
        RESULT_CODE_REWARTVIDEO_SUCCEES = 12,		//激励视频广告播放成功
        RESULT_CODE_REWARTVIDEO_FAIL = 13,			//激励视频广告播放失败
        RESULT_CODE_BANNER_SUCCESS = 14,			//banner广告播放成功
        RESULT_CODE_BANNER_FAIL = 15,				//banner广告播放失败
        RESULT_CODE_REWARTVIDEO_LOAD_FAIL = 16,		//激励视频广告LOAD失败
        RESULT_CODE_REWARTVIDEO_LOAD_SUCCESS = 17,	//激励视频广告LOAD成功
        RESULT_CODE_INTER_CLOSE = 18,				//插屏广告关闭
        RESULT_CODE_NATIVE_SUCCESS = 19,			//原生信息流广告播放成功
        RESULT_CODE_NATIVE_FAIL = 20,				//原生信息流广告播放失败
        RESULT_CODE_NATIVE_CLOSE = 21,				//原生信息流广告关闭
    }
    export enum AdType {
        ADS_TYPE_BANNER = 0,
        ADS_TYPE_FULL_SCREEN = 1,
        ADS_TYPE_START = 2,
        ADS_TYPE_INTER = 3,
        ADS_TYPE_REWARTVIDEO = 4,
        ADS_TYPE_NATIVE = 5,
    }
}