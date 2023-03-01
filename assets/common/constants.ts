/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-10-21 14:43:52
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-26 13:02:50
 */
enum EventName {

    INIT_PRELOAD_BUNDLE_SUCC = "init_preload_bundle_succ",

    // 游戏初始化
    GAME_UPDATE_PROGRESS = "game_update_progress",
    GAME_HOT_UPDATE_PROGRESS = "game_hot_update_progress",
    GAME_HOT_UPDATE_FAILED = "game_update_FAILED",
    GAME_HOT_UPDATE_SUCCESS = "game_update_SUCCESS",
    GAME_CLOSE_LOADING = "game_close_loading",

    GAME_LOAD_COMPLETE = "game_load_complete",

    GAME_SHOW_LOGIN = "game_show_login",

    // // SOCKET
    // SOCKET_CONNECT = "SOCKET_CONNECT",
    // SOCKET_RECONNECT = "SOCKET_RECONNECT",
    // SOCKET_CLOSE = "SOCKET_CLOSE",
    // SOCKET_DISCONNECT = "SOCKET_DISCONNECT",    

    // 账号
    ACCOUNT_CHECK_ACCOUNT = "account_check_account",
    ACCOUNT_WEB_AUTH = "account_web_auth",
    ACCOUNT_ON_LOGIN = "account_on_login",

    // 大厅
    LOBBY_SHOW_MAIN = "lobby_show_main",
    LOBBY_CLOSE_MAIN= "lobby_close_main",
    GAME_LOBBY_SHOW_MAIN= "game_lobby_shw_main",

    //游戏
    GAME_SHOW_MAIN = "game_show_main",
    GAME_CLOSE_MAIN = "game_close_main",

    // 通用
    COMMON_DIALOG = "common_dialog",
    COMMON_ERR_INFO = "common_err_info",
    QUICK_START_GAME = "quick_start_game",
    NO_FIT_SERVER = "no_fit_server",
    UPDATE_BET = "update_bet",
    DEAL_WITH_MONEY = "deal_with_money",

    // 房间
    ROOM_ENTER_FROM_LOBBY = "room_enter_from_lobby",

    ROOM_READY_TO_GAME = "room_ready_to_game",
    ROOM_READY_SUCC = "room_ready_succ",
    ROOM_CANCEL_GAME = "room_cancel_game",
    ROOM_JOIN_NOTIFY = "room_join_notify",
    ROOM_ENTER_REQ = "room_enter_req",
    ROOM_ENTER_GAME = "room_enter_game",
    ROOM_ENTER_NOTI = "room_enter_noti",
    ROOM_EXIT_REQ = "room_exit_req",
    ROOM_EXIT_GAME = "room_exit_game",
    ROOM_EXIT_NOTI = "room_exit_noti",

    ROOM_LIST_REQ = "room_list_req",
    ROOM_LIST_RSP = "room_list_rsp",

    // 服务器列表相关
    SERVER_LIST_REQ = "server_list_req",
    SERVER_LIST_RSP = "server_list_rsp",
    SERVER_UPDATE = "server_update",

    // ad
    AD_ORDER_AWARD = "ad_order_award",
    AD_ORDER_UPDATE_STATUS = "ad_order_update_status",
    AD_ORDER_INIT = "ad_order_init",
    AD_ORDER_NOTI = "add_order_noti",
    GET_AD_ORDER_AWARD_ACK = "get_ad_order_award_ack",
    UPDATE_AD_ORDER_STATUS_ACK = "update_ad_order_status_ack",

    AD_ORDER_NOTI_MSG = "ad_order_noti_msg",
    AD_ORDER_REGEDIT_CURRENT_AD_INFO = "ad_order_regedit_current_ad_info",
    AD_ORDER_UNREGEDIT_CURRENT_AD_INFO = "ad_order_unregedit_current_ad_info",
    AD_ORDER_CURRENT_AD_CALLBACK_INFO = "ad_order_current_ad_callback_info",

    AD_SPOT_Xin_Shou_Hao_Li_Req = "ad_spot_xin_shou_hao_li_req",
    AD_SPOT_Xin_Shou_Hao_Li_Ack = "ad_spot_xin_shou_hao_li_ack",

    AD_SPOT_Zhuan_Pan_Chou_Jiang_Req = "ad_spot_zhuan_pan_chou_jiang_req",
    AD_SPOT_Zhuan_Pan_Chou_Jiang_Ack = "ad_spot_zhuan_pan_chou_jiang_ack",

    AD_SPOT_Deng_Lu_Jiang_Li_Req = "ad_spot_deng_lu_jiang_li_req",
    AD_SPOT_Deng_Lu_Jiang_Li_Ack = "ad_spot_deng_lu_jiang_li_ack",

    AD_SPOT_HAI_DI_LAO_YUE = "ad_spot_hai_di_lao_yue",
    AD_SPOT_Ying_Qian_Fan_Bei = "ad_spot_ying_qian_fan_bei",
    AD_SPOT_Dui_Ju_Mian_Shu = "ad_spot_dui_ju_mian_shu",
    AD_SPOT_Po_Chan_Bu_Zhu = "ad_spot_po_chan_bu_zhu",

