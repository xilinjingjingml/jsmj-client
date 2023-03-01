import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
const {ccclass, property} = cc._decorator;

@ccclass
export default class ShopScene extends BaseUi {

    @property(cc.Prefab)
    prefab_shop_item: cc.Prefab = null

    contentNode: cc.Node = null

    shopData = []
    shopPageData = []
    onLoad () {
        this.contentNode = cc.find("Bg/ShopScrollView/view/content", this.node)
    }

    start () {
        izx.bindButtonClick("Bg/CloseButton", this.node, () => {
            cc.log("CloseButton", "")
            this.pop()
        })

        for (let index = 0; index < 7; index++) {
            let ind = index + 1
            let item = {
                "price": ind,
                "icon": "local:daoju_1.png",
                "boxid": ind,
                "boxname": ind+"元宝箱",
                "boxcontent": [{"index":0,"num":10000*ind},{"index":1,"num":1000},{"index":2,"num":100}],
                "payserialno":[{"cid":1,"serialno":"alipay_no_1"},{"cid":2,"serialno":"wechat_no_1"},{"cid":3,"serialno":"cloud_no_1"}],
            }
            this.shopData.push(item)
        }
        
        this.shopPageData = []
        let temp3 = []
        this.shopData.forEach((element,index) => {
            temp3.push(element)
            if (temp3.length == 3) {
                this.shopPageData.push(temp3)
                temp3 = []
            }else if (index == this.shopData.length - 1) {
                this.shopPageData.push(temp3)
            }
        });
        this.contentNode.removeAllChildren()
        this.shopPageData.forEach((groupData, group) => {
            let itemPage = cc.instantiate(this.prefab_shop_item)
            itemPage.parent = this.contentNode
            itemPage.active = true
            itemPage.getChildByName("box0").active = false
            itemPage.getChildByName("box1").active = false
            itemPage.getChildByName("box2").active = false
            groupData.forEach((itemData, index) => {
                let node = itemPage.getChildByName("box"+index)
                if (node) {
                    let money = 0
                    itemData.boxcontent.forEach(content => {
                        if (content["index"] == 0) {
                            money = content["num"]
                        }
                    });
                    cc.find("price/PriceNum",node).getComponent(cc.Label).string = '' + itemData.price
                    cc.find("desc/ItemNum",node).getComponent(cc.Label).string = '' + money
                    node.active = true
                    izx.bindButtonClick("BuyButton", node, () => {
                        cc.log("BuyButton", itemData)
                        izx.pushDialog("shop", "prefabs/ShopConfirm", () => {

                        },{"initParam":itemData})
                    })
                }
            });
        });
    }

    // update (dt) {}
}
