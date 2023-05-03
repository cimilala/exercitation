import {  IsNumber, IsString } from "class-validator"

export class CreateTestDto {
    @IsNumber()
    status:number
    @IsNumber()
    type_id:number
    @IsNumber()
    userId:number
    @IsString()
    test_type:string
}
