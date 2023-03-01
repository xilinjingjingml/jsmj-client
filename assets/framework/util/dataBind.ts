const {ccclass, property} = cc._decorator;

@ccclass
export default class BindData extends cc.Component {

    _comp: cc.Component

    dataSrc: string = ""
    dataFormat: String = ""

    start() {
        this._comp = this.node.getComponent(cc.Label) || this.node.getComponent(cc.Sprite)
    }    

    

}