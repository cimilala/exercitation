import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateSelfApplyDto {
 @IsString()
  company_name:string
  @IsString()
  place:string
  @IsString()
  position:string
  @IsNumber()
  userId:number
 @IsString()
  start_time:string
  @IsString()
  end_time:string
  @IsString()
  prave:string
 @IsString()
 teacher:string
 @IsNumber()
 status:number
 @IsString()
 type:string
}
