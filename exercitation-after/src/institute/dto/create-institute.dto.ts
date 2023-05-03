import { IsNumber, IsString } from "class-validator";

export class CreateInstituteDto {
  @IsString()
  name:string
  @IsNumber()
  parent_id:number
}
