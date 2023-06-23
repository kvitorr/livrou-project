import { Injectable } from '@nestjs/common';
import { CreateAdPlaceDto } from './dto/create-ad_place.dto';
import { UpdateAdPlaceDto } from './dto/update-ad_place.dto';

@Injectable()
export class AdPlaceService {
  create(createAdPlaceDto: CreateAdPlaceDto) {
    return 'This action adds a new adPlace';
  }

  findAll() {
    return `This action returns all adPlace`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adPlace`;
  }

  update(id: number, updateAdPlaceDto: UpdateAdPlaceDto) {
    return `This action updates a #${id} adPlace`;
  }

  remove(id: number) {
    return `This action removes a #${id} adPlace`;
  }
}
