/**
 * Created by zhangyuanyuan031 on 17/5/31.
 */
import React from 'react'
import moment from 'moment'
import {peopleMesAction,medialInsurRecordAction} from 'action/query-people'
import {getDataDic} from 'action/common-action'
import {isEmptyObject} from 'util'
import DateTimer from './DateTimer'
import Rconnect from 'util/Rconnect'

import "assets/less/timer-shaft.less"

class MedicalInsuRecord extends React.Component {

    constructor(props){
        super(props)
        this.state={
            globalId:this.props.params.globalId,
            pcno:this.props.params.pcno
        }
    }

    componentDidMount(){
        // 填充人员主要信息
        this.props.getDataDic((data)=>{
            this.props.peopleMesAction({globalPersId: this.state.globalId});
        });

        // 就诊记录
        this.props.medialInsurRecordAction({globalId:this.state.globalId});
    }

    //过滤数据字典信息
    filterDic(arr,codeType){
        return arr.length > 0 ? arr.filter((item)=>item.codeType === codeType) : [];
    }

    // 根据字典 codeType 和 codeValue 精确字典的对应的名称
    getDicVal(arr,codeType,codeVal){
        if(arr.length > 0 ){
            let codeName;
            this.filterDic(arr,codeType).forEach((item)=>{
                if(item.codeValue === codeVal){
                    codeName =  item.codeName
                    return false;
                }
            });
            return codeName;
        }
    }

    render() {
        let data = this.props.querypeople; // 人员信息数据
        let dataDic = this.props.dataDic; // 获取字典数据

        if(data.payload){
            data = data.payload;
        }

        let dicArr=[];
        if(dataDic && dataDic.payload && dataDic.payload.data){
            dicArr = dataDic.payload.data.codeDictDto ;
        }

        let medicalRecode=this.props.medicalInseRecode;
        let dataTimer=[];
        if(medicalRecode && medicalRecode.data ){
            dataTimer=medicalRecode.data.map((item,i,arr)=>(<DateTimer index={i} key={i} data={item}/>));
        }


        return <div className="see-doctor-record">
            <div className="tips">
                <span>医保就诊记录</span>
            </div>

            <article className="user-mes">
                <section>
                    <label>
                        <i className={data.gender === '1' ? "iconfont icon-nanren" : "iconfont icon-nvren"}></i>
                    </label>
                    <span>{data.persName}</span>
                    <span>{this.getDicVal(dicArr,"BAC004",data.gender)}</span>
                </section>
                <section>
                    <div>
                        <table>
                            <tbody>
                            <tr>
                                <td>出生年月</td>
                                <td>{data.birth}</td>
                            </tr>
                            <tr>
                                <td>身高</td>
                                <td>{data.height}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table>
                            <tbody>
                            <tr>
                                <td>籍贯</td>
                                <td>{data.nativeplace}</td>
                            </tr>
                            <tr>
                                <td>体重</td>
                                <td>{data.weight}KG</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table>
                            <tbody>
                            <tr>
                                <td>民族</td>
                                <td>{this.getDicVal(dicArr,"AAC005",data.nation)}</td>
                            </tr>
                            <tr>
                                <td>婚姻状况</td>
                                <td>{this.getDicVal(dicArr,"AAC017",data.maritalStatus)}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table>
                            <tbody>
                            <tr>
                                <td>血型</td>
                                <td>{this.getDicVal(dicArr,"AAC012",data.bloodType)}</td>
                            </tr>
                            <tr>
                                <td>文化程度</td>
                                <td>{this.getDicVal(dicArr,"AAC011",data.education)}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </article>

            <article className="report-forms"></article>

            <article className="detail-record" style={{display:dataTimer.length === 0 ? "none" : "block"}}>
                <label>
                    详细就诊记录
                </label>
                {dataTimer}
            </article>
        </div>
    }
}

export default Rconnect((state,props)=>state,{peopleMesAction,getDataDic,medialInsurRecordAction},MedicalInsuRecord);

