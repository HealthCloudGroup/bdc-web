/**
 * Created by zhangyuanyuan031 on 17/5/24.
 */
import QueryPeople from 'comp/ECIF/QueryData/QueryPeople'
import QueryOrg from 'comp/ECIF/QueryData/QueryOrg'
import OrgMes from 'comp/ECIF/QueryData/OrgDetailMes'
import OrgDetailMes from 'comp/ECIF/QueryData/OrgDetailMes'
import PeopleMes from 'comp/ECIF/QueryData/PeopleMes'
import MedicalInsuRecord from 'comp/ECIF/QueryData/MedicalInsuRecord'

export default [
    {
        path: "ecif/queryPeople",
        component: QueryPeople
    },
    {
        path: "ecif/queryPeople/peopleMes/:globalId/:pcno(/:changed)",
        component: PeopleMes
    },
    {
        path: "ecif/queryPeople/timerShaft/:globalId/:pcno",
        component: MedicalInsuRecord
    },
    {
        path: "ecif/queryOrg",
        component: QueryOrg
    },
     {
        path:"ecif/queryOrg/OrgDetailMes/:globalId(/:changed)",
        component:OrgDetailMes
    }

]
