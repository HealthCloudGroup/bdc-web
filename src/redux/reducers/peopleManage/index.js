/**
 * Created by zhangyuanyuan031 on 17/6/12.
 */

export default {
    peopleManage:(state={},action)=>{
        switch (action.type){
            case "peopleManage":
                return Object.assign({},action.playload)
            case "updatePeopleManage":
                return Object.assign({},{payload:action.payload})
            default:
                return state;
        }
    }
}
