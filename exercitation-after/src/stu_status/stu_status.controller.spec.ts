import { Test, TestingModule } from '@nestjs/testing';
import { StuStatusController } from './stu_status.controller';
import { StuStatusService } from './stu_status.service';

describe('StuStatusController', () => {
  let controller: StuStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StuStatusController],
      providers: [StuStatusService],
    }).compile();

    controller = module.get<StuStatusController>(StuStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
