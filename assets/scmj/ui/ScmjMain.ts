/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2020-11-2 
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-15 17:19:02
 */
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { SCMJ_EVENT } from "../scmjEvents";
import Constants from "../../common/constants";
import { scmjUtil } from "../scmjUtil";
import { AdAreaId, GameModule, OperatorCode } from "../scmjConstants";
import { proto_mj } from "../protos/proto_mj";
import { JsmjAudioUtil } from "../JsmjAudioUtil";
import Servers, { } from "../../common/servers";
import Scmj from "../scmj"

const { ccclass, property } = cc._decorator;

@ccclass
export default class scmjMain extends BaseUi {

    @property(cc.Prefab)
    prefabUserHead: cc.Prefab = null

    @property(cc.Node)
    selfHead: cc.Node = null

    @property(cc.Label)
    selfGold: cc.Label = null

    mapNodePaths = {}
    mapPlayers = {}

    chairId = 0

    onLoad() {
        izx.on(SCMJ_EVENT.ENTER_ACK, this.enterAck, this)
        izx.on(SCMJ_EVENT.ENTER_NOTI, this.enterNoti, this)
        izx.on(SCMJ_EVENT.READY_RSP, this.readyAck, this)


        izx.on(SCMJ_EVENT.BEGIN_GAME_NOTI, this.beginGameNot, this)
        izx.on(SCMJ_EVENT.SET_DEALER_NOTI, this.bankerNoti, this)
        izx.on(SCMJ_EVENT.OPERATE_NOTI, this.mjCardNumNoti, this)
        izx.on(Constants.EventName.ROOM_EXIT_REQ, this.exitRoomReq, this)
        izx.on(Constants.EventName.ROOM_EXIT_GAME, this.exitGame, this)

        izx.on(Constants.EventName.AD_ORDER_NOTI, this.adOrderNoti, this)
        izx.on(Constants.EventName.AD_SPOT_HAI_DI_LAO_YUE, this.haidilaoyueHandler, this)
        izx.on(Constants.EventName.AD_SPOT_Xin_Shou_Hao_Li_Ack, this.xinshouhaoliHandler, this)
        izx.on(Constants.EventName.AD_SPOT_Deng_Lu_Jiang_Li_Get_Daily_First_Login_Ack, this.firstLoginHandler, this)
        izx.on(Constants.EventName.AD_SPOT_Deng_Lu_Jiang_Li_Ack, this.denglujiangliHandler, this)
        izx.on(SCMJ_EVENT.Get_Chai_Hong_Bao_Ack, this.chaihongackHandler, this)

        izx.on("ITEM_DATA_FEED", this.updateItem, this)
    }
    onOpen() {
        console.log("ScmjMain onOpen")
        super.onOpen()
        this.init()
        this.initTable()
    }

    onClose() {
        console.log("ScmjMain onClose")
        super.onClose()
    }

