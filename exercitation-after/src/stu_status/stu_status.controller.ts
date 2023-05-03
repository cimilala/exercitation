import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { StuStatusService } from './stu_status.service';
import { CreateStuStatusDto } from './dto/create-stu_status.dto';
import { UpdateStuStatusDto } from './dto/update-stu_status.dto';

@Controller('stu_status')
export class StuStatusController {
  constructor(private readonly stuStatusService: StuStatusService) {}
@Get("/findIsApply/:apply_status")
findIsApplyAndStuInfo(@Param("apply_status") apply_status:number){
    return this.stuStatusService.findIsApplyAndStuInfo(apply_status)
}
  @Post("")
  create(@Body() createStuStatusDto: CreateStuStatusDto) {
    return this.stuStatusService.create(createStuStatusDto);
  }
@Post("/isApply")
findIsApply(@Body() entity:UpdateStuStatusDto){
    return this.stuStatusService.findIsApply(entity)
}
  @Get()
  findAll() {
    return this.stuStatusService.findAll();
  }

  @Get('/getOneById/:id')
  findOneById(@Param('id') id: string) {
    return this.stuStatusService.findOneById(+id);
  }
  
  @Post("/getOne")
  findOne(@Body() entityLike: UpdateStuStatusDto) {
   
    return this.stuStatusService.findOne(entityLike);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStuStatusDto: UpdateStuStatusDto) {
    return this.stuStatusService.update(+id, updateStuStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stuStatusService.remove(+id);
  }
}
