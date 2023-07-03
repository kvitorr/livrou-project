import { Injectable, BadRequestException } from '@nestjs/common';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Advertisement } from './entities/advertisement.entity';
import { CreateAdvertisementDTO } from './dto/create-advertisement.dto';
import { UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Location } from 'src/location/entities/location.entity';
import { AdvertisementDetailsDto } from './dto/advertisement-details.dto';
import { ContatoDto } from './dto/contato.dto';
import { Pagination, IPaginationOptions,paginate } from 'nestjs-typeorm-paginate';
import { SelectQueryBuilder } from 'typeorm';
import { query } from 'express';



@Injectable()
export class AdvertisementService {

  constructor(
    @InjectRepository(Advertisement)
    private readonly advertisementRepository: Repository<Advertisement>,
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) { }

  async create(createAdvertisementDto: CreateAdvertisementDTO, user: User): Promise<Advertisement> {
    if(user.removed){
      throw new ForbiddenException();
    }

    if(!createAdvertisementDto.value && createAdvertisementDto.transactionTypeId !== 2){
      throw new BadRequestException('O parâmetro value é obrigatório e não pode ser nulo');
    }
    
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

  async paginate(queryBuilder: SelectQueryBuilder<Advertisement>, options: IPaginationOptions): Promise<Pagination<Advertisement>> {
    const paginatedResults = await paginate(queryBuilder, options);

    return paginatedResults;
  }

  async findAllPaginate(options: IPaginationOptions): Promise<Pagination<Advertisement>> {
    const queryBuilder = this.advertisementRepository.createQueryBuilder('advertisement');

    queryBuilder.where('advertisement.removed = :removed', { removed: false });

    const paginatedResults = await this.paginate(queryBuilder, options);

    return paginatedResults;
  }




  async findOne(id: number): Promise<Advertisement> {
    return await this.advertisementRepository.findOneBy({ advertisement_id: id });

  }

  async getAdvertisementDetails(id: number): Promise<AdvertisementDetailsDto> {


    const advertisement: Advertisement = await this.advertisementRepository
      .createQueryBuilder('advertisement')
      .leftJoinAndSelect('advertisement.transactionType', 'transactionType') // Carrega os dados do tipo de anúncio
      .leftJoinAndSelect('advertisement.conservation', 'conservation') // Carrega os dados da conservação
      .leftJoinAndSelect('advertisement.locations', 'adPlace')
      .leftJoinAndSelect('advertisement.book', 'book') // Carrega os dados do livro
      .leftJoinAndSelect('book.authors', 'author') // Carrega os dados dos autores do livro
      .leftJoinAndSelect('advertisement.user', 'user_table') // Carrega os dados do anunciante
      .where('advertisement.advertisement_id = :id', { id })
      .andWhere('advertisement.completionDate IS NULL') 
      .andWhere('advertisement.removed = false') 
      .getOne();

    if (!advertisement) {
      // Trata o caso em que o anúncio não é encontrado
      throw new Error(`Advertisement with ID ${id} not found`);
    }

    const advertisementDetails: AdvertisementDetailsDto = {
      advertisementId: advertisement.advertisement_id,
      description: advertisement.description,
      advertisementType: advertisement.transactionType.transactionType,
      condition: advertisement.conservation.conservationState,
      locations: advertisement.locations ? advertisement.locations.map(location => `${location.city}, ${location.state}`) : [],
      bookId: advertisement.book.book_id,
      bookTitle: advertisement.book.title,
      authors: advertisement.book.authors.map(author => author.name),
      synopsis: advertisement.book.synopsis,
      bookImageUrl: advertisement.book.imageUrl,
      price: advertisement.value || null,
      advertiserImageUrl: advertisement.book.imageUrl || null,
      advertiserName: advertisement.user.name,
      accountCreationDate: advertisement.user.registration_date,
      contactNumber: advertisement.user.phone,
    };

    return advertisementDetails;

  }

  async getContactNumber(id: number): Promise<ContatoDto> {


    const advertisement: Advertisement = await this.advertisementRepository
      .createQueryBuilder('advertisement')
      .leftJoinAndSelect('advertisement.user', 'user_table') // Carrega os dados do anunciante
      .where('advertisement.advertisement_id = :id', { id })
      .getOne();

    if (!advertisement) {
      // Trata o caso em que o anúncio não é encontrado
      throw new Error(`Advertisement with ID ${id} not found`);
    }

    
    const advertisementContact: ContatoDto = {
      contactNumber: advertisement.user.phone,
    };

    return advertisementContact;

  }



  async findOneValid(id: number): Promise<Advertisement> {
    const ads: Advertisement = await this.advertisementRepository.findOne({ where: { advertisement_id: id, removed: false } });
    if (!ads) {
      throw new ForbiddenException()
    }

    return ads;
  }

  async update(id: number, updateAdvertisementDto: UpdateAdvertisementDto, userReq: User): Promise<Advertisement> {
    const advertisement: Advertisement = await this.findOne(id);

    if (!advertisement) {
      throw new NotFoundException();
    }
    updateAdvertisementDto.userId = advertisement.userId;
    updateAdvertisementDto.postingDate = advertisement.postingDate;

    if(userReq.removed){
      throw new ForbiddenException();
    }
    if (!userReq.isAdmin) {
      if (advertisement.userId === userReq.user_id) {
        updateAdvertisementDto.removed = advertisement.removed;
      } else {
        throw new ForbiddenException();
      }
    }

    return this.advertisementRepository.save(updateAdvertisementDto);
  }

  async markAsDone(id: number, userReq: User): Promise<Advertisement> {
    const advertisement: Advertisement = await this.findOne(id);
    if (!advertisement) {
      throw new NotFoundException();
    }

    if(userReq.removed){
      throw new ForbiddenException();
    }
    if (!userReq.isAdmin) {
      if (advertisement.userId !== userReq.user_id) {
        throw new ForbiddenException();
      }
    }

    advertisement.completionDate = new Date();

    return this.advertisementRepository.save(advertisement);
  }

  async remove(id: number, user: User) {

    const advertisement: Advertisement = await this.findOne(id);
    if (!advertisement) {
      throw new NotFoundException();
    }

    if(user.removed){
      throw new ForbiddenException();
    }
    if (!user.isAdmin) {
      if (advertisement.userId !== user.user_id) {
        throw new UnauthorizedException();
      }
    }

    advertisement.removed = true;
    return this.advertisementRepository.save(advertisement);
  }


  async findAdvertisementsByFilter(filter: {
    state?: string;
    city?: string;
    transactionType?: string;
    conservation?: string;
    maxPrice?: number;
  }, options: IPaginationOptions): Promise<Pagination<Advertisement>> {
    const { state, city, transactionType, conservation, maxPrice } = filter;
  
    const queryBuilder = this.advertisementRepository.createQueryBuilder('advertisement');
  
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
      queryBuilder.andWhere('advertisement.value <= :maxPrice', { maxPrice });
    }
  
    queryBuilder.andWhere('advertisement.completionDate IS NULL');
    queryBuilder.andWhere('advertisement.removed = false');

  
    return await this.paginate(queryBuilder, options);
  }
  

}



