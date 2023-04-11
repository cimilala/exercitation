import { Module } from '@nestjs/common';
import { StuStatusService } from './stu_status.service';
import { StuStatusController } from './stu_status.controller';
import { StuStatus } from './entities/stu_status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([StuStatus])],
  controllers: [StuStatusController],
  providers: [StuStatusService]
})
export class StuStatusModule {}
