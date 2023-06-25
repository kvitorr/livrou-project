import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {

  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ){}
  
  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const { name } = createAuthorDto;
  
    const author: Author = this.authorRepository.create({
      name,
    });
  
    return this.authorRepository.save(author);
  }
  


  findAll() {
    return this.authorRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
