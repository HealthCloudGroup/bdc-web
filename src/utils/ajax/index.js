/**
 * Created by zhangyuanyuan031 on 17/4/20.
 */
import {rootPath, errHandler} from './ajax-setting';

const ajax = (url, body, method = "get") => {
    if(typeof body === 'string'){
        method = body;
        body = undefined;
    }
    const defer = $.Deferred();
    $.ajax({
        type: method,
        url: rootPath() + url,
        data: body,
        cache:false,
        dataType: "json",
        // contentType:'application/json;charset=UTF-8',
        // xhrFields: { // 跨域允许带上 cookie
        //   withCredentials: [域名]
        // },
        // crossDomain: true
    }).done(defer.resolve).fail(errHandler);
    return defer.promise();
};

export default ajax;