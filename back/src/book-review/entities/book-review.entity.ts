import { Book } from "src/books/entities/book.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany } from "typeorm";

@Entity({name: 'book_review'})
export class BookReview {
    @PrimaryGeneratedColumn({ name: 'book_review_id' })
    bookReviewId: number;

    @Column({ nullable: true})
    title: string;

    @Column({ name: 'book_id' })
    bookId: number;
  
    @Column({ name: 'user_id' })
    userId: number;

    @Column({ name: 'content', nullable: false})
    content: string;

    @Column({name: 'amount_likes', default: 0})
    amountLikes: number;

    @Column({ name: 'removed', default: false })
    removed: boolean;

    @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @ManyToOne(() => Book, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'book_id' })
    book: Book;

    @ManyToOne(() => User, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'user_id' })
    user: User;
}


/*
book_review_id
book_id
user_id
content
amount_likes
removed
created_at




*/