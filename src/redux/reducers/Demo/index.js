/**
 * Created by zhangyuanyuan031 on 17/6/14.
 */

export default {
    Demo(state={},action){
        switch (action.type){
            case "demo":
                return Object.assign({},{payload:action.payload})
            case "mydemo":
                return Object.assign({},{payload:action.payload})
            default:
                return state;
        }
    }
}

// $.extend({},{a:1},{b:2});


