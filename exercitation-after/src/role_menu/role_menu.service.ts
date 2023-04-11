import { Injectable } from '@nestjs/common';
import { CreateRoleMenuDto } from './dto/create-role_menu.dto';
import { UpdateRoleMenuDto } from './dto/update-role_menu.dto';
import { Repository } from 'typeorm';
import { RoleMenu } from './entities/role_menu.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoleMenuService {
  constructor(
    @InjectRepository(RoleMenu)
    private readonly roleMenuRepository:Repository<RoleMenu>){}
  create(createRoleMenuDto: CreateRoleMenuDto) {
    return 'This action adds a new roleMenu';
  }

  findAll() {
    return this.roleMenuRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} roleMenu`;
  }

  update(id: number, updateRoleMenuDto: UpdateRoleMenuDto) {
    return `This action updates a #${id} roleMenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} roleMenu`;
  }
 findMenuByRole(roleId:number){
return  this.roleMenuRepository.find({where:{roleId}})
  
  
  }
}
