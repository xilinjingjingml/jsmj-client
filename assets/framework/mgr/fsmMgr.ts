import { LogMgr } from "./logMgr"
import { Fsm } from "../base/fsm"

let _machines: {[index: string]: Fsm} = {}
export namespace FsmMgr{
    export function createFsm(name: string): Fsm {
        if (!_machines[name])
            _machines[name] = new Fsm()

        return _machines[name]
    }

    export function getFsm(name: string): Fsm {
        return createFsm(name)
    }
}