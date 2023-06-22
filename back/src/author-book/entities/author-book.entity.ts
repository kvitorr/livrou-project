import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Book } from 'src/books/entities/book.entity';
import { Author } from 'src/authors/entities/author.entity';

@Entity()
export class AuthorBook {
  @PrimaryColumn({ name: 'author_id' })
  authorId: number;

  @PrimaryColumn({ name: 'book_id' })
  bookId: number;

  @ManyToOne(() => Author, author => author.books)
  @JoinColumn({ name: 'author_id' })
  author: Author[];

  @ManyToOne(() => Book, book => book.authors)
  @JoinColumn({ name: 'book_id' })
  book: Book[];
}
