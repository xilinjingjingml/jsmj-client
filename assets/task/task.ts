import { izx } from "../framework/izx";
import Constants from "../common/constants";
import TaskMode from "./mode/taskMode";
import proto = require("./protos/task_proto")

// bundleName
const GAME_BUNDLE_NAME = "task"

export default class Task {
    private static _instance: Task
    static getInstance(): Task {
        if (!Task._instance) {
            Task._instance = new Task()
            Task._instance._init()
        }

        return Task._instance
    }

    private _taskMode: TaskMode = new TaskMode()

    private _init() {
        izx.setProto("task", proto)
        
        izx.on(Constants.EventName.TASK_SHOW_MAIN, this.ShowTask, this)
    }

    private ShowTask() {
       // izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/TaskMain", (res) => {
        //    izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
        })
    }
}

let task = Task.getInstance()