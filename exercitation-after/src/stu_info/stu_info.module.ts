import { Module } from '@nestjs/common';
import { StuInfoService } from './stu_info.service';
import { StuInfoController } from './stu_info.controller';
import { StuInfo } from './entities/stu_info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InternshipApplyModule } from 'src/internship-apply/internship-apply.module';
import { StuStatusModule } from 'src/stu_status/stu_status.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([StuInfo]),
    InternshipApplyModule,
    StuStatusModule,
  ],
  controllers: [StuInfoController],
  providers: [StuInfoService],
})
export class StuInfoModule {}
