import {IsNumber, IsString } from 'class-validator';

export class CreateStuInfoDto {
  @IsNumber()
  stu_number: string;
  @IsString()
  class: string;
  @IsNumber()
  userId: number;
}
