import { LogMgr } from "../mgr/logMgr"

export namespace ProgressBar {
    // 设置进度条的值
    export function setProgress(comp: string | cc.Node, node?: cc.Node | number, value?: number) {
        if (typeof comp === "string" && node instanceof cc.Node) {
            comp = cc.find(comp, node)
        }
        
        if (!comp || !(comp instanceof cc.Node)) {
            LogMgr.warn("progress " + comp + " not found")
            return
        }

        if (typeof node === "number") {
            value = node
        }

        if (!value) {
            value = 0
        }

        let progress = comp.getComponent(cc.ProgressBar)
        if (progress)
            progress.progress = value
    }

}