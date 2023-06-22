import { Injectable } from '@nestjs/common';
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

  findAll() {
    return this.userRepository.find()   
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({user_id: id}) ; 
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.delete(id);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  findOneByEmail(username: string) {
    return this.userRepository.findOneBy({ email: username });
  }
}
