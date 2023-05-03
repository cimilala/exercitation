import { Module } from '@nestjs/common';
import { InternshipApplyService } from './internship-apply.service';
import { InternshipApplyController } from './internship-apply.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InternshipApply } from './entities/internship-apply.entity';

@Module({
  imports:[TypeOrmModule.forFeature([InternshipApply])],
  controllers: [InternshipApplyController],
  providers: [InternshipApplyService],
  exports:[InternshipApplyService]
})
export class InternshipApplyModule {}
