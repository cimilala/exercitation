import { IsEnum, IsInt,  IsNumberString,  IsString } from "class-validator"
import { ApplyStatusType, RoleType, Sextype } from "./type.dto"

export class CreateStuUserDto {
    @IsString()
    username:string
    @IsString()
    password:string
    @IsString()
    name:string
    @IsString()
    stu_number:string
    @IsEnum(Sextype)
    sex:string
    @IsInt()
    internship_apply_id:number
    @IsEnum(RoleType)
    role_id:RoleType
    @IsEnum(ApplyStatusType)
    apply_status:ApplyStatusType
    @IsInt()
    select_id:number
   
}
