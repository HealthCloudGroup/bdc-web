/**
 * 定义一些正则表达式的常量类
 * Created by zhangyuanyuan031 on 17/6/28.
 */

/**
 * 非空数字
 * @type {RegExp}
 */
export const num=/^[-]?(\d)+$/;

/**
 * 手机正则表达式
 * @type {RegExp}
 */
export const telphone = /^1[34578]\d{9}$/;

/**
 * 电话或者移动电话及传真正则表达式
 * @type {RegExp}
 */
export const phone = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;

/**
 * 匹配所有电话号码
 * @type {RegExp}
 */
export const tel = /(^1[34578]\d{9}$)|(^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$)/;

/**
 * 邮箱正则表达式
 * @type {RegExp}
 */
export const email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;

/**
 * 形如 yyyy-mm-dd 格式的正则表达式
 * @type {RegExp}
 */
export const yyyymmdd = /(1\d{3})-(0[1-9]|1[0-2])-(0\d|[1-2]\d|3[0-1])/; // 简单判断,以后会优化

/**
 * 18位身份证
 * @type {RegExp}
 */
export const idCard418=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

/**
 * 15位身份证
 * @type {RegExp}
 */
export const idCard415=/^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/;

/**
 * 15位和18位身份证
 * @type {RegExp}
 */
export const idCard = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;

/**
 * 身高或者体重正则表达式
 * @type {RegExp}
 */
export const weightOrHeight = /^(0|[1-9]\d{0,2})(\.\d{1,2})?$/;

