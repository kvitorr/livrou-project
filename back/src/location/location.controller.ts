import { Query, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { Location } from './entities/location.entity';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.create(createLocationDto);
  }

  @Get()
  findAll() {
    return this.locationService.findAllStates();
  }

  @Get('states/:stateName')
  findAllCitysByStateName(@Param('stateName') stateName: string,
   @Query('page') page = 1,
  @Query('limit') limit = 20,
): Promise<Pagination<Location>> {
  limit = Math.min(20, limit)

    const options: IPaginationOptions = {
      page,
      limit,
      route: `location/states/${stateName}/advertisements`,
    };

    return this.locationService.findAllCitiesByStateName(stateName, options);
  }

  @Get('states')
  findAllStates() {
    return this.locationService.findAllStates();

  }
}
