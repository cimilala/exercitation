import { Injectable } from '@nestjs/common';
import { CreateSelfApplyDto } from './dto/create-self-apply.dto';
import { UpdateSelfApplyDto } from './dto/update-self-apply.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SelfApply } from "./entities/self-apply.entity";
import { User } from "../user/entities/user.entity";
import { StuInfo } from "../stu_info/entities/stu_info.entity";

@Injectable()
export class SelfApplyService {
  constructor(
    @InjectRepository(SelfApply)
    private readonly selfApplyRepository:Repository<SelfApply>){}
  create(createSelfApplyDto: CreateSelfApplyDto) {
    return this.selfApplyRepository.save(this.selfApplyRepository.create(createSelfApplyDto))
  }

  findAll() {
    return `This action returns all selfApply`;
  }

  findOne(id: number) {
    return `This action returns a #${id} selfApply`;
  }

  update(id: number, updateSelfApplyDto: UpdateSelfApplyDto) {
    return this.selfApplyRepository.update(id,updateSelfApplyDto);
  }
findOneByRole(entity:UpdateSelfApplyDto){
    return this.selfApplyRepository.find({where:entity})
}
  remove(id: number) {
    return `This action removes a #${id} selfApply`;
  }
  qsq(status:number){
    return this.selfApplyRepository
      .createQueryBuilder("self_apply")
      .innerJoinAndSelect(User,"user","self_apply.userId=user.id")
      .innerJoinAndSelect(StuInfo,"stuInfo","self_apply.userId=stuInfo.userId")
      .where("self_apply.status=:status",{status})
      .getRawMany()

  }
}
