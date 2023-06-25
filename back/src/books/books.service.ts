import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { Author } from 'src/authors/entities/author.entity';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

 
  async create(createBookDto: CreateBookDto): Promise<Book> {
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

  findOne(id: number){
    this.bookRepository.findOneBy
    return 'a'
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
