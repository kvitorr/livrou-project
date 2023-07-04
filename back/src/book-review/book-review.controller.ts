import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards,   Query} from '@nestjs/common';
import { BookReviewService } from './book-review.service';
import { UpdateBookReviewDto } from './dto/update-book-review.dto';
import { CreateBookReviewDto } from './dto/create-book-review.dto';
import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import{IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { BookReview } from './entities/book-review.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Book review')
@Controller('books/:bookId/book-review')
export class BookReviewController {
  constructor(private readonly bookReviewService: BookReviewService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Param('bookId') bookId: string, @Body() createBookReviewDto: CreateBookReviewDto,
  @Req() request: Request) {
    const user: User = request.user as User;
    return this.bookReviewService.create(createBookReviewDto, bookId, user);
  }

  @Get()
  async findAll(@Param('bookId') bookId: string,
    @Query('page') page = 1,
    @Query('limit') limit = 3,
  ): Promise<Pagination<BookReview>> {
    limit = Math.min(3, limit); // Defina um limite máximo para a quantidade de itens por página

    const options: IPaginationOptions = {
      page,
      limit,
    };

    return this.bookReviewService.paginate(options, bookId);
  }


  
}
