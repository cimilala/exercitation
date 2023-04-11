import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { Menu } from './entities/menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleMenuModule } from 'src/role_menu/role_menu.module';

@Module({
  imports:[TypeOrmModule.forFeature([Menu]),RoleMenuModule],
  controllers: [MenuController],
  providers: [MenuService]
})
export class MenuModule {}
