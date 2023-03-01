import BasePop from './basePop';
import {utils} from "../../framework/util/utils";
import {izx} from "../../framework/izx";
import {PHONE_EVENT} from "../evnets_phone";
import PhoneAuth from "../mode/phoneAuth";
import Constants from "../../common/constants";
import PhoneLogin from "../mode/phoneLogin";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PhoneLoginPop extends BasePop {
    
    @property(cc.Node)
    sptCheckSelect: cc.Node = null;

    @property(cc.Button)
    btnVerifyCode: cc.Button = null;

    @property(cc.Label)
    textBtnVerifyCodeDesc: cc.Label = null;

    @property(cc.EditBox)
    editPhoneInput: cc.EditBox = null;

    @property(cc.EditBox)
    editVcodeInput: cc.EditBox = null;

    @property
    _count = 60;

    _phoneAuth: PhoneAuth = null
    _phoneLogin: PhoneLogin = null

    onOpen() {
        // 初始化账号系统
        this._phoneAuth = new PhoneAuth()
        this._phoneLogin = new PhoneLogin()

        this.initEvent()
        this.initButton()
    }

    initEvent() {
        izx.on(PHONE_EVENT.SEND_CODE_SUCCESS, this.sendCodeSuccess, this)
        izx.on(PHONE_EVENT.SEND_CODE_FAIL, this.sendCodeFail, this)

        izx.on(Constants.EventName.ACCOUNT_PHONE_AUTH, this.login, this)
        izx.on(izx.SOCKET_CONNECT, this._phoneLogin.LoginReq, this._phoneLogin)
    }

    initButton() {
        izx.bindButtonClick("BtnClose", this.node, () => {
            this.pop()
        })
    }

    login() {
        this._phoneLogin.login()
    }

    resetTimeSchedule() {
        this._count = 60;
        this.unschedule(this.getVerifyCodeScheduleCallback);
    }

    resetBtnVerifyCode() {
        this.btnVerifyCode.interactable = true;
        this.textBtnVerifyCodeDesc.string = '获取验证码';
    }

    getVerifyCodeScheduleCallback() {
        if (this._count === 0) {
            this.resetTimeSchedule();
            this.resetBtnVerifyCode();
        } else {
            this._count -= 1;
            this.textBtnVerifyCodeDesc.string = this._count + '秒';
        }
    }

    onBtnGetVerifyCodeClicked() {
        console.log('Get verify code button clicked!');
        //检查手机号
        let phone = this.editPhoneInput.string;
        let ret = utils.checkPhone(phone);
        if (!ret.pass) {
            console.log(ret.tip);
            izx.dispatchEvent(PHONE_EVENT.SHOW_POP, ret.tip)
            return;
        }
        //启动验证码倒计时，按钮置灰
        this.resetTimeSchedule();
        this.btnVerifyCode.interactable = false;
        this.textBtnVerifyCodeDesc.string = this._count + '秒';
        this.schedule(this.getVerifyCodeScheduleCallback, 1);

        //发送验证码请求
        this._phoneAuth.sendPhoneCode(phone)
    }

    sendCodeSuccess(res) {
    }

    sendCodeFail() {
        izx.dispatchEvent(PHONE_EVENT.SHOW_POP, "获取验证码失败，服务器未响应")
        this.resetTimeSchedule();
        this.resetBtnVerifyCode();
    }

    onBtnCheckAutoLoginClicked() {
        console.log('check auto login button clicked!');
        this.sptCheckSelect.active = !this.sptCheckSelect.active;
    }

    onBtnPhoneLoginClicked() {
        console.log('Phone Login button clicked!');
        //检查手机号和验证码，发送登录请求
        let phone = this.editPhoneInput.string;
        let ret = utils.checkPhone(phone);
        if (!ret.pass) {
            console.log(ret.tip);
            izx.dispatchEvent(PHONE_EVENT.SHOW_POP, ret.tip)
            return;
        }
        let vcode = this.editVcodeInput.string;
        if (vcode.length != 6) {
            izx.dispatchEvent(PHONE_EVENT.SHOW_POP, "请输入正确的验证码")
            return;
        }

        let guid = izx.getData(izx.imei + "uid") // 获取guid
        this._phoneAuth.phoneCodeLogin(phone, vcode)
    }
}
