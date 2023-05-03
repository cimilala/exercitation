import { Injectable } from '@nestjs/common';
import { CreateInstituteDto } from './dto/create-institute.dto';
import { UpdateInstituteDto } from './dto/update-institute.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Institute } from "./entities/institute.entity";

@Injectable()
export class InstituteService {
  constructor(
    @InjectRepository(Institute)
    private readonly instituteRepository:Repository<Institute>){}
  create(createInstituteDto: CreateInstituteDto) {
    return this.instituteRepository.save(this.instituteRepository.create(createInstituteDto))
  }

  findAll() {
    return `This action returns all institute`;
  }

  findOne(id: number) {
    return `This action returns a #${id} institute`;
  }

  update(id: number, updateInstituteDto: UpdateInstituteDto) {
    return `This action updates a #${id} institute`;
  }

  remove(id: number) {
    return `This action removes a #${id} institute`;
  }
}
