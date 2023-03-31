import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStuUserDto } from './dto/create-stu-user.dto';
import { UpdateStuUserDto } from './dto/update-stu-user.dto';
import { StuUser } from './entities/stu-user.entity';

@Injectable()
export class StuUserService {
  constructor(
    @InjectRepository(StuUser)
    private readonly stuUserRepository:Repository<StuUser>){}
  findOne(username:string){
    return this.stuUserRepository.findOne({where:{username}},)
  }
  create(body: CreateStuUserDto) {
    const internshipApp = this.stuUserRepository.create(body)
     return this.stuUserRepository.save(internshipApp)
   }
   update(id:string,entityLike:UpdateStuUserDto) {
    return this.stuUserRepository.update(id,entityLike)
   }
   find(query){
    return this.stuUserRepository.find({where:query})
   }
}
