import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DayNewsService } from './day-news.service';
import { CreateDayNewDto } from './dto/create-day-new.dto';
import { UpdateDayNewDto } from './dto/update-day-new.dto';

@Controller('day-news')
export class DayNewsController {
  constructor(private readonly dayNewsService: DayNewsService) {}
  @Post()
  create(@Body() createDayNewDto: CreateDayNewDto) {
    return this.dayNewsService.create(createDayNewDto);
  }

  @Get()
  findAll() {
    return this.dayNewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dayNewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDayNewDto: UpdateDayNewDto) {
    return this.dayNewsService.update(+id, updateDayNewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dayNewsService.remove(+id);
  }
  @Post("/byRole")
  find(@Body() body:UpdateDayNewDto){
    return this.dayNewsService.find(body)
  }
}
