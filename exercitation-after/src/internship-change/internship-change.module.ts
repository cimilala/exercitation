import { Module } from '@nestjs/common';
import { IntershipChangeService } from './internship-change.service';
import { IntershipChangeController } from './internship-change.controller';
import { InternshipChange } from './entities/internship-change.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([InternshipChange])],
  controllers: [IntershipChangeController],
  providers: [IntershipChangeService]
})
export class InternshipChangeModule {}
