import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InternshipApplyService } from './internship-apply.service';
import { CreateInternshipApplyDto } from './dto/create-internship-apply.dto';
import { UpdateInternshipApplyDto } from './dto/update-internship-apply.dto';
@Controller("/internshipapply")
export class InternshipApplyController {
  constructor(private readonly internshipApplyService: InternshipApplyService) {}

  @Post("/schoolTeacher/add")
  create(@Body() body: CreateInternshipApplyDto) {
    return this.internshipApplyService.create(body);
  }

  @Get("/stu/getall")
  findAll() {
    return this.internshipApplyService.findAll();
  }

  @Get('/schoolTeacher/getone/:id')
  findOne(@Param('id') id: string) {
    return this.internshipApplyService.findOne(+id);
  }

  @Patch('/schoolTeacher/update/:id')
  update(@Param('id') id: string, @Body() updateInternshipApplyDto: UpdateInternshipApplyDto) {
    return this.internshipApplyService.update(+id, updateInternshipApplyDto);
  }

  @Delete('/schoolTeacher/delete/:id')
  remove(@Param('id') id: string) {
    return this.internshipApplyService.remove(+id);
  }
}
