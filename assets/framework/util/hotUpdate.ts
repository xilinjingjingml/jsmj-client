// 热更新

import { izx } from "../izx"
import { LogMgr } from "../mgr/logMgr"
import { utils } from "./utils"

export namespace HotUpdate {
    let HotUpt: HotUpdateMgr = null

    function _update(isCheckUpdate: boolean, params: object, updateProgress: (cur: number, total: number) => void, updateResult: (err: string) => void) {
        if (HotUpt == null) {
            HotUpt = new HotUpdateMgr()
        }

        let checkCb = (evt: jsb.EventAssetsManager) => {

            switch (evt.getEventCode()) {
                case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                    {
                        if (evt.getTotalBytes() > 0) {
                            updateProgress(evt.getDownloadedBytes(), evt.getTotalBytes())
                        } else if (evt.getTotalFiles() > 0) {
                            updateProgress(evt.getDownloadedFiles(), evt.getTotalFiles())
                        }
                    }
                    break
                case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                    updateResult(null)
                    break
                case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                    updateResult(evt.getMessage())
                    break
                default:
                    break;
            }                
        }
        let updateCb = (evt: jsb.EventAssetsManager) => {

            switch (evt.getEventCode()) {
                case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                    {
                        if (HotUpt.getAM().getState() === jsb.AssetsManager.State.UPDATING) {
                            if (evt.getTotalBytes() > 0) {
                                updateProgress(evt.getDownloadedBytes(), evt.getTotalBytes())
                            } else if (evt.getTotalFiles() > 0) {
                                updateProgress(evt.getDownloadedFiles(), evt.getTotalFiles())
                            }
                        }
                    }
                    break;
                case jsb.EventAssetsManager.UPDATE_FINISHED:
                case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                    updateResult(null)
                    break
                case jsb.EventAssetsManager.UPDATE_FAILED:
                    updateResult(evt.getMessage())
                    break
                default:
                    break;
            }
        }

        HotUpt.init(params, checkCb, updateCb)

        if (isCheckUpdate) {
            HotUpt.checkUpdate()
        } else {
            HotUpt.hotUpdate()
        }
    }
    
    export function hotUpdate(params: object, updateProgress: (cur: number, total: number)=>void, updateResult: (err: string)=> void) {
        _update(false, params, updateProgress, updateResult)
    }
    export function checkUpdate(params: object, updateProgress: (cur: number, total: number) => void, updateResult: (err: string) => void) {
        _update(true, params, updateProgress, updateResult)
    }
}

class HotUpdateMgr {
    private _storagePath: string = ''
    private manifestUrl: cc.Asset = null
    private _updating: boolean = false
    private _canRetry: boolean = false
    private _am: jsb.AssetsManager = null
    private _checkListener: (evt: jsb.EventAssetsManager) => void
    private _updateListener: (evt: jsb.EventAssetsManager) => void
    private _failCount: number = 0
    private _init: boolean = false
    HotUpdateEvent: jsb.EventAssetsManager = null
    private initParam: object

