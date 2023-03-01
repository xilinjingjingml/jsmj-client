import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
const {ccclass, property} = cc._decorator;

@ccclass
export default class GongGaoMain extends BaseUi {

    @property(cc.Prefab)
    item:cc.Prefab = null;
    // onLoad () {}

    gonggaoList = [
        {title:"禁止赌博",
        subcontent:"禁止利用本产品进行赌博...",
        content:"禁止利用本产品进行赌博行为\n禁止捏造传播游戏外挂等信息\n禁止发布违规信息和违法言论\n注意自我保护和谨防受骗上当\n",
        groupName:"金山麻将运营团队",date:"2020年12月18日",order:1
        },
        {title:"金山麻将",
        subcontent:"亲爱的朋友们",
        content:"亲爱的朋友们:\n《金山麻将》是一款超级刺激好玩的麻将游戏，包含血流成河，血战到底，大众麻将，金山麻将等多种玩法，打发简单节奏快，赚取大额金币停不下来！\n",
        groupName:"金山麻将运营团队",date:"2020年12月18日",order:2
        },
    ]

    start () {
        let content = cc.find("bg/ScrollView/view/content",this.node)
        this.gonggaoList.forEach((groupData, index) => {
            let itemPage = cc.instantiate(this.item)
            itemPage.parent = content
            itemPage.active = true
            cc.find("TitleLabel",itemPage).getComponent(cc.Label).string = groupData.title
            cc.find("DescLabel",itemPage).getComponent(cc.Label).string = groupData.subcontent
            izx.bindButtonClick(cc.find("SeeButton",itemPage),()=>{
                cc.log("onclicked",groupData)
                izx.pushDialog("gonggao", "prefabs/GongGaoDetail", () => {

                },{"initParam":groupData})
            })
        })
    }

    onPressBtnClose () {
        izx.popDialog(this)
    }
    // update (dt) {}
}
