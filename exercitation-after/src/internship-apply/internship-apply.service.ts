import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInternshipApplyDto } from './dto/create-internship-apply.dto';
import { UpdateInternshipApplyDto } from './dto/update-internship-apply.dto';
import { InternshipApply } from './entities/internship-apply.entity';

@Injectable()
export class InternshipApplyService {
  constructor(
    @InjectRepository(InternshipApply)
    private readonly InternshipApplyRepository:Repository<InternshipApply>
  ){}
  create(createInternshipApplyDto: CreateInternshipApplyDto) {
   const internshipApp = this.InternshipApplyRepository.create(createInternshipApplyDto)
    return this.InternshipApplyRepository.save(internshipApp)
  }

  findAll() {
    return this.InternshipApplyRepository.find()
  }

  findOne(id: number) {
    return this.InternshipApplyRepository.findOneBy({id:+id});
  }

  async update(id:number,entityLike:UpdateInternshipApplyDto){
    const askleave =await this.InternshipApplyRepository.preload({id:+id,...Object(entityLike)})
      return this.InternshipApplyRepository.update(id,askleave);
     }

async  remove(id:number) {
    const internshipApp =await this.findOne(id)
    return this.InternshipApplyRepository.remove(internshipApp)
  }
}
