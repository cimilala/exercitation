import {ElMessageBox } from "element-plus"
type message = "info"| "warning"|"error"|"success"
const elMessage = (message:string,type?:message | undefined,successCallBack?:()=>void,failCallBack?:()=>void)=>{
    ElMessageBox.confirm(
        message,
        'Warning',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: type??"warning",
        }
      )
        .then(() => {
            successCallBack&&successCallBack()
        })
        .catch(() => {
            failCallBack&& failCallBack()
        })
}
export {elMessage}
