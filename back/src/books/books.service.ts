import { Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { Author } from 'src/authors/entities/author.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

 
  async create(createBookDto: CreateBookDto, user: User): Promise<Book> {
    if(!user.isAdmin){
      throw new UnauthorizedException();
    }

    const { authorNames, ...bookData } = createBookDto;
  
    const book = this.bookRepository.create(bookData);
  
    const authors = [];
    for (const authorName of authorNames) {
      let author = await this.authorRepository.findOne({ where: { name: authorName } });
  
      if (!author) {
        author = this.authorRepository.create({ name: authorName });
        await this.authorRepository.save(author);
      }
  
      authors.push(author);
    }
  
    book.authors = authors;
    return this.bookRepository.save(book);
  }
  

  findAll() {
    return this.bookRepository.find();
  }

  async findOne(id: number): Promise<Book>{
    return await this.bookRepository.findOneBy({ book_id: id })
  }

  update(id: number, updateBookDto: UpdateBookDto, user: User) {
    if(!user.isAdmin){
      throw new UnauthorizedException();
    }
    return `This action updates a #${id} book`;
  }

  remove(id: number, user: User) {
    if(!user.isAdmin){
      throw new UnauthorizedException();
    }
    return `This action removes a #${id} book`;
  }
}
