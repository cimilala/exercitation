import { IsBoolean, IsNumber, IsString } from "class-validator"

export class CreateInternshipLeaveDto {
    @IsNumber()
    userId:number
    @IsString()
    type:string
    @IsNumber()
    days:number
    @IsString()
    reason:string
    @IsString()
    start_time:string
    @IsString()
    end_time:string
    @IsString()
    proveImages:string
    @IsBoolean()
    isDraft:boolean
    @IsNumber()
    status:number
    @IsNumber()
    operation:number
}
