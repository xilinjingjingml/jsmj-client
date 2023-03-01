/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-02 10:40:56
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-12-25 15:12:59
 */
import { EventMgr } from "../mgr/eventMgr"

export interface UserData {
    uid: number
    token: string
    nickname: string
    sex: number
    pic: string
    money: number
    level: number    
    vip: number
    guid: string
}

export default class User {
    private static _userData: UserData = <UserData>{uid: 0, sex: 0, money: 0, level: 0, vip: 0}        
    static get uid(): number {
        return User._userData.uid
    }
    static set uid(value: number) {
        User._userData.uid = value
        EventMgr.dispatchEvent("USER_DATA_FEED")
    }

    static get guid(): string {
        return User._userData.guid
    }

    static set guid(value: string) {
        User._userData.guid = value
    }

    static get token(): string {
        return User._userData.token
    }
    static set token(value: string) {
        User._userData.token = value
    }

    static get nickname(): string {
        return User._userData.nickname
    }
    static set nickname(value: string) {
        User._userData.nickname = value
        EventMgr.dispatchEvent("USER_DATA_FEED")
    }

    static get sex(): number {
        return User._userData.sex
    }
    static set sex(value: number) {
        User._userData.sex = value
        EventMgr.dispatchEvent("USER_DATA_FEED")
    }

    static get pic(): string {
        return User._userData.pic
    }
    static set pic(value: string) {
        User._userData.pic = value
        EventMgr.dispatchEvent("USER_DATA_FEED")
    }

    static get money(): number {
        return User._userData.money
    }
    static set money(value: number) {
        User._userData.money = value
        EventMgr.dispatchEvent("USER_DATA_FEED")
    }

    static get level(): number {
        return User._userData.level
    }
    static set level(value: number) {
        User._userData.level = value
        EventMgr.dispatchEvent("USER_DATA_FEED")
    }

    static get vip(): number {
        return User._userData.vip
    }
    static set vip(value: number) {
        User._userData.vip = value
        EventMgr.dispatchEvent("USER_DATA_FEED")
    }

    static feed(field: string | string[], callback: Function, target: any) {
        EventMgr.on("USER_DATA_FEED", () => {
            let msg = {}
            if (typeof field === "string") {
                msg = User._userData[field]
            } else {
                field.map(item => msg[item] = User._userData[item])
            }
            callback && callback.call(target, msg)
        }, target)
    }
}
