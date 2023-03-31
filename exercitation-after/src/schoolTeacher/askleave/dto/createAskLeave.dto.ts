import { IsEnum, IsString } from "class-validator"
import { Sextype } from "src/students/stu-user/dto/type.dto"

export class createALDto{
    @IsString()
    stuName:string
    @IsString()
    name:string
    @IsEnum(Sextype)
    sex:Sextype
    @IsString()
    grade:string
    @IsString()
    startTime:string
    @IsString()
    endTime:string
    @IsString()
    type:string
    @IsString()
    days:number

}