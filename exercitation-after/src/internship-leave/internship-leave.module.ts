import { Module } from '@nestjs/common';
import { InternshipLeaveService } from './internship-leave.service';
import { InternshipLeaveController } from './internship-leave.controller';
import { InternshipLeave } from './entities/internship-leave.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([InternshipLeave])],
  controllers: [InternshipLeaveController],
  providers: [InternshipLeaveService]
})
export class InternshipLeaveModule {}
