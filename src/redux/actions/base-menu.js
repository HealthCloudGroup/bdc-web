/**
 * Created by zhangyuanyuan031 on 17/7/6.
 */

import {getMenueService} from 'service/system-service'
import {error} from 'util'

export const getMenuAction=()=>(dispatch)=>getMenueService().then((res)=>dispatch({type:"getMenu",payload:res}))