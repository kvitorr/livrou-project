import { Injectable, MethodNotAllowedException } from '@nestjs/common';
import { CreateAuthorBookDto } from './dto/create-author-book.dto';
import { UpdateAuthorBookDto } from './dto/update-author-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorBook } from './entities/author-book.entity';

@Injectable()
export class AuthorBookService {
  constructor(
    @InjectRepository(AuthorBook)
    private readonly authorBookRepository: Repository<AuthorBook>,
  ) {}

  async create(createAuthorBookDto: CreateAuthorBookDto): Promise<AuthorBook> {
    throw new MethodNotAllowedException();

  }

  async findAll(): Promise<AuthorBook[]> {
    return this.authorBookRepository.find();
  }

  async findOne(id: number): Promise<AuthorBook> {
    throw new MethodNotAllowedException();
  }

  async update(
    id: number,
    updateAuthorBookDto: UpdateAuthorBookDto,
  ): Promise<AuthorBook> {
    throw new MethodNotAllowedException();
  }

  async remove(id: number): Promise<boolean> {
    throw new MethodNotAllowedException();
  }
}
