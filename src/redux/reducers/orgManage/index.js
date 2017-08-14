/**
 * Created by zhangyuanyuan031 on 17/6/19.
 */
export default {
    orgManage(state = {}, action){
        switch (action.type) {
            case "orgmanagesearch":
                return Object.assign({}, {payload: action.payload});
            case "orgmanagedetail":
                return Object.assign({}, {payload: action.payload});
            case "updateorgmanagedetail":
                return Object.assign({}, {payload: action.payload});
            default:
                return state;
        }
    }
}