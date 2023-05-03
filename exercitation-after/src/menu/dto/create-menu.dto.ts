import { IsNumber, IsString } from "class-validator"
export class CreateMenuDto {
    @IsString()
    name:string
    @IsNumber()
    type:number
    @IsString()
    path:string
    @IsString()
    icon:string
    @IsNumber()
    parent_id:number
}