    init() {
        console.log("ScmjMain init")

        izx.on(SCMJ_EVENT.INIT_GAME_END, this.initGameView, this)

        izx.on(SCMJ_EVENT.CLICK_READY, this.onClickReady, this)
        

        izx.bindButtonClick("CenterArea/BtnReady", this.node, (sender, data) => {
            // izx.dispatchEvent(SCMJ_EVENT.READY_REQ, {isReady: true})
            izx.emit(SCMJ_EVENT.CLICK_READY)
        })

        izx.bindButtonClick("CenterArea/BtnChangeReady", this.node, (sender, data) => {

            izx.dispatchEvent(Constants.EventName.AD_ORDER_INIT, {
                areaId: 105,
                uid: izx.user.uid
            })

        })

        izx.bindButtonClick("TopArea/BtnExit", this.node, (sender, data) => {
            izx.pushDialog("tips", "prefabs/tipsDialog")
        })

        izx.bindButtonClick("BottomArea/BtnArea/tixian/tixianBtn", this.node, () => {
            izx.pushDialog("cashout", "prefabs/cashDialog")
        })

        izx.bindButtonClick("BottomArea/BtnArea/qiandao/qiandaoBtn", this.node, () => {
            izx.dispatchEvent(Constants.EventName.AD_SPOT_Deng_Lu_Jiang_Li_Req, {
                uid: izx.user.uid
            })
        })

        izx.bindButtonClick("BottomArea/BtnArea/zhuanpanBtn", this.node, () => {
            izx.pushDialog("zhuanpan", "prefabs/zhuanpanDialog", () => {

            })
        })

        izx.bindButtonClick("TopArea/HbTaskArea/hbTaskBtn", this.node, () => {
            //izx.pushDialog("bonus", "prefabs/hongbaoScrollView")
        })

        this.initMapNodePaths()
        izx.dispatchEvent(SCMJ_EVENT.INIT_GAME_START)
        izx.dispatchEvent(Constants.EventName.AD_SPOT_Xin_Shou_Hao_Li_Req, {
            uid: izx.user.uid
        })
        izx.dispatchEvent(SCMJ_EVENT.Get_Chai_Hong_Bao_Req)

        this.selfGold.string = izx.getMoneyformat(izx.item.getItemNum(0))
    }

    onClickReady() {
        if (izx.item.getItemNum(0) == 0) {
            return
        }
        if (Servers.getInstance()._room.InLobby()) {
            izx.dispatchEvent(Constants.EventName.ROOM_READY_TO_GAME, { gameId: "dzmj", ruleId: "dzmj.redpack.xs" })
        } else if (Servers.getInstance()._room.InTable()) {
            izx.dispatchEvent(SCMJ_EVENT.READY_REQ, { isReady: true })
        } else {
            izx.log("=======Other State=======", Servers.getInstance()._room._fsm.getState())
        }
    }

    // 初始化桌面玩家
    initTable() {
        let plyDatas = Scmj.getInstance()._scmj.mapPlayerData
        izx.log("==initTable==", plyDatas)
        plyDatas.forEach(item => {
            if (item.data.uid === izx.user.uid) {
                this.chairId = item.chairId
            }

            this.addPlayer(item)
        })
        // izx.dispatchEvent(SCMJ_EVENT.COMPLETE_REQ)
    }

    exitRoomReq() {
        //this.pop()
    }
    exitGame () {
        this.mapPlayers[1].clearView()
        this.mapPlayers[2].clearView()
        this.mapPlayers[3].clearView()
        cc.find("CenterArea/BtnReady", this.node).active = true
    }
    readyAck(event) {
        if (event.errCode == 0) {
            cc.find("CenterArea/BtnReady", this.node).active = false
            cc.find("CenterArea/BtnChangeReady", this.node).active = false
        }else {
            cc.find("CenterArea/BtnReady", this.node).active = true
            //cc.find("CenterArea/BtnChangeReady", this.node).active = true
            izx.confirmBox({
                msg: event.errMsg,
                btnText: "确定",
                callback: ()=>{
                    
                }
            })
        }
    }

    updateItem(msg) {
        if (msg.id == 0) {
            this.selfGold.string = izx.getMoneyformat(msg.num)
            izx.dispatchEvent(SCMJ_EVENT.UPDATE_USER_GOLD, { uid: izx.user.uid, gold: izx.item.getItemNum(msg.id) })
        }
    }

    initMapNodePaths() {
        this.mapNodePaths["MjLayerCenterRoot"] = "CenterArea/MjLayer/CenterArea/CenterMjArea/"
        this.mapNodePaths["MjLayerTopRoot"] = "CenterArea/MjLayer/TopArea/"
        this.mapNodePaths["MjLayerBottomRoot"] = "CenterArea/MjLayer/BottomArea/"
    }

