import { Module } from '@nestjs/common';
import { SelfApplyService } from './self-apply.service';
import { SelfApplyController } from './self-apply.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { SelfApply } from "./entities/self-apply.entity";

@Module({
  imports:[TypeOrmModule.forFeature([SelfApply])],
  controllers: [SelfApplyController],
  providers: [SelfApplyService]
})
export class SelfApplyModule {}
