import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { OperatorCode } from "../scmjConstants";
import { SCMJ_EVENT } from "../scmjEvents";
import { scmjUtil } from "../scmjUtil";
import scmjMain from "./ScmjMain";
import proto_mj = require("../protos/proto_mj")
import Servers, { } from "../../common/servers";
import Constants from "../../common/constants";
import Scmj from "../scmj";

const {ccclass, property} = cc._decorator;

@ccclass
export default class JsmjSettlement extends BaseUI {

    scmjMain:scmjMain = null
    
    chairId = 0

    settlementMsg = null
    
    @property(cc.Asset)
    huFont:cc.Asset = null

    @property(cc.Asset)
    shuFont:cc.Asset = null

    @property(cc.Prefab)
    jiesuandonghua_hu:cc.Prefab = null

    @property(cc.Prefab)
    jiesuandonghua_shu:cc.Prefab = null

    onLoad() {
        console.log("JsmjSettlement onLoad")
        this.initEvent()
        this.initButton()
        this.initSettlement()
    }

    initSettlement() {
        izx.log("==initSettlement==")
		let serverChairId = Scmj.getInstance()._scmj.serverChairId
		this.chairId = serverChairId
	}

    initEvent() {
        izx.on(SCMJ_EVENT.INIT_SELF_VIEW_SERVER_CHAIR_ID, this.init_self_view_chair_id, this)
        izx.on(SCMJ_EVENT.GAME_RESULT_NOTI, this.settlement, this)
        izx.on(SCMJ_EVENT.OP_SCORE_NOTI, this.OperateScoreNoti, this)
        izx.on(Constants.EventName.ROOM_EXIT_GAME, this.hideScoreScene, this)
    }

    initButton () {
        izx.bindButtonClick("BtnReady", this.node, (sender, data) => {  
            Scmj.getInstance()._scmj._isShowGameResultScene = false    
            this.hideScoreScene()
            izx.dispatchEvent(SCMJ_EVENT.GAME_DESK_CLEAR, {})
            izx.dispatchEvent(SCMJ_EVENT.OPERATE_NOTI, {
                leftCardsNum : 0
            })
            izx.emit(SCMJ_EVENT.CLICK_READY)
            //izx.dispatchEvent(SCMJ_EVENT.READY_REQ, {isReady: true})
        })
    }

    hideScoreScene () {
        this.node.getChildByName("settlement_play_0").active=false
        this.node.getChildByName("settlement_play_1").active=false
        this.node.getChildByName("settlement_play_2").active=false
        this.node.getChildByName("settlement_play_3").active=false
        this.node.getChildByName("BtnReady").active=false
        this.node.getChildByName("liujuDragon").active=false
        //cc.find("mask", this.node).active=false
        Scmj.getInstance()._scmj._isShowGameResultScene = false
        this.node.stopAllActions()
    }

    init_self_view_chair_id(server_chair_id) {
        this.chairId = server_chair_id
    }

    //结算事件
    OperateScoreNoti(msg: proto_mj.IOpScoreNot) {
        let settlement = this.node
        for (const score of msg.score) {
            
            if (score.opcode == OperatorCode.OP_HU_ZIMO || score.opcode == OperatorCode.OP_HU_DIANPAO 
                || score.opcode == OperatorCode.OP_HU_AFTER_KONG_TURN ) {
                //桌面清理
                //izx.dispatchEvent(SCMJ_EVENT.GAME_DESK_CLEAR, {})
                //胡牌得人
                let viewChairId = this.s2c(score.receiveChairID)
                let hbAreaReveive = this.node.getChildByName("hbArea"+viewChairId)
                for (const sendChairID of score.sendChairIDs) {
                    //被胡牌得人
                    let viewSendChairId = this.s2c(sendChairID.chairID)
                    let hbAreaSend = this.node.getChildByName("hbArea"+viewSendChairId)
                    
                    for (let i = 0; i < 10; i++) {
                        let hbNode = new cc.Node()
                        let sprite = hbNode.addComponent(cc.Sprite)
                        let pic = scmjUtil.loadPic("pics/atlas_images/preload/settlement/win_hongbao")
                        sprite.spriteFrame = <cc.SpriteFrame>pic
                        hbNode.position = hbAreaSend.position
                        settlement.addChild(hbNode);
                        hbNode.runAction(cc.sequence(
                            cc.delayTime(0.08 * i),
                            cc.bezierTo(1, [new cc.Vec2(hbAreaSend.x, hbAreaSend.y), cc.v2(0, cc.view.getFrameSize().height / 2), new cc.Vec2(hbAreaReveive.x, hbAreaReveive.y)]),
                            cc.callFunc(function () {
                                settlement.removeChild(hbNode)
                            }))
                        )
                    }
                }
            }
        }
    }