    initGameView(events) {
        let serverChairId = events.serverChairId
        let mapPlayerData = events.mapPlayerData

        cc.log("mapPlayers", mapPlayerData)

        this.chairId = serverChairId

        let maxPlyNum = 4
        for (let index = 0; index < maxPlyNum; index++) {
            let serverChairId = this.c2s(index)
            let temp = {}
            let isFind = false
            for (let ind = 0; ind < mapPlayerData.length; ind++) {
                const data = mapPlayerData[ind];
                if (serverChairId == data.chairId) {
                    isFind = true
                    temp = data
                    break
                }
            }
            if (isFind) {
                this.addPlayer(temp)
            } else {
                temp["chairId"] = serverChairId
                temp["ready"] = false
                temp["data"] = {}
                this.addPlayer(temp)
            }
        }

        //bgm
        JsmjAudioUtil.playBackground()
    }

    addPlayer(data) {
        /*
        chairId
        ready
        data.uid
        data.nickname
        data.score
        */
        let localChairId = 0
        if (data.chairId == this.chairId) {
            localChairId = 0
            this.mapPlayers[localChairId] = this.selfHead.getComponent("scmjHead")
        } else {
            localChairId = this.s2c(data.chairId)
            let viewChairId = localChairId + 1
            let userHead = cc.instantiate(this.prefabUserHead)
            this.mapPlayers[localChairId] = userHead.getComponent("scmjHead")
            scmjUtil.addIntoPath("HeadArea" + viewChairId, this.mapNodePaths, this.node, userHead)
        }
        this.mapPlayers[localChairId].init(data)
    }


    enterAck(ack) {
        izx.log("==enterAck==", ack)
        if (ack.ret == 0) {
            ack.items.forEach(item => {
                if (item.data.uid == izx.user.uid) {
                    this.chairId = item.chairId
                    return
                }
            });
            ack.items.forEach(item => {
                this.addPlayer(item)
            });

            // izx.dispatchEvent(SCMJ_EVENT.COMPLETE_REQ)
        } else {
            //入桌失败
        }
    }

    getPlayerByUid(uid) {
        for (let index = 0; index < 4; index++) {
            let element = this.mapPlayers[index]
            if (element && element.data && element.data.uid == uid) {
                return element
            }
        }
        return null
    }

    getPlayerByLocalChairId(local_chair_id) {
        return this.mapPlayers[local_chair_id]
    }

    enterNoti(noti) {
        this.addPlayer(noti)
        console.log("noti = ", noti)
    }

    bankerNoti(noti) {

        console.log("noti = ", noti)
        scmjUtil.playDiceAni(noti.dices, this.node, () => {
            izx.dispatchEvent(SCMJ_EVENT.SET_DEALER_NOTI_BANKER, noti)
        })
        //筛子音效
        JsmjAudioUtil.playSound("audio_dice", null)
    }

    mjCardNumNoti(msg) {
        let leftCardsNum = msg.leftCardsNum || 0
        cc.find("CenterArea/EswnTop/LeftCardNum", this.node).getComponent(cc.Label).string = leftCardsNum

        if (msg.opCode == OperatorCode.OP_PLAY) {
            JsmjAudioUtil.playSound("audio_card_" + msg.cards[0] + "_", 1)
        } else if (msg.opCode == OperatorCode.OP_KONG || msg.opCode == OperatorCode.OP_KONG_DARK || msg.opCode == OperatorCode.OP_KONG_TURN) {
            JsmjAudioUtil.playSound("audio_GANGPAI_", 1)
        } else if (msg.opCode == OperatorCode.OP_PONG) {
            JsmjAudioUtil.playSound("audio_PENGPAI_", 1)
        } else if (msg.opCode == OperatorCode.OP_CHOW_OXX || msg.opCode == OperatorCode.OP_CHOW_XOX || msg.opCode == OperatorCode.OP_CHOW_XXO) {
            JsmjAudioUtil.playSound("audio_CHIPAI_", 1)
        } else if (msg.opCode == OperatorCode.OP_HU_DIANPAO || msg.opCode == OperatorCode.OP_HU_AFTER_KONG_TURN) {
            JsmjAudioUtil.playSound("audio_hu_", 1)
        } else if (msg.opCode == OperatorCode.OP_HU_ZIMO) {
            JsmjAudioUtil.playSound("audio_zimo_", 1)
        }
    }

