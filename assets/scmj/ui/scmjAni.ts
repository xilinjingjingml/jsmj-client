import { izx } from "../../framework/izx";
import { SCMJ_EVENT } from "../scmjEvents";
import { OperatorCode} from "../scmjConstants";
import {proto_mj} from "../protos/proto_mj"

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameAni extends cc.Component {

    @property(cc.Prefab)
    prefab_chi: cc.Prefab = null

    @property(cc.Prefab)
    prefab_peng: cc.Prefab = null

    @property(cc.Prefab)
    prefab_gang: cc.Prefab = null

    @property(cc.Prefab)
    prefab_ting: cc.Prefab = null

    @property(cc.Prefab)
    prefab_hu: cc.Prefab = null

    @property(cc.Prefab)
    prefab_zimo: cc.Prefab = null

    @property(cc.Asset)
    label_win: cc.Asset = null

    @property(cc.Asset)
    label_lose: cc.Asset = null

    disPlayAniNodes = []
    disPlayScoreNodes = []
    chairId = 0

    onLoad() {

        izx.on(SCMJ_EVENT.INIT_SELF_VIEW_SERVER_CHAIR_ID, this.init_self_view_chair_id, this)
        izx.on(SCMJ_EVENT.OPERATE_NOTI, this.OperateNoti, this)
        izx.on(SCMJ_EVENT.OP_SCORE_NOTI, this.OperateScoreNoti, this)

        for (let index = 0; index < 4; index++) {
            let pathAni = "DisplayArea"+(index+1)+"/Ani"
            let disAniNode = cc.find(pathAni, this.node)
            if (disAniNode) {
                this.disPlayAniNodes.push(disAniNode)
            }

            let pathScore = "DisplayArea"+(index+1)+"/Score"
            let disScoreNode = cc.find(pathScore, this.node)
            if (disScoreNode) {
                disScoreNode.active = false
                this.disPlayScoreNodes.push(disScoreNode)
            }
        }
    }

    init_self_view_chair_id(chairId) {
        this.chairId = chairId
    }

    isChi(opcode) {
        if (opcode == OperatorCode.OP_CHOW_OXX || opcode == OperatorCode.OP_CHOW_XOX || opcode == OperatorCode.OP_CHOW_XXO) {
            return true
        }
        return false
    }
    isPeng(opcode) {
        if (opcode == OperatorCode.OP_PONG) {
            return true
        }
        return false 
    }
    isGang(opcode) {
        if (opcode == OperatorCode.OP_KONG || opcode == OperatorCode.OP_KONG_DARK || opcode == OperatorCode.OP_KONG_TURN) {
            return true
        }
        return false  
    }
    isTing(opcode) {
        if (opcode == -1) {
            return true
        }
        return false 
    }
    isHu(opcode) {
        if (opcode == OperatorCode.OP_HU_ZIMO || opcode == OperatorCode.OP_HU_DIANPAO || opcode == OperatorCode.OP_HU_AFTER_KONG_TURN) {
            return true
        }
        return false 
    }
    isGuo(opcode) {
        if (opcode == OperatorCode.OP_GIVEUP) {
            return true
        }
        return false 
    }
    s2c(index) {
        let maxPlyNum = 4
        return (index - this.chairId + maxPlyNum) % maxPlyNum
    }
    
    c2s(index) {
        let maxPlyNum = 4
        return (this.chairId + index + maxPlyNum) % maxPlyNum
    }

    OperateScoreNoti(event: proto_mj.OpScoreNot) {
        event.score.forEach(element => {
            let loseScore = 0
            element.sendChairIDs.forEach(element1 => {
                let loseChairId = element1.chairID
                loseScore += element1.score
                let loseParent = this.disPlayScoreNodes[this.s2c(loseChairId)]
                if (loseParent) {
                    loseParent.active = true
                    
                    if (element1.score > 0) {
                        loseParent.getChildByName("ScoreLabel").getComponent(cc.Label).font = this.label_win
                        loseParent.getChildByName("ScoreLabel").getComponent(cc.Label).string = "+" + izx.getMoneyformat(Number(element1.score))
                    }else {
                        loseParent.getChildByName("ScoreLabel").getComponent(cc.Label).font = this.label_lose
                        loseParent.getChildByName("ScoreLabel").getComponent(cc.Label).string = "" + izx.getMoneyformat(Number(element1.score))
                    }
                    loseParent.getChildByName("ScoreLabel").active = true
                    loseParent.getChildByName("ScoreLabel").runAction(cc.sequence(
                        cc.delayTime(0.01), 
                        cc.moveBy(0.8,new cc.Vec2(0,80)),
                        cc.delayTime(0.7),
                        //cc.hide(),
                        cc.callFunc(function(){
                            loseParent.getChildByName("ScoreLabel").active = false
                            loseParent.getChildByName("ScoreLabel").position = new cc.Vec3(0,0,0)
                        }))
                    )

                    loseParent.getChildByName("hbIcon").active = true
                    loseParent.getChildByName("hbIcon").runAction(cc.sequence(
                        cc.delayTime(0.01), 
                        cc.moveBy(0.8,new cc.Vec2(0,80)),
                        cc.delayTime(0.7),
                        //cc.hide(),
                        cc.callFunc(function(){
                            loseParent.getChildByName("hbIcon").active = false
                            loseParent.getChildByName("hbIcon").position = new cc.Vec3(85,-25,0)
                        }))
                    )
                    
                }
            });

            let winParent = this.disPlayScoreNodes[this.s2c(element.receiveChairID)]
            if (winParent) {
                winParent.active = true
                let winScore = -loseScore
                if (winScore > 0) {
                    winParent.getChildByName("ScoreLabel").getComponent(cc.Label).font = this.label_win
                    winParent.getChildByName("ScoreLabel").getComponent(cc.Label).string = "+" + izx.getMoneyformat(Number(winScore))
                }else {
                    winParent.getChildByName("ScoreLabel").getComponent(cc.Label).font = this.label_lose
                    winParent.getChildByName("ScoreLabel").getComponent(cc.Label).string = "" + izx.getMoneyformat(Number(winScore))
                }
                winParent.getChildByName("ScoreLabel").active = true
                winParent.getChildByName("ScoreLabel").runAction(cc.sequence(
                    cc.delayTime(0.01), 
                    cc.moveBy(0.8,new cc.Vec2(0,80)),
                    cc.delayTime(0.7),
                    //cc.hide(),
                    cc.callFunc(function(){
                        winParent.getChildByName("ScoreLabel").active = false
                        winParent.getChildByName("ScoreLabel").position = new cc.Vec3(0,0,0)
                    }))
                )

                winParent.getChildByName("hbIcon").active = true
                winParent.getChildByName("hbIcon").runAction(cc.sequence(
                    cc.delayTime(0.01), 
                    cc.moveBy(0.8,new cc.Vec2(0,80)),
                    cc.delayTime(0.7),
                    //cc.hide(),
                    cc.callFunc(function(){
                        winParent.getChildByName("hbIcon").active = false
                        winParent.getChildByName("hbIcon").position = new cc.Vec3(85,-25,0)
                    }))
                )
            }
        });
    }
    OperateNoti(event) {
        let chairId = event.chairId
        let opCode = event.opCode
        let fromChairId = event.fromChairId

        let selfNode = this.disPlayAniNodes[this.s2c(chairId)]
        //let fromNode = this.disPlayAniNodes[this.s2c(fromChairId)]
        let selfItem = null
        let fromItem = null
        if (this.isChi(opCode)) {
            selfItem = cc.instantiate(this.prefab_chi)
        } else if (this.isPeng(opCode)) {
            selfItem = cc.instantiate(this.prefab_peng)
        } else if (this.isGang(opCode)) {
            selfItem = cc.instantiate(this.prefab_gang)
        } else if (this.isTing(opCode)) {
            selfItem = cc.instantiate(this.prefab_ting)
        } else if (this.isHu(opCode)) {
            if (opCode == OperatorCode.OP_HU_DIANPAO || opCode == OperatorCode.OP_HU_AFTER_KONG_TURN) {
                selfItem = cc.instantiate(this.prefab_hu)
            }else if(opCode == OperatorCode.OP_HU_ZIMO) {
                selfItem = cc.instantiate(this.prefab_zimo)
            }
        }
        
        if(selfItem) {
            selfItem.parent = selfNode
            let ske = selfItem.getComponent(sp.Skeleton)
            ske.setEndListener(function(){
                cc.log("setEnd");
            });
            ske.setCompleteListener(function(){
                cc.log("play_once");
                selfNode.removeAllChildren()
            });
        }
        
    }

    start() {

    }
}