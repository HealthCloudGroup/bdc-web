/**
 * Created by zhangyuanyuan031 on 17/6/14.
 */

import React from 'react'
import {demoAction} from 'action/Demo'
import Rconnect from 'util/Rconnect'


class DeomComponent extends React.Component {

    constructor(props) {
        super(props)
    }

/*    componentDidMount() {
        this.props.demoAction();
    }*/

    showContent() {
        this.props.demoAction();
    }

    render() {
        let dataArr=this.props.payload;
        let arr=[];
        if(dataArr && dataArr.length > 0){
            arr=dataArr.map((item,i)=>(<tr key={i}><td>{item.name}</td><td>{item.age}</td></tr>));
        }
        return <div>
            <table>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                    </tr>
                </thead>
                <tbody>
                {arr}
                </tbody>
            </table>
            <button onClick={this.showContent.bind(this)}>点击</button>
        </div>
    }
}
/*
const state = (state, props) => state.Demo;


let Dom=React.CreateClass({
    render:function(){
        return <div>
            aaa
        </div>
    }
});

function state(state) {
    return state.Demo
}

Rconnect(state,{demoAction},Dom);*/

export default Rconnect((state)=>state.Demo, {demoAction}, DeomComponent);
