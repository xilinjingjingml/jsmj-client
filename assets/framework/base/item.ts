import { izx } from "../izx"
import { EventMgr } from "../mgr/eventMgr"
import { LogMgr } from "../mgr/logMgr"

export interface Item {
    id: number
    num: number
    pic: string
    typs: number
    expire: number
}
  
let _items: Item[] = []
export class Items{
    static init(items: any[]) {
        items.map(item => {
            let it = {
                id: item.id || 0,
                num: item.num || 0,
                pic: item.pic || "",
                typs: item.typs || 0,
                expire: item.expire || 0
            }
            _items[it.id] = it
        })
        if (items.length == 0) {
            let it = {
                id: 0,
                num: izx.user.money || 0,
                pic: izx.user.pic || "",
                typs: 0,
                expire: 0
            }
            _items[0] = it
        }
    }

    static getItem(id: number) {
        return _items[id]
    }

    static setItem(data: Item) {
        LogMgr.log(data.id)
        if (!data.id && data.id !== 0) {
            LogMgr.info("set item id is null")
            return
        }
        
        let item = _items[data.id]
        if (!item) {
            item = <Item>{id: 0, num: 0, pic: "", typs: 0, expire: 0}
        }
        for (let key in data) {
            item[key] = data[key]
        }
        _items[data.id] = item
        EventMgr.dispatchEvent("ITEM_DATA_FEED", item)
    }

    static getItemNum(id: number): number {
        if (_items[id])
            return _items[id].num
        
        return 0
    }

    static setItemNum(id: number, num: number) {
        if (_items[id]) {
            _items[id].num = num
            EventMgr.dispatchEvent("ITEM_DATA_FEED", _items[id])
        }
    }

    static getItemPic(id: number): string {
        if (_items[id]) 
            return _items[id].pic

        return ""
    }

    static getItemByType(typs: number) {
        return _items.filter(item => item.typs === typs)
    }

    static feed(id: number | number[], callback: Function, target: any) {
        EventMgr.on("ITEM_DATA_FEED", (msg) => {
            callback && callback.call(target, msg)
        }, target)
    }
}