/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-10-21 14:43:52
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-11-02 10:43:13
 */
import { izx } from "../izx";

export namespace Utils {    
    // 比较字符串版本
    export function versionCompare(versionA: string, versionB: string): number {
        versionA = versionA || "0.0.0"
        const vA = versionA.split('.')
        versionB = versionB || "0.0.0"
        const vB = versionB.split('.')
        for (let i = 0; i < vA.length; ++i) {
            const a = parseInt(vA[i])
            const b = parseInt(vB[i] || '0')
            if (a === b) {
                continue
            } else {
                return a - b
            }
        }
        if (vB.length > vA.length) {
            return -1
        } else {
            return 0
        }
    }

    export function numberFormat(num: number) {
        let strNum = "" + num
        let len = strNum.length
        let head = parseInt(strNum.substr(0, 3))
        let point = len % 3 
        point = point === 0 ? 3 : point
        let strHead = "" + head / Math.pow(10, (3 - point))
        if (len / 3 > 4)
            return strHead + "T"
        else if (len / 3 > 3)
            return strHead + "B"
        else if (len / 3 > 2)
            return strHead + "M"
        else if (len / 3 > 1)
            return strHead + "K"
        return strNum
    }

    //保留2位小数，如：2，还会保留2 不会补0
    export function toDecimal2NoZero(x) {
      var f = Math.round(x * 100) / 100;
      var s = f.toString();
      return s;
    }

    // 数字转换
    export function numberFormat2(value) {
      let param = null;
      param = {}
      let k = 10000,
          sizes = ['', '万', '亿', '万亿'],
          i;
      if(value < k){
          param.value =value
          param.unit=''
      }else{
          i = Math.floor(Math.log(value) / Math.log(k)); 
    
          param.value = ((value / Math.pow(k, i))).toFixed(2);
          param.value = toDecimal2NoZero(param.value)
          param.unit = sizes[i];
      }
      return param.value + param.unit;
    }

    // 数字转换
    export function numberFormat3(value) {
      let param = null;
      param = {}
      let k = 10000,
          sizes = ['', 'w', 'y', 'wy'],
          i;
      if(value < k){
          param.value =value
          param.unit=''
      }else{
          i = Math.floor(Math.log(value) / Math.log(k)); 
    
          param.value = ((value / Math.pow(k, i))).toFixed(2);
          param.value = toDecimal2NoZero(param.value)
          param.unit = sizes[i];
      }
      return param.value + param.unit;
    }

    
    export function getMoneyformat(money: Number){
        let params = izx.getData("onlineParam")
        if (params && params.showshop == 1) {
            return money.toString()
        }

        if (money == null) {
            return ""
        }
        let tmpmoney = new String(Math.abs(<number>money))
        //将游戏币显示为红包金额,十位和个位显示为小数,如游戏币12345显示为123.45
        let moneystr = ""
        if (tmpmoney.length <= 2){
            if (tmpmoney.length <= 1) {
                moneystr = "0.0" + tmpmoney
            }
            else {
                moneystr = "0." + tmpmoney
            }
        } else {
            //后缀
            let suffix = "." + tmpmoney.substr(tmpmoney.length-2,2)
            tmpmoney = tmpmoney.substr(0,tmpmoney.length-2);
            let tbl = []
            while (tmpmoney.length > 3)
            {
                tbl.push(tmpmoney.substr(tmpmoney.length-3, 3))
                tmpmoney = tmpmoney.substr(0, tmpmoney.length-3)
            }
            if (tmpmoney.length > 0) {
                tbl.push(tmpmoney)
            }
            tbl.reverse()
            tbl.forEach((tempStr,index) => {
                if (index == tbl.length - 1) {
                    moneystr += tempStr + ""
                }else {
                    moneystr += tempStr + ","
                }
            });
            moneystr += suffix
        }

        return (money<0 ? "-" : "") + moneystr
    }

    export function checkName (name: string) {
        if (!name || name == '') {
            return {pass:false, tip:'姓名不能为空'};
        }
        if (!/[\u4e00-\u9fa5]{0,}$/.test(name)) {
            return {pass:false, tip:'姓名格式不正确'};
        } else {
            return {pass:true, tip:''};
        }
    }
    
    export function checkPhone (phone: string) {
        if (!phone || phone == '') {
            return {pass:false, tip:'手机号不能为空'};
        }
        if (!/^1(3|4|5|6|7|8)\d{9}$/.test(phone)) {
            return {pass:false, tip:'手机号格式不正确'};
        } else {
            return {pass:true, tip:''};
        }
    }

    export function checkIdCardNo (num) {
        if (!num || num == '') {
            return {pass:false, tip:'身份证号不能为空'};
        }
        num = num.toUpperCase();
        //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。   
        if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
            //alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。');       
            //alert('身份证号长度不正确或不符合规定！');
            return {pass:false, tip:'身份证号格式不正确'};
        } 
        //验证前2位，城市符合
        let aCity = {
            11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",
            21:"辽宁",22:"吉林",23:"黑龙江 ",
            31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",
            41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",
            50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",
            61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",
            71:"台湾",
            81:"香港",82:"澳门",
            91:"国外"
        };
        if (aCity[parseInt(num.substr(0,2))] == null) {
            //alert('身份证号不正确或不符合规定！');
            return {pass:false, tip:'身份证号格式不正确'};
        }
        //alert('城市:'+aCity[parseInt(num.substr(0,2))]);
         
        //下面分别分析出生日期和校验位
        let len, re; 
        len = num.length; 
        if (len == 15) {
            re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
            var arrSplit = num.match(re); //检查生日日期是否正确
            var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
            var bGoodDay; bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
            if (!bGoodDay) {    
                //alert('身份证号的出生日期不对！'); 
                return {pass:false, tip:'身份证号格式不正确'};
            } else { //将15位身份证转成18位 //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。    
                var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);    
                var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');   
                var nTemp = 0, i;      
                num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);     
                for(i = 0; i < 17; i ++) {        
                    nTemp += num.substr(i, 1) * arrInt[i];    
                }
                num += arrCh[nTemp % 11];
                return {pass:true, tip:''};
            }
        }
        if (len == 18) {
            re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
            var arrSplit = num.match(re); //检查生日日期是否正确
            var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
            var bGoodDay; bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
            if (!bGoodDay) {
                //alert(dtmBirth.getYear());
                //alert(arrSplit[2]);
                //alert('身份证号的出生日期不对！');
                return {pass:false, tip:'身份证号格式不正确'};
            }
            else { 
                //检验18位身份证的校验码是否正确。 
                //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
                var valnum;
                var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                var nTemp = 0, i;
                for(i = 0; i < 17; i ++) {
                    nTemp += num.substr(i, 1) * arrInt[i];
                }
                valnum = arrCh[nTemp % 11];
                if (valnum != num.substr(17, 1)) {
                    //alert('18位身份证的校验码不正确！应该为：' + valnum);
                    //alert('18位身份证号的校验码不正确！');
                    return {pass:false, tip:'身份证号格式不正确'};
                }
                return {pass:true, tip:''};
            }
        } 
        return {pass:false, tip:'身份证号格式不正确'};
    }

    export function GetLevelNeedExp(level) {
        if (level <= 0) {
            return 0
        } else if (level == 1) {
            return 20
        } else {
            return 20 * (level - 1)
        }
    }
    
    export function GetLevelMaxExp(level) {
        if (level <= 0) {
            return 0
        } else if (level == 1) {
            return 20
        } else {
            return this.GetLevelMaxExp(level-1) + this.GetLevelNeedExp(level)
        }
    }
}