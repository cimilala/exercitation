import { PartialType } from '@nestjs/mapped-types';
import { CreateInternshipLeaveDto } from './create-internship-leave.dto';

export class UpdateInternshipLeaveDto extends PartialType(CreateInternshipLeaveDto) {}
