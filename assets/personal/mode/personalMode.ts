import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import { PERSONAL_EVENT } from "../personal_events"

const GET_TASK_PROGRESS = "jsmj-lobby-task-srv/task/getTaskProgress"
const UPDATE_HEAD = "jsmj-lobby-item-srv/item/UpdateHead"
const UPDATE_HEAD_FRAME = "jsmj-lobby-item-srv/item/UpdateHeadFrame"

export default class PersonalMode extends BaseMode{
    constructor() {        
        super()
        this.autoRegHander()
        this.init()
    }

    init() {
        izx.log("PersonalMode init")
        izx.on(PERSONAL_EVENT.GET_PERSONAL_PROGRESS_REQ, this.getTaskProgressReq, this)
        izx.on(PERSONAL_EVENT.UPDATE_HEAD_REQ, this.UpdateHeadReq, this)
        izx.on(PERSONAL_EVENT.UPDATE_HEAD_FRAME_REQ, this.UpdateHeadFrameReq, this)
    }

    unLoad() {
        izx.offByTag(this)
        izx.unsetProto("personal")
    }

    getTaskProgressReq(msg) {
        let url = izx.httpUrl + GET_TASK_PROGRESS
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code !== 1) {
                izx.logW("get personal progress err!", res)
                izx.logI(body)
                return
            }

            izx.dispatchEvent(PERSONAL_EVENT.GET_PERSONAL_PROGRESS_RSP, res.task_items)
        })
    }

    UpdateHeadReq(msg) {
        let url = izx.httpUrl + UPDATE_HEAD
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code !== 1) {
                izx.logW("UpdateHeadReq err!")
                return
            }
        })
    }
    
    UpdateHeadFrameReq(msg, callback) {
        let url = izx.httpUrl + UPDATE_HEAD_FRAME
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code !== 1) {
                izx.logW("UpdateHeadFrameReq err!")
                return
            }

            if (callback) {
                callback()
            }
        })
    }
}