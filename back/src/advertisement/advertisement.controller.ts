import { Query, Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException, Options } from '@nestjs/common';
import { AdvertisementService } from './advertisement.service';
import { CreateAdvertisementDTO } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards, Req } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { Request } from 'express';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { Advertisement } from './entities/advertisement.entity';
import {ApiBody, ApiTags , ApiParam,ApiResponse , ApiBearerAuth, ApiHeader} from '@nestjs/swagger';

@ApiTags('advertisement')
@Controller('advertisement')
export class AdvertisementController {
  constructor(private readonly advertisementService: AdvertisementService) { }

  @Post()
  @UseGuards(AuthGuard('jwt')) // Decorator responsável pelo Guard
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Cria um anúncio' })
  create(@Body() createAdvertisementDto: CreateAdvertisementDTO, @Req() request: Request) {
    const user: User = request.user as User;
    createAdvertisementDto.userId = user.user_id;

    return this.advertisementService.create(createAdvertisementDto, user);
  }


  @Get()
  async findValidAdvertisements(
    @Query('page') page = 1,
    @Query('limit') limit = 20,
  ): Promise<Pagination<Advertisement>> {
    limit = Math.min(20, limit);

    const options: IPaginationOptions = {
      page,
      limit,
      route: 'advertisements',
    };

    return this.advertisementService.findAllPaginate(options);
  }


  @Get('filter')
  findAdvertisements(
    @Query('state') state?: string,
    @Query('city') city?: string,
    @Query('type') transactionType?: string,
    @Query('conservation') conservation?: string,
    @Query('maxPrice') maxPrice?: string,
    @Query('page') page = 1,
    @Query('limit') limit = 20,
  ): Promise<Pagination<Advertisement>> {

    limit = Math.min(20, limit);

    const options: IPaginationOptions = {
      page,
      limit,
      route: 'advertisements',
    };

    const parsedMaxPrice = maxPrice ? parseFloat(maxPrice) : undefined;
    if (isNaN(parsedMaxPrice)) {
      return this.advertisementService.findAdvertisementsByFilter({
        state,
        city,
        transactionType: transactionType,
        conservation: conservation,
      }, options);
    }

    return this.advertisementService.findAdvertisementsByFilter({
      state,
      city,
      transactionType: transactionType,
      conservation: conservation,
      maxPrice: parsedMaxPrice,
    }, options);
  }

  @Get(':id')
  async findOneValid(
    @Param('id') id: string
  ) {
    return this.advertisementService.findOneValid(+id);

  }



  @Get(':id/details')
  async findOneComplete(
    @Param('id') id: string
  ) {
    return this.advertisementService.getAdvertisementDetails(+id);

  }



  @Get(':id/contact')
  @UseGuards(AuthGuard('jwt')) // Decorator responsável pelo Guard
  async findContact(
    @Param('id') id: string
  ) {
    return this.advertisementService.getContactNumber(+id);

  }


  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(
    @Param('id') id: string,
    @Body() updateAdvertisementDto: UpdateAdvertisementDto,
    @Req() request: Request
  ) {
    const user: User = request.user as User;
    return this.advertisementService.update(+id, updateAdvertisementDto, user);

  }


  @Patch(':id/complete')
  @UseGuards(AuthGuard('jwt'))
  async markAsDone(
    @Param('id') id: string,
    @Req() request: Request
  ) {
    const user: User = request.user as User;
    return this.advertisementService.markAsDone(+id, user);

  }





}
