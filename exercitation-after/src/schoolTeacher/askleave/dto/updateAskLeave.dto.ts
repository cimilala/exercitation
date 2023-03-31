import { Optional } from "@nestjs/common"
import { IsEnum, IsString } from "class-validator"
import { Sextype } from "src/students/stu-user/dto/type.dto"

export class UpdateAskLeaveDto{
    @IsString()
    @Optional()
    stuName:string
    @IsString()
    @Optional()
    name:string
    @IsEnum(Sextype)
    @Optional()
    sex:Sextype
    @IsString()
    @Optional()
    grade:string
    @IsString()
    @Optional()
    startTime:string
    @IsString()
    @Optional()
    endTime:string
    @IsString()
    @Optional()
    type:string
    @IsString()
    @Optional()
    days:number

}