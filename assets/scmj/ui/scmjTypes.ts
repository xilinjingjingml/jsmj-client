/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-11-20 09:58:50
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-11-20 10:33:28
 */
import { proto_mj } from "../protos/proto_mj"

export namespace ScmjType {
    export enum OPType {
        CHI = 1,
        GANG = 2,
        HU = 3,
    }
    export class OperateChoose {
        operFlag: OPType
        vecDatas: proto_mj.IOperateWrapper[]
        constructor(flag: OPType, vec: proto_mj.IOperateWrapper[]) {
            this.operFlag = flag
            this.vecDatas = vec
        }
    }
}