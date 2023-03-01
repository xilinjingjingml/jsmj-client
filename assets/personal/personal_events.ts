export enum PERSONAL_EVENT{
    GET_PERSONAL_PROGRESS_REQ = "get_personal_progress_req",
    GET_PERSONAL_PROGRESS_RSP = "get_personal_progress_rsp",
    GET_PERSONAL_AWARD_REQ = "get_personal_award_req",
    GET_PERSONAL_AWARD_RSP = "get_personal_award_rsp",
    UPDATE_HEAD_REQ = "update_head_req",
    UPDATE_HEAD_FRAME_REQ = "update_head_frame_req",

    // 今日未签到
    AWARD_PERSONAL = "award_personal",
    // 今日已签到
    AWARD_PERSONALED = "award_personaled",

    // tab页切换
    SWITCH_TAB = "switch_tab",

    // 显示荣誉详情
    SHOW_HONOR_INFO = "show_honor_info",

    // 修改头像
    SHOW_EDIT_HEAD = "show_edit_head"
}