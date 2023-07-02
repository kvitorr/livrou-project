import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...userData } = createUserDto;
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
    if(user.isAdmin || user.user_id == id){
      return await this.userRepository.findOneBy({user_id: id}) ; 
    }

    throw new UnauthorizedException();

  }

  async update(idUserUpdated: number, updateUserDto: UpdateUserDto, userReq: User) {
   
    const userUpdated: User = await this.findOne(idUserUpdated, userReq);

    updateUserDto.user_id = idUserUpdated;

    if(userReq.user_id == userUpdated.user_id){
        if(userUpdated.removed){
          throw new UnauthorizedException();
        }
        updateUserDto.isAdmin = userUpdated.isAdmin;
        updateUserDto.removed = false;

    }else{
      console.log(userReq)
      if(!userReq.isAdmin){
        throw new UnauthorizedException();
      }
      if(userUpdated.isAdmin){
        updateUserDto.isAdmin = true;
        updateUserDto.removed = false;
      }
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
