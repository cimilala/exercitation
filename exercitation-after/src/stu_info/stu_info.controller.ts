import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StuInfoService } from './stu_info.service';
import { CreateStuInfoDto } from './dto/create-stu_info.dto';
import { UpdateStuInfoDto } from './dto/update-stu_info.dto';
import { UpdateStuStatusDto } from "../stu_status/dto/update-stu_status.dto";

@Controller('stu_info')
export class StuInfoController {
  constructor(private readonly stuInfoService: StuInfoService) {}

  @Post()
  create(@Body() createStuInfoDto: CreateStuInfoDto) {
    return this.stuInfoService.create(createStuInfoDto);
  }
  @Post("/getStuInfo")
  find(@Body() body:UpdateStuStatusDto){
    return this.stuInfoService.findOneByUserId(body)
  }
  @Post("/getStuInfoBy")
  finds(@Body() entity:UpdateStuInfoDto){
    return this.stuInfoService.find(entity)
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
