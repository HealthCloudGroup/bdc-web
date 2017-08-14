/**
 * 公共的reducer
 * Created by zhangyuanyuan031 on 17/8/1.
 */

export default {
    dataDic(state={},action){
        switch (action.type){
            case "dataDictonary":
                return Object.assign({},{payload:action.payload});
            default:
                return state;
        }
    }
}

