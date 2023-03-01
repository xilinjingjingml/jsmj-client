/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-12-17 15:27:42
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-12-17 18:31:31
 */
import BaseUI from "../base/baseUI"
import { izx, IBundle} from "../izx"

enum BundleStatus {
    Init,
    Loading,
    Loaded,
    Running,
}

class Bundle {
    status: BundleStatus
    name: string
    _stackScenes: BaseUI[] = [];
    bundle: cc.AssetManager.Bundle

    constructor(bundle: cc.AssetManager.Bundle) {
        this.bundle = bundle
    }

    pushScene(path: string, callback?: Function, opt?: any) {

    }

    pushDialog(path: string, callback?: Function, opt?: any) {

    }

    release() {
        
    }
}

let runningBundles: { [index: string]: Bundle } = { }
export namespace BundleMgr {  
    export function addBundle(bundle: cc.AssetManager.Bundle) {
        if (bundle) {
            if (runningBundles[bundle.name]) {
                izx.logW("bundle:"+bundle.name+" already exist!")
                return
            }
            runningBundles[bundle.name] = new Bundle(bundle)
        }
    }

    export function removeBundle(bundle: cc.AssetManager.Bundle|string) {
        if (typeof(bundle) == "string") {
            delete runningBundles[bundle]
        } else if (typeof(bundle) == "object") {
            if (!runningBundles[bundle.name]) {
                izx.logW("bundle:" + bundle.name + " NOT exist!")
                return
            }
            delete runningBundles[bundle.name]
        }
    }

    export enum LoadBundleEvent {
        LoadBundleProgress = "LoadBundleProgress",
        LoadBundleFinish = "LoadBundleFinish",
        LoadBundleFail = "LoadBundleFail",
    }
    export function LoadBundle(name: string) {
        let b = cc.assetManager.getBundle(name)
        if (b == null) {
            izx.log("==LoadBundle==", name)
            return new Promise((resolve, reject) => {
                cc.assetManager.loadBundle(name, (err, bundle) => {
                    if (err) {
                        izx.logE("LoadBundle: [" + name + "] Error: " + err)
                        reject({
                            err: err
                        })
                    } else {
                        izx.log("LoadBundle: [" + name + "] Success!")
                        resolve({
                            name: name,
                            err: err,
                            bundle: bundle
                        })
                    }
                })
            })
        } else {
            izx.log("==Bundle already load==", name)
            return new Promise((resolve, reject) => {
                reject({
                    name: name,
                    bundle: b
                })
            })
        }
    }
    export let RunBundle = (name: string, callback?: Function) => {

        async () => {
            await LoadBundle(name)
        }

        let b = cc.assetManager.getBundle(name)
        if (b == null) {
            izx.log("==LoadBundle==", name)
            let sockPromise = new Promise((resolve, reject) => {
                cc.assetManager.loadBundle(name, (err, bundle) => {
                    if (err) {
                        izx.logE("LoadBundle: [" + name + "] Error: " + err)
                        reject({
                            err: err
                        })
                    } else {
                        izx.log("LoadBundle: [" + name + "] Success!")
                        resolve({
                            name: name,
                            err: err,
                            bundle: bundle
                        })
                    }
                })
            })
            sockPromise.then((ret: IBundle) => {
                callback && callback(ret)
                ret.bundle.load("main", cc.Prefab, (finish: number, total: number, item: cc.AssetManager.RequestItem) => {
                    izx.dispatchEvent(LoadBundleEvent.LoadBundleProgress, { finish: finish, total: total, item: item })
                }, (error: Error, assets: cc.Prefab) => {
                    if (error) {
                        izx.dispatchEvent(LoadBundleEvent.LoadBundleFail, { err: error })
                    } else {
                        izx.dispatchEvent(LoadBundleEvent.LoadBundleFinish, { item: assets, name: name })
                        izx.pushScene(ret.name, "main")
                    }
                })
            }).catch((ret: IBundle) => {
                callback && callback(ret)
            })
        } else {
            izx.log("==Bundle already load==", name)
            izx.pushScene(name, "main")
        }
    }
}
