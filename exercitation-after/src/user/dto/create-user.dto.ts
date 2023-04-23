import { IsEnum,  IsNumber, IsString } from "class-validator"
export class CreateUserDto {
    @IsString()
    username:string
    @IsNumber()
    roleId:number
    @IsString()
    password:string
   
}
