import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookReviewDto } from './dto/create-book-review.dto';
import { UpdateBookReviewDto } from './dto/update-book-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BookReview } from './entities/book-review.entity';
import { Repository } from 'typeorm';
import { Book } from 'src/books/entities/book.entity';
import{IPaginationOptions, Pagination, paginate} from 'nestjs-typeorm-paginate';
import { User } from 'src/users/entities/user.entity';


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
    user: User  ) {

    if(user.removed){
      throw new ForbiddenException();
    }
    createBookReviewDto.userId = user.user_id;
    createBookReviewDto.bookId = Number(bookId);
  
    const bookReview = this.bookReviewRepository.create(createBookReviewDto);
    return this.bookReviewRepository.save(bookReview);
  }

  async paginate(options: IPaginationOptions, bookId: string): Promise<Pagination<BookReview>> {
    const queryBuilder = this.bookReviewRepository.createQueryBuilder('book_review');

    queryBuilder.where('book_review.book_id = :book_id', { book_id: Number(bookId) });

    const paginatedResults = await paginate(queryBuilder, options);

    return paginatedResults;
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
