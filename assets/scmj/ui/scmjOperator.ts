import { CardArea, LackType, OperatorCode} from "../scmjConstants";
import Constants from "../../common/constants"
import { SCMJ_EVENT } from "../scmjEvents";
import { izx } from "../../framework/izx";
import {proto_mj} from "../protos/proto_mj"
import {ScmjType} from "./scmjTypes"

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameOperator extends cc.Component {


    vecOp: proto_mj.IOperateWrapper[] = []
    curSerialID:number = -1
    
    vecChi: proto_mj.IOperateWrapper[] = []
    vecPeng: proto_mj.IOperateWrapper[] = []
    vecGang: proto_mj.IOperateWrapper[] = []
    vecTing: proto_mj.IOperateWrapper[] = []
    vecHu: proto_mj.IOperateWrapper[] = []
    vecGuo: proto_mj.IOperateWrapper[] = []
    
    btnChi: cc.Node = null
    btnPeng: cc.Node = null
    btnGang: cc.Node = null
    btnHu: cc.Node = null
    btnTing: cc.Node = null
    btnGuo: cc.Node = null

    onLoad() {
        this.btnChi = cc.find("btnChi", this.node)
        this.btnPeng = cc.find("btnPeng", this.node)
        this.btnGang = cc.find("btnGang", this.node)
        this.btnHu = cc.find("btnHu", this.node)
        this.btnTing = cc.find("btnTing", this.node)
        this.btnGuo = cc.find("btnGuo", this.node)
        this.node.active = false

        izx.on(SCMJ_EVENT.OPERATE_REQ, this.OperateReq, this)
        izx.on(SCMJ_EVENT.OPERATE_MENU_HIDE, this.OperateHide, this)
        izx.on(SCMJ_EVENT.OPERATE_FINISH, this.OperateFinish, this)
        izx.on(SCMJ_EVENT.OPERATE_NOTI, this.OperateHideAll, this)
    }

    OperateHide() {
        this.showOperateMenu(true)
    }

    OperateFinish(msg) {
        this.showOperateMenu(false)
        this.vecChi = []
        this.vecPeng = []
        this.vecGang = []
        this.vecTing = []
        this.vecHu = []
        this.vecGuo = []
    }

    OperateReq(event: proto_mj.OperateReq) {

        this.vecChi = []
        this.vecPeng = []
        this.vecGang = []
        this.vecTing = []
        this.vecHu = []
        this.vecGuo = []

        this.vecOp = event.ops || []
        this.vecOp.forEach(element => {
            if (this.isChi(element.opcode)) {
                this.vecChi.push(element) 
            }
            if (this.isPeng(element.opcode)) {
                this.vecPeng.push(element) 
            }
            if (this.isGang(element.opcode)) {
                this.vecGang.push(element) 
            }
            if (this.isTing(element.opcode)) {
                this.vecTing.push(element) 
            }
            if (this.isHu(element.opcode)) {
                this.vecHu.push(element) 
            }
            if (this.isGuo(element.opcode)) {
                this.vecGuo.push(element)
            }
        });
        this.showOperateMenu(true)
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

    showOperateMenu(show: boolean) {
        this.node.active = show
 
        this.btnGuo.active = this.vecGuo.length > 0
        this.btnTing.active = this.vecTing.length > 0
        this.btnHu.active = this.vecHu.length > 0
        this.btnGang.active = this.vecGang.length > 0
        this.btnPeng.active = this.vecPeng.length > 0
        this.btnChi.active = this.vecChi.length > 0

        // if (!show && opcode != 0) {
        //     //this.cardLayer.removeAllHandCardMask()
        //     return
        // }

        if (this.btnTing.active && !this.btnHu.active && !this.btnGang.active && !this.btnPeng.active && !this.btnChi.active) {
            this.btnGuo.active = false
        }
    }

    OperateAck(ackOpcode, ackOpCard, ackOpSerialID) {
        let ackArr = []
        if (typeof ackOpCard === "number") {
            ackArr.push(ackOpCard)
        } else {
            ackArr =  ackOpCard
        }
        izx.dispatchEvent(SCMJ_EVENT.OPERATE_ACK,{
            opCode: ackOpcode,
            cards: ackArr,
            serial:ackOpSerialID})
    }
    
    onPressGuo() {
        this.showOperateMenu(false)
        if (this.vecGuo.length > 0) {
            let clickInfo = this.vecGuo[0]
            this.OperateAck(clickInfo.opcode, clickInfo.card, clickInfo.serial)
        }
        //this.hideTingCardsLayer()
    }

    onPressHu() {
        this.showOperateMenu(false)
        if (this.vecHu.length > 0) {//只有一张胡
            let clickInfo = this.vecHu[0]
            this.OperateAck(clickInfo.opcode, clickInfo.card, clickInfo.serial) 
        }
    }
    onPressPeng() {
        this.showOperateMenu(false)
        if (this.vecPeng.length > 0) {//只有一种碰
            let clickInfo = this.vecPeng[0]
            this.OperateAck(clickInfo.opcode, clickInfo.card, clickInfo.serial)
        }
    }
    onPressGang() {
        this.showOperateMenu(false)
        //若只有一种杠牌，则直接杠
        if (this.vecGang.length == 1) {
            let clickInfo = this.vecGang[0]
            this.OperateAck(clickInfo.opcode, clickInfo.card, clickInfo.serial)
            return
        }
        //this.showOperateMenu(true, OperatorCode.GIVEUP)
        
        izx.dispatchEvent(SCMJ_EVENT.OPERATE_MENU_ChiGang, new ScmjType.OperateChoose(ScmjType.OPType.GANG, this.vecGang))
    }
    onPressChi() {
        this.showOperateMenu(false)
        //若只有一种吃牌方式，直接吃牌
        if (this.vecChi.length == 1) {
            let clickInfo = this.vecChi[0]
            this.OperateAck(clickInfo.opcode, clickInfo.card, clickInfo.serial)
            return
        }

        //this.showOperateMenu(true, OperatorCode.GIVEUP)
        
        izx.dispatchEvent(SCMJ_EVENT.OPERATE_MENU_ChiGang, new ScmjType.OperateChoose(ScmjType.OPType.CHI, this.vecChi))
    }
    onPressTing() {
        this.showOperateMenu(false)
        
        //this.showOperateMenu(true, OperatorCode.OP_GIVEUP)
        
        //this.CardLayer.addNoLimitMasks(this.vecTing, true)
        //this.showOperateLayer(3, this.vecTing)

        izx.dispatchEvent(SCMJ_EVENT.OPERATE_MENU_Ting, {operFlag: 3, vecDatas: this.vecTing})
    }

    OperateHideAll(msg: proto_mj.IOperateNot) {
        if (msg.opCode == OperatorCode.OP_HU_DIANPAO || msg.opCode == OperatorCode.OP_HU_AFTER_KONG_TURN || msg.opCode == OperatorCode.OP_HU_ZIMO 
            || msg.opCode == OperatorCode.OP_CHOW_OXX || msg.opCode == OperatorCode.OP_CHOW_XOX || msg.opCode == OperatorCode.OP_CHOW_XXO
            || msg.opCode == OperatorCode.OP_PONG || msg.opCode == OperatorCode.OP_KONG_TURN_RECOVER_TO_PONG
            || msg.opCode == OperatorCode.OP_KONG || msg.opCode == OperatorCode.OP_KONG_DARK || msg.opCode == OperatorCode.OP_KONG_TURN) {
                
            this.node.active = false
            this.btnGuo.active = false 
            this.btnTing.active = false 
            this.btnHu.active = false 
            this.btnGang.active = false 
            this.btnPeng.active = false 
            this.btnChi.active = false 

            this.vecGuo = []
            this.vecTing = []
            this.vecHu = []
            this.vecGang = []
            this.vecPeng = []
            this.vecChi = []
        }
    }

    onDestroy() {
        izx.offByTag(this)
    }
    
}