    getPlayerByServerChairId(svr_chair_id) {
        let local_chair_id = this.s2c(svr_chair_id)
        return this.getPlayerByLocalChairId(local_chair_id)
    }

    s2c(index) {
        let maxPlyNum = 4
        return (index - this.chairId + maxPlyNum) % maxPlyNum
    }

    c2s(index) {
        let maxPlyNum = 4
        return (this.chairId + index + maxPlyNum) % maxPlyNum
    }
    updateReady(isShow: boolean | false) {
        cc.find("CenterArea/BtnReady", this.node).active = false
        cc.find("CenterArea/BtnChangeReady", this.node).active = false
    }

    beginGameNot(msg) {
        cc.find("CenterArea/BtnReady", this.node).active = false
        cc.find("CenterArea/BtnChangeReady", this.node).active = false
        cc.find("CenterArea/EswnTop/LeftCardNum", this.node).getComponent(cc.Label).string = msg.totalCardsNum+""

        izx.dispatchEvent(SCMJ_EVENT.INIT_SELF_VIEW_SERVER_CHAIR_ID, this.chairId)
    }
    xinshouhaoliHandler(msg) {
        if (msg.errCode == 0) {
            izx.pushDialog("bonus", "prefabs/xinshouhaoliDialog", null, { initParam: msg })
        } else {
            izx.dispatchEvent(Constants.EventName.AD_SPOT_Deng_Lu_Jiang_Li_Get_Daily_First_Login_Req, {
                uid: izx.user.uid
            })
        }
    }
    firstLoginHandler(msg) {
        if (msg.isFirst && msg.errCode == 0) {
            izx.dispatchEvent(Constants.EventName.AD_SPOT_Deng_Lu_Jiang_Li_Req, {
                uid: izx.user.uid
            })
        }
    }
    chaihongackHandler(msg) {
        if (msg.errCode == 0) {
            let cur = msg.CurrentCount
            let total = msg.TaskCount
            cc.find("TopArea/HbTaskArea/ProgressBar", this.node).getComponent(cc.ProgressBar).progress = cur / total
        }
    }
    denglujiangliHandler(msg) {
        izx.pushDialog("qiandao", "prefabs/qiandaoDialog", null, { initParam: msg })
    }
    haidilaoyueHandler(msg) {
        izx.pushDialog("scmj", "prefabs/haidilaoyueDialog", null, { initParam: msg })
    }
    adOrderNoti(msg) {
        switch (msg.areaId) {
            case AdAreaId.JIE_SUAN_WIN_HAI_DI_LAO_YUE:
                izx.pushDialog("scmj", "prefabs/haidilaoyueDialog", null, { initParam: msg })
                break;
            case AdAreaId.JIE_SUAN_WIN_YING_QIAN_FAN_BEI:
                izx.pushDialog("bonus", "prefabs/fbhbDialog", null, { initParam: msg })
                break;
            case AdAreaId.JIE_SUAN_LOSE_BEN_JU_MIAN_SHU:
                izx.pushDialog("bonus", "prefabs/sqmgxDialog", null, { initParam: msg })
                break;
            case AdAreaId.JIE_SUAN_LOSE_PO_CHAN_BU_ZHU:
                izx.pushDialog("bonus", "prefabs/pcbzDialog", null, { initParam: msg })
                break;

            //幸运红包
            case AdAreaId.GAME_COUNT_MORE_3:
                izx.pushDialog("bonus", "prefabs/gxfcDialog", null, { initParam: msg })
                break;
            //拆红包
            case AdAreaId.GAME_COUNT_MORE_5:
                izx.pushDialog("bonus", "prefabs/djdlDialog", null, { initParam: msg })
                break;
            default:
                break;
        }
    }

}
