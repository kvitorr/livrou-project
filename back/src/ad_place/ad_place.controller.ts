import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdPlaceService } from './ad_place.service';
import { CreateAdPlaceDto } from './dto/create-ad_place.dto';
import { UpdateAdPlaceDto } from './dto/update-ad_place.dto';

@Controller('ad-place')
export class AdPlaceController {
  constructor(private readonly adPlaceService: AdPlaceService) {}

  @Post()
  create(@Body() createAdPlaceDto: CreateAdPlaceDto) {
    return this.adPlaceService.create(createAdPlaceDto);
  }

  @Get()
  findAll() {
    return this.adPlaceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adPlaceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdPlaceDto: UpdateAdPlaceDto) {
    return this.adPlaceService.update(+id, updateAdPlaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adPlaceService.remove(+id);
  }
}
