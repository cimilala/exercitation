import { Test, TestingModule } from '@nestjs/testing';
import { StuInfoController } from './stu_info.controller';
import { StuInfoService } from './stu_info.service';

describe('StuInfoController', () => {
  let controller: StuInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StuInfoController],
      providers: [StuInfoService],
    }).compile();

    controller = module.get<StuInfoController>(StuInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
