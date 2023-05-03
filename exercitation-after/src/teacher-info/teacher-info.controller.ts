import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherInfoService } from './teacher-info.service';
import { CreateTeacherInfoDto } from './dto/create-teacher-info.dto';
import { UpdateTeacherInfoDto } from './dto/update-teacher-info.dto';

@Controller('teacher-info')
export class TeacherInfoController {
  constructor(private readonly teacherInfoService: TeacherInfoService) {}

  @Post()
  create(@Body() createTeacherInfoDto: CreateTeacherInfoDto) {
    return this.teacherInfoService.create(createTeacherInfoDto);
  }
  @Post("/getTeacherInfo")
  find(@Body() body:UpdateTeacherInfoDto){
    return this.teacherInfoService.findOneByUserId(body)
  }
  @Get()
  findAll() {
    return this.teacherInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherInfoDto: UpdateTeacherInfoDto) {
    return this.teacherInfoService.update(+id, updateTeacherInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherInfoService.remove(+id);
  }

}
