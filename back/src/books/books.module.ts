import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Book } from './entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from 'src/authors/entities/author.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Book, Author])], // Importa o repositório BookRepository
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService]
})
export class BooksModule {}
