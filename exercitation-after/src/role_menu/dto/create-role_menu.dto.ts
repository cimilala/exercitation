import { IsNumber } from "class-validator"

export class CreateRoleMenuDto {
    @IsNumber()
    menuId:number
    @IsNumber()
    roleId:number
}
