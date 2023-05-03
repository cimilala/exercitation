import { Module } from '@nestjs/common';
import { InstituteService } from './institute.service';
import { InstituteController } from './institute.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Institute } from "./entities/institute.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Institute])],
  controllers: [InstituteController],
  providers: [InstituteService]
})
export class InstituteModule {}