    AD_SPOT_Deng_Lu_Jiang_Li_Get_Award_Req = "ad_spot_deng_lu_jiang_li_get_award_req",
    AD_SPOT_Deng_Lu_Jiang_Li_Get_Daily_First_Login_Req = "ad_spot_deng_lu_jiang_li_get_daily_first_login_req",
    AD_SPOT_Deng_Lu_Jiang_Li_Get_Daily_First_Login_Ack = "ad_spot_deng_lu_jiang_li_get_daily_first_login_ack",
    
    AD_SPOT_Zhuan_Pan_Get_Award_Req = "ad_spot_zhuan_pan_get_award_req",
    AD_SPOT_Zhuan_Pan_Get_Award_Ack = "ad_spot_zhuan_pan_get_award_ack",

    Get_Chai_Hong_Bao_Req = "get_chai_hong_bao_req",
    Get_Chai_Hong_Bao_Ack = "get_chai_hong_bao_ack",
  
    Game_Hong_Bao_Received = "game_hong_bao_received",
    Game_Hong_Bao_Dispatch = "game_hong_bao_dispatch",

    BACKGROUND = "on_background",
    FOREGROUND = "on_foreground",

    // Vip
    VIP_SHOW_MAIN = "vip_show_main",
    SEND_VIP_SHOW_MAIN = "send_vip_show_main",
 
    PRE_LOAD_SCMJ_PIC = "PreLoadScmjPic",
    BLOCK_UI = "blockUI",
    UN_BLOCK_UI = "unBlockUI",
    SHOW_AWARDS = "showAwards",
    SHOW_TIPS = "showTips",
    SHOW_SMALL_TIPS = "showSmallTips",
    SHOW_KEFU = "showKefu",
    SHOW_SETTING = "showSetting",
    SHOW_RULE = "showRule",
    DRAW_ICON_BY_ID = "drawIconById",


    // 签到
    SIGN_SHOW_MAIN = "sign_show_main",

    // 个人信息
    PERSONAL_SHOW_MAIN = "personal_show_main",
    GET_ITEM_NUM_REQ = "get_item_num_req",
    GET_ITEM_NUM_RSP = "get_item_num_rsp",

    // 活动
    ACTIVITY_SHOW_MAIN = "activity_show_main",
    ACTIVITY_SHOW_BCS = "activity_show_bcs",

    // 手机登录
    PHONE_SHOW_MAIN = "phone_show_main",

    // 商城
    SHOP_SHOW_MAIN = "shop_show_main",

    // 救济金
    DISP_BROKEN_RELIEF_DIALOG = "disp_broken_relief_dialog",
    GET_RELIEF_INFO_REQ = "get_relief_info_req",
    UPT_RELIEF_AD_STATE_REQ = "upt_relief_ad_state_req",
    GET_RELIEF_AWARDS_REQ = "get_relief_awards_req",

    REFRESH_ITEM_JINBI = "refresh_item_jinbi", // 刷新金币
    REFRESH_ITEM_DIAMOND = "refresh_item_diamond", // 刷新钻石
    REFRESH_ITEM_VIP_EXP = "refresh_item_vip_exp", // 刷新vip经验
    REFRESH_ITEM_LEVEL_EXP = "refresh_item_level_exp", // 刷新level经验
    REFRESH_ITEM_LEVEL = "refresh_item_level", // 刷新level等级
    REFRESH_ITEM_VIP = "refresh_item_vip", // 刷新vip等级
    REFRESH_ITEM_HEAD = "refresh_item_head", // 刷新vip等级
    REFRESH_ITEM_HEADFRAME = "refresh_item_headframe", // 刷新vip等级

    // 任务
    TASK_SHOW_MAIN = "task_show_main",

}

export enum LoadingMsgType {
    GetOnlineParam,
    HotUpdate,
    LoadRes,
    Login,
    // ReconnectGame,

    
    TotalType,
}

export default class Constants {
    public static EventName = EventName
}

export enum COMMON_CONSTANT{
    ITEM_JINBI = 0,         // 金币
    ITEM_DIAMOND = 1001,    // 钻石
    ITEM_VIP_EXP = 1002,    // vip经验
    ITEM_LEVEL_EXP = 1003,  // level经验
    ITEM_LEVEL = 1004,      // level
    ITEM_HEAD = 1005,       // 头像
    ITEM_HEAD_FRAME = 1006, // 头像框
	ITEM_VIP = 1007,    	// vip
	ITEM_ACTIV_VALUE = 1008,// 活跃值
}

export enum AdPlugin {
    AdsTTAds = 1, // 穿山甲广告
    AdsQQAds,    // 腾讯广告
    AdsWechat,    // 微信广告 
}

export enum AdPos {
    Shop = 1,
    SignDouble = 2,
    Signreplenish = 3,
    NewerGift = 4,
    Vip = 5,
    Wheel = 6,
    ChangeStartGame = 7,
    LoseFree = 8,
    HaiDiLaoYue = 9,
    BrokenRelief = 10,
    LackMoney = 11,
    BaiCaiShen = 12,
}

export enum AdState {
    OrderInit,     // 初始化
    OrderCancel,   // 中途取消广告
    OrderFinish,   // 已看完广告
    OrderComplete, // 已领奖
  }
  