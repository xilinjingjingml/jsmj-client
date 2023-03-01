import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import Constants, { COMMON_CONSTANT } from "../../common/constants";
import { VIP_EVENT } from "../vip_evnets";

const {ccclass, property} = cc._decorator;

@ccclass
export default class VipMain extends BaseUi {
    _pageView: cc.PageView = null // 滚动页面
    _pageViewList: cc.Node[] = null // page页缓存
    _BtnAward: cc.Node = null // 立即领取按钮
    _BtnAwardStatus: cc.Node = null //立即领取按钮状态
    _BtnAwardSpot: cc.Node = null //立即领取按钮提示
    _SptAwarded: cc.Node = null // 已领取
    _leftSpot: cc.Node = null // 左侧按钮提示
    _rightSpot: cc.Node = null // 右侧按钮提示

    _awardStatus: any[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] // 不同vip领取状态，默认不能领取
    _curUserVipLevel: any = 0 // 当前玩家level
    _curAwardVipLevel: any = 1 // 当前领取vip奖励level
    _vipConfigs = null // vip所以配置

    _sptTip: cc.Node = null
    _lblTip: cc.Label = null

    @property(cc.Prefab)
    vipLevelPage = null // page预制体
    @property(cc.Prefab)
    vipLevelDesc = null // page详情介绍
    @property(cc.Prefab)
    vipLevelAward = null // page奖励物品

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

    @property(cc.SpriteFrame)
    vipTitle1 = null
    @property(cc.SpriteFrame)
    vipTitle2 = null
    @property(cc.SpriteFrame)
    vipTitle3 = null
    @property(cc.SpriteFrame)
    vipTitle4 = null
    @property(cc.SpriteFrame)
    vipTitle5 = null
    @property(cc.SpriteFrame)
    vipTitle6 = null
    @property(cc.SpriteFrame)
    vipTitle7 = null
    @property(cc.SpriteFrame)
    vipTitle8 = null
    @property(cc.SpriteFrame)
    vipTitle9 = null
    @property(cc.SpriteFrame)
    vipTitle10 = null

    @property(cc.SpriteFrame)
    lqjl = null // 领取奖励
    @property(cc.SpriteFrame)
    djwd = null // 等级未到

    @property(cc.SpriteFrame)
    sptGreen = null // 绿色按钮
    @property(cc.SpriteFrame)
    sptGray = null // 灰色
   
    onOpen() {
        this._pageView = cc.find("pageView", this.node).getComponent(cc.PageView)
        this._leftSpot = cc.find("btn_left/SptSpot", this.node)
        this._rightSpot = cc.find("btn_right/SptSpot", this.node)
        this._BtnAward = cc.find("BtnAward", this.node)
        this._BtnAwardStatus = cc.find("BtnAward/Background/SptStatus", this.node)
        this._BtnAwardSpot = cc.find("BtnAward/Background/SptSpot", this.node)
        this._SptAwarded = cc.find("SptAwarded", this.node)

        this.initEvent()
        this.initButton()

        this._sptTip = cc.find("SptTip", this.node)
        this._lblTip = this._sptTip.getChildByName("LblTip").getComponent(cc.Label)

        this._pageViewList = new Array()
        izx.dispatchEvent(VIP_EVENT.GET_VIP_CONFIG_REQ, {
            level: 0,
        })

        izx.UnBlockUI()
    }
    

    initEvent() {
        izx.on(VIP_EVENT.GET_VIP_CONFIG_RSP, this.getVipConfigRsp, this)
        izx.on(VIP_EVENT.GET_VIP_USER_LEVEL_RSP, this.getVipUserLevelRsp, this)
        izx.on(VIP_EVENT.GET_VIP_AWARDS_RSP, this.getVipAwardsRsp, this)
        izx.on(VIP_EVENT.REFRESH_BTN, this.refreshBtn, this)
    }

