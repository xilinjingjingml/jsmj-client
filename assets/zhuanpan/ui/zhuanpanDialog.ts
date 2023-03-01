import Constants from "../../common/constants";
import adSpot = require("../../common/protos/ad-spot")
import { AdOrderState } from "../../common/protos/ad-order";
import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { Types } from "../../framework/plugin/pluginTypes"
import adOrder = require("../../common/protos/ad-order")

const {ccclass, property} = cc._decorator;

@ccclass
export default class zhuanpanDialog extends BaseUI {

    @property(cc.Node)
    nodeZhuanpan:cc.Node = null

    @property([cc.Label])
    descArr: cc.Label[] = [];

    @property([cc.SpriteFrame])
    hbArr: cc.SpriteFrame[] = [];

    nextForward:number = 0

    ackParams: adSpot.IGetZhuanPanChouJiangAck= {}
    adStatus:number = 0//0:初始化，1视屏播放成功，2视屏播放失败，3错误


    curSpeed:number = 0 // 当前速度
    wheelState: number = 1 // 1:加速状态 2：减速状态

    curRotation: number = 0 // 当前旋转的角度
    maxSpeed: number = 10 // 最大的速度

    /**加速度 **/
    acc = 1
    accAngle: number = 1 * 360 // 加速转的角度
    decAngle: number = 1 * 360 // 减速转的角度
    
    springback: boolean = false
    maxSpeedRun: boolean = true
    isPlay: boolean = false
    finalAngle: number // 旋转的角度
    OnEndCallBack:Function

    gameAdId: string = "111"

    start() {
        izx.ad.showBanner()
    }

    onClose() {
        izx.ad.hideBanner()
    }

    onOpen () {
        this.initEvent()
        this.initButton()
        izx.dispatchEvent(Constants.EventName.AD_SPOT_Zhuan_Pan_Chou_Jiang_Req,{
            uid : izx.user.uid
        })
    }

    initEvent() {
        izx.on(Constants.EventName.AD_SPOT_Zhuan_Pan_Chou_Jiang_Ack, this.initParams, this)
        izx.on(Constants.EventName.UPDATE_AD_ORDER_STATUS_ACK, this.updateAdOrderStatusAck, this)
        izx.on(Constants.EventName.GET_AD_ORDER_AWARD_ACK, this.getAdOrderAwardAck, this)
        izx.on(Constants.EventName.AD_SPOT_Zhuan_Pan_Get_Award_Ack, this.getAdOrderAwardAck, this)
        izx.on(Constants.EventName.AD_ORDER_CURRENT_AD_CALLBACK_INFO, this.updateAdInfo, this)
    }
    initParams (msg) {
        this.ackParams = msg
        if (this.ackParams.errCode != 0) {
            this.adStatus = 3
        }

        this.ackParams.AllItems = this.ackParams.AllItems || []
        this.ackParams.AllItems.forEach((element,index) => {
            this.descArr[index].string = element.desc
            let path = "zhuanpanArea/zhuanpan_"+(index+1)+"/hb"
            let hb = cc.find(path, this.nodeZhuanpan)
            if (hb) {
                if (element.award[0] && element.award[0].index == 0 && element.award[0].num >= 5000) {
                    hb.getComponent(cc.Sprite).spriteFrame = this.hbArr[1]  
                }else {
                    hb.getComponent(cc.Sprite).spriteFrame = this.hbArr[0] 
                }  
            }
        });
    }
    initButton() {
        izx.bindButtonClick("zhuanpan/btnClose", this.node, () => {
            this.pop()
        })
        izx.bindButtonClick("zhuanpan/sptCenter", this.node, () => {
            if(this.adStatus == 0){
                this.adOrderUpdateStatus() 
            }else if(this.adStatus == 1){
            }
            else{
                izx.pushDialog("tips","prefabs/tipsDialog", null, {"initParam":{tips:this.ackParams.errMsg,callback:null}})
            }
        })
        izx.bindButtonClick("zhuanpan/sptBtn", this.node, () => {
            if(this.adStatus == 0){
                this.adOrderUpdateStatus() 
            }else if(this.adStatus == 1){
            }
            else{
                izx.pushDialog("tips","prefabs/tipsDialog", null, {"initParam":{tips:this.ackParams.errMsg,callback:null}})
            }
        })
    }

    btnClick () {
        cc.find("zhuanpan/sptXuanzhong", this.node).active = false
        //停留的随机位置
        let randomAngle = 22.5//[10,35]
        let curAngle = this.nodeZhuanpan.angle
        let curIndex = Math.floor(curAngle/45)
        let remain = curAngle - curIndex * 45
        curIndex = curIndex % 8

        this.nextForward = this.ackParams.hitIndex % 8
        let diff = this.getNextAngle(curIndex,this.nextForward)
        
        // const rotateBy01 = cc.rotateBy(clickTimes, (45-remain+randomAngle+diff))
        // const callFunc = cc.callFunc(() => {
        //     this.getAdOrderAward()
        // })
        //this.nodeZhuanpan.runAction(cc.sequence(rotateBy01,callFunc))


        this.isPlay = true
        this.OnEndCallBack = (() => {
            this.getAdOrderAward()
        })
        this.finalAngle = (45-remain+randomAngle+diff) // 旋转的角度
        this.maxSpeed = 10
        this.wheelState = 1 
        this.curSpeed = 0
        this.curRotation = this.curRotation % 360
        this.nodeZhuanpan.angle = this.curRotation
        this.maxSpeedRun = true
    }

