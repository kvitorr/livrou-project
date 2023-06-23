import { Test, TestingModule } from '@nestjs/testing';
import { AdPlaceService } from './ad_place.service';

describe('AdPlaceService', () => {
  let service: AdPlaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdPlaceService],
    }).compile();

    service = module.get<AdPlaceService>(AdPlaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
