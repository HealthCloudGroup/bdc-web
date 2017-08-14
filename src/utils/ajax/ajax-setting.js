/**
 * Ajax全局设置
 * Created by zhangyuanyuan031 on 17/4/20.
 */

export const rootPath = () => {
    let url, {name, ajaxSettings}=__CONFIG__, {dev, test, pro}=ajaxSettings;
    if (__DEV__) {
        url = dev.protocol + "://" + dev.domain + ":" + dev.port + "/" + name + "/";
    }
    if (__PROD__) {
        url = pro.protocol + "://" + pro.domain + ":" + pro.port + "/" + name + "/";
    }
    if (__TEST__) {
        url = test.protocol + "://" + test.domain + ":" + test.port + "/" + name + "/";
    }
    return url;
};

export const errHandler = (e, b, c) => {
    if (e.status == '401') {
        window.location.href = "/#/";
    }
};
