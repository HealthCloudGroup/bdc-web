/**
 * Created by zhangyuanyuan031 on 17/6/15.
 */
import React from 'react';
import 'react-select/dist/react-select.css';
import Select from 'react-select';

class MySelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            v: undefined
        };
        this.value = this.state.v || this.props.value;
    }
    componentDidMount(){
        this.setState({v:this.props.value})
    }

    change(v) {
        if (v) {
            this.value=v.value;
            this.setState({v: v.value});
        }
    }

    set(val) {
        this.setState({v: val})
    }

    get = () => this.state.v;

    render() {
        return <Select
            clearable={false}
            placeholder={this.props.placeholder || "请选择"}
            noResultsText="没有数据"
            value={this.state.v}
            options={this.props.options}
            clearRenderer={this.props.clear}
            onChange={this.change.bind(this)}
        />
    }
}

export default MySelect;
