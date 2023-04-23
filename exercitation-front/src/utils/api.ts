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
//根据用户id查询用户详细信息
export const getUserInfo = (url:string,params:unknown)=>http.post(url,params)
//修改用户信息
export const UpdateInfo = (url:string,params:any)=> http.patch(url,params)
//获取用户状态信息
export const getUserStatus = (url:string,params:any)=> http.post<StuStatus>(url,params)
//获取菜单
export const getMenuList = (url:string)=>http.get(url)
//获取角色名
export const getRole = (url:string)=>http.get(url)
//获取用户日报信息
export const getDayNewsListByRole = (url:string,params:unknown)=>http.post(url,params)
//新增日报
export const addNews = (url:string,params:any)=>http.post(url,params)
//修改日报
 export const updateDayNews = (url:string,params:unknown)=>http.patch(url,params)
 //根据id获取一个日报
 export const getDayNewsById = (url:string)=>http.get(url)
//新增实习变更
export const addChange=(url:string,params:any)=>http.post(url,params)
//获取用户实习变更列表
export const getChangeListByRole = (url:string,params:any)=>http.post(url,params)
//根据id获取一个实习变更
export const getChangeById = (url:string)=>http.get(url)
//修改实习变更列表
export const updateChange = (url:string,params:unknown)=>http.patch(url,params)
//新增一个请假
export const addLeave = (url:string,params:unknown)=>http.post(url,params)
//根据id获取一个请假
export const getLeaveById = (url:string)=>http.get(url)
//获取用户实习请假列表
export const getLeaveListByRole = (url:string,params:unknown)=>http.post(url,params)
//修改请假列表
export const updateLeave = (url:string,params:unknown)=>http.patch(url,params)
//新增一个任务列表
export const addTesting = (url:string,params:unknown)=>http.post(url,params)
//获取所有任务列表
export const getTestingAllList = (url:string)=>http.get(url)
//获取正在进行的任务列表
export const getTestingList = (url:string)=>http.get(url)
//获取已经完成的任务列表
export const getTestedList = (url:string)=>http.get(url)
