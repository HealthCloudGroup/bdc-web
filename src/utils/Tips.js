/**
 * * Created by zhangyuanyuan031 on 17/6/28.
 * 由于react-bootstrap 中的 Tooltip 在弹出框中存在bug ,于是自己封装一个 Tips
 * 封装一个提示框
 * 用法: <Tips target="target" self={this} content="你好啊" show={true} position="bottom"/>
 * 说明:
 *  target: 指向元素的ref的值
 *  self:要使用的类对象
 *  content:要提示的内容
 *  position:显示内容的方向
 */
import React from 'react'

export default class Tips extends React.Component {
    constructor(props, content) {
        super(props, content);
        this.state = {
            style: {left: "50%"},
            classname: "fade in tooltip top",
            targetPostion: undefined,
            tWidth: 0,
            tHieght: 0
        }
    }

    componentDidMount() {
        this.init();
    }

    init() {
        let {self, target} = this.props;
        let targetObj = self.refs[target],
            $targetObj = $(targetObj);
        this.state.targetPostion = $targetObj.position();
        this.state.tWidth = $targetObj.outerWidth();
        this.state.tHieght = $targetObj.outerHeight();
        this._setOpsition(this.state.targetPostion, this.state.tWidth, this.state.tHieght);
    }

    componentDidUpdate() {
        let {show} = this.props,
            toolTips = $(this.refs.tooltips);
        if (show)
            toolTips.show();
        else
            toolTips.hide();
    }

    _setOpsition(targetpostion, tw, th) {
        let toolTips = $(this.refs.tooltips),
            toolW = toolTips.width(),
            toolH = toolTips.height(), l, t;
        let {position, show} = this.props;
        position = position || "top";
        switch (position) {
            case "top":
                l = (tw - toolW) / 2 + targetpostion.left;
                t = targetpostion.top - toolH - 5;
                this.setState({
                    style: {left: "50%"},
                    classname: "fade in tooltip top"
                });
                break;
            case "left":
                l = targetpostion.left - toolW - 5;
                t = (targetpostion.top + toolH) / 2;
                this.setState({
                    style: {top: "50%"},
                    classname: "fade in tooltip left"
                });
                break;
            case "right":
                l = targetpostion.left + tw + 5;
                t = (targetpostion.top + toolH) / 2;
                this.setState({
                    style: {top: "50%"},
                    classname: "fade in tooltip right"
                });
                break;
            case "bottom":
                l = (tw - toolW) / 2 + targetpostion.left;
                t = targetpostion.top + toolH;
                this.setState({
                    style: {left: "50%"},
                    classname: "fade in tooltip bottom"
                });
                break;
            default:
                l = (tw - toolW) / 2 + targetpostion.left;
                t = targetpostion.top - toolH - 5;
                this.setState({
                    style: {left: "50%"},
                    classname: "fade in tooltip top"
                });
                break;
        }
        toolTips.css({left: l, top: t});
        if (show)
            toolTips.show();
        else
            toolTips.hide();
    }

    render() {
        return <div>
            <div className={this.state.classname} ref="tooltips">
                <div className="tooltip-arrow" style={this.state.style}></div>
                <div className="tooltip-inner">{this.props.content || ''}</div>
            </div>
        </div>

    }
}