import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateInternshipChangeDto {
  @IsString()
  initInter: string;
  @IsString()
  changeInter: string;
  @IsString()
  initPosition: string;
  @IsString()
  changePosition: string;
  @IsString()
  reason: string;
  @IsBoolean()
  isDraft: true;
  @IsNumber()
  userId: number;
  @IsNumber()
  status: number;
  @IsNumber()
  operation: number;
}
