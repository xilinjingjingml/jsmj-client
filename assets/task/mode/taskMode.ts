import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import { TASK_EVENT } from "../task_evnets"
import Constants from "../../common/constants";

const GET_TASK_PROGRESS = "jsmj-lobby-task-srv/task/getTaskProgress"
const GET_TASK_AWARD = "jsmj-lobby-task-srv/task/getTaskAward"
const UPT_TASK_PROGRESS_BY_INDEX = "jsmj-lobby-task-srv/task/uptTaskProgressByIndex"
const UPT_TASK_PROGRESS_BY_GROUP = "jsmj-lobby-task-srv/task/uptTaskProgressByGroup"

export default class TaskMode extends BaseMode{
    constructor() {        
        super()
        this.autoRegHander()
        this.init()
    }

    init() {
        izx.log("TaskMode init")
        izx.on(TASK_EVENT.GET_TASK_PROGRESS_REQ, this.GetTaskProgressReq, this)
        izx.on(TASK_EVENT.GET_TASK_AWARD_REQ, this.GetTaskAwardReq, this)
        izx.on(TASK_EVENT.UPT_TASK_PROGRESS_BY_INDEX_REQ, this.UptTaskProgressByIndexReq, this)
        izx.on(TASK_EVENT.UPT_TASK_PROGRESS_BY_GROUP_REQ, this.UptTaskProgressByGroupReq, this)
    }

    unLoad() {
        izx.offByTag(this)
        izx.unsetProto("task")
    }

    GetTaskProgressReq(msg) {
        let url = izx.httpUrl + GET_TASK_PROGRESS
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code !== 1) {
                izx.logW("get task progress err!", res.err_code)
                izx.logI(body)
                return
            }

            izx.dispatchEvent(TASK_EVENT.GET_TASK_PROGRESS_RSP, res.task_items)
        })
    }

    GetTaskAwardReq(msg) {
        let url = izx.httpUrl + GET_TASK_AWARD
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code !== 1) {
                izx.logW("get task award err!", res.err_code)
                if (res.err_code == -9) {
                    izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: res.err_code, msg: "您正在游戏中，无法进行操作"})
                }
                return
            }

            izx.dispatchEvent(TASK_EVENT.GET_TASK_PROGRESS_REQ, {
                type: 0,
                uid: izx.user.uid,
            })

            let awards = new Array(res.awards.length)
            for(var i = 0; i<res.awards.length; i++) {
                let award = res.awards[i]
                let id = award.prop_id ? award.prop_id : 0
                awards[i] = {index:id, num:award.min_num}
            }
            
            izx.pushDialog("unipop","prefabs/AwardsMain", null, {"initParam":{"award":awards}, mask:true})
        })
    }

    UptTaskProgressByIndexReq(msg) {
        let url = izx.httpUrl + UPT_TASK_PROGRESS_BY_INDEX
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code !== 1) {
                izx.logW("upt task progress by index err!", res.err_code)
                izx.logI(body)
                return
            }

            izx.dispatchEvent(TASK_EVENT.UPT_TASK_PROGRESS_BY_INDEX_RSP, res.task_items)
        })
    }

    UptTaskProgressByGroupReq(msg) {
        let url = izx.httpUrl + UPT_TASK_PROGRESS_BY_GROUP
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code !== 1) {
                izx.logW("upt task progress by group err!", res.err_code)
                izx.logI(body)
                return
            }

            izx.dispatchEvent(TASK_EVENT.UPT_TASK_PROGRESS_BY_GROUP_RSP, res.task_items)
        })
    }

    UptTaskProgsNotHandler(msg) {
        msg = msg.packet
        izx.log(msg)
        izx.dispatchEvent(TASK_EVENT.UPT_TASK_PROGS_NOT, msg)
    }
}