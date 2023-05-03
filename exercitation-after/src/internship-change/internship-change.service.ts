import { Injectable } from '@nestjs/common';
import { CreateInternshipChangeDto } from './dto/create-internship-change.dto';
import { UpdateInternshipChangeDto } from './dto/update-internship-change.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InternshipChange } from './entities/internship-change.entity';
import { StuInfo } from "../stu_info/entities/stu_info.entity";
import { User } from "../user/entities/user.entity";

@Injectable()
export class IntershipChangeService {
  constructor(
    @InjectRepository(InternshipChange)
    private readonly intershipChangeRepository:Repository<InternshipChange>){}
  create(createIntershipChangeDto: CreateInternshipChangeDto) {
    const newChange= this.intershipChangeRepository.create(createIntershipChangeDto)
    return this.intershipChangeRepository.save(newChange);
  }

  findAll() {
    return this.intershipChangeRepository.find();
  }

  findOne(id: number) {
    return this.intershipChangeRepository.findOneBy({id});
  }

  update(id: number, updateIntershipChangeDto: UpdateInternshipChangeDto) {
    return this.intershipChangeRepository.update(id,updateIntershipChangeDto);
  }

  remove(id: number) {
    return `This action removes a #${id} intershipChange`;
  }
  find(entityLike:UpdateInternshipChangeDto){
    return this.intershipChangeRepository.find({where:entityLike})
  }
  qsq(status:number){
    return this.intershipChangeRepository
      .createQueryBuilder("internship_change")
      .innerJoinAndSelect(StuInfo,"stuInfo","internship_change.userId=stuInfo.userId")
      .innerJoinAndSelect(User,"user","internship_change.userId=user.id")
      .where("internship_change.status=:status",{status})
      .getRawMany()

  }
}
