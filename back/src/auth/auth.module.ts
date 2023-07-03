import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt-strategy';
import { AuthController } from './auth.controller';
import { Advertisement } from 'src/advertisement/entities/advertisement.entity';
import { BookReview } from 'src/book-review/entities/book-review.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Advertisement, BookReview]),
    JwtModule.register({}),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, JwtStrategy],
})
export class AuthModule {}

