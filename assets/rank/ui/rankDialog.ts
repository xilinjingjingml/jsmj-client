import baseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import Constants from "../../common/constants";
import BaseMode from "../../framework/base/baseMode";

import proto = require("../protos/lobby-rank")
import Rank from "../mode/rank";
import RankItem from "./rankItem";
import RankItem1 from "./rankItem1";
import { Rank_EVENT } from "../evnets_rank";
import { utils } from "../../framework/util/utils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RankDialog extends baseUI {

    _rank : Rank = null

    beginTime = null
    endTime = null
    current : number = 0


    xzddMsg : any
    xlchMsg : any
    dzmjMsg : any
    caifuMsg : any

    @property([cc.Label])
    timeRange : cc.Label[] = []
    @property(cc.Label)
    myIndex: cc.Label = null
    @property(cc.Sprite)
    myTx: cc.Sprite = null
    @property(cc.Label)
    myName: cc.Label = null
    @property(cc.Label)
    myMoneyNum: cc.Label = null
    @property([cc.SpriteFrame])
    defaultTx : cc.SpriteFrame[] = []

    @property(cc.ScrollView)
    scrollView_xzdd : cc.ScrollView = null
    @property(cc.ScrollView)
    scrollView_xlch : cc.ScrollView = null
    @property(cc.ScrollView)
    scrollView_dzmj : cc.ScrollView = null
    @property(cc.ScrollView)
    caifuScrollView : cc.ScrollView = null
    
    @property(cc.Prefab)
    rankPrefab:cc.Prefab = null
    @property(cc.Prefab)
    rankPrefab1:cc.Prefab = null

    @property(cc.ToggleContainer)
    toggler:cc.ToggleContainer = null

    currentScroll:cc.ScrollView=null

    onLoad() {
        this._rank = new Rank()
        //this._rank.GetWinMoneyRankReq("ddz")

        //console.log(utils.getWeekByMonth(2020,11,3))
        this.current = this.getYearWeek(new Date())

        this.initEvent()
        this.initButton()
        this.currentScroll = this.scrollView_xzdd
    }

    initEvent() {
        izx.on(Rank_EVENT.LOBBY_SHOW_WIN_RSP, this.showWin, this)    
    }

    initButton() {
        izx.bindButtonClick("rank/topArea/toggleArea/yingli", this.node, () => {

            if ( this.currentScroll != this.caifuScrollView) {
                return 
            }

            this.currentScroll = this.scrollView_xzdd

            if (this.scrollView_xzdd.content.children.length <= 0) {
                this._rank.GetWinMoneyRankReq("xzdd")
            } else {
                cc.find("rank/zwjl", this.node).active = false
            }
            
            this.caifuScrollView.node.active = false
            this.scrollView_xzdd.node.active = true
            this.scrollView_xlch.node.active = false
            this.scrollView_dzmj.node.active = false

            cc.find("rank/topArea/gameArea", this.node).active = true
            cc.find("rank/topArea/timeArea", this.node).active = true

            this.toggler.toggleItems[0].isChecked = true
            this.toggler.toggleItems[1].isChecked = false
            this.toggler.toggleItems[2].isChecked = false
        })

        izx.bindButtonClick("rank/topArea/toggleArea/caifu", this.node, () => {

            if ( this.currentScroll == this.caifuScrollView) {
                return 
            }

            this.currentScroll = this.caifuScrollView
            if (this.caifuScrollView.content.children.length <= 0) {
                this.showCaifu({})
            } else {
                cc.find("rank/zwjl", this.node).active = false
            }

            this.scrollView_xzdd.node.active = false
            this.scrollView_xlch.node.active = false
            this.scrollView_dzmj.node.active = false
            this.caifuScrollView.node.active = true

            cc.find("rank/topArea/gameArea", this.node).active = false
            cc.find("rank/topArea/timeArea", this.node).active = false


        })
        
        izx.bindButtonClick("rank/topArea/gameArea/xzdd", this.node, () => {

            this.currentScroll = this.scrollView_xzdd

            if (this.scrollView_xzdd.content.children.length <= 0) {
                this._rank.GetWinMoneyRankReq("xzdd")
            } else {
                cc.find("rank/zwjl", this.node).active = false
            }
            this.scrollView_xzdd.node.active = true
            this.scrollView_xlch.node.active = false
            this.scrollView_dzmj.node.active = false
            this.caifuScrollView.node.active = false
            
        })
        izx.bindButtonClick("rank/topArea/gameArea/xlch", this.node, () => {

            this.currentScroll = this.scrollView_xlch

            if (this.scrollView_xlch.content.children.length <= 0) {
                this._rank.GetWinMoneyRankReq("xlch")
            } else {
                cc.find("rank/zwjl", this.node).active = false
            }

            this.scrollView_xzdd.node.active = false
            this.scrollView_xlch.node.active = true
            this.scrollView_dzmj.node.active = false
            this.caifuScrollView.node.active = false

        })
        izx.bindButtonClick("rank/topArea/gameArea/dzmj", this.node, () => {
            this.currentScroll = this.scrollView_dzmj

            if (this.scrollView_dzmj.content.children.length <= 0) {
                this._rank.GetWinMoneyRankReq("dzmj")
            } else {
                cc.find("rank/zwjl", this.node).active = false
            }
         
            this.scrollView_xzdd.node.active = false
            this.scrollView_xlch.node.active = false
            this.scrollView_dzmj.node.active = true
            this.caifuScrollView.node.active = false

        })
        
        izx.bindButtonClick("rank/btnClose", this.node, () => {
            this.pop()
        })

        izx.bindButtonClick("rank/topArea/timeArea/btnLeft", this.node, () => {
        })

        izx.bindButtonClick("rank/topArea/timeArea/btnRight", this.node, () => {
        })
    }

    getYearWeek(date){ 
        var date2=new Date(date.getFullYear(), 0, 1); 
        var day1=date.getDay(); 
        if(day1==0) day1=7; 
        var day2=date2.getDay(); 
        if(day2==0) day2=7; 
        var d = Math.round((date.getTime() - date2.getTime()+(day2-day1)*(24*60*60*1000)) / 86400000);   
        return Math.ceil(d /7)+1;  
    } 

    showWin(msg) {

        

        let zwjl = cc.find("rank/zwjl", this.node)
        
        // 排行榜是否有数据
        if (!msg.rankList || msg.rankList.length == 0) {
            zwjl.active = true
            return
        } else {
            this.xzddMsg = msg
            zwjl.active = false
        }

        // 排行榜滚动区域
        let nItem1 = cc.instantiate(this.rankPrefab1)
        for (let index = 0; index < msg.rankList.length; index++) {
            const item = msg.rankList[index]
            if (index == 0) {
                nItem1.getComponent(RankItem1).username1.string = item.username
                nItem1.getComponent(RankItem1).moneynum1.string = item.money
                
            }else if (index == 1) {
                nItem1.getComponent(RankItem1).username2.string = item.username
                nItem1.getComponent(RankItem1).moneynum2.string = item.money
                
            } else if (index == 2) {
                nItem1.getComponent(RankItem1).username3.string = item.username
                nItem1.getComponent(RankItem1).moneynum3.string = item.money
                this.currentScroll.content.addChild(nItem1)
            } else {
                let nItem = cc.instantiate(this.rankPrefab)
                nItem.getComponent(RankItem).username.string = item.username
                nItem.getComponent(RankItem).moneynum.string = item.money
                nItem.getComponent(RankItem).index.string = item.index
                this.currentScroll.content.addChild(nItem)
            }
        }

        // bottom
        const myData = msg.myData
        this.myName.string = myData.username
        this.myMoneyNum.string = myData.money
        if (myData.faceUrl.indexOf("http") == -1) {
            this.myTx.spriteFrame = this.defaultTx[myData.faceUrl - 1]
        } else {
            cc.loader.load({
                url: myData.faceUrl,
                type: 'png'
            }, function(err, tex) {
                if (err) {
                cc.log(err)
                } else {
                var spriteFrame = new cc.SpriteFrame(tex, new cc.Rect(0, 0, 80, 80))      
                this.myTx.spriteFrame = spriteFrame;
                }
            })
        }
    }

    showCaifu(msg) {

        let zwjl = cc.find("rank/zwjl", this.node)
        // 排行榜是否有数据
        if (!msg.rankList || msg.rankList.length == 0) {
            zwjl.active = true
            return
        } else {
            this.xzddMsg = msg
            zwjl.active = false
        }
    }
}
