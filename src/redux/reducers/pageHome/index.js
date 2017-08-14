/**
 * Created by zhangyuanyuan031 on 17/5/23.
 */

export default {
    pageHome:(state = {}, action) => {
        switch (action.type) {
            case "PAGEHOME":
                return Object.assign({}, state, action.payload)
            default:
                return state;
        }
    }
}