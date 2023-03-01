/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-10-21 14:43:52
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-11-02 10:43:13
 */
import { izx } from "../izx";

export namespace utils {    
    // 比较字符串版本
    export function versionCompare(versionA: string, versionB: string): number {
        versionA = versionA || "0.0.0"
        const vA = versionA.split('.')
        versionB = versionB || "0.0.0"
        const vB = versionB.split('.')
        for (let i = 0; i < vA.length; ++i) {
            const a = parseInt(vA[i])
            const b = parseInt(vB[i] || '0')
            if (a === b) {
                continue
            } else {
                return a - b
            }
        }
        if (vB.length > vA.length) {
            return -1
        } else {
            return 0
        }
    }
    
    export function getMoneyformat(money: Number){
        let params = izx.getData("onlineParam")
        if (params && params.showshop == 1) {
            return money.toString()
        }

        if (money == null) {
            return ""
        }
        let tmpmoney = new String(Math.abs(<number>money))
        //将游戏币显示为红包金额,十位和个位显示为小数,如游戏币12345显示为123.45
        let moneystr = ""
        if (tmpmoney.length <= 2){
            if (tmpmoney.length <= 1) {
                moneystr = "0.0" + tmpmoney
            }
            else {
                moneystr = "0." + tmpmoney
            }
        } else {
            //后缀
            let suffix = "." + tmpmoney.substr(tmpmoney.length-2,2)
            tmpmoney = tmpmoney.substr(0,tmpmoney.length-2);
            let tbl = []
            while (tmpmoney.length > 3)
            {
                tbl.push(tmpmoney.substr(tmpmoney.length-3, 3))
                tmpmoney = tmpmoney.substr(0, tmpmoney.length-3)
            }
            if (tmpmoney.length > 0) {
                tbl.push(tmpmoney)
            }
            tbl.reverse()
            tbl.forEach((tempStr,index) => {
                if (index == tbl.length - 1) {
                    moneystr += tempStr + ""
                }else {
                    moneystr += tempStr + ","
                }
            });
            moneystr += suffix
        }

        return (money<0 ? "-" : "") + moneystr
    }
}