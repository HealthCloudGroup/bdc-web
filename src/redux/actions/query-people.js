/**
 * Created by zhangyuanyuan031 on 17/5/26.
 */

import queryDataService, {peopleMes, queryMedicalInsurRcode} from 'service/query-data'
import {error} from 'util'

// 精准查询
const queryAllPeople = (peopleData) => ({
    type: "querypeople",
    payload: peopleData
});

// 查询为员详细信息
const queryDetailPeopleMes = (mes) => ({
    type: "peopleMes",
    payload: mes
});

// 查询人员医保就诊记录详情
const medicalInsuRecod = (mes) => ({
    type: "medicalInsuranceRecod",
    payload: mes
});


export const queryPeople = (searchData,cb) => {
    return (dispatch) => {
        queryDataService.queryPeople(searchData).then((res) => {
            dispatch(queryAllPeople(res));
            if (res.httpCode !== "200") {
                if(typeof cb === 'function') cb();
                error(res);
            }
        })
    }
};

export const peopleMesAction = (parames,cb) => {
    return (dispatch) => {
        peopleMes(parames).then((res) => {
            dispatch(queryDetailPeopleMes(res.data));
            if(typeof cb === 'function') cb(res);
            if (res.httpCode !== "200") {
                error(res);
            }
        })
    }
};


export const medialInsurRecordAction = (params) => {
    return (dispatch) => {
        queryMedicalInsurRcode(params).then((res) => {
            if (res.httpCode === '200') {
                dispatch(medicalInsuRecod(res));
            }
            else {
                dispatch(queryDetailPeopleMes(res.data))
                // error(res);
            }
        });
    }
};
