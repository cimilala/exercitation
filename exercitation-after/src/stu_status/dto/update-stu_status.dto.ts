import { PartialType } from '@nestjs/mapped-types';
import { CreateStuStatusDto } from './create-stu_status.dto';

export class UpdateStuStatusDto extends PartialType(CreateStuStatusDto) {}
