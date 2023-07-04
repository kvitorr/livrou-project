import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateAdLikeDto } from './dto/create-like.dto';
import { UpdateAdLikeDto } from './dto/update-like.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Likes')
@Controller('bookreview/:bookReviewId/like')
export class LikesController {
  constructor(private readonly adLikesService: LikesService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Param('bookReviewId') bookReviewId: string,@Req() request: Request) {
    const user: User = request.user as User; 
    
    return this.adLikesService.create(user, bookReviewId);
  }

  @Get()
  findAll(@Param('bookReviewId') bookReviewId: string) {
    return this.adLikesService.findAll(bookReviewId);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('bookReviewId') id: string, @Req() request: Request) {
    const user: User = request.user as User;
    return this.adLikesService.findOne(Number(id),user);
  }

  @Patch()
  update() {
    return this.adLikesService.update();
  }

  @Delete()
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('bookReviewId') id: string, @Req() request: Request) {
    const user: User = request.user as User;
    return this.adLikesService.remove(Number(id),user);
  }
}
