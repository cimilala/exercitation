import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SelfApplyService } from './self-apply.service';
import { CreateSelfApplyDto } from './dto/create-self-apply.dto';
import { UpdateSelfApplyDto } from './dto/update-self-apply.dto';

@Controller('self-apply')
export class SelfApplyController {
  constructor(private readonly selfApplyService: SelfApplyService) {}

  @Post()
  create(@Body() createSelfApplyDto: CreateSelfApplyDto) {
    return this.selfApplyService.create(createSelfApplyDto);
  }
  @Post("/byRole")
  findOneByRole(@Body() entityLike:UpdateSelfApplyDto){
    return this.selfApplyService.findOneByRole(entityLike)
  }
  @Get("/getIsSelf/:status")
  qsq(@Param("status") status:number){
    return this.selfApplyService.qsq(status)
  }
  @Get()
  findAll() {
    return this.selfApplyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.selfApplyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSelfApplyDto: UpdateSelfApplyDto) {
    return this.selfApplyService.update(+id, updateSelfApplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.selfApplyService.remove(+id);
  }
}
