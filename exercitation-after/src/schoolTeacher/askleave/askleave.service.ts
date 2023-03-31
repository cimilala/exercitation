import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createALDto } from './dto/createAskLeave.dto';
import { UpdateAskLeaveDto } from './dto/updateAskLeave.dto';
import { AskLeave } from './entity/askleavelist';

export class AskLeaveService {
  constructor(
    @InjectRepository(AskLeave)
    private readonly askleaveRepository: Repository<AskLeave>,
  ) {}
  findAll() {
    return this.askleaveRepository.find();
  }
  findOne(id: string) {
    return this.askleaveRepository.findOneBy({ id:+id });
  }
 
  async delete(id: string) {
    const login = await this.findOne(id);
    return this.askleaveRepository.remove(login);
  }
  add(body:createALDto) {
    const askleave = this.askleaveRepository.create(body);
    return this.askleaveRepository.save(askleave);
  }
  async update<T extends keyof UpdateAskLeaveDto>(id:string,entityLike:T){
 const askleave =await this.askleaveRepository.preload({id:+id,...Object(entityLike)})
   return this.askleaveRepository.update(id,askleave);
  }
}
