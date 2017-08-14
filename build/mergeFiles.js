/**
 * 此类用来做一个整合 routers 和 reduces
 * Created by zhangyuanyuan031 on 17/6/12.
 */

let fs = require("fs"), Glob = require("glob").Glob;
let keyAndFiles = (path) => {
    let files = new Glob(path, {sync: true}).found, rootpath = path.split("*")[0];
    if (files.length > 0 && rootpath.length > 0) {
        return files.map((item, index) => {
            let key = item.replace(rootpath, "").split("/")[0];
            return {key, path: item.replace(rootpath, "./")}
        });
    } else {
        throw new Error("您要找的文件不存在");
    }
};

let getContent = (path) => {
    let objLists = keyAndFiles(path), content = [], importFiles = [];
    if (objLists.length > 0) {
        objLists.forEach((item, i) => {
            importFiles.push("import " + item.key + " from "+"'"+item.path+"'");
            content.push("..." + item.key);
        });
    }
    return {imp: importFiles, content};
};

module.exports=(rm,path,isRouter)=>{
     if (fs.existsSync(rm))
     fs.unlinkSync(rm);

     let content=getContent(path);
    if(isRouter){
        fs.writeFileSync(rm,content.imp.join(";") + "; export default [" +content.content.join(", ") + "]")
    }else{
        fs.writeFileSync(rm,content.imp.join(";") + "; export default {" +content.content.join(", ") + "}")
    }

};