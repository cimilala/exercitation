import { Injectable } from '@nestjs/common';
import { CreateDayNewDto } from './dto/create-day-new.dto';
import { UpdateDayNewDto } from './dto/update-day-new.dto';
import { Repository } from 'typeorm';
import { DayNew } from './entities/day-new.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DayNewsService {
  constructor(
    @InjectRepository(DayNew)
    private readonly dayNewsRepository:Repository<DayNew>
  ){

  }
  create(createDayNewDto: CreateDayNewDto) {
    const daynews =this.dayNewsRepository.create(createDayNewDto);
    return this.dayNewsRepository.save(daynews)
  }

  findAll() {
   return this.dayNewsRepository.find();;
  }

  findOne(id: number) {
    return this.dayNewsRepository.find();
  }

  update(id: number, updateDayNewDto: UpdateDayNewDto) {
    return this.dayNewsRepository.update(id,updateDayNewDto);
  }

  remove(id: number) {
    return `This action removes a #${id} dayNew`;
  }
  find(entityLike:UpdateDayNewDto){
    return this.dayNewsRepository.find({where:entityLike})
  }
}
