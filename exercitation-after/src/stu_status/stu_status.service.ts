import { Injectable } from '@nestjs/common';
import { CreateStuStatusDto } from './dto/create-stu_status.dto';
import { UpdateStuStatusDto } from './dto/update-stu_status.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StuStatus } from './entities/stu_status.entity';
import { StuInfo } from "../stu_info/entities/stu_info.entity";
import { InternshipApply } from "../internship-apply/entities/internship-apply.entity";
import { User } from "../user/entities/user.entity";

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
  findIsApply(entityLike:UpdateStuStatusDto){
    return this.statusRepository.find({where:entityLike})
  }
  findIsApplyAndStuInfo (apply_status:number){
    return this.statusRepository.createQueryBuilder("stu_status")
      .innerJoinAndSelect(
      StuInfo,"stuInfo","stu_status.userId=stuInfo.userId")
      .innerJoinAndSelect(
        InternshipApply,"internshipApply","stu_status.internship_applyId = internshipApply.id")
      .innerJoinAndSelect(User,"user","stu_status.userId=user.id")
      .where("stu_status.apply_status=:apply_status",{apply_status})
      .getRawMany()
  }
}
