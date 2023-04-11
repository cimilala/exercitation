import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { RoleMenuService } from 'src/role_menu/role_menu.service';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepostitory: Repository<Menu>,
    private readonly roleMenuService: RoleMenuService,
  ) {}
  create(createMenuDto: CreateMenuDto) {
    const user = this.menuRepostitory.create(createMenuDto);
    return this.menuRepostitory.save(user);
  }

  findAll() {
    return this.menuRepostitory.find();
  }

  findOne(id: number) {
    return this.menuRepostitory.findOne({ where: { id } });
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return this.menuRepostitory.update(id, updateMenuDto);
  }

  remove(id: number) {
    return this.menuRepostitory.delete(id);
  }
  //根据用户权限查询菜单
  async findMenuByRole(roleId: number) {
    const roleMenuList = await this.roleMenuService.findMenuByRole(roleId);
    const menuIds = [];
    roleMenuList.forEach((item) => {
      menuIds.push(item.menuId);
    });
    return this.menuRepostitory.findBy({ id: In(menuIds) });
  }
}
