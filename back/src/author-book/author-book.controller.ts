
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorBookService } from './author-book.service';
import { CreateAuthorBookDto } from './dto/create-author-book.dto';
import { UpdateAuthorBookDto } from './dto/update-author-book.dto';

@Controller('author-book')
export class AuthorBookController {
  constructor(private readonly authorBookService: AuthorBookService) {}

  @Post()
  create(@Body() createAuthorBookDto: CreateAuthorBookDto) {
    return this.authorBookService.create(createAuthorBookDto);
  }

  @Get()
  findAll() {
    return this.authorBookService.findAll();
  }

}
