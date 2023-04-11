import { Test, TestingModule } from '@nestjs/testing';
import { StuStatusService } from './stu_status.service';

describe('StuStatusService', () => {
  let service: StuStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StuStatusService],
    }).compile();

    service = module.get<StuStatusService>(StuStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
