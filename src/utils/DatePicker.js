/**
 * Created by zhangyuanyuan031 on 17/5/31.
 */

import React from 'react';
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';
import moment from 'moment';
import {yyyymmdd} from 'util/regexp'

import 'bootstrap-daterangepicker/daterangepicker.css'

class DatePicker extends React.Component {

    constructor(props) {
        super(props);
        moment.locale('CH', {
            monthsShort: [
                "一月", "二月", "三月", "四月", "五月", "六月",
                "七月", "八月", "九月", "十月", "十一月", "十二月"
            ]
        });

        moment.locale('CH', {
            weekdaysMin: ["日", "一", "二", "三", "四", "五", "六"]
        });

        this.state = {
            startDate: moment().subtract(0, 'days'),
            label: this.props.begin
        };
        this.value=this.state.label;
    }

    handleEvent(event, picker) {
        this.value=this.state.startDate.format('YYYY-MM-DD');
        this.setState({
            startDate: picker.startDate,
            label: this.value
        });
    }

    set(beginDate) {
        // var reg = /(1\d{3})-(0[1-9]|1[0-2])-(0\d|[1-2]\d|3[0-1])/; // 简单判断,以后会优化
        if (beginDate && typeof beginDate === 'string' && yyyymmdd.test(beginDate)) {
            this.setState({label: beginDate})
        } else {
            throw new Error("给的字符串要是一个字符串,并且形如 YYYY-MM-DD");
        }
    }

    get() {
        return this.state.label
    }

    clearData() {
        this.setState({label: null})
        this.value=null;
    }

    render() {
        let locale = {
            format: 'YYYY-MM-DD',
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek(),
        };
        return (
            <div>
                <DatetimeRangePicker
                    singleDatePicker
                    showDropdowns
                    locale={locale}
                    startDate={this.state.startDate}
                    onEvent={this.handleEvent.bind(this)}
                >
                    <span className="form-control">{this.state.label || this.props.placeholder}</span>
                </DatetimeRangePicker>
                <div style={{position: "relative"}}>
                    <i onClick={this.clearData.bind(this)} className="iconfont icon-clear" style={{
                        position: "absolute",
                        "right": "5px",
                        top: "-30px",
                        "font-size": "18px",
                        color: "#afa8a8",
                        cursor: "pointer"
                    }}></i>
                </div>
            </div>
        );
    }
}

export default DatePicker;

