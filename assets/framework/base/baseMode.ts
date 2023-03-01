import { EventMgr } from "../mgr/eventMgr"
import { izx } from "../izx"

export default class BaseMode {
    autoRegHander() {
        let prototype = Reflect.getPrototypeOf(this)
        for (const key of Object.keys(prototype)) {
            if (-1 !== key.indexOf("Handler") && typeof prototype[key] === "function") {
                let eventName = key.substring(0, key.length - 7)
                izx.log("auto reg event = " + eventName)
                EventMgr.on(eventName, prototype[key], this)
            }
        }
    }
}
