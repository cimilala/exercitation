import { Injectable } from '@nestjs/common';
import { CreateStuInfoDto } from './dto/create-stu_info.dto';
import { UpdateStuInfoDto } from './dto/update-stu_info.dto';
import { Repository } from 'typeorm';
import { StuInfo } from './entities/stu_info.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StuInfoService {
  constructor(
    @InjectRepository(StuInfo)
    private readonly stuInfoReposeitory:Repository<StuInfo>){}
  create(createStuInfoDto: CreateStuInfoDto) {
    return this.stuInfoReposeitory.create(createStuInfoDto)
  }

  findAll() {
    return this.stuInfoReposeitory.find();
  }

  findOne(id: number) {
    return this.stuInfoReposeitory.findOne({where:{id}});
  }

  update(id: number, updateStuInfoDto: UpdateStuInfoDto) {
    return this.stuInfoReposeitory.update(id,updateStuInfoDto);
  }

  remove(id: number) {
    return this.stuInfoReposeitory.delete(id);
  }
}
