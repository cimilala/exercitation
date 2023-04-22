import { PartialType } from '@nestjs/mapped-types';
import { CreateDayNewDto } from './create-day-new.dto';

export class UpdateDayNewDto extends PartialType(CreateDayNewDto) {}
