import { PartialType } from '@nestjs/mapped-types';
import { CreateStuInfoDto } from './create-stu_info.dto';

export class UpdateStuInfoDto extends PartialType(CreateStuInfoDto) {}
