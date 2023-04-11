import http from "./https";

//学生登录
export const login = (url:string,params:any )=>  http.post<User>(url,params)
export const reqRandom = (url:string) => http.get(url)
 //获取实习申请列表
export const IntershipList = (url:string) =>http.get(url)
//更改状态
export const updateUserStatus = (url:string,params:any) =>http.patch(url,params)
//用户登录成功后获取用户信息
export const getUser =(url:string,params:any ) =>http.post<User>(url,params)
//修改用户信息
export const UpdateInfo = (url:string,params:any)=> http.patch(url,params)
//获取用户状态信息
export const getUserStatus = (url:string,params:any)=> http.post<StuStatus>(url,params)
//获取菜单
export const getMenuList = (url:string,params:any)=>http.post(url,params)
//获取角色名
export const getRole = (url:string)=>http.get(url)