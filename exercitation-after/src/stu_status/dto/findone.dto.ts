import { IsString } from "class-validator"

export class FindOne {
    @IsString()
    userId:string
    @IsString()
    internship_applyId:string
    @IsString()
    apply_status:string
    @IsString()
    select_id:string
}