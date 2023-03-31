import { Module } from '@nestjs/common';
import { InternshipPerformanceService } from './internship-performance.service';
import { InternshipPerformanceController } from './internship-performance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InternshipPerformance } from './entities/internship-performance.entity';

@Module({
  imports:[TypeOrmModule.forFeature([InternshipPerformance])],
  controllers: [InternshipPerformanceController],
  providers: [InternshipPerformanceService]
})
export class InternshipPerformanceModule {}
