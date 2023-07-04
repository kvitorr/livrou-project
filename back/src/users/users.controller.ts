import {Query, Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { Advertisement } from 'src/advertisement/entities/advertisement.entity';
import { BookReview } from 'src/book-review/entities/book-review.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<Partial<CreateUserDto>> {
    const user: User = await this.usersService.create(createUserDto);
    const safeResponse: Partial<CreateUserDto> = {
      user_id: user.user_id,
    };
    return safeResponse;
  }
  

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Req() request: Request) {
    const user: User = request.user as User;
    return this.usersService.findAll(user);
  }
  
  @Get(':id/ads')
  @UseGuards(AuthGuard('jwt'))
  findAdsByUserId(@Param('id') id: string, @Req() request: Request,
  @Query('page') page = 1,
  @Query('limit') limit = 20): Promise<Pagination<Advertisement>> {
    limit = Math.min(20, limit);

    const options: IPaginationOptions = {
      page,
      limit,
    };
    const user: User = request.user as User;
    return this.usersService.findAdsByUserIdPaginate(+id,user, options);
  }


  @Get(':id/book-reviews')
  @UseGuards(AuthGuard('jwt'))
  findBookReviewsByUserId(@Param('id') id: string, @Req() request: Request,
  @Query('page') page = 1,
  @Query('limit') limit = 20): Promise<Pagination<BookReview>> {
    limit = Math.min(20, limit);

    const options: IPaginationOptions = {
      page,
      limit,
      route: 'advertisements',
    };
    const user: User = request.user as User;
    return this.usersService.findBookReviewByUserIdPaginate(+id,user, options);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string, @Req() request: Request) {
    const user: User = request.user as User;
    return this.usersService.findOne(+id,user);
  }

 
  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Req() request: Request) {
    const user: User = request.user as User;
    return this.usersService.update(+id, updateUserDto, user);
  }

  /*@Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }*/
}
