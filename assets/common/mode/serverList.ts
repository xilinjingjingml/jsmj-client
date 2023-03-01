import BaseMode from "../../framework/base/baseMode";
import { HttpMgr } from "../../framework/net/httpMgr";
import { izx } from "../../framework/izx";
import Constants from "../../common/constants";

const CONFIG_URL: string = "mcbeam-authen-srv/lobby/config?key="

type SvrList = { [index: string]: iServer[] }

export default class ServerList extends BaseMode {
    _servers: { [index: string]: SvrList } = {}
    _serverNames: { [index: string]: string } = {}

    constructor() {
        super()
        this.autoRegHander()
    }

    initServerConfigs() {
        let url = izx.httpUrl + CONFIG_URL + izx.gameName + ".game"
        HttpMgr.get(url, null, (res) => {
            if (!res) {
                return
            }
            for (let game in res) {
                this._servers[game] = <SvrList>{}
                for (let typs in res[game]) {
                    if (typs === "banner") {
                        continue
                    }

                    this._servers[game][typs] = []
                    this._serverNames[game + "." + typs] = res[game][typs].name
                    for (let room in res[game][typs]) {
                        if (typeof res[game][typs][room] === "object")
                            this._servers[game][typs].push(this.initServer(game, typs, res[game][typs][room]))
                    }
                }
            }
            izx.dispatchEvent(Constants.EventName.SERVER_UPDATE)
        })
    }

    initServer(game: string, typs: string, cfg: any) {
        let iSvr = <iServer>{}
        iSvr.bet = cfg.bet
        if (cfg.glod_limit) {
            iSvr.minLimit = cfg.glod_limit.min
            iSvr.maxLimit = cfg.glod_limit.max
        }
        iSvr.name = cfg.name
        iSvr.order = cfg.order
        iSvr.typs = cfg.type
        iSvr.img = cfg.img
        iSvr.svrTyps = game + "." + typs + "." + cfg.type
        return iSvr
    }

    getServers(): iServer[] {
        return Object.assign(this._servers)
    }

    getServersByGame(req: string): iServer[] {
        let st = req.split(".")
        if (st.length === 3) {
            let game = st[0]
            let typs = st[1]
            if (this._servers[game] && this._servers[game][typs])
                return this._servers[game][typs].filter(item => item.typs === st[2])
        }
        else if (st.length === 2) {
            let game = st[0]
            let typs = st[1]
            if (this._servers[game] && this._servers[game][typs])
                return Object.assign(this._servers[game][typs])
        }
        else if (this._servers[req]) {
            return Object.assign(this._servers[req])
        }

        return []
    }

    getServerByGameType(game: string, typs: string): iServer[] {
        let st = typs.split(".")            
        if (st.length === 2) {  // 判断是否有2段类型
            return this._servers[game][st[0]].filter(item => item.typs === st[1])
        }
        else if (this._servers[game][typs]){
            return Object.assign(this._servers[game][typs])
        }

        return []
    }

    getServerByMoney(game: string, typs: string, money: number) {
        return this._servers[game][typs].filter(item => (!item.minLimit || item.minLimit < money) && (!item.maxLimit || item.maxLimit > money))
    }

    getGameByServer(svrTyps: string): iServer {
        for (let game in this._servers) {
            for (let typs in this._servers[game]) {
                for (let svr of this._servers[game][typs]) {
                    if (svr.svrTyps === svrTyps)
                        return Object.assign(svr)
                }
            }
        }

        return null
    }
}