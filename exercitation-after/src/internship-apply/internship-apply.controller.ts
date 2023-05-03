import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { InternshipApplyService } from './internship-apply.service';
import { CreateInternshipApplyDto } from './dto/create-internship-apply.dto';
import { UpdateInternshipApplyDto } from './dto/update-internship-apply.dto';
@Controller("internshipApply")
export class InternshipApplyController {
  constructor(private readonly internshipApplyService: InternshipApplyService) {}

  @Post()
  create(@Body() body: CreateInternshipApplyDto) {
    return this.internshipApplyService.create(body);
  }

  @Get()
  findAll() {
    return this.internshipApplyService.findAll();
  }
  @Get("/pagination")
  pagination(@Query("skip") skip :number,@Query("take") take:number){

    return this.internshipApplyService.pagination(skip,take)
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.internshipApplyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInternshipApplyDto: UpdateInternshipApplyDto) {
    return this.internshipApplyService.update(+id, updateInternshipApplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.internshipApplyService.remove(+id);
  }

}
