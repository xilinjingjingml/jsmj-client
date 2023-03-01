import { izx } from "../framework/izx"
import UnipopMode from "./mode/unipopMode"
import ReliefMode from "./mode/reliefMode"

export default class Unipop {
  static _instance: Unipop = null
  static getInstance(): Unipop {
    if (!Unipop._instance) {
      Unipop._instance = new Unipop()
      Unipop._instance._init()
    }

    return Unipop._instance
  }    

  private _unipop: UnipopMode = new UnipopMode()
  private _relief: ReliefMode = new ReliefMode()

  private _init() {
    izx.log("_init")
    this._unipop.load()
    this._relief.load()
  }
}

let unipop = Unipop.getInstance()