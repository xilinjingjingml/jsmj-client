/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2020-11-4
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-14 15:05:23
 */
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { SCMJ_EVENT } from "../scmjEvents";
import { CardArea, OperatorCode, LackType } from "../scmjConstants";
import { scmjUtil } from "../scmjUtil";
import MjPrefab from "./scmjPrefab";
import { IOperateWrapper, ICompleteDataNot, IOperateNot, OperateReq } from "../protos/proto_mj"
import Scmj from "../scmj"
import Constants from "../../common/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class mjLayer extends BaseUi {
	@property(cc.Prefab)
	mjPrefab: cc.Prefab = null

	@property(cc.Prefab)
	currentChuPaiPrefab: cc.Prefab = null

	currentChupai: cc.Node = null

	mapNodePaths = {}
	mapHandCardsOffset = {}
	mapCurCardOffset = {}
	_myMJArr: cc.Node[] = []
	lastDisplayOffset = {}


	vecChu: IOperateWrapper[] = []
	chairId = 0
	isHu = false

	onOpen() {
		console.log("mjLayer onOpen")
		super.onOpen()
		this.addTouchEvent()
		this.registerEvent()
		this.initMapNodePaths()
		this.scheduleOnce(this.adjustTopAndBottomAreaPosition, 0.01)

		this.initLayer()
	}

	initLayer() {
		let completeData = Scmj.getInstance()._scmj.completeData
		let serverChairId = Scmj.getInstance()._scmj.serverChairId
		this.chairId = serverChairId
		izx.log("==initLayer==", completeData)
		if (completeData) {
			this.completeDataNot(completeData)
		}
	}

	onClose() {
		console.log("mjLayer onClose")
		super.onClose()
	}

	adjustTopAndBottomAreaPosition() {
		let parentHeight = this.node.parent.getContentSize().height
		let topArea = cc.find("TopArea", this.node)
		let centerArea = cc.find("CenterArea", this.node)
		let bottomArea = cc.find("BottomArea", this.node)
		let diffH = (parentHeight - topArea.height - centerArea.height - bottomArea.height) / 2
		if (diffH > 0) {
			topArea.y += diffH / 2
			bottomArea.y -= diffH / 2
			if (diffH > 12) {
				let handAreas = this.getHandcardsAreas(1)
				handAreas[0].y += 12 / 2
				handAreas[1].y -= 12 / 2
			}
		}
	}

	initMapNodePaths() {
		this.mapNodePaths["CenterRoot"] = "CenterArea/CenterMjArea/"
		this.mapNodePaths["TopRoot"] = "TopArea/"
		this.mapNodePaths["BottomRoot"] = "BottomArea/"
	}
	// 注册事件
	registerEvent() {
		izx.on(SCMJ_EVENT.INIT_SELF_VIEW_SERVER_CHAIR_ID, this.init_self_view_chair_id, this)
		izx.on(SCMJ_EVENT.BEGIN_GAME_NOTI, this.beginGameNot, this)
		izx.on(SCMJ_EVENT.HAND_CARDS_NOTI, this.fapaiCardsNoti, this)
		izx.on(SCMJ_EVENT.CHANGE_CARD_NOTI, this.updateCardsNoti, this)
		izx.on(SCMJ_EVENT.OPERATE_NOTI, this.operateNoti, this)
		izx.on(SCMJ_EVENT.OPERATE_REQ, this.OperateReq, this)

		izx.on(SCMJ_EVENT.COMPLETE_DATA_NOTI, this.completeDataNot, this)
		izx.on(SCMJ_EVENT.GAME_DESK_CLEAR, this.clearDeskPai, this)
		izx.on(Constants.EventName.ROOM_EXIT_GAME, this.exitGame, this)
	}

	exitGame () {
		this.clearCard(1)
		this.clearCard(2)
		this.clearCard(3)
		this.clearCard(4)
		izx.dispatchEvent(SCMJ_EVENT.OPERATE_NOTI, {
			leftCardsNum : 0
		})
	}

	init_self_view_chair_id(server_chair_id) {
		this.chairId = server_chair_id
		// izx.dispatchEvent(SCMJ_EVENT.COMPLETE_REQ)
	}

	s2c(index) {
		let maxPlyNum = 4
		return (index - this.chairId + maxPlyNum) % maxPlyNum
	}

	c2s(index) {
		let maxPlyNum = 4
		return (this.chairId + index + maxPlyNum) % maxPlyNum
	}
	completeDataNot(msg: ICompleteDataNot) {
		let state = msg.state
		let diZhu = msg.diZhu
		let leftCardsNum = msg.leftCardsNum
		let banker = msg.banker
		if (state == 0) {
			return
		}

		izx.dispatchEvent(SCMJ_EVENT.READY_RSP, { errCode: 0 })
		//显示麻将张数
		izx.dispatchEvent(SCMJ_EVENT.OPERATE_NOTI, msg)
		izx.dispatchEvent(SCMJ_EVENT.COUNT_DOWN_NOTI, { chairID: msg.curPlayer, seconds: msg.leftSeconds })
		if (msg.req) {
			izx.dispatchEvent(SCMJ_EVENT.OPERATE_REQ, msg.req)
		}
		let plyData = msg.plyData
		plyData.forEach(changeCardNot => {
			let changeCard = {}
			changeCard = changeCardNot
			changeCard["isComplete"] = true
			izx.dispatchEvent(SCMJ_EVENT.CHANGE_CARD_NOTI, changeCard)
		});
		izx.dispatchEvent(SCMJ_EVENT.SET_DEALER_NOTI_BANKER, { uid: banker, is_ready: true })
	}
	beginGameNot() {
		let maxPlyNum = 4
		for (let index = 0; index < maxPlyNum; index++) {
			let viewChairId = this.s2c(index) + 1
			this.mapHandCardsOffset[viewChairId] = 0
			this.mapCurCardOffset[viewChairId] = 0
			this.lastDisplayOffset[viewChairId] = new cc.Vec3(0, 0, 0)
			let nodeAreas = this.getHandcardsAreas(viewChairId)
			if (nodeAreas.length == 0) {
				return
			}
			nodeAreas.forEach((nodeArea) => {
				nodeArea.removeAllChildren()
			})

			nodeAreas = this.getDisplayPaiAreas(viewChairId)
			if (nodeAreas.length == 0) {
				return
			}
			nodeAreas.forEach((nodeArea) => {
				nodeArea.removeAllChildren()
			})

			nodeAreas = this.getHuPaiAreas(viewChairId)
			if (nodeAreas.length == 0) {
				return
			}
			nodeAreas.forEach((nodeArea) => {
				nodeArea.removeAllChildren()
			})
		}
	}
	// 根据服务器chairId
	clearCard (chairId: number) {
		let viewChairId = chairId
		this.mapHandCardsOffset[viewChairId] = 0
		this.mapCurCardOffset[viewChairId] = 0
		this.lastDisplayOffset[viewChairId] = new cc.Vec3(0, 0, 0)
		this.isHu = false
		let nodeAreas = this.getHandcardsAreas(viewChairId)
		if (nodeAreas.length == 0) {
			return
		}
		nodeAreas.forEach((nodeArea) => {
			nodeArea.removeAllChildren()
		})

		nodeAreas = this.getDisplayPaiAreas(viewChairId)
		if (nodeAreas.length == 0) {
			return
		}
		nodeAreas.forEach((nodeArea) => {
			nodeArea.removeAllChildren()
		})

		nodeAreas = this.getHuPaiAreas(viewChairId)
		if (nodeAreas.length == 0) {
			return
		}
		nodeAreas.forEach((nodeArea) => {
			nodeArea.removeAllChildren()
		})
	}
	fapaiCardsNoti(noti) {
		let handCards = noti.handCards
		let viewChairId = 0 + 1
		this.refreshHandcards(viewChairId, handCards)

		handCards = []
		for (let index = 1; index < 14; index++) {
			handCards.push(0)
		}
		for (let index = 1; index < 4; index++) {
			viewChairId = index + 1
			this.refreshHandcards(viewChairId, handCards)
		}
		izx.dispatchEvent(SCMJ_EVENT.OPERATE_NOTI, { leftCardsNum: noti.leftCardsNum })
	}
	// 接收牌面更新事件
	updateCardsNoti(noti) {
		console.log("mjLayer updateCardsNoti")

		let viewChairId = this.s2c(noti.chairId) + 1
		console.log("noti = ", noti)
		console.log("viewChairId = ", viewChairId)
		console.log("selfChairId = ", this.chairId)
		this.refreshLeftcards(viewChairId, noti.showCards)
		this.refreshHandcards(viewChairId, noti.handCards)
		this.refreshCurCard(viewChairId, noti.currCard)
		//this.refreshHucards(viewChairId, noti.hucards)
		this.refreshDisplaycards(viewChairId, noti.displayCards, noti.isComplete)
	}

	operateNoti(msg: IOperateNot) {
		if (msg.opCode == OperatorCode.OP_MOPAI) {
			let viewChairId = this.s2c(msg.chairId) + 1
			console.log("noti = ", msg)
			console.log("viewChairId = ", viewChairId)
			console.log("selfChairId = ", this.chairId)
			this.refreshCurCard(viewChairId, msg.cards[0])
			izx.dispatchEvent(SCMJ_EVENT.OPERATE_FINISH, msg)
		}
		else if (msg.opCode == OperatorCode.OP_PLAY) {
			izx.dispatchEvent(SCMJ_EVENT.OPERATE_FINISH, msg)
		} else if (msg.opCode == OperatorCode.OP_HU_DIANPAO || msg.opCode == OperatorCode.OP_HU_AFTER_KONG_TURN || msg.opCode == OperatorCode.OP_HU_ZIMO) {
			this.isHu = true
		}
	}

	OperateReq(event: OperateReq) {
		this.vecChu = []
		event.ops.forEach(element => {
			if (this.isChu(element.opcode)) {
				this.vecChu.push(element)
			}

		});
	}
	isChu(opcode) {
		if (opcode == OperatorCode.OP_PLAY) {
			return true
		}
		return false
	}

	// 获取方向系数
	ratio(chairId, area: CardArea): number {
		let ratio = 1
		switch (chairId) {
			case 1:
				break
			case 2:
				break
			case 3:
				ratio = -1
				break
			case 4:
				ratio = -1
				break
		}
		return ratio
	}
	// 获取间隔系数
	gap(chairId, area: CardArea): number {
		let gap = 0
		switch (chairId) {
			case 1:
				if (area == CardArea.DisplayCard) {
					gap = -2
				} else if (area == CardArea.HandCard) {
					gap = this.isHu ? 18 : -18
				} else if (area == CardArea.LeftCard) {
					gap = -3
				}
				break
			case 2:
				gap = -13
				if (area == CardArea.HuCard) {
					gap = -10
				} else if (area == CardArea.HandCard) {
					gap = this.isHu ? -8 : -13
				} else if (area == CardArea.DisplayCard) {
					gap = -10
				}
				break
			case 3:
				gap = 2
				break
			case 4:
				gap = 13
				if (area == CardArea.HuCard) {
					gap = 10
				} else if (area == CardArea.HandCard) {
					gap = this.isHu ? 8 : 13
				} else if (area == CardArea.DisplayCard) {
					gap = 10
				}
				break
		}
		return gap
	}

	getHandcardsAreas(chairId) {
		let nodeAreas = []
		if (chairId == 1) {
			let area = scmjUtil.pathNode("HandArea" + chairId + "01", this.mapNodePaths, this.node)
			if (area) {
				nodeAreas.push(area)
			}
			area = scmjUtil.pathNode("HandArea" + chairId + "02", this.mapNodePaths, this.node)
			if (area) {
				nodeAreas.push(area)
			}
		} else {
			let area = scmjUtil.pathNode("HandArea" + chairId, this.mapNodePaths, this.node)
			if (area) {
				nodeAreas.push(area)
			}
		}

		return nodeAreas
	}

	getCurMoPaiAreas(chairId) {
		let nodeAreas = []
		let name = "HandArea" + chairId
		name = chairId == 1 ? name + "02" : name
		let nodeArea = scmjUtil.pathNode(name, this.mapNodePaths, this.node)
		if (nodeArea != null) {
			nodeAreas.push(nodeArea)
		}

		return nodeAreas
	}
	getDisplayPaiAreas(chairId) {
		let nodeAreas = []
		let name = "DisplayArea" + chairId
		let nodeArea = scmjUtil.pathNode(name, this.mapNodePaths, this.node)
		if (nodeArea != null) {
			nodeAreas.push(nodeArea)
		}

		return nodeAreas
	}
	getHuPaiAreas(chairId) {
		let nodeAreas = []
		let name = "HuArea" + chairId
		let nodeArea = scmjUtil.pathNode(name, this.mapNodePaths, this.node)
		if (nodeArea != null) {
			nodeAreas.push(nodeArea)
		}

		return nodeAreas
	}

	// 刷新左手牌
	// 0,1,2,3,-99,1,4,4,4,4,-99 第1位表示 座位，吃谁的、碰谁的；中间是吃碰杠的牌，最后-99间隔
	// opCode,fromChair,cards
	refreshLeftcards(chairId, cards) {
		console.log("mjLayer refreshLeftcards")
		console.log("chairId = ", chairId)
		console.log("cards = ", cards)

		let nodeAreas = this.getHandcardsAreas(chairId)
		if (nodeAreas.length == 0) {
			return
		}
		nodeAreas.forEach((nodeArea, areaIndex) => {
			nodeArea.removeAllChildren()
		})
		if (cards.length == 0) {
			return
		}

		//转换数据结构
		let temp = []
		cards.forEach(element => {
			temp.push(element.fromChair)
			element.cards.forEach(item => {
				temp.push(item)
			})
			temp.push(-99)
		});
		cards = temp

		// 解析左手牌
		let groups: number[][] = []
		let group: number[] = []
		cards.forEach(v => {
			if (v == -99) {
				groups.push(group)
				group = []
			} else {
				group.push(v)
			}
		})

		let groupIndex = 0
		nodeAreas.forEach((nodeArea, areaIndex) => {
			nodeArea.removeAllChildren()
			let offset = 0
			let ratio = this.ratio(chairId, CardArea.LeftCard)
			let gap = this.gap(chairId, CardArea.LeftCard)
			console.log("ratio = ", ratio)
			console.log("gap = ", gap)
			let num = 0
			let opChairId = -1

			for (; groupIndex < groups.length; groupIndex++) {
				let v = groups[groupIndex]
				if (chairId == 1 && groupIndex >= 2 && areaIndex == 0) {
					//换行
					this.mapHandCardsOffset[chairId] = 0
					break
				}
				let centerX = 0
				let centerY = 0
				let arrowI = -1
				if (v.length == 4) {
					arrowI = 2
				} else if (v.length == 5) {
					arrowI = 4
				}
				v.forEach((vv, i) => {
					if (i == 0) {
						opChairId = vv
					} else {
						let card = vv
						let nodeCard: MjPrefab
						nodeCard = cc.instantiate(this.mjPrefab).getComponent("scmjPrefab")
						nodeCard.initMj(chairId, CardArea.LeftCard, card, false)
						nodeCard.node.name = "leftcard_" + num
						nodeCard.node.zIndex = -num * ratio
						num++
						nodeCard.node.parent = nodeArea
						if (i == 4) {
							if (chairId == 1) {
								nodeCard.node.x = centerX
								nodeCard.node.y = 10
							} else if (chairId == 3) {
								nodeCard.node.x = centerX
								nodeCard.node.y = 8
							} else {
								nodeCard.node.y = centerY + 5
							}
							nodeCard.node.zIndex = (chairId == 2 || chairId == 1) ? nodeCard.node.zIndex + 3 : nodeCard.node.zIndex
						} else {
							let size = nodeCard.mjSize()
							if (chairId == 1 || chairId == 3) {
								nodeCard.node.x = (offset + size.width * ratio + gap)
								offset += (size.width * ratio + gap)
							} else {
								nodeCard.node.y = (offset + size.height * ratio + gap)
								offset += (size.height * ratio + gap)
							}
						}
						if (i == 2) {
							if (chairId == 1 || chairId == 3) {
								centerX = nodeCard.node.x
							} else {
								centerY = nodeCard.node.y
							}
						}
						if (i == arrowI) {
							opChairId = this.s2c(opChairId) + 1
							nodeCard.drawArrow(opChairId)
						}
						if (i == v.length - 1) {
							offset += 10 * ratio
							this.mapHandCardsOffset[chairId] = offset
						}
					}
				})
			}
		})
	}
	// 刷新手牌
	refreshHandcards(chairId, cards) {
		console.log("mjLayer refreshHandcards")
		console.log("chairId = ", chairId)
		console.log("cards = ", cards)

		let nodeAreas = this.getHandcardsAreas(chairId)
		if (nodeAreas.length == 0) {
			return
		}

		let groups: number[][] = []
		groups[0] = []
		groups[1] = []
		let curCardNum = cards.length
		let curHandGroup = Math.ceil(curCardNum / 3)
		let leftHandGroup = Math.max(0, curHandGroup - 3)
		if (chairId == 1) {
			for (let index = 0; index < curCardNum; index++) {
				const element = cards[index];
				if (index < (leftHandGroup * 3)) {
					groups[0].push(element)
				}
				else {
					groups[1].push(element)
				}
			}
			cc.log("curCardNum:", curCardNum, "curHandGroup:", curHandGroup, "leftHandGroup:", leftHandGroup)
			cc.log(groups[0])
			cc.log(groups[1])
		}
		else {
			groups[0] = cards
			groups[1] = []
		}

		for (let areaIndex = 0; areaIndex < nodeAreas.length; areaIndex++) {
			let nodeArea = nodeAreas[areaIndex];
			let tempCards = groups[areaIndex]
			if (tempCards.length == 0) {
				continue
			}
			let offset = this.mapHandCardsOffset[chairId] ? this.mapHandCardsOffset[chairId] : 0
			if (areaIndex == 1 && chairId == 1) {
				//换行
				if (curHandGroup >= 3) {
					offset = 0
				}
			}
			let ratio = this.ratio(chairId, CardArea.HandCard)
			let gap = this.gap(chairId, CardArea.HandCard)
			console.log("ratio = ", ratio)
			console.log("gap = ", gap)
			let num = 0
			tempCards.forEach((card, i) => {
				let nodeCard: MjPrefab
				nodeCard = cc.instantiate(this.mjPrefab).getComponent("scmjPrefab")
				nodeCard.initMj(chairId, CardArea.HandCard, card, this.isHu)
				nodeCard.node.name = "handcard_" + num
				nodeCard.node.zIndex = -num * ratio
				num++
				nodeCard.node.parent = nodeArea
				let size = nodeCard.mjSize()
				//吃碰之后手牌最后一张移到摸牌位置
				let lastGap = 0
				if (i == tempCards.length - 1 && tempCards.length % 3 == 2) {
					lastGap = 10 * ratio
				}
				if (chairId == 1 || chairId == 3) {
					nodeCard.node.x = (offset + size.width * ratio + gap + lastGap)
					offset += (size.width * ratio + gap + lastGap)
				} else {
					if (i == 0) {
						lastGap = 10 * ratio
					}
					nodeCard.node.y = (offset + size.height * ratio + gap + lastGap)
					offset += (size.height * ratio + gap + lastGap)
				}
				nodeCard.basePos = nodeCard.node.position
				if (i == tempCards.length - 1) {
					offset += 10 * ratio
					this.mapCurCardOffset[chairId] = offset
				}
				if (chairId == 1) {
					this._myMJArr.push(nodeCard.node)
				}
			});
		}
	}
	// 刷新当前摸到的牌
	refreshCurCard(chairId, card) {
		console.log("mjLayer refreshCurCard")
		console.log("chairId = ", chairId)
		console.log("cards = ", card)

		if (card == -1) {
			cc.log("refreshCurCard")
			return
		}

		let name = "HandArea" + chairId
		name = chairId == 1 ? name + "02" : name
		let nodeArea = scmjUtil.pathNode(name, this.mapNodePaths, this.node)
		if (nodeArea == null) {
			return
		}
		let nodeCard: MjPrefab
		nodeCard = cc.instantiate(this.mjPrefab).getComponent("scmjPrefab")
		nodeCard.initMj(chairId, CardArea.CurCard, card, this.isHu)
		nodeCard.node.name = "curcard"
		let ratio = this.ratio(chairId, CardArea.CurCard)
		let size = nodeCard.mjSize()
		let offset = this.mapCurCardOffset[chairId] ? this.mapCurCardOffset[chairId] : 0
		if (chairId == 1 || chairId == 3) {
			nodeCard.node.x = offset + (size.width) * ratio
		} else {
			nodeCard.node.y = offset + (size.height) * ratio
		}
		nodeCard.basePos = nodeCard.node.position
		nodeCard.node.parent = nodeArea

		if (chairId == 1) {
			this._myMJArr.push(nodeCard.node)
		}

	}
	// 刷新出牌
	refreshDisplaycards(chairId, cards, isComplete) {
		console.log("mjLayer refreshDisplaycards")
		console.log("chairId = ", chairId)
		console.log("cards = ", cards)

		if (this.currentChupai) {
			this.currentChupai.destroy()
		}

		this.currentChupai = cc.instantiate(this.currentChuPaiPrefab)
		this.currentChupai.setScale(0.9, 0.9)


		let numPerColumm = 7
		let name = "DisplayArea" + chairId
		let nodeArea = scmjUtil.pathNode(name, this.mapNodePaths, this.node)
		if (nodeArea == null) {
			return
		}
		let areaLength = 0
		if (chairId == 1 || chairId == 3) {
			areaLength = nodeArea.getContentSize().width
		} else {
			areaLength = nodeArea.getContentSize().height
		}
		const preLength = nodeArea.children.length
		nodeArea.removeAllChildren()
		let ratio = this.ratio(chairId, CardArea.DisplayCard)
		let gap = this.gap(chairId, CardArea.DisplayCard)
		console.log("ratio = ", ratio)
		console.log("gap = ", gap)
		let num = 0
		let column = 0
		let offset = 0
		let scale = 1
		if (cards.length > numPerColumm * 2) {
			if (chairId == 2 || chairId == 4) {
				scale = 0.8
			} else {
				scale = 0.9
			}
		}
		cards.forEach((card, index) => {
			let nodeCard: MjPrefab
			nodeCard = cc.instantiate(this.mjPrefab).getComponent("scmjPrefab")
			nodeCard.initMj(chairId, CardArea.DisplayCard, card, false)
			nodeCard.node.name = "Displaycard_" + num
			nodeCard.node.zIndex = -(num - numPerColumm * column) * ratio
			nodeCard.node.parent = nodeArea
			nodeCard.node.scale = nodeCard.node.scale * scale
			let tempRatio = ratio * nodeCard.node.scale
			let size = nodeCard.mjSize()
			if (chairId == 1 || chairId == 3) {
				nodeCard.node.x = (size.width * tempRatio + gap) * num
				nodeCard.node.x += chairId == 1 ? size.width / 2 : -size.width / 2
				nodeCard.node.y = chairId == 1 ? -size.height / 2 : size.height / 2
				nodeCard.node.y += offset
			} else {
				nodeCard.node.y = (size.height * tempRatio + gap) * num
				nodeCard.node.y += chairId == 2 ? size.width / 2 : -size.width / 2
				nodeCard.node.x = chairId == 2 ? size.height / 2 : -size.height / 2
				nodeCard.node.x += offset
			}
			num++
			if (index == cards.length - 1 && preLength < cards.length) {
				isComplete = isComplete || false
				if (!isComplete) {
					this.currentChupai.x = nodeCard.node.x
					this.currentChupai.y = nodeCard.node.y + 40
					this.currentChupai.zIndex = nodeCard.node.zIndex + 1
					nodeArea.addChild(this.currentChupai)
					// 播放出牌动画
					let viewchairId = chairId
					cc.find("CenterArea1/CenterMjArea/GestureArea" + viewchairId + "/hand_" + viewchairId, this.node).active = true
					cc.find("CenterArea1/CenterMjArea/GestureArea" + viewchairId + "/hand_" + viewchairId, this.node).setPosition(this.currentChupai.getPosition())
					cc.find("CenterArea1/CenterMjArea/GestureArea" + viewchairId + "/hand_" + viewchairId, this.node).getComponent(dragonBones.ArmatureDisplay).playAnimation("newAnimation", 1)
					cc.find("CenterArea1/CenterMjArea/GestureArea" + viewchairId + "/hand_" + viewchairId, this.node).getComponent(dragonBones.ArmatureDisplay)
						.on(dragonBones.EventObject.COMPLETE, (event) => {
							cc.find("CenterArea1/CenterMjArea/GestureArea" + viewchairId + "/hand_" + viewchairId, this.node).active = false
						}, this)
				}
			}

			//if (Math.abs((size.height*tempRatio + gap) * num) > areaLength) {
			if (num >= numPerColumm) {
				num = 0
				column++
				if (chairId == 1 || chairId == 3) {
					offset = -(size.height - 11) * tempRatio * column
				} else {
					offset = (size.width - 3) * tempRatio * column
				}
			}


		});
	}
	// 刷新胡牌
	refreshHucards(chairId, cards) {
		console.log("mjLayer refreshHucards")
		console.log("chairId = ", chairId)
		console.log("cards = ", cards)

		let name = "HuArea" + chairId
		let nodeArea = scmjUtil.pathNode(name, this.mapNodePaths, this.node)
		if (nodeArea == null) {
			return
		}

		nodeArea.removeAllChildren()
		let ratio = this.ratio(chairId, CardArea.HuCard)
		let gap = this.gap(chairId, CardArea.HuCard)
		console.log("ratio = ", ratio)
		console.log("gap = ", gap)
		let num = 0
		cards.forEach(card => {
			let nodeCard: MjPrefab
			nodeCard = cc.instantiate(this.mjPrefab).getComponent("scmjPrefab")
			nodeCard.initMj(chairId, CardArea.HuCard, card, false)
			nodeCard.node.name = "hucard_" + num
			nodeCard.node.zIndex = -num * ratio
			nodeCard.node.parent = nodeArea
			let tempRatio = ratio * nodeCard.node.scale
			let size = nodeCard.mjSize()
			if (chairId == 1 || chairId == 3) {
				nodeCard.node.x = (size.width * tempRatio + gap) * num
			} else {
				nodeCard.node.y = (size.height * tempRatio + gap) * num
			}
			num++

		});
	}



	//触摸层逻辑start
	addTouchEvent() {

		// let bottomArea = cc.find("BottomArea", this.node)
		// bottomArea.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this)
		// bottomArea.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
		// bottomArea.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
		// bottomArea.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)

		izx.on(SCMJ_EVENT.MJ_TOUCH_BEGIN, this.onMjTouchBegin, this)
		izx.on(SCMJ_EVENT.MJ_TOUCH_END, this.onMjTouchEnd, this)
		izx.on(SCMJ_EVENT.MJ_TOUCH_MOVE, this.onMjTouchMove, this)
	}

	touchCardPos = cc.v2(0, 0)
	touchCardMove = false
	curSelectedCardNode = null
	doubleClick = false
	inputCardZorder = 14 + 1
	putCardMinDisY = 80

	onTouchBegin(event) {
		cc.log("onTouchBegin")
		let nodeAreas = this.getHandcardsAreas(1)
		if (nodeAreas.length == 0) {
			return
		}
		this.touchCardMove = false

		let pos = null
		let selectedCardNode = null
		nodeAreas.forEach(nodeArea => {
			pos = nodeArea.convertToNodeSpace(event.getLocation())
			let tocuCardNode = this.itemForTouch(nodeArea, pos)
			if (tocuCardNode) {
				selectedCardNode = tocuCardNode
				cc.log("onTouchBegin", selectedCardNode)
				return
			}
		})

		if (selectedCardNode) {
			// 触摸后牌停止动作
			if (selectedCardNode.isruning) {
				selectedCardNode.isruning()
			}

			if (selectedCardNode.bMask) {
				//izx.dispatchEvent("MJ_QUE_TIP", {msg : "缺还未打完，请先把缺打完", showAniTime : 4})
				return
			}
			if (selectedCardNode == this.curSelectedCardNode) {
				this.doubleClick = true
			} else {
				this.touchCardPos = pos

				if (this.curSelectedCardNode) {
					this.curSelectedCardNode.position = this.curSelectedCardNode.getComponent("scmjPrefab").basePos
					//this.unTipMaskCard()
				}
				this.curSelectedCardNode = selectedCardNode
				this.curSelectedCardNode.y = this.curSelectedCardNode.getComponent("scmjPrefab").basePos.y +
					this.curSelectedCardNode.getComponent("scmjPrefab").touchToHeight
				this.curSelectedCardNode.zIndex = this.inputCardZorder++
				// GameLogic.Instance().playSound('audio_card_hover')
				// this.tipMaskCard(this.curSelectedCardNode.cardValue)
				cc.log("onTouchBegin1")
			}
		} else {
			if (this.curSelectedCardNode) {
				this.curSelectedCardNode.position = this.curSelectedCardNode.getComponent("scmjPrefab").basePos
				this.curSelectedCardNode = null
				this.doubleClick = false
				//this.unTipMaskCard()
				cc.log("onTouchBegin2")
			}
		}
	}

	onTouchMove(event) {
		cc.log("onTouchMove")
		let nodeAreas = this.getHandcardsAreas(1)
		if (nodeAreas.length == 0) {
			return
		}
		let x1 = event.getLocation().x
		let y1 = event.getLocation().y

		let x2 = event.getStartLocation().x
		let y2 = event.getStartLocation().y
		let distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
		if (distance < 10) {
			cc.log("不是有效移动距离", distance)
			return
		}
		let pos = null
		let selectedCardNode = null
		nodeAreas.forEach(nodeArea => {
			pos = nodeArea.convertToNodeSpace(event.getLocation())
			let tocuCardNode = this.itemForTouch(nodeArea, pos)
			if (tocuCardNode) {
				selectedCardNode = tocuCardNode
				cc.log("onTouchMove", selectedCardNode)
				return
			}
		})

		if (this.touchCardMove) {
			if (selectedCardNode && this.curSelectedCardNode != selectedCardNode) {
				if (this.curSelectedCardNode) {
					this.curSelectedCardNode.position = this.curSelectedCardNode.getComponent("scmjPrefab").basePos
					//this.unTipMaskCard()
				}

				this.curSelectedCardNode = selectedCardNode
				this.curSelectedCardNode.y = this.curSelectedCardNode.getComponent("scmjPrefab").basePos.y +
					this.curSelectedCardNode.getComponent("scmjPrefab").touchToHeight
				this.curSelectedCardNode.zIndex = this.inputCardZorder++

				// GameLogic.Instance().playSound('audio_card_hover')
				// this.tipMaskCard(this.curSelectedCardNode.cardValue)
				cc.log("onTouchMove1")
			} else {
				if (this.curSelectedCardNode) {
					this.curSelectedCardNode.position = pos
					this.doubleClick = false
					cc.log("onTouchMove2")
				}
			}
		} else {
			let rect = cc.rect(-50, -50, 100, 100)
			if (rect.contains(pos.sub(this.touchCardPos))) {
				this.touchCardMove = true
				cc.log("onTouchMove3")
			} else {
				cc.log("onTouchMove4")
			}
		}
	}

	onTouchEnd(event) {
		cc.log("onTouchEnd")
		if (!this.curSelectedCardNode) {
			cc.log("onTouchEnd11")
			return
		}
		// 触摸结束手指移动牌高度大于手牌初始高度+可出牌高度，认为玩家出牌
		let move = this.curSelectedCardNode.y > this.curSelectedCardNode.getComponent("scmjPrefab").basePos.y + this.putCardMinDisY
		this.curSelectedCardNode.position.y = this.curSelectedCardNode.getComponent("scmjPrefab").basePos.y + this.curSelectedCardNode.getComponent("scmjPrefab").touchToHeight


		let nodeAreas = this.getHandcardsAreas(1)
		if (nodeAreas.length == 0) {
			cc.log("onTouchEnd00")
			return
		}

		let pos = null
		let selectedCardNode = null
		nodeAreas.forEach(nodeArea => {
			pos = nodeArea.convertToNodeSpace(event.getLocation())
			let tocuCardNode = this.itemForTouch(nodeArea, pos)
			if (tocuCardNode) {
				selectedCardNode = tocuCardNode
				cc.log("onTouchEnd", selectedCardNode)
				return
			}
		})
		let isDoubleClick = this.curSelectedCardNode == selectedCardNode
		if (move || (this.doubleClick && isDoubleClick)) {
			//this.putCard(this.curSelectedCardNode)
			cc.log("onTouchEnd1")
			if (move) {
				cc.log("拖动出牌")
			} else if (this.doubleClick && isDoubleClick) {
				cc.log("双击出牌")
			}

			let ackOpcode = OperatorCode.OP_PLAY
			let ackOpCard = this.curSelectedCardNode.getComponent("scmjPrefab").cValue
			let ackArr = []
			if (typeof ackOpCard === "number") {
				ackArr.push(ackOpCard)
			} else {
				ackArr = ackOpCard
			}

			if (this.vecChu.length > 0) {
				izx.dispatchEvent(SCMJ_EVENT.OPERATE_ACK, {
					opCode: ackOpcode,
					cards: ackArr,
					serial: this.vecChu[0].serial
				})
				this.vecChu = []
			}

			if (this.curSelectedCardNode) {
				this.scheduleOnce(() => {
					this.curSelectedCardNode.position = this.curSelectedCardNode.getComponent("scmjPrefab").basePos
				}, 0.01)
			}
		} else {
			cc.log("onTouchEnd2")
		}
	}

	onTouchCancle(event) {
		cc.log("onTouchCancle")
		this.onTouchEnd(event)
	}

	itemForTouch(nodeArea, pos) {
		for (let cardNode of nodeArea.children) {
			if (cardNode.active && (cardNode.getComponent('scmjPrefab').cArea == CardArea.CurCard
				|| cardNode.getComponent('scmjPrefab').cArea == CardArea.HandCard)  /* && !cardNode.bStopTouch*/) {
				let bg = cardNode.getComponent('scmjPrefab').mjSize()
				let rect = cc.rect(cardNode.x - bg.width / 2, cardNode.y, bg.width, bg.height)
				if (rect.contains(new cc.Vec2(pos.x, pos.y))) {
					return cardNode
				}
			}
		}
	}
	//触摸层逻辑end



	// 获取当前手牌区域起始位置
	// LIFE-CYCLE CALLBACKS:
	onLoad() {
		this.onOpen()
	}

	start() {

	}

	// update (dt) {}

	// 清除所有牌面
	clearDeskPai() {
		cc.find("BottomArea/HandArea101", this.node).removeAllChildren()
		cc.find("BottomArea/HandArea102", this.node).removeAllChildren()
		cc.find("CenterArea/CenterMjArea/HandArea2", this.node).removeAllChildren()
		cc.find("CenterArea/CenterMjArea/HandArea4", this.node).removeAllChildren()
		cc.find("TopArea/HandArea3", this.node).removeAllChildren()

		for (let index = 1; index <= 4; index++) {
			cc.find("CenterArea/CenterMjArea/DisplayArea" + index, this.node).removeAllChildren()
			cc.find("CenterArea/CenterMjArea/HuArea" + index, this.node).removeAllChildren()
		}
		this.isHu = false
	}

	_selectedMJ: cc.Node = null
	_isMove: Boolean = false
	_x = null
	_y = null
	_z = 0
	_zindex = 0
	onMjTouchBegin(event) {
		cc.log("onMjTouchBegin")

		this._x = event.target.x
		this._y = event.target.y
		this._z = event.target.z
		this._zindex = event.target.zIndex

		for (var i = 0; i < this._myMJArr.length; ++i) {
			if (event.target == this._myMJArr[i]) {
				if (this._selectedMJ == null) {
					event.target.y = 20
					this._selectedMJ = event.target
					return
				}

				if (this._selectedMJ != null && this._selectedMJ != event.target) {
					this._selectedMJ.y = 0;
					event.target.y = 20
					this._selectedMJ = event.target
					return
				}

				if (this._selectedMJ != null && this._selectedMJ == event.target) {

					// 判断是否是自己的回合
					if (this.vecChu.length == 0) {
						event.target.y = 0
						this._selectedMJ = null;
						return
					}

					//TODO调用出牌逻辑
					let ackOpcode = OperatorCode.OP_PLAY
					let ackOpCard = event.target.getComponent("scmjPrefab").cValue
					let ackArr = []
					if (typeof ackOpCard === "number") {
						ackArr.push(ackOpCard)
					} else {
						ackArr = ackOpCard
					}
					if (this.vecChu.length > 0) {
						izx.dispatchEvent(SCMJ_EVENT.OPERATE_ACK, {
							opCode: ackOpcode,
							cards: ackArr,
							serial: this.vecChu[0].serial
						})
						this.vecChu = []
					}

					event.target.y = 0
					this._selectedMJ = null;
				}
			}
		}
	}

	onMjTouchEnd(event) {
		cc.log("MJ_TOUCH_END")
		//TODO 判断当前是否是自己的回合，否则return

		for (var i = 0; i < this._myMJArr.length; ++i) {
			if (event.target == this._myMJArr[i]) {
				if (this._isMove) {
					this._isMove = false
					let move = this._selectedMJ.y > this._selectedMJ.getComponent("scmjPrefab").basePos.y + this.putCardMinDisY
					this._selectedMJ.position.y = this._selectedMJ.getComponent("scmjPrefab").basePos.y + this._selectedMJ.getComponent("scmjPrefab").touchToHeight

					if (move) {
						//TODO调用出牌逻辑
						let ackOpcode = OperatorCode.OP_PLAY
						let ackOpCard = event.target.getComponent("scmjPrefab").cValue
						let ackArr = []
						if (typeof ackOpCard === "number") {
							ackArr.push(ackOpCard)
						} else {
							ackArr = ackOpCard
						}
						if (this.vecChu.length > 0) {
							izx.dispatchEvent(SCMJ_EVENT.OPERATE_ACK, {
								opCode: ackOpcode,
								cards: ackArr,
								serial: this.vecChu[0].serial
							})
							this.vecChu = []
						}

					} else {
						this._selectedMJ.x = this._x
						this._selectedMJ.y = this._y
						this._selectedMJ.z = this._z
						this._selectedMJ.zIndex = this._zindex
					}
					this._selectedMJ = null;
				}
			}
		}
	}

	onMjTouchMove(event) {
		cc.log("onTouchMove:")
		if (this.vecChu.length <= 0) {
			return
		}

		this._selectedMJ = event.target;
		this._selectedMJ.zIndex = 999
		let x1 = event.getLocation().x
		let y1 = event.getLocation().y
		let x2 = event.getStartLocation().x
		let y2 = event.getStartLocation().y
		let distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
		if (distance < 10) {
			cc.log("不是有效移动距离", distance)
			return
		}

		this._isMove = true
		let pos = null
		let nodeAreas = this.getHandcardsAreas(1)
		nodeAreas.forEach(nodeArea => {
			if (nodeArea.name == event.target.parent.name) {
				pos = nodeArea.convertToNodeSpace(event.getLocation())
			}
		})
		this._selectedMJ.position = pos

	}
}
