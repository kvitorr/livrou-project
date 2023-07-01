import { Query, Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException } from '@nestjs/common';
import { AdvertisementService } from './advertisement.service';
import { CreateAdvertisementDTO } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards, Req } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { Request } from 'express';

@Controller('advertisement')
export class AdvertisementController {
  constructor(private readonly advertisementService: AdvertisementService) { }

  @Post()
  @UseGuards(AuthGuard('jwt')) // Decorator responsável pelo Guard
  create(@Body() createAdvertisementDto: CreateAdvertisementDTO, @Req() request: Request) {
    const user: User = request.user as User;
    createAdvertisementDto.userId = user.user_id;

    return this.advertisementService.create(createAdvertisementDto);
  }

  @Get()
  findValidAdvertisements() {
    return this.advertisementService.findValidAdvertisements();
  }

  

  @Get('filter')
  findAdvertisements(
    @Query('state') state?: string,
    @Query('city') city?: string,
    @Query('type') transactionType?: string,
    @Query('conservation') conservation?: string,
    @Query('maxPrice') maxPrice?: string,
  ) {
    console.log('Rota /advertisement/filter foi chamada');
    console.log('Parâmetros:', { state, city, saleType: transactionType, condition: conservation, maxPrice });
  
    const parsedMaxPrice = maxPrice ? parseFloat(maxPrice) : undefined;
    if (isNaN(parsedMaxPrice)) {
      return this.advertisementService.findAdvertisementsByFilter({
        state,
        city,
        transactionType: transactionType,
        conservation: conservation,
      });
    }
  
    return this.advertisementService.findAdvertisementsByFilter({
      state,
      city,
      transactionType: transactionType,
      conservation: conservation,
      maxPrice: parsedMaxPrice,
    });
  }

  @Get(':id')
  async findOneValid(
    @Param('id') id: string
  ) {
      return this.advertisementService.findOneValid(+id);

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


  @Delete(':id')
  @UseGuards(AuthGuard('jwt')) // Decorator responsável pelo Guard
  async remove ( @Param('id') id: string,@Req() request: Request) {
    const user: User = request.user as User;
    return this.advertisementService.remove(+id, user);
  }

  
  
  
  
}
