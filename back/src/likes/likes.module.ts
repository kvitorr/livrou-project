import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Like } from './entities/like.entity';
import { BookReview } from 'src/book-review/entities/book-review.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, BookReview, Like]),
  ],
  controllers: [LikesController],
  providers: [LikesService]
})
export class LikesModule {}
