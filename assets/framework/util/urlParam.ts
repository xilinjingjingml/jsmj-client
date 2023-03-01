/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-02 10:40:56
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-11 14:54:12
 */
export namespace URLParam {
    // 获取当前的URI的所有参数
    export function parseSearch(): {} {
        if (CC_JSB) {
            return {
                env: "o",
            }
        }
        else if (cc.sys.WECHAT_GAME === cc.sys.platform) {
            return {
                env: "o",
            }
        }
        else if (cc.sys.isBrowser) {
        //     return {
        //         env: "o",
        //     }
        // } else {
            let search = window.location.search
            var args = {}
            if (search.indexOf('?') != -1) {
                var query = search.substr(1)
                var pairs = query.split('&')
                for (var i = 0; i < pairs.length; i++) {
                    var sp = pairs[i].split('=')
                    args[sp[0]] = decodeURIComponent(sp[1])
                }
            }
            return args
        }
    }

    export function checkHttps(): boolean {
        if (cc.sys.WECHAT_GAME === cc.sys.platform) {
            return true
        }
        return window.location.protocol === "https:"
    }
}