import { PartialType } from '@nestjs/mapped-types';
import { CreateInternshipPerformanceDto } from './create-internship-performance.dto';

export class UpdateInternshipPerformanceDto extends PartialType(CreateInternshipPerformanceDto) {}
