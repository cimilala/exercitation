import { IsEnum,  IsNumber, IsString } from "class-validator"
import { Sextype } from "./user-type"
export class CreateUserDto {
    @IsString()
    username:string
    @IsNumber()
    roleId:number
    @IsString()
    password:string
    @IsEnum(Sextype)
    sex:string
    @IsString()
    name:string
    @IsString()
    photo:string
}
