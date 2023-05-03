import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherInfoDto } from './create-teacher-info.dto';

export class UpdateTeacherInfoDto extends PartialType(CreateTeacherInfoDto) {}
