import { PartialType } from '@nestjs/mapped-types';
import { CreateInternshipApplyDto } from './create-internship-apply.dto';

export class UpdateInternshipApplyDto extends PartialType(CreateInternshipApplyDto) {}
