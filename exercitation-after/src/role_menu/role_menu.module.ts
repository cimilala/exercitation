import { Module } from '@nestjs/common';
import { RoleMenuService } from './role_menu.service';
import { RoleMenuController } from './role_menu.controller';
import { RoleMenu } from './entities/role_menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([RoleMenu])],
  controllers: [RoleMenuController],
  providers: [RoleMenuService],
  exports:[RoleMenuService]
})
export class RoleMenuModule {}
