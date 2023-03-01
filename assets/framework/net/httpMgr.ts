import { izx } from "../izx"
import { Jsons } from "../util/jsons"

let _isHttps: boolean = true
let _agencyAddress: string = null

export namespace HttpMgr {

    // export function isHttps(isHttp: boolean = false) {
    //     _isHttps = isHttp
    // }

    function _formatUrl(url) {
        var ret = /^(https?:\/\/)(.*)/.exec(url)
        let protocol = ""
        if (ret) {
            protocol = ret[1]
            url = ret[2]
        }
        let platStr = cc.sys.platform
        if (platStr === cc.sys.MOBILE_BROWSER || platStr === cc.sys.DESKTOP_BROWSER) {
            izx.log("==isBrowser==")
            return window.location.protocol + "//" + url
        }
        if (platStr == cc.sys.WECHAT_GAME) {
            return "https://" + url
        }

        return protocol + url
    }
    
    function _linkParam(url, params)     { 
        if (url.indexOf("?") == -1){
            url = url + "?"
            for (const key in params) {
                url = url + key + "=" + encodeURIComponent(params[key]) + "&"
            }
    
            url = url.substr(0, url.length - 1)
        }
        else{
            for (var key in (params || {})) {
                url = url.replace('{' + key + '}', encodeURIComponent(params[key]))
            }
        }
         
        url = _formatUrl(url)

        if (cc.sys.platform != cc.sys.WECHAT_GAME && _agencyAddress) {
            izx.log("==_agencyAddress==", _agencyAddress)
            url = _agencyAddress + encodeURI(url)
        }

        izx.log("url:", url, params)
        return url
    }

    export function get(url, params, callback = null) {
        var xhr = new XMLHttpRequest()
        xhr.timeout = 5000;

        let request = _linkParam(url, params)
        xhr.open("GET", request, true);

        if (cc.sys.isNative){
            xhr.setRequestHeader("Accept", "text/html");
            xhr.setRequestHeader("Accept-Charset", "utf-8");
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }

        xhr.onload = function() {
            var res = null
            if (xhr.status == 200) {
                if (params && params.response) {
                    res = xhr.response
                } else if (Jsons.isJSON(xhr.responseText)) {
                    res = JSON.parse(xhr.responseText)
                }else {
                    res = xhr.responseText
                }
            }
            if (callback) {
                callback(res)
            }
        }

        xhr.onabort = function() {
            callback(null, 'the request has been aborted')
        }

        xhr.onerror = function(event) {
            callback(null, event)
        }

        xhr.ontimeout = function(event) {
            callback(null, 'timeout')
        }
        
        xhr.send();
        return xhr;
    }

    export function post(url, params, body, callback = null) {
        var xhr = new XMLHttpRequest()
        xhr.timeout = 5000;
        
        let request = _linkParam(url , params)
        // console.log(request)
        
        xhr.open("POST", request, true);
        if (cc.sys.isNative){
            xhr.setRequestHeader("Accept", "text/html");
            xhr.setRequestHeader("Accept-Charset", "utf-8");
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }

        if (body) {
            // if (typeof body === "object")
            //     body = JSON.stringify(body)           

            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            // xhr.setRequestHeader("Content-Length", body.length);
        }
    
        xhr.onload = function() {
            var res = null
            if (xhr.status == 200) {
                if (Jsons.isJSON(xhr.responseText)) {
                    res = JSON.parse(xhr.responseText)
                }else {
                    res = xhr.responseText
                }
            } else if (xhr.status == 307) {
                if (Jsons.isJSON(xhr.responseText)) {
                    res = JSON.parse(xhr.responseText)
                }else {
                    res = xhr.responseText
                }
                if (res.Location) {
                    this.HTTPPostRequest(res.Location, params, callback, xhr.timeout)
                    return
                }
            }
            if (callback) {
                callback(res)
            }
        }.bind(this)

        xhr.onabort = function() {
            callback(null, 'the request has been aborted')
        }

        xhr.onerror = function(event) {
            callback(null, event)
        }

        if (body) {
            if (typeof (URLSearchParams) === "function") {
                let params = new URLSearchParams()
                for (let key in body) {
                    params.append(key, body[key])
                }

                xhr.send(params);
            } else {
                let paramArr = []
                for (let key in body) {
                    paramArr.push(key+"="+encodeURIComponent(body[key]))
                }
                xhr.send(paramArr.join('&'))
            }
        }
        return xhr;
    }

    export function download(url, params, callback) {
        var xhr = new XMLHttpRequest()
        xhr.timeout = 5000;
        
        let request = _linkParam(url, params)

        xhr.responseType = "arraybuffer";  
        if (cc.sys.isNative){
            xhr.setRequestHeader("Accept", "text/html");
            xhr.setRequestHeader("Accept-Charset", "utf-8");
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)){
                var buffer = xhr.response;
                var dataview = new DataView(buffer);
                var ints = new Uint8Array(buffer.byteLength);
                for (var i = 0; i < ints.length; i++) {
                    ints[i] = dataview.getUint8(i);
                }
                callback(ints, null);
            }
            else {
                callback(null, xhr.readyState + ":" + xhr.status);
            }
        };
        xhr.open("GET", request, true);
        xhr.send();
        return xhr;
    }
}