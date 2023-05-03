import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { In, Repository } from "typeorm";
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository:  Repository<User>){}
  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto)
    return this.userRepository.save(user)
  }

  findAll() {
    return this.userRepository.find()
  }

  findOne(id: number) {
    return this.userRepository.findOne({where:{id}})
  }
  login(username:string){
    return this.userRepository.findOne({where:{username}},)
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id,updateUserDto)
  }

  remove(id: number) {
    return this.userRepository.delete(id)
  }
  getUser(username:string){
    return this.userRepository.findOne({where:{username}})
  }
  getUserByIds(userIds:any[]){
    return this.userRepository.find({where:{id:In(userIds)}})
  }
}
