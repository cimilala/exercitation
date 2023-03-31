import instance from "./http";
import type { request, UpdateUser } from "./type";

//学生登录
export const reqStuLogin:request = (url:string,params:any )=>  instance.post(url,params)
export const reqRandom :request= (url:string) => instance.get(url)
 //获取实习申请列表
export const reqIntershipList:request = (url:string) =>instance.get(url)
//更改申请状态
export const updateUSerinfo :request= (url:string,params:UpdateUser) =>instance.patch(url,params)
//用户登录成功后获取用户信息
export const reqUserInfo :request=(url:string) =>instance.get(url)
//修改用户信息
export const UpdateInfo:request = (url:string,params:any)=> instance.patch(url,params)