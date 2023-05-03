import { Module } from '@nestjs/common';
import { TeacherInfoService } from './teacher-info.service';
import { TeacherInfoController } from './teacher-info.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TeacherInfo } from "./entities/teacher-info.entity";

@Module({
  imports:[ TypeOrmModule.forFeature([TeacherInfo])],
  controllers: [TeacherInfoController],
  providers: [TeacherInfoService]
})
export class TeacherInfoModule {}
