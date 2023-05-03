import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Test } from './entities/test.entity';
import { Not, Repository } from 'typeorm';
import { UpdateTestDto } from './dto/update-test.dto';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private readonly testingRepository:Repository<Test>){
    
  }
  create(createTestingDto: CreateTestDto) {
    const test = this.testingRepository.create(createTestingDto)
    return this.testingRepository.save(test)
  }

  findAll() {
    return this.testingRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} testing`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} testing`;
  }

  remove(id: number) {
    return `This action removes a #${id} testing`;
  }

  findTestByRole(enetity:UpdateTestDto){
    return this.testingRepository.find({where:enetity})

  }

  findTesting(){
    return this.testingRepository.find({where:{status:1}})
  }
  findTested(){
    return this.testingRepository.find({where:{status:Not(1)}})
  }
}
