import {  IsNumber } from "class-validator"

export class CreateStuStatusDto {
    @IsNumber()
    userId:number
    @IsNumber()
    internship_applyId:number
    @IsNumber()
    apply_status:number
    @IsNumber()
    select_id:number
}
