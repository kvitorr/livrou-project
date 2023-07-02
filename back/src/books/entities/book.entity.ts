import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Author } from 'src/authors/entities/author.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  book_id: number;

  @Column({ type: 'text' })
  synopsis: string;

  @Column({ length: 255, nullable: false })
  title: string;

  @Column({type: 'int', nullable: true, name: 'edition_count'})
  editionCount: number;

  @Column({nullable: true, name: 'publish_year'})
  publishYear: number;

  @Column({name: 'image-url',nullable: true})
  imageUrl: string;

  @ManyToMany(() => Author, author => author.books)
  @JoinTable({
    name: 'author_book',
    joinColumn: {
      name: 'book_id',
      referencedColumnName: 'book_id',
    },
    inverseJoinColumn: {
      name: 'author_id',
      referencedColumnName: 'author_id',
    },
  })
  authors?: Author[];
}
