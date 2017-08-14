/**
 * Created by zhangyuanyuan031 on 17/5/26.
 */


export const querypeople = (state = {}, action) => {
    switch (action.type) {
        case "querypeople":
            return Object.assign({}, {payload:action.payload})
        case "peopleMes":
            return Object.assign({}, {payload:action.payload})
        default:
            return state
    }
};

export const medicalInseRecode = (state = {}, action) => {
    switch (action.type) {
        case "medicalInsuranceRecod":
            return Object.assign({},{payload:action.payload})
        default:
            return state
    }
};
