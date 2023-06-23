import { Module } from '@nestjs/common';
import { AdPlaceService } from './ad_place.service';
import { AdPlaceController } from './ad_place.controller';

@Module({
  controllers: [AdPlaceController],
  providers: [AdPlaceService]
})
export class AdPlaceModule {}