    update(dt) {
        if (this.isPlay) {
            if (this.wheelState == 1) {
                this.curRotation = this.nodeZhuanpan.angle + this.curSpeed;
                this.nodeZhuanpan.angle = this.curRotation
                if (this.curSpeed <= this.maxSpeed) {
                    this.curSpeed += this.acc;
                } else {
                    if (this.maxSpeedRun) {
                        //若很快达到速度最大，则多增加旋转1圈
                        this.finalAngle += 360 * 1
                        this.maxSpeedRun = false
                    }
 
                    if (this.curRotation <= this.finalAngle) {
                        return;
                    }
                    //设置目标角度
                    this.maxSpeed = this.curSpeed;
                    this.nodeZhuanpan.angle = this.finalAngle;
                    this.wheelState = 2;
                }
            } else if (this.wheelState == 2) {
                const curRo = this.nodeZhuanpan.angle; 
                const hadRo = curRo - this.finalAngle;
                this.curSpeed = this.maxSpeed * ((this.decAngle - hadRo) / this.decAngle) + 0.2;
                this.nodeZhuanpan.angle = curRo + this.curSpeed;
 
                if ((this.decAngle - hadRo) <= 0) {
                    this.wheelState = 0;
                    this.nodeZhuanpan.angle = this.finalAngle;
                    cc.find("zhuanpan/sptXuanzhong", this.node).active = true
                    if (this.OnEndCallBack != null) {
                        this.OnEndCallBack();
                        this.OnEndCallBack = null
                    }
                }
            }
        }
    }

    getNextAngle (cur: number,next: number) {
        let diff = (next - cur + 8) % 8 - 1
        diff += ((Math.floor(Math.random()*100))%2+2) * 8
         
        return diff * 45
    }

    adOrderUpdateStatus() {
        // 接受看广告
        if (this.ackParams.adOrder) {
            izx.dispatchEvent(Constants.EventName.AD_ORDER_UPDATE_STATUS,  {
                uid : izx.user.uid,
                service : this.ackParams.adOrder.service,
                orderId : this.ackParams.adOrder.orderId,
                state: AdOrderState.Accept
            })        
        }
    }

    updateAdOrderStatusAck (msg) {
        if (msg.errCode == 0) {
            if (this.ackParams.adOrder) {
                izx.dispatchEvent(Constants.EventName.AD_ORDER_REGEDIT_CURRENT_AD_INFO,  {
                    uid : izx.user.uid + "",
                    service : this.ackParams.adOrder.service,
                    orderId : this.ackParams.adOrder.orderId,
                })
                izx.ad.show(this.gameAdId, {
                    uid: izx.user.uid + "",
                    service: this.ackParams.adOrder.service,
                    orderId: this.ackParams.adOrder.orderId,
                })             
            }
        }else {
            //提示
            izx.pushDialog("tips","prefabs/tipsDialog", null, {"initParam":{tips:msg.errMsg,callback:null}})
        }
    }

    updateAdInfo(msg: Types.PluginAdResultData) {
        if (msg.AdsResultCode == Types.PluginAdResultCode.RESULT_CODE_REWARTVIDEO_SUCCEES) {//激励视频广告播放成功
            this.adStatus = 1
            this.btnClick()
        } else if (msg.AdsResultCode == Types.PluginAdResultCode.RESULT_CODE_REWARTVIDEO_FAIL) {//激励视频广告播放失败
            this.adStatus = 2
        } else {
            this.adStatus = 3
        }
    }

    getAdOrderAward () {
        
        // 领取广告奖励
        if (this.ackParams.adOrder) {
            // izx.dispatchEvent(Constants.EventName.AD_ORDER_AWARD,  {
            //     uid : izx.user.uid,
            //     service : this.ackParams.adOrder.service,
            //     orderId : this.ackParams.adOrder.orderId,
            // })
            izx.dispatchEvent(Constants.EventName.AD_SPOT_Zhuan_Pan_Get_Award_Req,  {
                uid : izx.user.uid,
                service : this.ackParams.adOrder.service,
                orderId : this.ackParams.adOrder.orderId,
            })  
        }
    }

    getAdOrderAwardAck(msg: adOrder.IGetAdOrderAwardAck) {
        cc.log("getAdOrderAwardAck",msg)
        if (msg.service !== this.ackParams.adOrder.service || msg.orderId !== this.ackParams.adOrder.orderId) {
            return
        }
        //this.pop()
        if (msg.errCode == 0) {
            izx.pushDialog("bonus","prefabs/gxhdDialog", null, {"initParam":msg})
        }else {
            izx.pushDialog("tips","prefabs/tipsDialog", null, {"initParam":{tips:msg.errMsg,callback:null}})
        }
        this.adStatus = 0
        izx.dispatchEvent(Constants.EventName.AD_SPOT_Zhuan_Pan_Chou_Jiang_Req,{
            uid : izx.user.uid
        })
    }

}
