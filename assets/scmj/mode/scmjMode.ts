/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-13 13:42:51
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-12 17:00:50
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

	constructor() {
		super()
		izx.setProto("jsmj", proto_mj)
		izx.setProto("mahjong_base", mahjong_base)
		izx.setProto("ad", adOrder)
		izx.setProto("mjAd", mjAd)
		izx.on(SCMJ_EVENT.INIT_GAME_START, this.onGameOpen, this)
		izx.on(SCMJ_EVENT.Get_Chai_Hong_Bao_Req, this.GetChaiHongBaoReq, this)
		izx.on(Constants.EventName.ROOM_EXIT_NOTI, this.onPlayerExit, this)

		this.autoRegHander()
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
		izx.on(SCMJ_EVENT.INIT_GAME_START, this.onGameOpen, this)
	}

	unLoad() {
		izx.offByTag(this)
		izx.unsetProto("jsmj")
		izx.unsetProto("mahjong_base")
	}

	GetChaiHongBaoReq(msg) {
		izx.notify(GameModule.GAME_ID + ".Ad.ChaiHongBao", "GetChaiHongBaoReq", {
			uid: izx.user.uid
		})
	}
	GetChaiHongBaoAckHandler(ack) {
		ack = ack.packet
		izx.log(ack)
		izx.dispatchEvent(SCMJ_EVENT.Get_Chai_Hong_Bao_Ack, ack)
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
			cc.log("==EnterAckHandler isFind==", isFind)
			ack.items.forEach(item => {
				this.mapPlayerData.push(item)
			});
			izx.dispatchEvent(SCMJ_EVENT.INIT_SELF_VIEW_SERVER_CHAIR_ID, this.serverChairId)
			izx.dispatchEvent(SCMJ_EVENT.ENTER_ACK, ack)

			izx.dispatchEvent(SCMJ_EVENT.READY_REQ, { isReady: true })
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
		cc.log(rsp)
		izx.dispatchEvent(SCMJ_EVENT.READY_RSP, rsp)
	}

	ReadyNotiHandler(noti) {
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
}