    versionCompareHandle(versionA: string, versionB: string) {
        cc.log("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
        var vA = versionA.split('.');
        var vB = versionB.split('.');
        for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || "0");
            if (a === b) {
                continue;
            }
            else {
                return a - b;
            }
        }
        if (vB.length > vA.length) {
            return -1;
        }
        else {
            return 0;
        }
    }

    getLocalPackageManifest(): string {
        return "project.internal.manifest"
    }

    getAM(): jsb.AssetsManager {
        return this._am
    }

    init(params: object, checkCb: (evt: jsb.EventAssetsManager) => void, updateCb: (evt: jsb.EventAssetsManager) => void) {
        // Hot update is only available in Native build
        if (!cc.sys.isNative) {
            return;
        }
        if (this._init)
            return

        params = params || {}
        this.initParam = params
        this._init = true

        if (!params.path || (typeof(params.path) === "string" && params.path.length == 0))
            params.path = "HotFix"

        this._checkListener = checkCb
        this._updateListener = updateCb

        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + params.path);
        cc.log('Storage path for remote asset : ' + this._storagePath);

        // Load local manifest in app package
        let localManifestPath = this.getLocalPackageManifest()

        this._am = new jsb.AssetsManager(localManifestPath, this._storagePath, this.versionCompareHandle);
        cc.log("Local manifest Path : " + this._am.getLocalManifest().getManifestRoot())
        if (!jsb.fileUtils.isFileExist(this._am.getLocalManifest().getManifestRoot() + localManifestPath)) {
            // localManifest是否被替换为cacheManifest
            localManifestPath = "project.manifest"
        }
        if (this._am.getLocalManifest())
            this.updateManifest(this._am.getLocalManifest(), localManifestPath)

        // Setup the verification callback, but we don't have md5 check function yet, so only print some message
        // Return true if the verification passed, otherwise return false
        this._am.setVerifyCallback(function (path, asset) {
            // When asset is compressed, we don't need to check its md5, because zip file have been deleted.
            var compressed = asset.compressed;
            // Retrieve the correct md5 value.
            var expectedMD5 = asset.md5;
            // asset.path is relative path and path is absolute.
            var relativePath = asset.path;
            // The size of asset file, but this value could be absent.
            var size = asset.size;
            if (compressed) {
                cc.log("Verification passed : " + relativePath)
                return true;
            }
            else {
                cc.log("Verification passed : " + relativePath + ' (' + expectedMD5 + ')');
                return true;
            }
        });

        cc.log('Hot update is ready, please check or directly update.');

        if (cc.sys.os === cc.sys.OS_ANDROID) {
            // Some Android device may slow down the download process when concurrent tasks is too much.
            // The value may not be accurate, please do more test and find what's most suitable for your game.
            this._am.setMaxConcurrentTask(2);
            cc.log("Max concurrent tasks count have been limited to 2");
        }
    }

    updateManifest(manifest: jsb.Manifest, filename) {
        const manifestPath = manifest.getManifestRoot() + filename
        const manifestJson = JSON.parse(jsb.fileUtils.getStringFromFile(manifestPath))
        for (const key in this.initParam) {
            if (manifestJson[key] && this.initParam[key]) {
                manifestJson[key] = this.initParam[key]
            }
        }
        cc.log("==updateManifest==", manifestPath, JSON.stringify(manifestJson))
        cc.log("==updateManifest==packageUrl==", this.initParam.packageUrl)
        manifest.parseJSONString(JSON.stringify(manifestJson), manifestPath)
    }

    checkUpdate() {
        if (!this._init) {
            cc.log('init first ...');
            return
        }
        if (this._updating) {
            cc.log('Checking or updating ...');
            return;
        }
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            cc.log('Failed to load local manifest ...')
            this._checkListener(null)
            return;
        }
        this._am.setEventCallback(this.checkCb.bind(this));

        this._updating = true;
        this._am.checkUpdate();
    }

    hotUpdate() {
        if (!this._init) {
            cc.log('init first ...');
            return
        }
        if (this._am && !this._updating) {
            cc.log("begin hotUpdate...")
            this._am.setEventCallback(this.updateCb.bind(this));

            if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                // Resolve md5 url
                if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
                    cc.log('hotUpdate: Failed to load local manifest ...')
                    this._updateListener(null)
                    return
                }
            }

            this._failCount = 0;
            this._am.update();
            this._updating = true;
        } else {
            cc.log("updating...")
        }
    }

    checkCb(event: jsb.EventAssetsManager) {
        this.HotUpdateEvent = event
        cc.log('checkCb Code: ' + event.getEventCode());
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                cc.log("No local manifest file found, hot update skipped.");
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                cc.log("Fail to download manifest file, hot update skipped.");
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                cc.log("Already up to date with the latest remote version.");
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                cc.log('New version found, please try to update. (' + this._am.getTotalBytes() + ')');
                this.updateManifest(this._am.getRemoteManifest(), 'project.manifest.temp')
                break;
            default:
                return;
        }

        this._updating = false;

        if (this._checkListener)
            this._checkListener(this.HotUpdateEvent)

        this._am.setEventCallback(null);
        this._checkListener = null;
    }

    updateCb(event: jsb.EventAssetsManager) {
        cc.log('updateCb Code: ' + event.getEventCode());
        this.HotUpdateEvent = event
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                cc.log('No local manifest file found, hot update skipped.');
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:

                var msg = event.getMessage();
                if (msg) {
                    cc.log('Updated file: ' + msg);
                    // cc.log(event.getPercent()/100 + '% : ' + msg);
                }
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                cc.log('Fail to download manifest file, hot update skipped.');
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                cc.log('Already up to date with the latest remote version.');
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                cc.log('Update finished. ' + event.getMessage());
                needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                cc.log('Update failed. ' + event.getMessage());
                this._updating = false;
                this._canRetry = true;
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                cc.log('Asset update error: ' + event.getAssetId() + ', ' + event.getMessage());
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                cc.log(event.getMessage());
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                cc.log('New version found, please try to update. (' + this._am.getTotalBytes() + ')');
                this.updateManifest(this._am.getRemoteManifest(), 'project.manifest.temp')
                break;
            default:
                break;
        }

        if (this._updateListener)
            this._updateListener(this.HotUpdateEvent)

        if (failed) {
            this._am.setEventCallback(null);
            this._updateListener = null;
            this._updating = false;
        }

        if (needRestart) {
            this._updating = false;
            this._am.setEventCallback(null);
            this._updateListener = null;
            // Prepend the manifest's search path
            var searchPaths = jsb.fileUtils.getSearchPaths();
            var newPaths = this._am.getLocalManifest().getSearchPaths();
            cc.log("==new search path begin==")
            for (let p of newPaths) {
                cc.log(p)
            }
            cc.log("==new search path end==")
            Array.prototype.unshift.apply(searchPaths, newPaths);
            // This value will be retrieved and appended to the default search path during game startup,
            // please refer to samples/js-tests/main.js for detailed usage.
            // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.
            cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);

            cc.audioEngine.stopAll();
            cc.game.restart();
        }
    }
}