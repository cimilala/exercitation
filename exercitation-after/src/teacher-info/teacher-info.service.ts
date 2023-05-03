import { Injectable } from '@nestjs/common';
import { CreateTeacherInfoDto } from './dto/create-teacher-info.dto';
import { UpdateTeacherInfoDto } from './dto/update-teacher-info.dto';
import { UpdateStuInfoDto } from "../stu_info/dto/update-stu_info.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { TeacherInfo } from "./entities/teacher-info.entity";
import { Repository } from "typeorm";

@Injectable()
export class TeacherInfoService {
  constructor(
    @InjectRepository(TeacherInfo)
    private readonly teacherInfoRepository:Repository<TeacherInfo> ) {
  }
  create(createTeacherInfoDto: CreateTeacherInfoDto) {
    return 'This action adds a new teacherInfo';
  }

  findAll() {
    return `This action returns all teacherInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacherInfo`;
  }

  update(id: number, updateTeacherInfoDto: UpdateTeacherInfoDto) {
    return `This action updates a #${id} teacherInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacherInfo`;
  }
  findOneByUserId(entityLike:UpdateStuInfoDto){
    return this.teacherInfoRepository.findOneBy(entityLike)
  }
}
