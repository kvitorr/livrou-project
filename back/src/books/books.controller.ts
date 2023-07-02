import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards, Req, Query} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';
import { Book } from './entities/book.entity';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';




@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createBookDto: CreateBookDto, @Req() request: Request) {
    const user: User = request.user as User;
    return this.booksService.create(createBookDto, user);
  }

  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 20,
  ): Promise<Pagination<Book>> {
    limit = Math.min(20, limit); // Defina um limite máximo para a quantidade de itens por página

    const options: IPaginationOptions = {
      page,
      limit,
      route: 'books', // Rota base para os links de paginação (opcional)
    };

    return this.booksService.paginate(options);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }
  
  /*
  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto, @Req() request: Request) {
    const user: User = request.user as User;
    return this.booksService.update(+id, updateBookDto, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string, @Req() request: Request) {
    const user: User = request.user as User;
    return this.booksService.remove(+id, user);
  }*/
}
