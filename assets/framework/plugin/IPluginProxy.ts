export enum EPluginType {
    kPluginAds = 1, //广告
    kPluginIAP = 3, //支付
    kPluginSession = 5, //登陆
    kPluginExend = 6, //扩展
}

export interface IPluginProxy {

    pluginTypes: boolean[]

    setParam: (data: any) => void
    login: (data: any) => void
    pay: (data: any) => void
    share: (data: string) => void
    showAds: (type: number) => void
    hideAds: (type: number) => void
}
