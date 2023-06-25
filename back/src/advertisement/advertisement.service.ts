import { Injectable } from '@nestjs/common';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from 'src/location/entities/location.entity';
import { Advertisement } from './entities/advertisement.entity';
import { CreateAdvertisementDTO } from './dto/create-advertisement.dto';
import { NotFoundErrror } from 'errors/api-error';
import { UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';


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
    return this.advertisementRepository.find();
  }

  async findOne(id: number): Promise<Advertisement> {
    return await this.advertisementRepository.findOneBy({advertisement_id : id});

  }

  async update(id: number, updateAdvertisementDto: UpdateAdvertisementDto, user: User): Promise<Advertisement> {
    console.log(id)
    const advertisement: Advertisement = await this.findOne(id);

    if (advertisement.userId !== user.user_id) {
      throw new UnauthorizedException();
    }

    updateAdvertisementDto.userId = user.user_id;
    return this.advertisementRepository.save(updateAdvertisementDto);
  }
  
  

  async remove(id: number, user: User){

    const advertisement: Advertisement = await this.findOne(id);

  
    if (advertisement.userId !== user.user_id) {
      throw new UnauthorizedException();
    }
    return this.advertisementRepository.delete(id);
  }
}



