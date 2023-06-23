import { Test, TestingModule } from '@nestjs/testing';
import { ConservationController } from './conservation.controller';
import { ConservationService } from './conservation.service';

describe('ConservationController', () => {
  let controller: ConservationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConservationController],
      providers: [ConservationService],
    }).compile();

    controller = module.get<ConservationController>(ConservationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
