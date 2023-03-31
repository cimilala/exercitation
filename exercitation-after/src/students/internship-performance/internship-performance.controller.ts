import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InternshipPerformanceService } from './internship-performance.service';
import { CreateInternshipPerformanceDto } from './dto/create-internship-performance.dto';
import { UpdateInternshipPerformanceDto } from './dto/update-internship-performance.dto';

@Controller('/internship-performance')
export class InternshipPerformanceController {
  constructor(private readonly internshipPerformanceService: InternshipPerformanceService) {}

  @Post("/add")
  create(@Body() body: CreateInternshipPerformanceDto) {
    return this.internshipPerformanceService.create(body);
  }

  @Get()
  findAll() {
    return this.internshipPerformanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.internshipPerformanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInternshipPerformanceDto: UpdateInternshipPerformanceDto) {
    return this.internshipPerformanceService.update(+id, updateInternshipPerformanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.internshipPerformanceService.remove(+id);
  }
}
