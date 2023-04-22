import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  create(@Body() createTestingDto: CreateTestDto) {
    return this.testService.create(createTestingDto);
  }

  @Get("/getAll")
  findAll() {
    return this.testService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestingDto: UpdateTestDto) {
    return this.testService.update(+id, updateTestingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testService.remove(+id);
  }
  @Get("/testing")
  findTesting(){
    return this.testService.findTesting()
  }
  @Get("/tested")
  findTested(){
    return this.testService.findTested()
  }
}
