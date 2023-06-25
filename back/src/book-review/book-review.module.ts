import { Module } from '@nestjs/common';
import { BookReviewService } from './book-review.service';
import { BookReviewController } from './book-review.controller';
import { BookReview } from './entities/book-review.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from 'src/books/books.module';
import { Book } from 'src/books/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookReview, Book]),
  ],
  controllers: [BookReviewController],
  providers: [BookReviewService],
})
export class BookReviewModule {}
