import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConservationService } from './conservation.service';
import { CreateConservationDto } from './dto/create-conservation.dto';
import { UpdateConservationDto } from './dto/update-conservation.dto';

@Controller('conservation')
export class ConservationController {
  constructor(private readonly conservationService: ConservationService) {}
/*
  @Post()
  create(@Body() createConservationDto: CreateConservationDto) {
    return this.conservationService.create(createConservationDto);
  }

  @Get()
  findAll() {
    return this.conservationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conservationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConservationDto: UpdateConservationDto) {
    return this.conservationService.update(+id, updateConservationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conservationService.remove(+id);
  }*/
}
