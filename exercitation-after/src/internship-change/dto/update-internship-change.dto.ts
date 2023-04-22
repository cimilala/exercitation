import { PartialType } from '@nestjs/mapped-types';
import { CreateInternshipChangeDto } from './create-internship-change.dto';

export class UpdateInternshipChangeDto extends PartialType(CreateInternshipChangeDto) {}
