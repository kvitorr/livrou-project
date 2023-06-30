import { Entity, ManyToOne, JoinColumn, PrimaryColumn} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { BookReview } from 'src/book-review/entities/book-review.entity';
import { Book } from 'src/books/entities/book.entity';

@Entity({ name: 'like' })
export class Like {
  @PrimaryColumn({ primary: true , name: 'book_review_id'})
  bookReviewId: number;

  @PrimaryColumn({ primary: true , name: 'user_id'})
  userId: number;

  @ManyToOne(() => BookReview, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'bookReviewId' })
  bookReview: BookReview;
  
  @ManyToOne(() => User, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'userId' })
  user: User;
  
}

