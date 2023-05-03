import { Injectable } from '@nestjs/common';
import { CreateStuInfoDto } from './dto/create-stu_info.dto';
import { UpdateStuInfoDto } from './dto/update-stu_info.dto';
import { In, Repository } from "typeorm";
import { StuInfo } from './entities/stu_info.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { StuStatusService } from "../stu_status/stu_status.service";
import { UpdateStuStatusDto } from "../stu_status/dto/update-stu_status.dto";
import { InternshipApplyService } from "../internship-apply/internship-apply.service";
import { UserService } from "../user/user.service";

@Injectable()
export class StuInfoService {
  constructor(
    @InjectRepository(StuInfo)
    private readonly stuInfoReposeitory:Repository<StuInfo>,
    private  readonly stuStatusService:StuStatusService ,
    private  readonly internshipApplyService:InternshipApplyService,
    private  readonly userService:UserService){}
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
  find(entityLike:UpdateStuInfoDto){
    return this.stuInfoReposeitory.findOne({where:entityLike})
  }
  async findOneByUserId(entityLike: UpdateStuStatusDto) {
    const isApplyList = await this.stuStatusService.findIsApply(entityLike)
    const isApplyListIds = [];
    const internship_applyId = []
    isApplyList.forEach((item,index) => {
      isApplyListIds.push(item.userId);
      internship_applyId.push(item.internship_applyId)
    });
    const a = await this.stuInfoReposeitory.find({ where:{userId:In(isApplyListIds)}});
    const b = await this.internshipApplyService.find(internship_applyId)
    const c = await  this.userService.getUserByIds(internship_applyId)
  const m =  a.map((item,index)=>{
        return {
          ...item,
          ...b[index],
          ...c[index]
        }

    })
    return m

  }
}
