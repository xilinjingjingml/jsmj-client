/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-13 13:42:51
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-15 17:18:15
 */
export enum SCMJ_EVENT{
  INIT_GAME_START = "init_game_start",
  INIT_GAME_END = "init_game_end",

  CLICK_READY = "CLICK_READY",
  
  INIT_SELF_VIEW_SERVER_CHAIR_ID = "init_self_view_server_chair_id",
  ENTER_ACK = "enter_ack",
  ENTER_NOTI = "enter_noti",
  READY_REQ = "ready_req",
  READY_RSP = "ready_rsp",
  READY_NOTI = "ready_noti",
  UPDATE_USER_GOLD = "update_user_gold",
  UPDATE_USER_GOLD_CHAIR = "update_user_gold_chair",

  BEGIN_GAME_NOTI = "begin_game_not",
  SET_DEALER_NOTI = "set_dealer_not",
  SET_DEALER_NOTI_BANKER = "set_dealer_not_banker",
  SET_DEALER_NOTI_BANKER_CHAIR="set_dealer_not_banker_chairid",
  HAND_CARDS_NOTI = "hand_cards_not",
  
  CHANGE_CARD_NOTI = "change_card_not",
  COUNT_DOWN_NOTI = "count_down_not",
  OPERATE_NOTI = "operate_not",
  OPERATE_REQ = "operate_req",
  OPERATE_MENU_HIDE = "operate_menu_hide",
  OPERATE_MENU_ChiGang = "operate_menu_chigang",
  OPERATE_MENU_Ting = "operate_menu_ting",
  OPERATE_ACK = "operate_ack",
  OPERATE_FINISH = "operate_finish",
  OP_SCORE_NOTI = "op_score_not",

  COMPLETE_REQ = "complete_req",
  COMPLETE_DATA_NOTI = "complete_data_noti",

  GAME_RESULT_NOTI = "game_result_not",
  SETTLEMENT_NOTI = "settlement_noti",

  GAME_DESK_CLEAR="game_desk_clear",

  MJ_TOUCH_BEGIN="mj_touch_begin",
  MJ_TOUCH_END="mj_touch_end",
  MJ_TOUCH_MOVE="mj_touch_move",
  MJ_TOUCH_CANCEL="mj_touch_cancel",

  AUTO_REQ = "auto_req",
  AUTO_NOTI = "auto_noti",
  TUO_GUAN_DISPATCH = "tuo_guan_dispatch",

  UPDATE_USER_TUOGUAN="update_user_tuoguan"

}