import { PartialType } from '@nestjs/mapped-types';
import { CreateSelfApplyDto } from './create-self-apply.dto';

export class UpdateSelfApplyDto extends PartialType(CreateSelfApplyDto) {}
