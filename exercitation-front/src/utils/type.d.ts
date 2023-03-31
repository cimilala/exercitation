export interface responseType {
  data:[]
  error?:string
  status:number
  timestamp:string
  message:string

}
export type request = (url:string,params?:any) => Promise<responseType>
export interface User {
  apply_status: number|undefined;
  id: number|undefined;
  internship_apply_id: number|undefined;
  name: string|undefined;
  role_id: number|undefined;
  sex: string|undefined;
  stu_number: string|undefined;
  username: string|undefined;
  select_id:number|undefined;
  photo:string|undefined
}
export type UpdateUser = Partial<User>
 enum IntershipType {product = "生产实习",self = "自主实习"}
export interface Apply {
  id:number 
  position:string 
  place:string 
  totalNumber:number 
  currentNumber:number 
  startTime:string 
  endTime:string 
  teacher:string 
  type:IntershipType 
//伪属性
  apply_status:number
  operation:number
}
export type itemType = Partial<Apply>
export  enum keyType {
  position="position",
  teacher="teacher",
  place="place",
  isFull="isFull",
}
export enum enumApply {
  id="id",
  position="position",
  place="place",
  totalNumber="totalNumber",
  currentNumber="currentNumber",
  startTime="startTime",
  endTime="endTime",
  teacher="teacher",
  type="type",
 
}