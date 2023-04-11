import { Test, TestingModule } from '@nestjs/testing';
import { StuInfoService } from './stu_info.service';

describe('StuInfoService', () => {
  let service: StuInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StuInfoService],
    }).compile();

    service = module.get<StuInfoService>(StuInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
