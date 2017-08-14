/**
 * 做一个公共的action
 * Created by zhangyuanyuan031 on 17/8/1.
 */

import {error} from 'util'
import * as commonServer from "service/common-service"

export const getDataDic = (params,cb) => (dispatch) => commonServer.dataDictonary(params).done((res)=>{
    dispatch({type:"dataDictonary",payload:res});
    if (res.httpCode != '200')
        error(res);
    else{
        if(cb == null){
            cb = params;
        }
        if($.isFunction(cb)) cb(res);
    }

});