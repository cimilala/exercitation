import {ElMessageBox } from "element-plus"
const elMessage = (message:string,successCallBack?:()=>void,failCallBack?:()=>void)=>{
    ElMessageBox.confirm(
        message,
        'Warning',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
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
