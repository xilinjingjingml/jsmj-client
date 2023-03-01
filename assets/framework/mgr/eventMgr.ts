import { LogMgr } from "./logMgr"

interface IEventData {
    func: Function
    target: any
    once?: boolean
}
interface IEvent {
    [eventName: string]: IEventData[]
}

let _handles: IEvent = {}

export namespace EventMgr {
    export function on(eventName: string, cb: Function, target?: any) {
        if(!_handles[eventName]) {
            _handles[eventName] = []
        }
        const data: IEventData = {func: cb, target: target}
        _handles[eventName].push(data)
    }

    export function off(eventName: string, cb: Function, target?: any) {
        const list = _handles[eventName]
        if(!list || list.length <= 0) {
            return;
        }
        
        for (let i = 0; i < list.length; i++) {
            const event = list[i]
            if(event.func == cb && (!target || target == event.target)) {
                list.splice(i, 1)
                break;
            }
        }
    }

    export function once(eventName: string, cb: Function, target?: any) {
        if(!_handles[eventName]) {
            _handles[eventName] = []
        }
        const data: IEventData = {func: cb, target: target, once: true}
        _handles[eventName].push(data)
    }

    export function offByTag(target: any) {
        if (!target)
            return

        for (let eventName in _handles) {
            _handles[eventName] = _handles[eventName].filter(item => item.target !== target)
        }
    }

    export function dispatchEvent(eventName: string, ...args:any) {
        const list = _handles[eventName]
        if(!list || list.length <= 0){
            return
        }
        // for(let i = 0; i < list.length; i++) {
        //     const event = list[i]
        //     event.func.apply(event.target, args)            
        // }
        let len = list.length
        for (let i = 0; i < len; ) {
            const event = list[i]
            if (!event) return
            event.func.apply(event.target, args)
            event.once ? list.splice(i, 1) : i++
        }
    }
}