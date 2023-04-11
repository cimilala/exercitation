import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StuInfoService } from './stu_info.service';
import { CreateStuInfoDto } from './dto/create-stu_info.dto';
import { UpdateStuInfoDto } from './dto/update-stu_info.dto';

@Controller('stu_info')
export class StuInfoController {
  constructor(private readonly stuInfoService: StuInfoService) {}

  @Post()
  create(@Body() createStuInfoDto: CreateStuInfoDto) {
    return this.stuInfoService.create(createStuInfoDto);
  }

  @Get()
  findAll() {
    return this.stuInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stuInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStuInfoDto: UpdateStuInfoDto) {
    return this.stuInfoService.update(+id, updateStuInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stuInfoService.remove(+id);
  }
}
