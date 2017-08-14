/**
 * Created by zhangyuanyuan031 on 17/4/25.
 */

import moment from 'moment'
/**
 * 格式化日期
 * @param data
 * @param format
 * @returns {string}
 */
export const format = (date, format) => {
    return moment(date).format(format);
};

/**
 * 字符串的trim函数
 * @param str
 */
export const trim = (str) => {
    if (str && str.length > 0)
        return str.replace(/^\s+|\s+$/, "");
};

/**
 * 判断一个对象是否为 null
 * @param obj
 * @returns {boolean}
 */
export const isEmptyObject = (obj) => {
    for (var n in obj) {
        return false
    }
    return true;
};

//对后台返回的数据code值不是 200 的统一处理
export const error = (res) => {
    if (res && !isEmptyObject(res)) {
        if (res.httpCode === "999") {
            alert("系统异常" + res.msg)
            throw new Error("系统异常" + res.msg);
        } else if (res.httpCode === "404") {
            alert("无数据返回" + res.msg)
            throw new Error("无数据返回" + res.msg)
        } else if (res.httpCode == '500') {
            alert("后台服务端错误:" + res.msg)
            throw new Error("后台服务端错误:" + res.msg);
        }
    }
};


//过滤数据字典信息
export const filterData = (arr, codeType) => arr && arr.length > 0 ? arr.filter((item) => item.codeType === codeType) : [];

// 根据字典 codeType 和 codeValue 精确字典的对应的名称
export const dicVal = (arr, codeType, codeVal) => {
    if (arr && arr.length > 0) {
        let codeName;
        filterData(arr, codeType).forEach((item) => {
            if (item.codeValue === codeVal) {
                codeName = item.codeName;
                return false;
            }
        });
        return codeName;
    } else {
        return [];
    }
};

// 得到下拉列表的数据格式
export const selectLable = (arr, codeType) => {
    let labArr = filterData(arr, codeType);
    return labArr.length > 0 ? labArr.map((item) => {
            return {label: item.codeName, value: item.codeValue}
        }) : [];
};

// 序列化ref得到的传递给后台的数据
export const seriData = (...args) => {
    if (args.length === 0)
        return;

    let obj={};

    for (let i = 0, len = args.length; i < len; i++) {
        let item = args[i];
        for (var key in item) {
            let childItem = item[key].value;
            if (typeof childItem === 'string')
                obj[key] = childItem.trim();
            else
                obj[key] = childItem;
        }
    }
    return obj;
};
