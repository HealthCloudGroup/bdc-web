/**
 * Created by zhangyuanyuan031 on 17/4/25.
 */
import React from 'react';
import Rconnect from 'util/Rconnect'
import loginAction from 'action/user'
import {error, trim} from "util"
import Alert from 'util/Alert'
import md5 from 'md5'

class Login extends React.Component {

    constructor(props, context) {
        super(props);
        this.state = {
            error: false,
            dialog:false
        }
    }

    componentDidMount() {
        document.documentElement.addEventListener('keydown', (ev) => {
            if (ev.keyCode == 13 && this.refs.uName && this.refs.pwd) {
                this.submit(ev)
            }
        })
    }

    submit(event) {
        event.preventDefault();
        let username = this.refs.uName.value, userpwd = this.refs.pwd.value;
        let params={account: trim(username), password: userpwd};
        this.props.loginAction(params,(data)=>{
            if (data && data.httpCode === 200) {
                this.props.router.push("/pagehome");
            }else {
                this.setState({dialog:true})
            }
        });

    }

    onHide(){
        this.setState({dialog:false})
    }

    render() {
        return <main className="main">
            <div className="icon"></div>
            <div className="floater"></div>
            <div id="login" className="login-content">
                <div>用户登录</div>
                <div>
                    <span><label></label><input type="text" ref="uName"/></span>
                    <span><label></label><input type="password" ref="pwd"/></span>
                </div>
                <button className="btn btn-info" type="button" onClick={this.submit.bind(this)}>登录</button>
            </div>
            <Alert options={{show:this.state.dialog,onHide:this.onHide.bind(this),title:"登录提示...",content:"请输入正确的用户和密码"}} />
        </main>
    }
}

export default Rconnect((state, props) => state.user, {loginAction},Login);