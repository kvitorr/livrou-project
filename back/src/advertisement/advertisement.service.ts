import { Injectable } from '@nestjs/common';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from 'src/location/entities/location.entity';
import { Advertisement } from './entities/advertisement.entity';
import { CreateAdvertisementDTO } from './dto/create-advertisement.dto';
import { NotFoundErrror } from 'errors/api-error';

@Injectable()
export class AdvertisementService {

  constructor(
    @InjectRepository(Advertisement)
    private readonly advertisementRepository: Repository<Advertisement>,
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ){}

  async create(createAdvertisementDto: CreateAdvertisementDTO): Promise<Advertisement> {
    const { locations, ...advertisementData } = createAdvertisementDto;

    const advertisement = this.advertisementRepository.create(advertisementData);

    const locationsArray = [];
    for (const location of locations) {

      let locationEntity: Location = await this.locationRepository.findOne({ where: { city: location.city, state: location.state } });

      if (!locationEntity) {
        throw new NotFoundErrror('Localização não existe', 400);
      }

      locationsArray.push(locationEntity);
    }

    advertisement.locations = locationsArray;

    return this.advertisementRepository.save(advertisement);
  }

  findAll() {
    return `This action returns all advertisement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} advertisement`;
  }

  update(id: number, updateAdvertisementDto: UpdateAdvertisementDto) {
    return `This action updates a #${id} advertisement`;
  }

  remove(id: number) {
    return `This action removes a #${id} advertisement`;
  }
}
