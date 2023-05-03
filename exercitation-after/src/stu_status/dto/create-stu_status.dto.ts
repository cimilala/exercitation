import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateStuStatusDto {
    @IsNumber()
    userId:number
    @IsNumber()
    internship_applyId:number
    @IsNumber()
    apply_status:number
    @IsString()
    internship_type:string
    @IsBoolean()
    internship_self:boolean
}
