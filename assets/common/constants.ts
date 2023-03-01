/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-10-21 14:43:52
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-07 19:06:33
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


    // 房间
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
