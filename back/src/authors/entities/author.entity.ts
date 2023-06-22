import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Book } from 'src/books/entities/book.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  author_id: number;

  @Column({ nullable: false, unique: true})
  name: string;

  @ManyToMany(() => Book, book => book.authors)
  books?: Book[];
}
