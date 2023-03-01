/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-05-20 17:07:41
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-26 15:50:10
 */
// import proto = require("./lhd_proto")

import { LogMgr } from "../mgr/logMgr";
import { EventMgr } from "../mgr/eventMgr";
import { izx } from "../izx";

interface MsgType {
    route: string
    reqName: string
    reqBody: object
}

export namespace GateMgr {

    let starx = window["starx"]

    let _sendQueue: Array<MsgType> = []

    let _connected: boolean = false

    let _proto: { [name: string]: any[] } = {}

    function _registe() {
        starx.off('io-error')
        starx.on('io-error', function (event) {
            // izxFW.error('#########io-error#########', event)
            LogMgr.log('#########io-error#########', event);
        })

        starx.off('reconnect')
        starx.on('reconnect', function () {
            LogMgr.log('#########reconnect#########')
            EventMgr.dispatchEvent("SOCKET_RECONNECT")
        })

        starx.off('close')
        starx.on('close', function (event) {
            LogMgr.log('#########close#########', event) 
            onDisconnect()
            EventMgr.dispatchEvent("SOCKET_CLOSE")           
        })

        starx.off('disconnect')
        starx.on('disconnect', function (event) {
            LogMgr.log('#########disconnect#########', event)
            onDisconnect()
            EventMgr.dispatchEvent("SOCKET_DISCONNECT")
        })

        starx.off('heartbeat timeout')
        starx.on('heartbeat timeout', function () {
            LogMgr.log('#########heartbeat timeout#########')
            EventMgr.dispatchEvent("SOCKET_HEARTBEAT_TIMEOUT")
        })

        starx.off('error')
        starx.on('error', function (msg) {
            LogMgr.log('#########error#########', msg)
            EventMgr.dispatchEvent("SOCKET_ERROR")
        })

        starx.off('onKick')
        starx.on('onKick', function (data) {
            LogMgr.log('#########onKick#########', data)
            onDisconnect()
            EventMgr.dispatchEvent("SOCKET_KICK")
        })

        starx.off('onData')
        starx.on("onData", function (data) {
            if (data) {
                if (data.route === "SysError") {
                    LogMgr.warn("socket sys err", data)
                }                
                LogMgr.info(data.route)
                let body = _decodePacket(data.route, data.body)
                LogMgr.log(body)
                EventMgr.dispatchEvent(data.route, body)
            }
        })
    }

    export function login(host: string, port?: number) {
        _registe()

        let conn = (caPath: string) => {
            // let sockPromise = new Promise((resolve, reject) => {
                starx.init({
                    host: host,
                    port: port,
                    reconnect: true,
                    maxReconnectAttempts: 1e10,
                    caFilePath: caPath
                }, function (socket) {
                    LogMgr.log("==connected==", socket)
                    if (socket === null) {
                        // reject("failed")
                        LogMgr.log("==connected failed==")
                        EventMgr.dispatchEvent("SOCKET_FAILED", "socket:host:" + host + ",port:"+port+" connect failed")
                    } else {
                        LogMgr.log("==connected success==")
                        cc.Canvas.instance.unschedule(sendMsg)
                        cc.Canvas.instance.schedule(sendMsg, 0.1, cc.macro.REPEAT_FOREVER, 0)

                        // resolve("success")
                        EventMgr.dispatchEvent("SOCKET_CONNECT")
                    }
                })
            // })
            // sockPromise.then((msg) => {}).catch((msg) => { })  
        }

        if (cc.sys.WECHAT_GAME === cc.sys.platform) {
            console.log("cacert:::0",cc.sys.platform)
            conn(null)
        }
        else if(cc.sys.isBrowser) {
            console.log("cacert:::1",cc.sys.platform)
            conn(null)
        } else {
            console.log("cacert:::2",cc.sys.platform)
            let bundle = cc.assetManager.getBundle("gameInit")
            if (bundle) {
                let caAsset = bundle.get("platform/cacert")
                if (caAsset) {
                    conn(caAsset.nativeUrl)
                } else {
                    console.log("cacert:::",cc.sys.platform,"CA pem NOT FOUND, path: platform/cacert")
                    throw new Error(`CA pem NOT FOUND, path: platform/cacert`);
                }
            } else {
                console.log("cacert:::",cc.sys.platform,"Need load gameInit bundle first to load the CA pem")
                throw new Error("Need load gameInit bundle first to load the CA pem");
            }
        }
    }

    export function setConnected() {
        _connected = true
    }

    export function setProto(name, proto) {
        if (_proto[name])
            delete _proto[name]

        _proto[name] = proto
    }

    export function unsetProto(name) {
        if (_proto[name])
            delete _proto[name]
    }

    function _findProto(name) {        
        for (let key in _proto) {
            if (_proto[key][name])
                return { module: key, proto: _proto[key][name] }
        }

        return null
    }

    function _encodePacket(name, packet) {
        let p = _findProto(name)//proto[name]
        if (!p || !p.proto) {
            LogMgr.log('encode Packet : Unknown Packet = ' + name)
            // throw new ReferenceError('encode Packet : Unknown Packet = ' + name)
        }

        let buf = p.proto.create(packet)
        buf = p.proto.encode(buf).finish()
    
        return buf
    }

    function _decodePacket(name, data) {
        let p = _findProto(name)//proto[name]
        if (!p || !p.proto) {
            LogMgr.log('Decode Packet : Unknown Proto = ' + name)
            return 
            // throw new ReferenceError('Decode Packet : Unknown Proto = ' + name)
        }

        let packet = p.proto.decode(data)

        let propertys = Reflect.getPrototypeOf(packet)
        for (let key in propertys) {
            if (typeof propertys[key] === "function")
                continue;

            if (false === propertys.hasOwnProperty.call(packet, key)) {
                packet[key] = propertys[key]
            }
        }

        return { module: p.module, packet: packet }
    }

    export function request(route, reqName, reqBody, resName, cb) {
        try {
            LogMgr.info(route, reqName)
            LogMgr.log(reqBody)
            starx.request(route, _encodePacket(reqName, reqBody), function (data) {
                let msg = _decodePacket(resName, data)
                cb = cb || function () { }
                cb(msg)
            })
        } catch (e) {
            LogMgr.info(e)
        }
    }

    export function notify(route, reqName, reqBody) {
        LogMgr.info(route, reqName)
        LogMgr.log(reqBody)

        // 如果是登录协议，则直接发送不再放入缓存中
        if (route === "mcbeam-lobby-login-srv.Player.Login" && reqName === "LoginReq") {
            starx.notify(route, _encodePacket(reqName, reqBody))
            return
        }

        if (!_connected) {
            LogMgr.warn("==network disconnected==", reqName)
        }
        if (starx) {
            _sendQueue.push({ route: route, reqName: reqName, reqBody: reqBody })
        }
    }

    function sendMsg() {
        if (_sendQueue.length === 0) {
            return
        }
        if (!_connected) {
            return
        }
        let msg: MsgType = _sendQueue.shift()
        starx.notify(msg.route, _encodePacket(msg.reqName, msg.reqBody))
    }

    function onDisconnect() {
        _connected = false
        cc.Canvas.instance.unschedule(sendMsg)
    }

    export function close() {
        // 手动关闭，清空发送队列
        _connected = false
        _sendQueue.length = 0
        cc.Canvas.instance.unschedule(sendMsg)
        starx.disconnect(true)
    }
}