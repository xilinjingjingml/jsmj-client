import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import Constants, { AdPos, COMMON_CONSTANT } from "../../common/constants";
import { AdAreaId } from "../constants_lobby_scene";
import { AD_EVENT } from "../../ad/adEvents";
import {LOBBY_SCENE_EVENT} from "../evnets_lobby_scene";


const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyScene extends BaseUi {

    @property(cc.Label)
    lblNotice:cc.Label=null

    @property(cc.SpriteFrame)
    vip1 = null
    @property(cc.SpriteFrame)
    vip2 = null
    @property(cc.SpriteFrame)
    vip3 = null
    @property(cc.SpriteFrame)
    vip4 = null
    @property(cc.SpriteFrame)
    vip5 = null
    @property(cc.SpriteFrame)
    vip6 = null
    @property(cc.SpriteFrame)
    vip7 = null
    @property(cc.SpriteFrame)
    vip8 = null
    @property(cc.SpriteFrame)
    vip9 = null
    @property(cc.SpriteFrame)
    vip10 = null


    btnVip: cc.Node = null; // vip按钮
    btnSVip: cc.Node = null; // 升vip按钮
    btnQd: cc.Node = null; // 签到按钮

    btnRw: cc.Node = null; // 任务按钮
    btnHd: cc.Node = null; // 活动按钮
    btnKf: cc.Node = null; // 客服按钮
    btnSz: cc.Node = null; // 设置按钮

    sptTip1: cc.Node = null
    lblTip1: cc.Node = null
    sptTip2: cc.Node = null
    lblTip2: cc.Node = null
    playingAni: boolean = true

    onLoad () {
    }
   
    onOpen() {

        this.btnVip = cc.find("centerArea/topArea/btnVipLevel", this.node);
        this.btnSVip = cc.find("centerArea/topArea/btnLayout/btnShenVip", this.node);
        this.btnQd = cc.find("centerArea/topArea/btnLayout/btnQianDao", this.node);
        this.btnRw = cc.find("bottomArea/layBottom/btnTask", this.node);
        this.btnHd = cc.find("bottomArea/layBottom/btnActivity", this.node);
        this.btnKf = cc.find("bottomArea/layBottom/btnKefu", this.node);
        this.btnSz = cc.find("bottomArea/moreArea/btnSetting", this.node);

        this.sptTip1 = this.node.getChildByName("SptTip1")
        this.lblTip1 = this.sptTip1.getChildByName("LblTip")
        this.sptTip2 = this.node.getChildByName("SptTip2")
        this.lblTip2 = this.sptTip2.getChildByName("LblTip")


        this.initEvent()
        this.initButton()
        izx.dispatchEvent(Constants.EventName.ROOM_LIST_REQ)

        //刷新notice
        this.refreshNotice();
        this.refreshVipLevel()
        this.updateSVipAwardNot()
        this.updateBtnQuickStartDesc()

        if (this.initParam) {
            this.showAwardsTip(this.initParam)
        }

        izx.dispatchEvent(LOBBY_SCENE_EVENT.GET_ACTIVITY_PROGRESS_REQ, {
            type: 0,
            uid: izx.user.uid,
        })
    }

    initTop() {
    }
    initHeadInfo() {        
    }

    initEvent() {
        izx.on(Constants.EventName.SERVER_UPDATE, this.updateSvrList, this)
        izx.on(Constants.EventName.SERVER_LIST_RSP, this.updateDdzSvr, this)

        izx.on(Constants.EventName.ROOM_READY_SUCC, () => {
            izx.dispatchEvent(Constants.EventName.ROOM_LIST_REQ)
        }, this)
        izx.on(Constants.EventName.ROOM_LIST_RSP, this.updateRoom, this)

        izx.dispatchEvent(Constants.EventName.SERVER_LIST_REQ, { game: "jsmj.bxp"})
        izx.on(Constants.EventName.AD_SPOT_Deng_Lu_Jiang_Li_Ack, this.denglujiangliHandler, this)

        izx.on(Constants.EventName.REFRESH_ITEM_VIP, this.refreshVipLevel, this)
        izx.on(LOBBY_SCENE_EVENT.GET_ACTIVITY_PROGRESS_RSP, this.getActivityProgressRsp, this)
        izx.on(Constants.EventName.REFRESH_ITEM_JINBI, this.updateBtnQuickStartDesc, this)

        izx.on(LOBBY_SCENE_EVENT.AWARDS_TIP_NOT, this.showAwardsTip, this)
        izx.on(AD_EVENT.GET_AD_SPOT_ACK, this.updateSVipAwardNot, this)

    }
    denglujiangliHandler(msg) {
        izx.pushDialog("qiandao", "prefabs/qiandaoDialog", null, { initParam: msg,mask:true, maskClose:true })
    }
    initButton() {
        
        izx.bindButtonClick("topArea/userArea/headMask/sptHead", this.node, () => {
            izx.pushDialog("personal", "prefabs/PersonalMain")
        })

        izx.bindButtonClick("topArea/jbArea/btnShop", this.node, () => {
            izx.pushDialog("shop", "prefabs/ShopScene")
        })
        izx.bindButtonClick("topArea/zsArea/btnShop", this.node, () => {
            izx.pushDialog("shop", "prefabs/ShopScene")
        })

        izx.bindButtonClick("centerArea/topArea/btnLayout/btnZhuanPan", this.node, () => {
            izx.pushDialog("zhuanpan", "prefabs/zhuanpanDialog")
        })

        izx.bindButtonClick("centerArea/topArea/btnLayout/btnYingXin", this.node, () => {
            izx.pushDialog("yingxin", "prefabs/yingxinDialog")
        })

        izx.bindButtonClick("centerArea/topArea/btnLayout/btnQianDao", this.node, () => {
            //izx.pushDialog("qiandao", "prefabs/qiandaoDialog")
            izx.dispatchEvent(Constants.EventName.AD_SPOT_Deng_Lu_Jiang_Li_Req, {
                uid: izx.user.uid
            })
        })

        izx.bindButtonClick("centerArea/topArea/btnLayout/btnShenVip", this.node, () => {
            izx.pushDialog("vip", "prefabs/SendVipMain")
        })

        izx.bindButtonClick("centerArea/topArea/btnVipLevel", this.node, () => {
            izx.BlockUI({timeout:3})
            izx.pushDialog("vip", "prefabs/VipMain")
        })

        izx.bindButtonClick("centerArea/topArea/btnLayout/btnRank", this.node, () => {
            izx.pushDialog("rank", "prefabs/rankDialog")
        })

        izx.bindButtonClick("centerArea/rightArea/dzmjGame", this.node, () => {
        //    izx.dispatchEvent(Constants.EventName.GAME_SHOW_MAIN)
            izx.LoadBundle("scmj")
            // izx.dispatchEvent(Constants.EventName.ROOM_READY_TO_GAME, { gameId: "dzmj", ruleId: "dzmj.redpack.xs" })
        })

        izx.bindButtonClick("bottomArea/layBottom/btnPack", this.node, () => {
            izx.pushDialog("beibao", "prefabs/BeiBao")
        })

        izx.bindButtonClick("bottomArea/layBottom/btnTask", this.node, () => {
            izx.pushDialog("task", "prefabs/TaskMain")
        })

        izx.bindButtonClick("bottomArea/layBottom/btnActivity", this.node, () => {
            izx.pushDialog("activity", "prefabs/ActivityMain")
        })

        izx.bindButtonClick("bottomArea/layBottom/btnKefu", this.node, () => {
            izx.pushDialog("kefu", "prefabs/kefuDialog")
        })

        izx.bindButtonClick("bottomArea/layBottom/btnMore", this.node, () => {
            const bool = cc.find("bottomArea/moreArea", this.node).active
            cc.find("bottomArea/moreArea", this.node).active = !bool
        })

        izx.bindButtonClick("bottomArea/moreArea/btnSetting", this.node, () => {
            izx.pushDialog("setting", "prefabs/settingDialog")
            cc.find("bottomArea/moreArea", this.node).active = false
        })

        izx.bindButtonClick("bottomArea/moreArea/btnGonggao", this.node, () => {
            izx.pushDialog("gonggao", "prefabs/GongGaoMain")
            cc.find("bottomArea/moreArea", this.node).active = false
        })

        izx.bindButtonClick("bottomArea/moreArea/btnRenzheng", this.node, () => {
            izx.pushDialog("idcard", "prefabs/IdCardAward")
            cc.find("bottomArea/moreArea", this.node).active = false
        })
    }

    refreshVipLevel() {
        let vipLevel = izx.item.getItemNum(COMMON_CONSTANT.ITEM_VIP)
        if (vipLevel > 0 && vipLevel <= 10) {
        this.btnVip.getComponent(cc.Sprite).spriteFrame = this["vip" + vipLevel]
        } else {
        this.btnVip.getComponent(cc.Sprite).spriteFrame = this["vip1"]
        }
      }

    updateUserMoney(msg) {
        let str = "uid:" + izx.user.uid + " sex:" + msg.sex + " money:" + msg.money
        cc.find("msg", this.node).getComponent(cc.Label).string = str
    }

    udpateToken(msg) {
        let str = "item id:" + msg.id + " num:" + msg.num
        cc.find("msg", this.node).getComponent(cc.Label).string = str
    }

    updateSvrList(msg) {
        izx.dispatchEvent(Constants.EventName.SERVER_LIST_REQ, {game: "ddz.bxp"})
    }

    updateDdzSvr(msg) {
        // let list = msg.list
        // if (!list || list.length === 0)
        //     return
        
        // let content = cc.find("scrollView/view/content", this.node)
        // let item = cc.find("scrollView/view/content/item", this.node)
        // item.active = false

        // for (let svr of list) {
        //     let nItem = cc.instantiate(item)
        //     nItem.active = true
        //     nItem.getChildByName("svr").getComponent(cc.Label).string = 
        //         svr.name + " bet:" + svr.bet + " limit:" + svr.minLimit + "-" + svr.maxLimit

        //     izx.bindButtonClick("btn", nItem, (sender, data) => {
        //         izx.log(svr.svrTyps)
        //         izx.dispatchEvent(Constants.EventName.ROOM_READY_TO_GAME, {gameId: "ddz", serverType: svr.svrTyps})
        //     })

        //     content.addChild(nItem)
        // }
    }

    updateRoom(msg) {
        let list = msg.list
        if (!list || list.length === 0)
            return
        
        let content = cc.find("scrollView/view/content", this.node)
        let item = cc.find("scrollView/view/item", this.node)
        item.active = false
        content.removeAllChildren()
        for (let room of list) {
            // int32 gameId = 1;
            // string roomId = 2;
            // string route = 3;
            // string metaData = 4;

            let nItem = cc.instantiate(item)
            nItem.active = true
            nItem.getChildByName("svr").getComponent(cc.Label).string = 
                "svr:" + room.ruleId + " roomId: " + room.roomId

            izx.bindButtonClick("btn", nItem, (sender, data) => {
                izx.dispatchEvent(Constants.EventName.ROOM_ENTER_REQ, {gameId: room.gameId, roomId: room.roomId})
            })

            content.addChild(nItem)
        }
    }

    refreshNotice () {
        let noticeStr = "欢迎进入金山麻将，祝您游戏愉快"
        // for (let i = 0; i < 5; ++i) {
        //     noticeStr += "恭喜用户 ID"+ Math.round(Math.random() * 1000) + "**** 成功兑换200元红包;    "
        // }
        this.lblNotice.string = noticeStr

    }

    update(dt) {
        var x = this.lblNotice.node.x;
        x -= dt * 100;
    
        if (x + this.lblNotice.node.width < -2000) {
          x = 360;
        }
        this.lblNotice.node.x = x;
      }

    updateSVipAwardNot() {
        let adInfo = izx.ad.getAreaInfo(AdPos.Vip)
        izx.log("updateSVipAwardNot adInfo = ", adInfo)

        if (this.initParam) {
            if (adInfo.curNum >= adInfo.maxNum) {
            this.initParam.forEach((v: any) => {
                if (v.target == "btnSVip") {
                v.haveRewards = false
                }
            })
            } else {
            let bExist = false
            this.initParam.forEach((v: any) => {
                if (v.target == "btnSVip") {
                bExist = true
                }
            })
            if (!bExist) {
                let SVipAwardNot = {
                haveRewards: true,
                target: "btnSVip",
                align: 0,
                desc: "VIP可以升级啦~",
                style: 2,
                flip: true,
                }
                this.initParam.push(SVipAwardNot)
            }
            }
            this.showAwardsTip(this.initParam)
        }
    }

    showAwardsTip(msg) {
        // 显示隐藏小红点
        msg.forEach((v) => {
          if (this[v.target]) {
            this[v.target].getChildByName("SptRedDot").active = v.haveRewards
          }
        })
    
        if (!this.playingAni) {
          return
        }
        this.playingAni = false
    
        // // 显示tips
        // let obj = msg[this.random(0, msg.length)]
        // if (!obj) {
        //   return
        // }
        // let curLblTip = this["lblTip" + obj.style]
        // let curSptTip = this["sptTip" + obj.style]
        // if (obj.haveRewards) {
        //   curLblTip.getComponent(cc.Label).string = obj.desc
        //   let worldPos = this[obj.target].parent.convertToWorldSpaceAR(this[obj.target].position)
        //   let localPos = this.node.convertToNodeSpaceAR(worldPos)
        //   if (1 == obj.align) {
        //     curSptTip.setAnchorPoint(0, 0.5)
        //     curSptTip.setPosition(localPos.x + 35, localPos.y)
        //   } else if (2 == obj.tipsAlign) {
        //     curSptTip.setAnchorPoint(1, 0.5)
        //     curSptTip.setPosition(localPos.x - 35, localPos.y)
        //   } else {
        //     curSptTip.setAnchorPoint(0.2, 0)
        //     curSptTip.setPosition(localPos.x, localPos.y + this[obj.target].height / 2)
        //   }
        //   if (obj.flip) {
        //     curSptTip.scaleX = -1
        //     curLblTip.scaleX = -1
        //   } else {
        //     curSptTip.scaleX = 1
        //     curLblTip.scaleX = 1
        //   }
        //   curSptTip.active = true
        //   curSptTip.runAction(cc.sequence(
        //       cc.fadeIn(0.5).easing(cc.easeBackOut()),
        //       cc.delayTime(4),
        //       cc.fadeOut(0.5),
        //       cc.delayTime(1),
        //       cc.callFunc(() => {
        //         this.playingAni = true
        //         this.showAwardsTip(msg)
        //       }),
        //   ))
        // } else {
        //   curSptTip.active = false
        //   this.scheduleOnce(() => {
        //     this.playingAni = true
        //     this.showAwardsTip(msg)
        //   }, 1)
        // }
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getActivityProgressRsp(msg) {
        if (!msg || msg.length === 0)
          return
          
        for (let activity of msg) {
          if (activity.type == 3) { // 限时活动
            if (activity.status == 2) { // 可领取
              // 拜财神
              let curDate = new Date()
              let curHour = curDate.getHours()
              let times = activity.title.split(",")
              if ((curHour >= Number(times[0]) && curHour <= Number(times[1])) || (curHour >= Number(times[2]) && curHour <= Number(times[3]))) {
                //if (!izx.isInGameScene) {
                  izx.dispatchEvent(Constants.EventName.ACTIVITY_SHOW_BCS, msg)
               // }
              }
              break
            }
          }
        }
    }

    updateBtnQuickStartDesc() {
        // izx.log("updateBtnQuickStartDesc")
        // let xlch = izx.dataMgr.getServerList("xlch")
        // if (!xlch) {
        //   return
        // }
        // let server = izx.dataMgr.getBestServer(xlch, izx.user.money)
        // if (!server) {
        //   return
        // }
        // let tip = cc.find("NodeCenterArea/NodeRight/DownArea/QuickStart/BtnStart/LblTip", this.node)
        // tip.getComponent(cc.Label).string = xlch.name + server.name
    }
      
}
