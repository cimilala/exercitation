import { IsNumber, IsString } from "class-validator";

export class CreateGradeDto {
  @IsString()
  name:string
  @IsNumber()
  instituteId:number
}
