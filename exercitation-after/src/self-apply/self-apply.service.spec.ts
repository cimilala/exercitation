import { Test, TestingModule } from '@nestjs/testing';
import { SelfApplyService } from './self-apply.service';

describe('SelfApplyService', () => {
  let service: SelfApplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SelfApplyService],
    }).compile();

    service = module.get<SelfApplyService>(SelfApplyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
