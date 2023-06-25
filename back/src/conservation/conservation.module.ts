import { Module } from '@nestjs/common';
import { ConservationService } from './conservation.service';
import { ConservationController } from './conservation.controller';

@Module({
  controllers: [ConservationController],
  providers: [ConservationService]
})
export class ConservationModule {}
