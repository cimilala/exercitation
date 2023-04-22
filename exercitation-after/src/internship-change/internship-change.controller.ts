import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IntershipChangeService } from './internship-change.service';
import { CreateInternshipChangeDto } from './dto/create-internship-change.dto';
import { UpdateInternshipChangeDto } from './dto/update-internship-change.dto';

@Controller('internship-change')
export class IntershipChangeController {
  constructor(private readonly intershipChangeService: IntershipChangeService) {}

  @Post()
  create(@Body() createIntershipChangeDto: CreateInternshipChangeDto) {
    return this.intershipChangeService.create(createIntershipChangeDto);
  }

  @Get()
  findAll() {
    return this.intershipChangeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intershipChangeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIntershipChangeDto: UpdateInternshipChangeDto) {
    return this.intershipChangeService.update(+id, updateIntershipChangeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intershipChangeService.remove(+id);
  }
  @Post("/byRole")
  find(@Body() body:UpdateInternshipChangeDto){
    return this.intershipChangeService.find(body)
  }
}
