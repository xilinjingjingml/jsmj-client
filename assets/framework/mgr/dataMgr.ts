/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-02 10:40:56
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-12-29 16:54:22
 */
import { EventMgr } from "../mgr/eventMgr"
import { LogMgr } from "./logMgr"

let _common: any = {}
const DATA_EVENT_NAME: string = "DATAEVENT_"

// let _funcs: {[index: string]: Function} = {}

export namespace DataMgr {
    export function setData(name: string, data: any, save: boolean = false) {
        let names = name.split(".")
        let newData = data
        let key = name
        if (names.length === 1) {
            _common[name] = data
        } else if (names.length > 1) {
            key = names[0]
            newData = _common[names[0]]
            let tmp = newData
            for (let i = 1; tmp && i < names.length - 1; i++) {
                if (!tmp[names[i]]) {
                    tmp[names[i]] = {}
                }
                tmp = tmp[names[i]]
            }
            tmp[names[names.length - 1]] = data
        }

        if (save) {
            localStorage.setItem(key, JSON.stringify(newData))
        }

        key = ""
        for (let n of names) {
            key = key + n
            EventMgr.dispatchEvent(DATA_EVENT_NAME + key, newData)
            key = key + "."
        }
    }
    
    export function getData(name: string): any {        
        let names = name.split(".")
        let key = names[0]
        if (names.length === 1 && _common[name]) {
            return _common[name]
        } else if (names.length > 1 && _common[names[0]]) {
            let data = _common[names[0]]
            for (let i = 1; data && i < names.length; i++) {
                data = data[names[i]]
            }
            return data
        }
        if ("" === localStorage.getItem(name)) {
            return null
        }
        return JSON.parse(localStorage.getItem(name))
    }

    export function feed(name: string, callback: Function, target?: any) {
        let st = name.split(".")        
        let eventName = DATA_EVENT_NAME + st[0]
        let func = (msg) => {
            let data = msg
            for (let i = 1; i < st.length; i ++) {
                data = msg[st[i]]
            }
            callback && callback.call(target, {data: data})
        }
        EventMgr.on(eventName, func, target)
    }
}