    initButton() {
        izx.bindButtonClick("close", this.node, (sender, data) => {
            this.pop()
        })
        izx.bindButtonClick("btn_left", this.node, (sender, data) => {
            izx.audioMgr.playBtn()
            let pageIndex = this._pageView.getCurrentPageIndex()
            if (pageIndex > 0) {
                izx.dispatchEvent(VIP_EVENT.REFRESH_BTN, pageIndex-1)
            }
        })
        izx.bindButtonClick("btn_right", this.node, (sender, data) => {
            izx.audioMgr.playBtn()
            let pageIndex = this._pageView.getCurrentPageIndex()
            if (pageIndex < 10) {
                izx.dispatchEvent(VIP_EVENT.REFRESH_BTN, pageIndex+1)
            }
        })
        izx.bindButtonClick("BtnSendVip", cc.find("jd_bg", this.node), (sender, data) => {
            izx.audioMgr.playBtn()
            izx.dispatchEvent(Constants.EventName.SEND_VIP_SHOW_MAIN, {initParam : {callback : () => {
                izx.dispatchEvent(VIP_EVENT.GET_VIP_CONFIG_REQ, {
                    level: 0,
                })
            }}})
        })
        izx.bindButtonClick("BtnAward", this.node, (sender, data) => {
            izx.audioMgr.playBtn()
            izx.dispatchEvent(VIP_EVENT.GET_VIP_AWARDS_REQ, {
                uid: izx.user.uid,
                level: this._curAwardVipLevel,
            })
        })
    }

