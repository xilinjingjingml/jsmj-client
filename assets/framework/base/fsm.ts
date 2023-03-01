/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-02 10:40:56
 * @LastEditors: liuhongbin
 * @LastEditTime: 2021-01-06 19:15:02
 */
import { LogMgr } from "../mgr/logMgr"

interface iFsm{
    prmtState: string[] | number[]
    func: Function
}

export class Fsm{
    private _state: string | number = null
    private _states: {[index: string]: iFsm} = {}

    // this._fsm.regState(需求的状态, 当前的状态, 回调)
    regState(reqState: string | number, prmtState: string | number | string[] | number[], func: Function) {
        if (typeof prmtState === "string") {
            prmtState = [prmtState]
        } else if (typeof prmtState === "number") {
            prmtState = [prmtState]
        }
       let state = <iFsm>{prmtState: prmtState, func: func}       
       this._states[reqState] = state
    }

    initState(reqState: string | number) {
        this._state = reqState
    }

    // 更新到需求的状态
    updateState(reqState: string | number, ...args) {
        if (!this._states[reqState]) {
            LogMgr.warn(reqState + " state is not exists!")
            return
        }

        let state = this._states[reqState]
        if (this._checkState(state)) {
            if (state.func(args[0]) || true)
                this._state = reqState
        }
    }

    getState() {
        return this._state
    }

    private _checkState(state: iFsm) {
        for (let s of state.prmtState) {
            if (s === this._state) {
                return true
            }
        }

        return false
    }
}