/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-13 13:42:51
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-12-17 16:36:27
 */
export enum LackType{
  None = 0,
  Dot = 1,
  Bamboo = 2,
  Character = 3
}

export enum CardArea{
  LeftCard = 1,
  HandCard,
  DisplayCard,
  HuCard,
  CurCard
}

export enum OperatorCode {
  OP_GIVEUP=256,
  OP_MOPAI=321,
  OP_PLAY=360,
  OP_CHOW_OXX=66088,
  OP_CHOW_XOX=66120,
  OP_CHOW_XXO=66152,
  OP_PONG=65960,
  OP_KONG=65992,//                          点杠
  OP_HU_DIANPAO=66024,//                    点炮胡--别人出牌
  OP_HU_AFTER_KONG_TURN=262704,//           抢补杠胡
  OP_KONG_TURN_RECOVER_TO_PONG=262736,//    被抢杠胡，杠恢复成碰
  OP_KONG_DARK=524945,//                    暗杠
  OP_KONG_TURN=524977,//                    弯杠/补杠
  OP_HU_ZIMO=525009,//                      自摸胡
}

export enum GameModule {
  GAME_ID = "jsmj-server-game-srv",
}

export enum AdAreaId{
  QIAN_DAO = 1,
  MIAN_FEI_CHOU_JIANG,
  DI_BAO,
  JIE_SUAN,


  JIE_SUAN_WIN_HAI_DI_LAO_YUE = 108,//结算赢-海底捞月
  JIE_SUAN_WIN_YING_QIAN_FAN_BEI = 104,//结算赢-赢钱翻倍
  JIE_SUAN_LOSE_BEN_JU_MIAN_SHU = 105,//结算输-本局免输
  JIE_SUAN_LOSE_PO_CHAN_BU_ZHU = 110,//结算输-破产补助

  EXTEN_XIN_SHOU_HAO_LI = 109,//新手豪礼
  EXTEN_ZHUAN_PAN = 111,//转盘
  EXTEN_DENG_LU_EVERY_SEVEN_DAY = 113,//每日登录奖励
  GAME_COUNT_MORE_3 = 114,//3局游戏-幸运红包
  GAME_COUNT_MORE_5 = 112//5局游戏-拆红包
}

