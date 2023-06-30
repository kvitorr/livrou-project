import { Injectable, NotFoundException, MethodNotAllowedException } from '@nestjs/common';
import { UpdateAdLikeDto } from './dto/update-like.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';
import { DeepPartial, Repository } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/entities/user.entity';
import { BookReview } from 'src/book-review/entities/book-review.entity';

@Injectable()
export class LikesService {

  constructor(
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(BookReview)
    private readonly bookReviewRepository: Repository<BookReview>,
  ){

  }
  async create(userId: number, advertisement_id: string) {
    const user: User = await this.userRepository.findOne({ where: { user_id: userId } });
  
    if (!user) {
      throw new NotFoundException();
    }
  
    const bookReview: BookReview = await this.bookReviewRepository.findOne({ where: { bookReviewId: Number(advertisement_id) } });
  
    if (!bookReview) {
      throw new NotFoundException('BookReview');
    }
  
    const createAdLikeDto: DeepPartial<Like> = {
      bookReviewId: bookReview.bookReviewId,
      userId: user.user_id,
    };
  
    const adLike = this.likeRepository.create(createAdLikeDto);
    return this.likeRepository.save(adLike);
  }
  
  

  async findAll(bookReviewId: string) {
    const bookReview: BookReview = await this.bookReviewRepository.findOne({ where: { bookReviewId: Number(bookReviewId) } });
  
    if (!bookReview) {
      throw new NotFoundException('Avaliacao');
    }
  
    return this.likeRepository.find({ where: { bookReviewId: Number(bookReviewId) } });
  }

  async findOne(bookReviewId: number, userId: number) {
    return await this.likeRepository.findOne({ where: { bookReviewId, userId } });
  }

  update() {
    throw new MethodNotAllowedException();
  }

  async remove(bookReviewId: number, userId: number) {
    const like: Like = await this.likeRepository.findOne({ where: { bookReviewId, userId } });

    if (!like) {
      throw new NotFoundException('Like não encontrado');
    }

    await this.likeRepository.remove(like);
  }
}
