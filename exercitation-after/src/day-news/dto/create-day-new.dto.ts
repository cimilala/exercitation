import { IsBoolean, IsNumber, IsString } from "class-validator"

export class CreateDayNewDto {
    @IsString()
    title:string
    @IsString()
    unit:string
    @IsString()
    time:string
    @IsString()
    week:string
    @IsString()
    content:string
    @IsBoolean()
    isDraft:boolean
    @IsNumber()
    status:number
    @IsNumber()
    userId:number
    @IsNumber()
    operation:number
   
}
