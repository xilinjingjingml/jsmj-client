export enum PHONE_EVENT{
    // 协议
    GET_PHONE_CONFIG_REQ = "get_phone_config_req",
    GET_PHONE_CONFIG_RSP = "get_phone_config_rsp",
    GET_PHONE_USER_LEVEL_REQ = "get_phone_user_level_req",
    GET_PHONE_USER_LEVEL_RSP = "get_phone_user_level_rsp",
    UPT_PHONE_USER_LEVEL_REQ = "upt_phone_user_level_req",
    UPT_PHONE_USER_LEVEL_RSP = "upt_phone_user_level_rsp",
    GET_PHONE_AWARDS_REQ = "get_phone_awards_req",
    GET_PHONE_AWARDS_RSP = "get_phone_awards_rsp",

    // 界面刷新
    REFRESH_BTN = "refresh_btn",

    // 中转
    WATCH_VIEDO = "watch_viedo",

    // 弹窗
    SHOW_POP = "show_pop",

    // 验证码
    SEND_CODE_SUCCESS = "send_code_success",
    SEND_CODE_FAIL = "send_code_fail",

    // 手机验证码登录
    PHONE_CODE_LOGIN_SUCCESS = "phone_code_login_success",
    PHONE_CODE_LOGIN_FAIL = "phone_code_login_fail",
}