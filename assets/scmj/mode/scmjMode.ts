/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-13 13:42:51
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-27 15:12:15
 */
import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import { SCMJ_EVENT } from "../scmjEvents"
import { GameModule, OperatorCode } from "../scmjConstants"
import proto_mj = require("../protos/proto_mj")
import mahjong_base = require("../protos/mahjong_base")
import adOrder = require("../../common/protos/ad-order")
import Scmj from "../scmj"
import mjAd = require("../protos/mj-ad") 
import Constants from "../../common/constants";


export default class ScmjMode extends BaseMode {

	//自己的椅子号
	serverChairId = 0
	//自己下家对家上家信息
	mapPlayerData = []
	//完整数据包
	completeData = null

	//显示红包弹框
	_isShowGameResultHongbao = false
	hongbaoCacheArr = []

	_isShowGameResultScene = false

	// 是否自动准备
	needAutoReady: boolean = false

	constructor() {
		super()
		this.autoRegHander()
		this.load()
	}

	//生产
	onHongBaoReceived (msg) {
		izx.log("onHongBaoReceived", this.hongbaoCacheArr.length, this._isShowGameResultHongbao)
		let isFind = false
		for (let index = this.hongbaoCacheArr.length - 1; index > 0 ; index--) {
			const element = this.hongbaoCacheArr[index];
			if (element.AdAreaId == 111) {
				isFind = true
				izx.log("onHongBaoReceived","@111")
				return
			}
		}
		this.hongbaoCacheArr.push(msg)
		if (this._isShowGameResultHongbao === false) {
			if (this.hongbaoCacheArr.length > 0) {
				let hongbaoItem = this.hongbaoCacheArr[0]
				if (hongbaoItem) {
					izx.log("izx.StartBlockUI")
					//izx.StartBlockUI({timeout:300})
					
					cc.tween(this).delay(3).call(() => {
						izx.BlockUI({timeout:3})
						izx.pushDialog(hongbaoItem.boundleName, hongbaoItem.boundlePath, hongbaoItem.callBack, hongbaoItem.initArgs)
					}).start()					
				}
			}
			this._isShowGameResultHongbao = true
		}
	}

	//消费
	onHongBaoDispatch (msg) {
		izx.log("onHongBaoDispatch", this.hongbaoCacheArr.length)
		izx.UnBlockUI()
		if (this.hongbaoCacheArr.length > 0) {
			let hongbaoItem = this.hongbaoCacheArr[0]
			if (hongbaoItem) {
				this.hongbaoCacheArr.splice(0,1)
			}
			hongbaoItem = this.hongbaoCacheArr[0]
			if (hongbaoItem) {
				izx.BlockUI({timeout:3})
				izx.pushDialog(hongbaoItem.boundleName, hongbaoItem.boundlePath, hongbaoItem.callBack, hongbaoItem.initArgs)
			} else {
				this._isShowGameResultHongbao = false
			}
		} else {
			this._isShowGameResultHongbao = false
		}
		if (this._isShowGameResultHongbao == false) {
			izx.log("izx.StopBlockUI")
			//izx.StopBlockUI()
		}
	}

	onPlayerExit(msg) {
		for (let i=0;i<this.mapPlayerData.length;i++) {
			if (this.mapPlayerData[i].data.uid === msg.uid) {
				this.mapPlayerData.splice(i, 1)
				break
			}
		}
	}

	load() {
		this.autoRegHander()
		izx.setProto("jsmj", proto_mj)
		izx.setProto("mahjong_base", mahjong_base)
		izx.setProto("ad", adOrder)
		izx.setProto("mjAd", mjAd)
		
		izx.on(SCMJ_EVENT.INIT_GAME_START, this.onGameOpen, this)
		
		izx.on(Constants.EventName.ROOM_EXIT_NOTI, this.onPlayerExit, this)
		izx.on(Constants.EventName.Get_Chai_Hong_Bao_Req, this.GetChaiHongBaoReq, this)
		izx.on(Constants.EventName.Game_Hong_Bao_Received, this.onHongBaoReceived, this)
		izx.on(Constants.EventName.Game_Hong_Bao_Dispatch, this.onHongBaoDispatch, this)
	}

	unLoad() {
		izx.unsetProto("jsmj")
		izx.unsetProto("mahjong_base")
		// izx.unsetProto("ad")
		// izx.unsetProto("mjAd")

		izx.offByTag(this)
	}

	GetChaiHongBaoReq(msg) {
		izx.notify(GameModule.GAME_ID + ".Ad.ChaiHongBao", "GetChaiHongBaoReq", {
			uid: izx.user.uid
		})
	}
	GetChaiHongBaoAckHandler(ack) {
		ack = ack.packet
		izx.log(ack)
		izx.dispatchEvent(Constants.EventName.Get_Chai_Hong_Bao_Ack, ack)
	}
	EnterAckHandler(ack) {
		ack = ack.packet
		izx.log(ack)
		let isFind = false
		if (ack.ret == 0) {
			this.mapPlayerData = []
			ack.items.forEach(item => {
				if (item.data.uid == izx.user.uid) {
					isFind = true
					this.serverChairId = item.chairId
					return
				}
			});
			izx.log("==EnterAckHandler isFind==", isFind)
			ack.items.forEach(item => {
				this.mapPlayerData.push(item)
			});
			izx.dispatchEvent(SCMJ_EVENT.INIT_SELF_VIEW_SERVER_CHAIR_ID, this.serverChairId)
			izx.dispatchEvent(SCMJ_EVENT.ENTER_ACK, ack)

			if (this.needAutoReady) {
				izx.dispatchEvent(SCMJ_EVENT.READY_REQ, { isReady: true })
			}
		} else {

		}
	}

