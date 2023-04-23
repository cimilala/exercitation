import { Injectable } from '@nestjs/common';
import { CreateInternshipLeaveDto } from './dto/create-internship-leave.dto';
import { UpdateInternshipLeaveDto } from './dto/update-internship-leave.dto';
import { Repository } from 'typeorm';
import { InternshipLeave } from './entities/internship-leave.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InternshipLeaveService {
  constructor(
    @InjectRepository(InternshipLeave)
    private readonly internshipLeaveRepository:Repository<InternshipLeave>
  ){}
  create(createInternshipLeaveDto: CreateInternshipLeaveDto) {
    const internshipLeave = this.internshipLeaveRepository.create(createInternshipLeaveDto)
    return this.internshipLeaveRepository.save(internshipLeave)
   
  }

  findAll() {
    return this.internshipLeaveRepository.find();
  }

  findOne(id: number) {
    return this.internshipLeaveRepository.findOneBy({id});
  }

  update(id: number, updateInternshipLeaveDto: UpdateInternshipLeaveDto) {
    return this.internshipLeaveRepository.update(id,updateInternshipLeaveDto);
  }

  remove(id: number) {
    return `This action removes a #${id} internshipLeave`;
  }
  find(entityLike:UpdateInternshipLeaveDto){
    return this.internshipLeaveRepository.find({where:entityLike})
  }
}
