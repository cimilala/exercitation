import {IsEnum, IsNumber, IsString } from 'class-validator';
import { Sextype } from './type';

export class CreateStuInfoDto {
  @IsNumber()
  stu_number: string;
  @IsString()
  class: string;
  @IsNumber()
  userId: number;
  @IsString()
  school:string
  @IsString()
  email:string
  @IsString()
  phone:string
  @IsString()
  wechat:string
  @IsString()
 college:string
 @IsString()
 per_signature:string
 @IsEnum(Sextype)
 sex:string
 @IsString()
 name:string
 @IsString()
 photo:string
}
