/**
 * Created by zhangyuanyuan031 on 17/5/10.
 */

import React from 'react'
import Header from './Header'
import ToolBar from './ToolBar'
import Rconnect from 'util/Rconnect'
import {pageAction} from 'action/page-home'

import "assets/less/page-home.less"

class PageHome extends React.Component {

    constructor(props,context){
        super(props)
        this.state={
            toolbar:{}
        }
    }

    componentDidMount(){
       this.props.pageAction();
    }

    setToolBar(mes){
        this.state.toolbar=mes;
        this.forceUpdate()
    }
    render() {
        let headerData= this.props.code==="200" ? this.props.output : [] ;
        return <div className="pagehome">
            <Header setToolBar={this.setToolBar.bind(this)} data={headerData}/>
            <ToolBar toolbar={this.state.toolbar}/>
            {this.props.children}
        </div>
    }
}

export default Rconnect((state,props)=>state.pageHome,{pageAction},PageHome);