import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { BookReviewService } from './book-review.service';
import { UpdateBookReviewDto } from './dto/update-book-review.dto';
import { CreateBookReviewDto } from './dto/create-book-review.dto';
import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('books/:bookId/book-review')
export class BookReviewController {
  constructor(private readonly bookReviewService: BookReviewService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Param('bookId') bookId: string, @Body() createBookReviewDto: CreateBookReviewDto,
  @Req() request: Request) {
    const user: User = request.user as User;
    return this.bookReviewService.create(createBookReviewDto, bookId, user.user_id);
  }

  @Get()
  findAll(@Param('bookId') bookId: string){
    return this.bookReviewService.findAll(bookId);
  }


}
