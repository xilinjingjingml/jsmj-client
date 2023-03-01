import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import Constants from "../../common/constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyScene extends BaseUi {

    @property(cc.Label)
    lblNotice:cc.Label=null

    onLoad () {
        if (cc.winSize.width < 720) {
            this.node.getChildByName("content").setScale(0.8, 0.9)
        } 
        //刷新notice
        this.refreshNotice();
    }
   
    onOpen() {
        this.initEvent()
        this.initTop()
        this.initButton()
        this.initHeadInfo()
        // izx.dispatchEvent(Constants.EventName.ROOM_LIST_REQ)
    }

    initTop() {
        let params = izx.getData("onlineParam")
        if (params && params.showshop == 1) {
            cc.find("top/userinfo/hbicon", this.node).active = false
            cc.find("top/cashBtn", this.node).active = false
            cc.find("top/qiandaoBtn", this.node).active = false

            cc.find("bottom/content/shopBtn", this.node).active = true
        } else {
            cc.find("top/userinfo/hbicon", this.node).active = true
            cc.find("top/cashBtn", this.node).active = true
            cc.find("top/qiandaoBtn", this.node).active = true

            cc.find("bottom/content/shopBtn", this.node).active = false
        }  
    }
    initHeadInfo() {        
        cc.find("top/userinfo/nickName", this.node).getComponent(cc.Label).string = "ID:"+izx.user.uid
        cc.find("top/userinfo/money", this.node).getComponent(cc.Label).string = izx.getMoneyformat(izx.user.money)


        // izx.user.feed(["money", "sex"], this.updateUserMoney, this)       
        // cc.tween(this).delay(3).call(() => izx.user.money = 10000).start()
        // izx.item.feed(0, this.udpateToken, this)
        // cc.tween(this).delay(5).call(() => izx.item.setItem({id: 0, num: 100})).start()
    }

    initEvent() {
        izx.on(Constants.EventName.SERVER_UPDATE, this.updateSvrList, this)
        izx.on(Constants.EventName.SERVER_LIST_RSP, this.updateDdzSvr, this)

        izx.on(Constants.EventName.ROOM_READY_SUCC, () => {
            izx.dispatchEvent(Constants.EventName.ROOM_LIST_REQ)
        }, this)
        izx.on(Constants.EventName.ROOM_LIST_RSP, this.updateRoom, this)

        izx.dispatchEvent(Constants.EventName.SERVER_LIST_REQ, { game: "jsmj.bxp"})
    }

    initButton() {
        izx.bindButtonClick("create", this.node, () => {
            izx.dispatchEvent(Constants.EventName.ROOM_READY_TO_GAME, { gameId: "", ruleId: "dzmj.redpack.xs"})
        })
        izx.bindButtonClick("list", this.node, () => {
            izx.dispatchEvent(Constants.EventName.ROOM_LIST_REQ)
        })

        izx.bindButtonClick("top/cashBtn", this.node, () => {
            izx.pushDialog("cashout", "prefabs/cashDialog")
        })

        izx.bindButtonClick("top/qiandaoBtn", this.node, () => {
            izx.pushDialog("qiandao", "prefabs/qiandaoDialog")
        })

        izx.bindButtonClick("content/right/mjRules", this.node, () => {
            izx.pushDialog("rule", "prefabs/ruleDialog")
        })

        izx.bindButtonClick("content/right/mjGame", this.node, () => {
        //    izx.dispatchEvent(Constants.EventName.GAME_SHOW_MAIN)
            izx.LoadBundle("scmj")
            // izx.dispatchEvent(Constants.EventName.ROOM_READY_TO_GAME, { gameId: "dzmj", ruleId: "dzmj.redpack.xs" })

        })

        //izx.bindButtonClick("bottom/rankBtn", this.node, () => {
        //    izx.pushDialog("rank", "prefabs/rankDialog")
        //})

        izx.bindButtonClick("bottom/content/settingBtn", this.node, () => {
            izx.pushDialog("setting", "prefabs/settingDialog")
        })

        izx.bindButtonClick("bottom/content/shopBtn", this.node, () => {
            izx.pushDialog("shop", "prefabs/ShopScene")
        })

        izx.bindButtonClick("bottom/content/kefuBtn", this.node, () => {
            izx.pushDialog("kefu", "prefabs/kefuDialog")
        })
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
                izx.dispatchEvent(Constants.EventName.ROOM_ENTER_REQ, { gameId: room.gameId, roomId: izx.urlParams["roomId"] || room.roomId})
            })

            content.addChild(nItem)
        }
    }

    refreshNotice () {
        let noticeStr = ""
        for (let i = 0; i < 5; ++i) {
            noticeStr += "恭喜用户 ID"+ Math.round(Math.random() * 1000) + "**** 成功兑换200元红包;    "
        }
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

}
