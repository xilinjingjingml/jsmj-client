import { LogMgr } from "../mgr/logMgr"

export namespace Button{
    export function bindButtonClick(comp: string | cc.Node, node: cc.Node | Function, callback?: Function, customData?: string) {
        if (typeof comp === "string" && node instanceof cc.Node) {
            comp = cc.find(comp, node)
        }
        
        if (!comp || !(comp instanceof cc.Node)) {
            LogMgr.warn("button " + comp + " not found")
            return
        }

        if (!callback && typeof node === "function") {
            callback = node
        }
     
        let btn = comp.getComponent(cc.Button)
        let eventName = "btn_" + comp.name + "_click"
        btn[eventName] = (sender, data) => {
            LogMgr.info(eventName)
            callback(sender, data)
        }
        
        btn.clickEvents = btn.clickEvents || []

        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = comp
        clickEventHandler.component = "cc.Button"
        clickEventHandler.handler = eventName
        clickEventHandler.customEventData = customData

        btn.clickEvents.push(clickEventHandler)
    }
}