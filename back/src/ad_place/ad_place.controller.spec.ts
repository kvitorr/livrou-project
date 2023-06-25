import { Test, TestingModule } from '@nestjs/testing';
import { AdPlaceController } from './ad_place.controller';
import { AdPlaceService } from './ad_place.service';

describe('AdPlaceController', () => {
  let controller: AdPlaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdPlaceController],
      providers: [AdPlaceService],
    }).compile();

    controller = module.get<AdPlaceController>(AdPlaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
