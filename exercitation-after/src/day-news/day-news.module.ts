import { Module } from '@nestjs/common';
import { DayNewsService } from './day-news.service';
import { DayNewsController } from './day-news.controller';
import { DayNew } from './entities/day-new.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([DayNew])],
  controllers: [DayNewsController],
  providers: [DayNewsService]
})
export class DayNewsModule {}
