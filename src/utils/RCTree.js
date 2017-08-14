/**
 * Created by zhangyuanyuan031 on 17/7/4.
 *
 *  * 二次封装树组件
 * 用法
 * <RCTree expand={true} data={payload.output} onSelect={this.onSelect.bind(this)}/>
 * expand 加载的时候是否要全部展开 true 是全部展开,false是不展开
 * data 要加载的数据
 * onSelect 当选中某个树的时候触发的事件
 */
import React from 'react'
import Tree, {TreeNode} from 'rc-tree';

import 'rc-tree/assets/index.css';
import 'assets/less/re-tree.css'

class RCTree extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {onSelect, data} = this.props, comps = [];
        const loop = (data) => data.map((item, i) => {
            if (item.children && item.children.length > 0)
                return <TreeNode title={item.name} key={item.id} path={item.path}>{loop(item.children)}</TreeNode>
            else
                return <TreeNode title={item.name} key={item.id} path={item.path}></TreeNode>
        });

        if (data.length && data.length > 0) {
            comps = loop(data);
        }
        return (<div>
            <Tree
                showLine={true}
                defaultExpandAll={this.props.expand}
                onSelect={onSelect}
                showIcon={false}
            >
                {comps}
            </Tree>
        </div>)
    }
}


export default RCTree;