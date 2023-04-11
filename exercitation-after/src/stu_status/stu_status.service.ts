import { Injectable } from '@nestjs/common';
import { CreateStuStatusDto } from './dto/create-stu_status.dto';
import { UpdateStuStatusDto } from './dto/update-stu_status.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StuStatus } from './entities/stu_status.entity';

@Injectable()
export class StuStatusService {
  constructor(
    @InjectRepository(StuStatus)
    private readonly statusRepository:Repository<StuStatus>){}
  create(createStuStatusDto: CreateStuStatusDto) {
    const user = this.statusRepository.create(createStuStatusDto)
    return this.statusRepository.save(user)
  }

  findAll() {
    return this.statusRepository.find();
  }

  findOne(entityLike: UpdateStuStatusDto) {
 
    return this.statusRepository.findOne({where:entityLike})
  }
  findOneById(id:number){
    return this.statusRepository.findOne({where:{id}})
  }
  update(id: number, updateStuStatusDto: UpdateStuStatusDto) {
    return this.statusRepository.update(id,updateStuStatusDto)
  }

  remove(id: number) {
    return this.statusRepository.delete(id)
  }
}