    touchMain() {
        if (this._sptTip) {
            this._sptTip.active = false
        }
    }

    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchMain, this ,true);
    }

    onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchMain, this,true);
    }

    pageViewCallback(pageView) {
        izx.dispatchEvent(VIP_EVENT.REFRESH_BTN, pageView._curPageIdx)
    }

    getVipConfigRsp(msg) {
        this._vipConfigs = msg
        let list = msg
        if (!list || list.length == 0)
            return

        for (let config of list) {
            let nPage = cc.instantiate(this.vipLevelPage)
            nPage.active = true
            let vip = cc.find("layout_title/vip", nPage)
            vip.getComponent(cc.Sprite).spriteFrame = this["vipTitle" + config.level]
            for (let desc of config.privilege_desc) {
                let lblDesc = ""
                let lines = desc.split('|');
                lines.forEach((line, index) => {
                    if (index == 0) {
                        lblDesc += "<color=#804F4F>" + line + "</c>"
                    } else if(index == 1) {
                        lblDesc += "<color=#E87E24>" + line + "</color>"
                    } else if (index == 2) {
                        lblDesc += "<color=#804F4F>" + line + "</c>"
                    }
                });

                let layout = cc.instantiate(this.vipLevelDesc)
                layout.getChildByName("lblDesc").getComponent(cc.RichText).string = lblDesc
                nPage.getChildByName("layout_txt").addChild(layout)
            }
            for (let award of config.awards_once) {
                let jl = cc.instantiate(this.vipLevelAward)
                let lbl_jl = cc.find("di_bg/lbl_jl", jl)
                if (award.min_num == award.max_num) {
                    if (award.min_num >= 10000) {
                        lbl_jl.getComponent(cc.Label).string = (award.min_num/10000) + "w"
                    } else {
                        lbl_jl.getComponent(cc.Label).string = award.min_num
                    }
                } else {
                    lbl_jl.getComponent(cc.Label).string = award.min_num + "-" + award.max_num
                }
                izx.bindButtonClick("btn_lq", jl, (sender, data) => {
                    izx.audioMgr.playBtn()
                    this._lblTip.string = award.tip

                    let worldPos = sender.target.parent.convertToWorldSpaceAR(sender.target.position)
                    let localPos = this.node.convertToNodeSpaceAR(worldPos)
                    this._sptTip.setPosition(localPos.x, localPos.y + sender.target.height/2)
                    this._sptTip.active = true
                })
                // 远程 url 带图片后缀名
                if (award.icon) {
                    let sptAward = jl.getChildByName("SptAward")
                    cc.assetManager.loadRemote(award.icon, function (err, texture) {
                        if (err) {
                            return
                        }
                        sptAward.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(<cc.Texture2D>texture)
                    });
                }
                nPage.getChildByName("layout_first").addChild(jl)
            }
            for (let award of config.awards_daily) {
                let jl = cc.instantiate(this.vipLevelAward)
                let lbl_jl = cc.find("di_bg/lbl_jl", jl)
                if (award.min_num == award.max_num) {
                    if (award.min_num >= 10000) {
                        lbl_jl.getComponent(cc.Label).string = (award.min_num/10000) + "w"
                    } else {
                        lbl_jl.getComponent(cc.Label).string = award.min_num
                    }
                } else {
                    lbl_jl.getComponent(cc.Label).string = award.min_num + "-" + award.max_num
                }
                izx.bindButtonClick("btn_lq", jl, (sender, data) => {
                    izx.audioMgr.playBtn()
                    this._lblTip.string = award.tip

                    let worldPos = sender.target.parent.convertToWorldSpaceAR(sender.target.position)
                    let localPos = this.node.convertToNodeSpaceAR(worldPos)
                    this._sptTip.setPosition(localPos.x, localPos.y + sender.target.height/2)
                    this._sptTip.active = true
                })
                // 远程 url 带图片后缀名
                if (award.icon) {
                    let sptAward = jl.getChildByName("SptAward")
                    cc.assetManager.loadRemote(award.icon, function (err, texture) {
                        if (err) {
                            return
                        }
                        sptAward.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(<cc.Texture2D>texture)
                    });
                }
                nPage.getChildByName("layout_day").addChild(jl)
            }

            this._pageViewList.push(nPage)
            this._pageView.addPage(nPage)
        }

        izx.dispatchEvent(VIP_EVENT.GET_VIP_USER_LEVEL_REQ, {
            uid: izx.user.uid,
        })
    }

    getVipUserLevelRsp(msg) {
        if (!msg) {
            return
        }

        this._curUserVipLevel = izx.item.getItemNum(COMMON_CONSTANT.ITEM_VIP)
        let exp = izx.item.getItemNum(COMMON_CONSTANT.ITEM_VIP_EXP)
        if (!this._vipConfigs) {
            return
        }

        let lblDesc = "<color=#FCC596>再积累</c>"
        if (this._curUserVipLevel == 0) {
            let bzhy = cc.find("jd_bg/jd/bzhy", this.node)
            bzhy.getComponent(cc.Label).string = exp + "/" + this._vipConfigs[0].exp

            lblDesc += "<color=#FFEE7A>" + (this._vipConfigs[0].exp - exp) + "</color>"
        } else if (this._curUserVipLevel == 10) {
            let vip = cc.find("jd_bg/vip", this.node)
            vip.getComponent(cc.Sprite).spriteFrame = this.vip10

            let jd = cc.find("jd_bg/jd", this.node)
            jd.getComponent(cc.ProgressBar).progress = this._vipConfigs[9].exp / this._vipConfigs[9].exp
            let bzhy = cc.find("jd_bg/jd/bzhy", this.node)
            bzhy.getComponent(cc.Label).string = this._vipConfigs[9].exp + "/" + this._vipConfigs[9].exp
            lblDesc += "<color=#FFEE7A>0</color>"
        } else {
            let vip = cc.find("jd_bg/vip", this.node)
            vip.getComponent(cc.Sprite).spriteFrame = this["vip" + this._curUserVipLevel]

            let jd = cc.find("jd_bg/jd", this.node)
            jd.getComponent(cc.ProgressBar).progress = exp / this._vipConfigs[this._curUserVipLevel].exp
            let bzhy = cc.find("jd_bg/jd/bzhy", this.node)
            bzhy.getComponent(cc.Label).string = exp + "/" + this._vipConfigs[this._curUserVipLevel].exp

            lblDesc += "<color=#FFEE7A>" + (this._vipConfigs[this._curUserVipLevel].exp - exp) + "</color>"
        }
        if (this._curUserVipLevel < 10) {
            lblDesc += "<color=#FCC596>经验即可升级到</c><color=#FFEE7A>VIP" + (Number(this._curUserVipLevel) + 1) + "</color>"
        } else {
            lblDesc += "<color=#FCC596>经验即可升级到</c><color=#FFEE7A>VIP" + this._curUserVipLevel + "</color>"
        }
        let lblExp = cc.find("jd_bg/LblExp", this.node)
        lblExp.getComponent(cc.RichText).string = lblDesc

        let onceStatus = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        for (let once of msg.awards_once_logs) {
            if (once.status == 2) {
                onceStatus[once.level - 1] = 2
            } else if (once.status == 3) {
                let SptOnce = this._pageViewList[once.level - 1].getChildByName("SptOnce")
                SptOnce.active = true
                onceStatus[once.level - 1] = 3
            }
        }

        let dailyStatus = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        var curDate = new Date(Date.now())
        var logDate= new Date(msg.daily_date ? msg.daily_date * 1000 : 0);
        for (let daily of msg.awards_daily_logs) {
            if (daily.status == 2 || (this._curUserVipLevel == daily.level && daily.status == 3 && logDate.getDay() != curDate.getDay())) {
                dailyStatus[daily.level - 1] = 2
            } else if (daily.status == 3) {
                let SptDaily = this._pageViewList[daily.level - 1].getChildByName("SptDaily")
                SptDaily.active = true
                dailyStatus[daily.level - 1] = 3
            }
        }

        for (let i = 0; i < 10; i++) {
            if (onceStatus[i] == 3 && dailyStatus[i] == 3) {
                this._awardStatus[i] = 3
            } else if (onceStatus[i] == 1 && dailyStatus[i] == 1) {
            } else {
                this._awardStatus[i] = 2
            }
        }

        if (this._curUserVipLevel == 0) {
            izx.dispatchEvent(VIP_EVENT.REFRESH_BTN, this._curUserVipLevel, true)
        } else {
            izx.dispatchEvent(VIP_EVENT.REFRESH_BTN, this._curUserVipLevel - 1, true)
        }
    }

    getVipAwardsRsp(msg) {
        let SptOnce = this._pageViewList[this._curAwardVipLevel - 1].getChildByName("SptOnce")
        SptOnce.active = true        
        let SptDaily = this._pageViewList[this._curAwardVipLevel - 1].getChildByName("SptDaily")
        SptDaily.active = true        
        this._awardStatus[this._curAwardVipLevel - 1] = 3
        this._BtnAward.active = false
        this._SptAwarded.active = true
    }

    refreshBtn(curIndex, once) {
        if (once) {
            this._pageView.scrollToPage(curIndex, 0)
        } else {
            this._pageView.setCurrentPageIndex(curIndex)
        }
        
        if (curIndex == 0) {
            cc.find("btn_left", this.node).active = false
        } else if (curIndex == 9) {
            cc.find("btn_right", this.node).active = false
        } else {
            cc.find("btn_left", this.node).active = true
            cc.find("btn_right", this.node).active = true
        }

        if (curIndex !=0 && curIndex != 9 && this._curUserVipLevel != 0) {
            if (this._awardStatus[curIndex - 1] == 2) {
                this._leftSpot.active = true
            } else {
                this._leftSpot.active = false
            }
            if (this._awardStatus[curIndex + 1] == 2) {
                this._rightSpot.active = true
            } else {
                this._rightSpot.active = false
            }
        }

        if (this._awardStatus[curIndex] == 3) {
            this._BtnAward.active = false
            this._SptAwarded.active = true
        } else if (this._awardStatus[curIndex] == 2) {
            this._BtnAward.active = true
            this._BtnAward.getComponent(cc.Button).interactable = true
            this._SptAwarded.active = false
            this._BtnAward.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.sptGreen
            this._BtnAwardStatus.getComponent(cc.Sprite).spriteFrame = this.lqjl
            this._BtnAwardSpot.active = true
        } else {
            this._BtnAward.active = true
            this._BtnAward.getComponent(cc.Button).interactable = false
            this._SptAwarded.active = false
            this._BtnAward.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.sptGray
            this._BtnAwardStatus.getComponent(cc.Sprite).spriteFrame = this.djwd
            this._BtnAwardSpot.active = false
        }
        this._curAwardVipLevel = curIndex + 1
    }
}
