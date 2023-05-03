import { IsNumber, IsString } from "class-validator";

export class CreateTeacherInfoDto {
  @IsNumber()
  userId:number
  @IsString()
  photo:string
}
