import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { AuthorBookModule } from './author-book/author-book.module';
import { APP_FILTER } from '@nestjs/core';
import { ErrorMiddleware } from './middleware/logger.middleware';
import { AdvertisementModule } from './advertisement/advertisement.module';
import { AdPlaceModule } from './ad_place/ad_place.module';
import { ConservationModule } from './conservation/conservation.module';
import { TransactionTypeModule } from './transaction-type/transaction-type.module';
import { BookReviewModule } from './book-review/book-review.module';
import { LocationModule } from './location/location.module';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsersModule,
    AuthModule,
    BooksModule,
    AuthorsModule,
    AuthorBookModule,
    AdvertisementModule,
    AdPlaceModule,
    LocationModule,
    ConservationModule,
    TransactionTypeModule,
    BookReviewModule,
    LikesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: ErrorMiddleware,
    },
  ],
})
export class AppModule { }