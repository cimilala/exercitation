import { Module } from '@nestjs/common';
import { StuUserService } from './stu-user.service';
import { StuUserController } from './stu-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StuUser } from './entities/stu-user.entity';
@Module({
  imports:[TypeOrmModule.forFeature([StuUser]),
  ],
  controllers: [StuUserController],
  providers: [StuUserService],
  exports:[StuUserService]
})
export class StuUserModule {}
