import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookReviewDto } from './dto/create-book-review.dto';
import { UpdateBookReviewDto } from './dto/update-book-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BookReview } from './entities/book-review.entity';
import { Repository } from 'typeorm';
import { Book } from 'src/books/entities/book.entity';
import { BooksService } from 'src/books/books.service';
import { Author } from 'src/authors/entities/author.entity';

@Injectable()
export class BookReviewService {
  constructor(
    @InjectRepository(BookReview)
    private readonly bookReviewRepository: Repository<BookReview>,
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async create(
    createBookReviewDto: CreateBookReviewDto,
    bookId: string,
    userId: number,
  ) {
    createBookReviewDto.userId = userId;
    createBookReviewDto.bookId = Number(bookId);
  
    const bookReview = this.bookReviewRepository.create(createBookReviewDto);
    return this.bookReviewRepository.save(bookReview);
  }
  

  async findAll(bookId: string) {
    const book: Book = await this.bookRepository.findOneBy({book_id: Number(bookId)});

    if(!book){
      throw new NotFoundException('Livro não existe!');
    }
    return this.bookReviewRepository.findBy({ bookId: Number(bookId) });
  }

  findOne(id: number) {
    return `This action returns a #${id} bookReview`;
  }

  update(id: number, updateBookReviewDto: UpdateBookReviewDto) {
    return `This action updates a #${id} bookReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookReview`;
  }
}
