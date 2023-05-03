 interface responseType<T = any> {
  data: T;
  error?: string;
  status: number;
  timestamp: string;
  message: string;
}
interface IMenu {
  id:number
  name:string
  type:number
  path:string
  icon:string
  parent_id:number
  children?:Array<any>|null
}
interface User {
  id: number | null;
  roleId: number | null;
  username: string | null;
  
}
 interface StuStatus {
  userId: number;
  internship_applyId: number;
  apply_status: number;
  select_id: number;
}
 type UpdateStuStatus = Partial<StuStatus>;
enum IntershipType {
  product = "生产实习",
  self = "自主实习",
}
 interface Apply {
  id: number;
  position: string;
  place: string;
  total_number: number;
  current_number: number;
  start_time: string;
  end_time: string;
  teacher: string;
  type: IntershipType;
  //伪属性
  status: number;
  operation: number;
}
 type itemType = Partial<Apply>;
 enum keyType {
  position = "position",
  teacher = "teacher",
  place = "place",
  isFull = "isFull",
}
 enum enumApply {
  id = "id",
  position = "position",
  place = "place",
  total_number = "total_number",
  current_number = "current_number",
  start_time = "start_time",
  end_time = "end_time",
  teacher = "teacher",
  type = "type",
}
interface ISelectType  {
  name:"select",
  options:any[]
}
interface ICustom{
name:"custom",
slotName:string
}

interface IInput {
  name:"input"
}
interface IDatePicker  {
  name:"data-picker"
}

type m = ISelectType|ICustom|IInput|TDatePicker
  interface IformConfig<T extends m> {
  type:T
  label:string
  prop:string
  value?:any
}

interface ITableConfig{
  label?:string
  prop:string
  type:string
  width?:string
  slotName?:string
  fixed?:string |boolean
}