    settlement(msg: proto_mj.GameResultNot) {
        Scmj.getInstance()._scmj._isShowGameResultScene = true
        //cc.find("mask", this.node).active=true

        let scores: proto_mj.OpScoreNot = proto_mj.OpScoreNot.create(null)
        let OpScore: proto_mj.OpScore = proto_mj.OpScore.create(null)
        if (msg.huType == 0) {
            OpScore.opcode = OperatorCode.OP_HU_ZIMO
            OpScore.receiveChairID = msg.huChair
        } else if (msg.huType == 1) {
            OpScore.opcode = OperatorCode.OP_HU_DIANPAO
            OpScore.receiveChairID = msg.huChair
        }
        msg.result.forEach(ele => {

            if (ele.score < 0) {
                OpScore.sendChairIDs.push(new proto_mj.Score({ chairID: ele.chairId, score: ele.score }))
            }

        })
        scores.score.push(OpScore)
        if (msg.huType != -1) {
            // 播放结算动画
            this.OperateScoreNoti(scores)
        }

        for (let i = 0; i < 4; i++) {
            let dragon = this.node.getChildByName("settlement_play_" + i)
            dragon.getChildByName("settlementDragon").removeAllChildren()
        }

        msg.result.forEach(element => {
            // 大众麻将:0分暂时不显示动画，因为吃碰杠分在游戏中已经结算，此处只结算胡牌番，所有只有赢家和输家
            let viewChairId = this.s2c(element.chairId) 
            let dragonDisplay = this.node.getChildByName("settlement_play_" + viewChairId)
            if(element.chairId == msg.huChair) {
                //龙骨动画资源 胡
                let jiesuandonghua_hu = cc.instantiate(this.jiesuandonghua_hu)
                dragonDisplay.getChildByName("settlementDragon").addChild(jiesuandonghua_hu)
                //字体
                dragonDisplay.getChildByName("hongbao_num").getComponent(cc.Label).font = this.huFont
  
            } else {
                //龙骨动画资源 输
                let jiesuandonghua_shu = cc.instantiate(this.jiesuandonghua_shu)
                dragonDisplay.getChildByName("settlementDragon").addChild(jiesuandonghua_shu)
                //字体
                dragonDisplay.getChildByName("hongbao_num").getComponent(cc.Label).font = this.shuFont
            }
            if (element.score > 0) {
                dragonDisplay.getChildByName("hongbao_num").getComponent(cc.Label).string = "+" + izx.getMoneyformat(Number(element.score))
            } else if (element.score == 0)  {
                dragonDisplay.getChildByName("hongbao_num").getComponent(cc.Label).string = "-" + izx.getMoneyformat(Number(element.score))
            } else {
                dragonDisplay.getChildByName("hongbao_num").getComponent(cc.Label).string = izx.getMoneyformat(Number(element.score))
            }

            let params = izx.getData("onlineParam")
            if (params && params.showshop == 1) {
                dragonDisplay.getChildByName("hongbao").active = false
            }
            dragonDisplay.active=true
        });

        if (msg.huType == -1) {
            this.node.getChildByName("liujuDragon").active=true
        }
        
        let self = this
        this.node.runAction(cc.sequence(
            cc.delayTime(2),
            cc.callFunc(function () {
                self.node.getChildByName("BtnReady").active=true
            }))
        )

        izx.dispatchEvent(Constants.EventName.AD_SPOT_Zhuan_Pan_Chou_Jiang_Req,{
            uid : izx.user.uid
        })

        izx.dispatchEvent(SCMJ_EVENT.UPDATE_USER_TUOGUAN, {status: false})
    }

    onComplete (res) {
        
    }

    s2c(index) {
        let maxPlyNum = 4
        izx.logI("this.chairId==s2c",this.chairId)
        return (index - this.chairId + maxPlyNum) % maxPlyNum
    }
    
    c2s(index) {
        let maxPlyNum = 4
        izx.logI("this.chairId==c2s",this.chairId)
        return (this.chairId + index + maxPlyNum) % maxPlyNum
    }
}