	EnterNotiHandler(noti) {
		izx.log(noti)
		noti = noti.packet


		let len = this.mapPlayerData.length
		for (let i = 0; i < len; i++) {
			const item = this.mapPlayerData[i]
			if (item && item.data.uid == noti.item.data.uid) {
				this.mapPlayerData.splice(i, 1)
				break
			}
		}
		this.mapPlayerData.push(noti.item)
		izx.dispatchEvent(SCMJ_EVENT.ENTER_NOTI, noti.item)
	}

	onGameOpen() {
		izx.dispatchEvent(SCMJ_EVENT.INIT_GAME_END, {
			serverChairId: this.serverChairId,
			mapPlayerData: this.mapPlayerData,
		})
	}

	ReadyReq(msg) {
		izx.notify(GameModule.GAME_ID + ".Mahjong.Ready", "ReadyReq", {
			isReady: msg.isReady
		})
	}

	ReadyRspHandler(rsp) {
		rsp = rsp.packet
		izx.log(rsp)
		izx.dispatchEvent(SCMJ_EVENT.READY_RSP, rsp)
	}

	ReadyNotHandler(noti) {
		izx.log(noti)
		noti = noti.packet
		izx.dispatchEvent(SCMJ_EVENT.READY_NOTI, noti)
	}

	BeginGameNotHandler(msg) {
		msg = msg.packet
		izx.log(msg)
		izx.dispatchEvent(SCMJ_EVENT.BEGIN_GAME_NOTI, msg)
	}

	SetDealerNotHandler(msg) {
		msg = msg.packet
		izx.log(msg)
		izx.dispatchEvent(SCMJ_EVENT.SET_DEALER_NOTI, msg)
	}

	HandCardsNotHandler(msg) {
		msg = msg.packet
		izx.log(msg)
		izx.dispatchEvent(SCMJ_EVENT.HAND_CARDS_NOTI, msg)
	}

	OperateNotHandler(msg) {
		msg = msg.packet
		izx.log(msg)
		izx.dispatchEvent(SCMJ_EVENT.OPERATE_NOTI, msg)
	}

	OperateReqHandler(msg) {
		msg = msg.packet
		izx.log(msg)
		izx.dispatchEvent(SCMJ_EVENT.OPERATE_REQ, msg)
	}

	OperateAck(msg) {
		izx.log(msg)
		izx.notify(GameModule.GAME_ID + ".Dzmj.Operate", "OperateAck", {
			opCode: msg.opCode,
			cards: msg.cards,
			serial: msg.serial,
		})
	}

	ChangeCardNotHandler(msg) {
		msg = msg.packet
		izx.log(msg)
		izx.dispatchEvent(SCMJ_EVENT.CHANGE_CARD_NOTI, msg)
	}

	CountdownNotHandler(msg) {
		msg = msg.packet
		izx.log(msg)
		izx.dispatchEvent(SCMJ_EVENT.COUNT_DOWN_NOTI, msg)
	}

	OpScoreNotHandler(msg) {
		msg = msg.packet
		izx.log(msg)
		izx.dispatchEvent(SCMJ_EVENT.OP_SCORE_NOTI, msg)
	}

	GameResultNotHandler(msg) {
		msg = msg.packet
		izx.log(msg)
		izx.dispatchEvent(SCMJ_EVENT.GAME_RESULT_NOTI, msg)
	}

	CompleteReq(msg) {
		izx.log(msg)
		izx.notify(GameModule.GAME_ID + ".Dzmj.CompleteData", "CompleteReq", {

		})
	}

	CompleteDataNotHandler(msg) {
		msg = msg.packet
		this.completeData = msg
		izx.log(msg)
		izx.dispatchEvent(SCMJ_EVENT.COMPLETE_DATA_NOTI, msg)
	}

	UpdatePlyDataHandler(msg) {
		msg = msg.packet
		izx.log(msg)
		izx.dispatchEvent(SCMJ_EVENT.UPDATE_USER_GOLD, { uid: msg.uid, gold: msg.num })
	}

	AutoReq(msg) {
		izx.log(msg)
		izx.notify(GameModule.GAME_ID + ".Dzmj.Auto", "AutoReq", {
			autoFlag:msg.autoFlag,
			autoType:msg.autoType
		})
	}

	AutoNotHandler(msg) {
		msg = msg.packet
		izx.log(msg)
		izx.dispatchEvent(SCMJ_EVENT.AUTO_NOTI, msg)
	}
}