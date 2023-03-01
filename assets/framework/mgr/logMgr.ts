export namespace LogMgr {
    // 普通输出
    export function log(...args) {
        cc.log("%c%s:" + cc.js.formatStr.apply(cc, getMsgs(args)), getDateString(), stack(2));
        printObjs(args)
    }
 
    export function info(...args) {
        cc.log("%c%s%s:" + cc.js.formatStr.apply(cc, getMsgs(args)), "color:#00CD00;", getDateString(), stack(2));
        printObjs(args)
    }
 
    export function warn(...args) {
        cc.log("%c%s%s:" + cc.js.formatStr.apply(cc, getMsgs(args)), "color:#ee7700;", getDateString(), stack(2));
        printObjs(args)
    }
 
    export function error(...args) {
        cc.log("%c%s%s:" + cc.js.formatStr.apply(cc, getMsgs(args)), "color:red", getDateString(), stack(2));
        printObjs(args)
    }

    function getMsgs(args) {
        return args.filter(item => typeof item !== "object")
    }
 
    function printObjs(args) {
        args.filter(item => typeof item === "object").map(item => cc.log(item))
    }
 
    function getDateString() {
        let d = new Date();
        let str = d.getHours() + "";
        let timeStr = "";
        timeStr += (str.length === 1 ? ("0" + str) : str) + ":";
        str = d.getMinutes() + "";
        timeStr += (str.length === 1 ? ("0" + str) : str) + ":";
        str = d.getSeconds() + "";
        timeStr += (str.length === 1 ? ("0" + str) : str) + ".";
        str = d.getMilliseconds() + "";
        if (str.length === 1) str = "00" + str;
        if (str.length === 2) str = "0" + str;
        timeStr += str;
        timeStr = '[' + timeStr + ']';
        return timeStr;
    }
 
    function printStack() {
        let e = new Error();
        let lines = e.stack.split('\n');
        lines.shift();
        lines.forEach((line) => {
            cc.log('line:', line);
        });
    }
 
    function stack(index) {
        let e = new Error();
        let lines = e.stack.split("\n");
        lines.shift();
        let result = [];
        lines.forEach((line) => {
            line = line.substring(7);
            let lineBreak = line.split(" ");
            if (lineBreak.length < 2) {
                result.push(lineBreak[0]);
            } else {
                result.push({ [lineBreak[0]]: lineBreak[1] });
            }
        });
 
        let list = [];
        if (index <= result.length - 1) {
            for (let a in result[index]) {
                list.push(a);
            }
        }
 
        if (list.length > 0) {
            let splitList = list[0].split(".");
            if (splitList.length >= 2) {
                return ("[" + splitList[0] + ".ts->" + splitList[1] + "]");
            }
        }
 
        return "";
    }
}