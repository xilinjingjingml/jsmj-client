import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import Constants from "../../common/constants";
import { PERSONAL_EVENT } from "../personal_events";
import {PERSONAL_CONSTANT,Fan} from "../personal_constants";
import {COMMON_CONSTANT} from "../../common/constants";
import MjPrefab from "./mjPrefab";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PersonalScene extends BaseUi {
    sptChoose: cc.Node = null
    curChoose: any = null

    @property(cc.Sprite)
    headIcon: cc.Sprite = null;
    @property(cc.Sprite)
    headIcon2: cc.Sprite = null;

    // 称号
    @property(cc.SpriteFrame)
    ch01 = null;
    @property(cc.SpriteFrame)
    ch02 = null;
    @property(cc.SpriteFrame)
    ch03 = null;
    @property(cc.SpriteFrame)
    ch04 = null;
    @property(cc.SpriteFrame)
    ch05 = null;
    @property(cc.SpriteFrame)
    ch06 = null;
    @property(cc.SpriteFrame)
    ch07 = null;
    @property(cc.SpriteFrame)
    ch08 = null;
    @property(cc.SpriteFrame)
    ch09 = null;
    @property(cc.SpriteFrame)
    ch10 = null;
    @property(cc.SpriteFrame)
    ch11 = null;
    @property(cc.SpriteFrame)
    ch12 = null;
    @property(cc.SpriteFrame)
    ch13 = null;
    @property(cc.SpriteFrame)
    ch14 = null;
    @property(cc.SpriteFrame)
    ch15 = null;
    @property(cc.SpriteFrame)
    ch16 = null;
    @property(cc.SpriteFrame)
    ch17 = null;
    @property(cc.SpriteFrame)
    ch18 = null;
    @property(cc.SpriteFrame)
    ch19 = null;

    @property(cc.Prefab)
    headFrameItem = null
    @property(cc.Prefab)
    mjPrefab = null;
    @property(cc.Node)
    ndCards = null;

    lastHeadFrameIndex = 1 // 之前索引
    curHeadFrameIndex = 1 // 当前索引
   
    onOpen() {
        this.initEvent()
        this.initButton()
        this.initView()

        this.lastHeadFrameIndex = izx.item.getItemNum(COMMON_CONSTANT.ITEM_HEAD_FRAME)
        this.curHeadFrameIndex = this.lastHeadFrameIndex

        izx.dispatchEvent(PERSONAL_EVENT.GET_PERSONAL_PROGRESS_REQ, {
            type: 4,
            uid: izx.user.uid,
        })

        this.updateHeadicon()
    }

    initEvent() {
        izx.on(PERSONAL_EVENT.GET_PERSONAL_PROGRESS_RSP, this.getPersonalProgressRsp, this)
        izx.on(PERSONAL_EVENT.GET_PERSONAL_AWARD_RSP, this.getPersonalAwardRsp, this)
        izx.on(PERSONAL_EVENT.SWITCH_TAB, this.switchTab, this)
        izx.on(Constants.EventName.REFRESH_ITEM_HEAD, this.updateHeadicon, this)
        izx.on(Constants.EventName.REFRESH_ITEM_HEADFRAME, this.updateHeadFrame, this)
    }

    initButton() {
        izx.bindButtonClick("BtnZL", this.node, (sender, data) => {
            izx.audioMgr.playBtn()
            izx.dispatchEvent(PERSONAL_EVENT.SWITCH_TAB, PERSONAL_CONSTANT.TAB_INFO)
        })
        izx.bindButtonClick("BtnRY", this.node, (sender, data) => {
            izx.audioMgr.playBtn()
            izx.dispatchEvent(PERSONAL_EVENT.SWITCH_TAB, PERSONAL_CONSTANT.TAB_HONOR)
        })
        izx.bindButtonClick("BtnTXK", this.node, (sender, data) => {
            izx.audioMgr.playBtn()
            izx.dispatchEvent(PERSONAL_EVENT.SWITCH_TAB, PERSONAL_CONSTANT.TAB_FRAME)
        })
        izx.bindButtonClick("BtnClose", this.node, (sender, data) => {
            this.pop()
        })
        let btnHead= cc.find("NodeInfo/BtnHead", this.node)
        izx.bindButtonClick(btnHead, this.node, (sender, data) => {
            izx.audioMgr.playBtn()
            izx.dispatchEvent(PERSONAL_EVENT.SHOW_EDIT_HEAD)
        })
    }

    initView() {
        this.node.getChildByName("BtnZL").getComponent(cc.Button).interactable = false

        let lblId = cc.find("NodeInfo/SptHeadFrame/LblId", this.node)
        lblId.getComponent(cc.Label).string = "ID:" + izx.user.uid
        let lblNickname = cc.find("NodeInfo/SptInfoBg/SptNicknameBg/LblNickname", this.node)
        lblNickname.getComponent(cc.Label).string = izx.user.nickname
        let level = izx.item.getItemNum(COMMON_CONSTANT.ITEM_LEVEL)
        level = (level == 0 ? 1 : level)
        let lblLv = cc.find("NodeInfo/SptInfoBg/SptLvBg/LblLv", this.node)
        lblLv.getComponent(cc.Label).string = "LV." + level.toString()
        let sptLevel = cc.find("NodeInfo/SptInfoBg/SptLevel", this.node)        
        if (0 == level) {
            sptLevel.getComponent(cc.Sprite).spriteFrame = this["ch01"]
        } else {
            let chIndex = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
            let rem = Math.trunc(level/5)
            let mod = level%5
            if (0 == mod) {
                if (rem <= 10) {
                    sptLevel.getComponent(cc.Sprite).spriteFrame = this["ch0" + chIndex[rem-1]]
                } else if (rem < 20) {
                    sptLevel.getComponent(cc.Sprite).spriteFrame = this["ch" + chIndex[rem-1]]
                }
            } else {
                if (rem <= 10) {
                    sptLevel.getComponent(cc.Sprite).spriteFrame = this["ch0" + chIndex[rem]]
                } else if (rem < 20) {
                    sptLevel.getComponent(cc.Sprite).spriteFrame = this["ch" + chIndex[rem]]
                }
            }
        }
        let levelExp = izx.item.getItemNum(COMMON_CONSTANT.ITEM_LEVEL_EXP)
        levelExp = (levelExp == 0 ? 0 : levelExp)
        let levelMax = izx.utils.GetLevelMaxExp(level)
        if (levelExp > levelMax) {
            levelMax = izx.utils.GetLevelMaxExp(level + 1)
        }
        let progressBar = cc.find("NodeInfo/SptInfoBg/ProgressBar", this.node)
        progressBar.getComponent(cc.ProgressBar).progress = levelExp/levelMax
        let lblProgress = cc.find("NodeInfo/SptInfoBg/ProgressBar/LblProgress", this.node)
        lblProgress.getComponent(cc.Label).string = levelExp + "/" + levelMax
        let lblJd = cc.find("NodeInfo/SptInfoBg/LblJd", this.node)
        lblJd.getComponent(cc.Label).string = izx.utils.numberFormat2(izx.user.money)
        let lblZs = cc.find("NodeInfo/SptInfoBg/LblZs", this.node)
        lblZs.getComponent(cc.Label).string = izx.item.getItemNum(COMMON_CONSTANT.ITEM_DIAMOND).toString()
        // todo:后续增加
        /*if (izx.user.sex == 0) {
            let sptSelect = cc.find("NodeInfo/SptInfoBg/BtnMan/SptSelect", this.node)
            sptSelect.active = false
            sptSelect = cc.find("NodeInfo/SptInfoBg/BtnWomen/SptSelect", this.node)
            sptSelect.active = true
        } else {
            let sptSelect = cc.find("NodeInfo/SptInfoBg/BtnMan/SptSelect", this.node)
            sptSelect.active = true
            sptSelect = cc.find("NodeInfo/SptInfoBg/BtnWomen/SptSelect", this.node)
            sptSelect.active = false
        }*/
    }

    touchMain() {
    }

    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchMain, this ,true);
    }

    onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchMain, this,true);
    }

    // 替换默认头像
    updateHeadicon() {
        console.log("PersonalScene updateHeadicon")
        izx.dispatchEvent(Constants.EventName.DRAW_ICON_BY_ID, {uid: izx.user.uid, pid: COMMON_CONSTANT.ITEM_HEAD, callback: (res) => {
          this.headIcon.spriteFrame = res
          this.headIcon2.spriteFrame = res
        }})
    }

    // 替换默认头像框
    updateHeadFrame() {
        console.log("LobbyHead updateHeadFrame")        
        this.lastHeadFrameIndex = this.curHeadFrameIndex
    }

    getPersonalProgressRsp(msg) {
        if (!msg || msg.length === 0) {
            return
        }
        
        // 计算统计信息
        let totalJu = 0
        let winJu = 0
        let maxRatio = 0
        let maxFan = -1
        let majong = ""
        for (let task of msg)  {
            if (task.task_cond == PERSONAL_CONSTANT.CondGameRound) {
                let ju = task.cur_num ? Number(task.cur_num) : 0
                if (ju > totalJu) {
                    totalJu = ju
                }
            } else if (task.task_cond == PERSONAL_CONSTANT.CondWinRound) {
                let ju = task.cur_num ? Number(task.cur_num) : 0
                if (ju > winJu) {
                    winJu = ju
                }
            } else if (task.task_id == PERSONAL_CONSTANT.CondRatioFanMajong) {
                maxRatio = task.cur_num ? Number(task.cur_num) : 0
                maxFan = task.cond_num ? Number(task.cond_num) : -1
                majong = task.mid ? task.mid : ""
            }
        }
        winJu = (totalJu == 0 ? 0 : (winJu/totalJu*100))
        // 总
        let lblTotalJu = cc.find("NodeInfo/SptTotal/LblJu", this.node)
        lblTotalJu.getComponent(cc.Label).string = totalJu.toString()
        let lblTotalWin = cc.find("NodeInfo/SptTotal/LblWin", this.node)
        lblTotalWin.getComponent(cc.Label).string = winJu.toFixed(2) + "%"
        let lblTotalRatio = cc.find("NodeInfo/SptTotal/LblRatio", this.node)
        lblTotalRatio.getComponent(cc.Label).string = maxRatio.toString()
        // 血流
        let lblJu = cc.find("NodeInfo/SptEach/LblJu", this.node)
        lblJu.getComponent(cc.Label).string = totalJu.toString()
        let lblWin = cc.find("NodeInfo/SptEach/LblWin", this.node)
        lblWin.getComponent(cc.Label).string = winJu.toFixed(2) + "%"
        let lblFan = cc.find("NodeInfo/SptEach/LblFan", this.node)
        lblFan.getComponent(cc.Label).string = this.getFanDesc(maxFan)
        let lblRatio = cc.find("NodeInfo/SptEach/LblRatio", this.node)
        lblRatio.getComponent(cc.Label).string = maxRatio.toString()
        // 牌型
        if (majong != "") {
            let obj = JSON.parse(majong);
            this.drawCards(obj)
        }

        // 荣誉
        let index = 1 // 6大模块索引
        for (let i = 1; i <= 18 ;i++) {
            let msgHonor = msg[i-1]
            if (i%3==0) {
                let NodeHonor = cc.find("NodeHonor/NodeHonor" + index, this.node)
                let BtnHonor = NodeHonor.getChildByName("BtnHonor")
                izx.bindButtonClick(BtnHonor, this.node, (sender, data) => {
                    izx.audioMgr.playBtn()
                    let curIndex = Number(data)
                    izx.dispatchEvent(PERSONAL_EVENT.SHOW_HONOR_INFO, {
                        initParam: {
                            items: [msg[curIndex*3 - 3], msg[curIndex*3 - 2], msg[curIndex*3 - 1]],
                            index: curIndex
                        }
                    })
                }, index.toString())
                if (msgHonor.cur_num && Number(msgHonor.cur_num) >= Number(msgHonor.cond_num)) {
                    let sptMask = BtnHonor.getChildByName("SptMask")
                    sptMask.active = false
                }
                index += 1
            }
        }

        // 头像框
        let BtnReplace = cc.find("NodeFrame/SptUp/BtnReplace", this.node)
        let SptUpFrame = cc.find("NodeFrame/SptUp/SptFrame", this.node)
        izx.bindButtonClick(BtnReplace, this.node, (sender, data) => {
            izx.audioMgr.playBtn()
            SptUpFrame.getComponent(cc.Sprite).spriteFrame = this.curChoose.getSpriteFrame()
            if (this.curHeadFrameIndex != this.lastHeadFrameIndex) {
                let callback = () => {
                    this.curChoose.setSpriteFrameUse()
                }
                izx.dispatchEvent(PERSONAL_EVENT.UPDATE_HEAD_FRAME_REQ, {
                    index: this.curHeadFrameIndex,
                    uid: izx.user.uid,
                },callback)
            }
        })
        let NodeNo = cc.find("NodeFrame/SptUp/NodeNo", this.node)
        let ProgressBar = cc.find("NodeFrame/SptUp/NodeNo/ProgressBar", this.node)
        let LblProgress = cc.find("NodeFrame/SptUp/NodeNo/ProgressBar/LblProgress", this.node)
        let LblDesc = cc.find("NodeFrame/SptUp/LblDesc", this.node)
        let LblName = cc.find("NodeFrame/SptUp/LblName", this.node)
        let content = cc.find("NodeFrame/ScrollView/view/content", this.node)
        content.removeAllChildren()
        let defaultHeadFrameInfo = null
        let defaultScript = null
        for (let i = 18; i < 31 ;i++) {
            let task = msg[i]
            let nItem = cc.instantiate(this.headFrameItem)
            content.addChild(nItem)

            let curNum = (task.cur_num ? Number(task.cur_num) : 0)
            let condNum = task.cond_num
            if (curNum >= condNum) {
                let sptStatus = nItem.getChildByName("SptStatus")
                sptStatus.active = false
            }
            let script = nItem.getComponent("headFrameItem")
            script.setSpriteFrameByIndex(task.head_frame_index)
            let headFrameInfo = () => {
                this.curChoose = script
                if (i <= 21) {
                    ProgressBar.active = false
                    LblProgress.active = false
                } else {
                    ProgressBar.active = true
                    LblProgress.active = true
                }
                ProgressBar.getComponent(cc.ProgressBar).progress = curNum/condNum
                LblProgress.getComponent(cc.Label).string = izx.utils.numberFormat3(curNum) + "/" + izx.utils.numberFormat3(condNum)
                LblName.getComponent(cc.Label).string = task.title
                LblDesc.getComponent(cc.Label).string = task.desc
                SptUpFrame.getComponent(cc.Sprite).spriteFrame = script.getSpriteFrame()
                if (curNum >= condNum) {
                    BtnReplace.active = true
                    NodeNo.active = false
                } else {
                    BtnReplace.active = false
                    NodeNo.active = true
                }
            }
            if (i == 18) {
                defaultScript = script
                defaultHeadFrameInfo = headFrameInfo
            }
            if (this.curHeadFrameIndex == task.head_frame_index) {
                this.sptChoose = script.setSpriteFrameUse()

                SptUpFrame.getComponent(cc.Sprite).spriteFrame = script.getSpriteFrame() 

                headFrameInfo()
            } else if (this.sptChoose == null && i == 30) { // 设置默认选中头像
                this.curHeadFrameIndex = defaultScript.getSpriteFrameIndex()
                this.sptChoose = defaultScript.setSpriteFrameChoose()

                defaultHeadFrameInfo()
            }

            izx.bindButtonClick("BtnChoose", nItem, (sender, data) => {
                izx.audioMgr.playBtn()
                if (this.sptChoose) {
                    this.sptChoose.active = false
                }
                this.curHeadFrameIndex = script.getSpriteFrameIndex()
                this.sptChoose = script.setSpriteFrameChoose()
                
                headFrameInfo()
            })
        }
    }

    getPersonalAwardRsp(msg) {
        izx.dispatchEvent(PERSONAL_EVENT.GET_PERSONAL_PROGRESS_REQ, {
            type: 4,
            uid: izx.user.uid,
        })
    }

    switchTab(msg) {
        if (msg == PERSONAL_CONSTANT.TAB_INFO) {
            this.node.getChildByName("NodeInfo").active = true
            this.node.getChildByName("NodeHonor").active = false
            this.node.getChildByName("NodeFrame").active = false
            this.node.getChildByName("BtnZL").getComponent(cc.Button).interactable = false
            this.node.getChildByName("BtnRY").getComponent(cc.Button).interactable = true
            this.node.getChildByName("BtnTXK").getComponent(cc.Button).interactable = true
        } else if (msg == PERSONAL_CONSTANT.TAB_HONOR) {
            this.node.getChildByName("NodeInfo").active = false
            this.node.getChildByName("NodeHonor").active = true
            this.node.getChildByName("NodeFrame").active = false
            this.node.getChildByName("BtnZL").getComponent(cc.Button).interactable = true
            this.node.getChildByName("BtnRY").getComponent(cc.Button).interactable = false
            this.node.getChildByName("BtnTXK").getComponent(cc.Button).interactable = true
        } else if (msg == PERSONAL_CONSTANT.TAB_FRAME) {
            this.node.getChildByName("NodeInfo").active = false
            this.node.getChildByName("NodeHonor").active = false
            this.node.getChildByName("NodeFrame").active = true
            this.node.getChildByName("BtnZL").getComponent(cc.Button).interactable = true
            this.node.getChildByName("BtnRY").getComponent(cc.Button).interactable = true
            this.node.getChildByName("BtnTXK").getComponent(cc.Button).interactable = false
        }
    }

    getFanDesc(fan) {
      switch (fan) {
      case Fan.QingShiBaLuoHan:
        return "清十八罗汉"
      case Fan.ShiBaLuoHan:
        return "十八罗汉"
      case Fan.TianHu:
        return "天胡"
      case Fan.DiHu:
        return "地胡"
      case Fan.QingLongQiDui:
        return "清龙七对"
      case Fan.QingJinGouGou:
        return "清金钩钓"
      case Fan.QingQiDui:
        return "清七对"
      case Fan.QingDaiYaoJiu:
        return "清带幺九"
      case Fan.QingPeng:
        return "清碰"
      case Fan.JiangDui:
        return "将对"
      case Fan.LongQiDui:
        return "龙七对"
      case Fan.QingYiSe:
        return "清一色"
      case Fan.QiDui:
        return "七对"
      case Fan.JinGouGou:
        return "金钩钓"
      case Fan.DaiYaoJiu:
        return "带幺九"
      case Fan.PengPengHu:
        return "碰碰胡"
      case Fan.PingHu:
        return "平胡"
      case Fan.GangHouPao:
        return "杠后炮"
      case Fan.GangShangKaiHua:
        return "杠上开花"
      case Fan.HaiDiLaoYue:
        return "海底捞月"
      case Fan.HaiDiPao:
        return "海底炮"
      }
      return ""
    }

    drawCards(cards) {
      if (cards == null || cards.length == 0) {
        return
      }
      izx.dispatchEvent(Constants.EventName.PRE_LOAD_SCMJ_PIC, {callback: () => {
        this.ndCards.removeAllChildren()
        let gap = -3
        console.log("gap = ", gap)
        let num = 0
        let w = 0
        let size
        let scale
        cards.forEach(card => {
          let nodeCard: MjPrefab
          nodeCard = cc.instantiate(this.mjPrefab).getComponent("mjPrefab")
          nodeCard.initMj(card)
          nodeCard.node.zIndex = num
          nodeCard.node.parent = this.ndCards
          scale = nodeCard.node.scale
          size = nodeCard.mjSize()
          nodeCard.node.x = w
          w = nodeCard.node.x + size.width*scale + gap
          num++
        });
        this.ndCards.x = -w/2 + size.width*scale/2 + gap/2
      }})
    }
}
