/**
 * Created by zhangyuanyuan031 on 17/5/26.
 */


export const queryorg = (state = {}, action) => {
    switch (action.type) {
        case "queryorg":
            return Object.assign({}, action.payload)
        case "orgMes":
            return Object.assign({}, action.payload)
        default:
            return state
    }
};

export const medicalInseRecode = (state = {}, action) => {
    switch (action.type) {
        case "medicalInsuranceRecod":
            return Object.assign({}, action.payload)
        default:
            return state
    }
};
