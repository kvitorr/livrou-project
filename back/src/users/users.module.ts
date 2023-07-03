import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from 'src/auth/strategies/jwt-strategy';
import { Advertisement } from 'src/advertisement/entities/advertisement.entity';
import { BookReview } from 'src/book-review/entities/book-review.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Advertisement, BookReview]),
    JwtModule.register({}),
  ],
  controllers: [UsersController],
  providers: [UsersService, AuthService, JwtStrategy],
})
export class UsersModule {}
