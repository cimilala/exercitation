import { PartialType } from '@nestjs/mapped-types';
import { CreateStuUserDto } from './create-stu-user.dto';

export class UpdateStuUserDto extends PartialType(CreateStuUserDto) {}
