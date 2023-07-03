import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { Advertisement } from 'src/advertisement/entities/advertisement.entity';
import { Pagination, IPaginationOptions,paginate } from 'nestjs-typeorm-paginate';
import { query } from 'express';
import { BookReview } from 'src/book-review/entities/book-review.entity';
import { Book } from 'src/books/entities/book.entity';


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Advertisement)
    private advertisementRepository: Repository<Advertisement>,
    @InjectRepository(BookReview)
    private bookReviewRepository: Repository<BookReview>,
  ){}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...userData } = createUserDto;
    userData.removed = false;
    const hashedSenha: string = bcrypt.hashSync(password, 10);
    const user: User = this.userRepository.create({ ...userData, password: hashedSenha });
    return this.userRepository.save(user);
  }

  findAll(user: User) {
    if(user.isAdmin){
      return this.userRepository.find()   
    }
    throw new UnauthorizedException();
  }

  async findOne(id: number, user: User) {
    console.log(user)
    if(user.isAdmin || user.user_id == id){
      return await this.userRepository.findOneBy({user_id: id}) ; 
    }

    throw new UnauthorizedException();

  }

  async findAdsByUserIdPaginate(id: number, user: User,options: IPaginationOptions): Promise<Pagination<Advertisement>> {
    if(user.removed){
      throw new ForbiddenException();
    }

    if(user.isAdmin || user.user_id == id){
      const queryBuilder = this.advertisementRepository.createQueryBuilder('advertisement');

      queryBuilder.where('advertisement.removed = :removed', { removed: false });
      queryBuilder.andWhere('user_id = :id', {id: id})
  
      return await paginate(queryBuilder, options);

    }

    throw new ForbiddenException();

  }

  async findBookReviewByUserIdPaginate(id: number, user: User,options: IPaginationOptions): Promise<Pagination<BookReview>> {
    if(user.removed){
      throw new ForbiddenException();
    }
    if(user.isAdmin || user.user_id == id){
      const queryBuilder = this.bookReviewRepository.createQueryBuilder('bookReview');

      queryBuilder.where('removed = :removed', { removed: false });
      queryBuilder.andWhere('user_id = :id', {id: id})
  
      return await paginate(queryBuilder, options);

    }

    throw new ForbiddenException();

  }

   

  async update(idUserUpdated: number, updateUserDto: UpdateUserDto, userReq: User) {
   
    const userUpdated: User = await this.findOne(idUserUpdated, userReq);

    updateUserDto.user_id = idUserUpdated;

    if(userReq.user_id == userUpdated.user_id){
        if(userReq.removed){
          throw new ForbiddenException();
        }
        updateUserDto.isAdmin = userUpdated.isAdmin;
        updateUserDto.removed = false;
    }else{
      console.log(userReq)
      if(!userReq.isAdmin){
        throw new ForbiddenException();
      }
      if(userUpdated.isAdmin){
        updateUserDto.isAdmin = true;
        updateUserDto.removed = false;
      }
    }

    if(updateUserDto.removed){
      await this.advertisementRepository
      .createQueryBuilder('advertisement')
      .update(Advertisement)
      .set({ removed: true })
      .where('advertisement.removed = :removed', { removed: false })
      .andWhere('advertisement.user_id = :userId', { userId: updateUserDto.user_id })
      .execute();

      await this.bookReviewRepository
      .createQueryBuilder('book_review')
      .update(BookReview)
      .set({ removed: true })
      .where('book_review.removed = :removed', { removed: false })
      .andWhere('book_review.user_id = :userId', { userId: updateUserDto.user_id })
      .execute();
      }



    return this.userRepository.save(updateUserDto);

  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  findOneByEmail(username: string) {
    return this.userRepository.findOneBy({ email: username });
  }
}
