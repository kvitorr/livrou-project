import { Module } from '@nestjs/common';
import { AuthorBookService } from './author-book.service';
import { AuthorBookController } from './author-book.controller';
import { AuthorBook } from './entities/author-book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthorBook]),
  ],
  controllers: [AuthorBookController],
  providers: [AuthorBookService]
})
export class AuthorBookModule {}
