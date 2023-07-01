import { Injectable } from '@nestjs/common';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Advertisement } from './entities/advertisement.entity';
import { CreateAdvertisementDTO } from './dto/create-advertisement.dto';
import { UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Location } from 'src/location/entities/location.entity';

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
        throw new NotFoundException('Localização não existe');
      }

      locationsArray.push(locationEntity);
    }

    advertisement.locations = locationsArray;

    return this.advertisementRepository.save(advertisement);
  }

  findAll() {
    return this.advertisementRepository.find();
  }

  async findValidAdvertisements(): Promise<Advertisement[]> {
    const ads: Advertisement[] = await this.advertisementRepository.find({ where: { removed: false } });
  
    if (!ads || ads.length === 0) {
      throw new ForbiddenException();
    }
  
    return ads;
  }
  

  async findOne(id: number): Promise<Advertisement> {
    return await this.advertisementRepository.findOneBy({advertisement_id : id});

  }

  async findOneValid(id: number): Promise<Advertisement> {
      const ads: Advertisement = await this.advertisementRepository.findOne({ where: {advertisement_id : id, removed: false}});
      if(!ads){
        throw new ForbiddenException()
      }

      return ads;
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


  async findAdvertisementsByFilter(filter: {
    state?: string;
    city?: string;
    transactionType?: string;
    conservation?: string;
    maxPrice?: number;
  }): Promise<Advertisement[]> {
    const { state, city, transactionType, conservation, maxPrice } = filter;


    const queryBuilder = this.advertisementRepository.createQueryBuilder('advertisement');

    queryBuilder.leftJoinAndSelect('advertisement.locations', 'adPlace');

    if (state) {
      queryBuilder.andWhere('adPlace.state = :state', { state });
    }
    if (city) {
      queryBuilder.andWhere('adPlace.city = :city', { city });
    }
    if (transactionType) {
      queryBuilder.andWhere('advertisement.transactionType = :transactionType', { transactionType });
    }
    if (conservation) {
      queryBuilder.andWhere('advertisement.conservation = :conservation', { conservation });
    }
    if (maxPrice) {
      queryBuilder.andWhere('advertisement.value<= :maxPrice', { maxPrice });
    }

    return await queryBuilder.getMany();
  }
  
}



