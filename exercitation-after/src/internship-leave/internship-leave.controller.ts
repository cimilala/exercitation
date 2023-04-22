import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InternshipLeaveService } from './internship-leave.service';
import { CreateInternshipLeaveDto } from './dto/create-internship-leave.dto';
import { UpdateInternshipLeaveDto } from './dto/update-internship-leave.dto';

@Controller('internship-leave')
export class InternshipLeaveController {
  constructor(private readonly internshipLeaveService: InternshipLeaveService) {}

  @Post()
  create(@Body() createInternshipLeaveDto: CreateInternshipLeaveDto) {
    return this.internshipLeaveService.create(createInternshipLeaveDto);
  }

  @Get()
  findAll() {
    return this.internshipLeaveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.internshipLeaveService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInternshipLeaveDto: UpdateInternshipLeaveDto) {
    return this.internshipLeaveService.update(+id, updateInternshipLeaveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.internshipLeaveService.remove(+id);
  }
  @Post("/byRole")
  findByRole(@Body() body:UpdateInternshipLeaveDto){
    return this.internshipLeaveService.find(body)
  }
}
