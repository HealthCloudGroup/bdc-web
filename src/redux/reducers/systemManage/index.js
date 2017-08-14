/**
 * Created by zhangyuanyuan031 on 17/7/6.
 */

export default {
    menuManage(state = {}, action){
        switch (action.type) {
            case "getMenu":
                return Object.assign({}, {type: "getMenu", payload: action.payload});
            default:
                return state;
        }
    }
}
