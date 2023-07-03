import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Location } from './entities/location.entity';
import { Pagination, IPaginationOptions,paginate } from 'nestjs-typeorm-paginate';



@Injectable()
export class LocationService {

  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ){}
  

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    const location: Location = plainToClass(Location, createLocationDto);
    return this.locationRepository.save(location);
  }
  
  async findAllStates(): Promise<Location[]> {
    const query = this.locationRepository.createQueryBuilder('location_table').select('DISTINCT location_table.state', 'state');
  
    const result = await query.getRawMany();
  
    return result;
  }
  
  
  async findAllCitiesByStateName(state: string, options: IPaginationOptions): Promise<Pagination<Location>> {
    console.log(state)
    const queryBuilder = this.locationRepository.createQueryBuilder('location_table')
      .where('location_table.state ilike :state', { state: '%' + state + '%' });

      const result = await queryBuilder.getRawMany();

    const paginatedResults = await paginate(queryBuilder, options);
    
    return paginatedResults;
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
