import { izx } from "../framework/izx";
import Constants from "../common/constants";
import ShopMode from "./mode/shopMode";

// bundleName
const GAME_BUNDLE_NAME = "shop"

export default class Shop {
    private static _instance: Shop
    static getInstance(): Shop {
        if (!Shop._instance) {
            Shop._instance = new Shop()
            Shop._instance._init()
        }

        return Shop._instance
    }

    private _taskMode: ShopMode = new ShopMode()

    private _init() {
        //izx.setProto("shop", proto)
        //izx.on(Constants.EventName.TASK_SHOW_MAIN, this.ShowTask, this)
    }
}

let task = Shop.getInstance()