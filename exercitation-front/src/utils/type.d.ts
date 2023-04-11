 interface responseType<T = any> {
  data: T;
  error?: string;
  status: number;
  timestamp: string;
  message: string;
}
interface User {
  id: number | null;
  name: string | null;
  roleId: number | null;
  sex: string | null;
  username: string | null;
  photo: string | null;
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
  totalNumber: number;
  currentNumber: number;
  startTime: string;
  endTime: string;
  teacher: string;
  type: IntershipType;
  //伪属性
  apply_status: number;
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
  totalNumber = "totalNumber",
  currentNumber = "currentNumber",
  startTime = "startTime",
  endTime = "endTime",
  teacher = "teacher",
  type = "type",
}
