export namespace ToJava {
    // 调用java方法
    export function callStaticMethod(clsName: string, methodName: string, methodSig?: string, params: any[] = []): any {
        if (!CC_JSB) {
            return
        }
        try {
            methodSig && params.unshift(methodSig)
            return jsb.reflection.callStaticMethod.apply(jsb.reflection, [clsName, methodName].concat(params))
        } catch (error) {
            cc.error("callStaticMethod", JSON.stringify(error))
        }
    }
}