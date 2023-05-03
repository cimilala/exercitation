import { Test, TestingModule } from '@nestjs/testing';
import { SelfApplyController } from './self-apply.controller';
import { SelfApplyService } from './self-apply.service';

describe('SelfApplyController', () => {
  let controller: SelfApplyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SelfApplyController],
      providers: [SelfApplyService],
    }).compile();

    controller = module.get<SelfApplyController>(SelfApplyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
