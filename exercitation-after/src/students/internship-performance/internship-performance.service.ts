import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInternshipPerformanceDto } from './dto/create-internship-performance.dto';
import { UpdateInternshipPerformanceDto } from './dto/update-internship-performance.dto';
import { InternshipPerformance } from './entities/internship-performance.entity';

@Injectable()
export class InternshipPerformanceService {
  constructor(
    @InjectRepository(InternshipPerformance)
    private readonly performanceRepository:Repository<InternshipPerformance>){}
  create(body: CreateInternshipPerformanceDto) {
    const  InternshipPerformance= this.performanceRepository.create(body)
    return this.performanceRepository.save(InternshipPerformance)
  }

  findAll() {
    return this.performanceRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} internshipPerformance`;
  }

  update(id: number, body: UpdateInternshipPerformanceDto) {
    return `This action updates a #${id} internshipPerformance`;
  }

  remove(id: number) {
    return `This action removes a #${id} internshipPerformance`;
  }
}
