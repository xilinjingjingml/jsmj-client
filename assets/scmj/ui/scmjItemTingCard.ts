/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-13 13:44:29
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-11-20 10:27:58
 */
import { CardArea} from "../scmjConstants";
import { izx } from "../../framework/izx";
import MjPrefab from "./scmjPrefab"

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameOperatorTing extends cc.Component {

    @property(cc.Prefab)
    prefab_MjPrefab: cc.Prefab = null;

    card = null
    huFan = null
    huNum = null

    onLoad () {
        this.card = cc.find("card", this.node)
        this.huFan = cc.find("info/huFan", this.node)
        this.huNum = cc.find("info/huNum", this.node)
    }

    init(data: number) {
        let nodeCard: MjPrefab = cc.instantiate(this.prefab_MjPrefab).getComponent(MjPrefab)
        nodeCard.initMj(1, CardArea.HandCard, data, 1)
        nodeCard.node.parent = this.card
    }
}
