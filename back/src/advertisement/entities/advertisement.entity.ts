import { JoinTable, Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Book } from 'src/books/entities/book.entity';
import { User } from 'src/users/entities/user.entity';
import { TransactionType } from 'src/transaction-type/entities/transaction-type.entity';
import { AdPlace } from 'src/ad_place/entities/ad_place.entity';
import { Conservation } from 'src/conservation/entities/conservation.entity';
import { Location } from 'src/location/entities/location.entity';

@Entity({ name: 'advertisement' })
export class Advertisement {
  @PrimaryGeneratedColumn({ name: 'advertisement_id' })
  advertisement_id: number;

  @Column({ name: 'book_id' })
  bookId: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'conservation_id' })
  conservationId: number;

  @Column({ name: 'value', type: 'real'})
  value: number; 

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'posting_date', default: () => 'CURRENT_TIMESTAMP' })
  postingDate: Date;

  @Column({ name: 'completion_date', nullable: true })
  completionDate: Date | null;

  @Column({ name: 'transaction_type_id' })
  transactionTypeId: number;

  @Column({ name: 'removed', default: false })
  removed: boolean;

  @ManyToOne(() => Book, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'book_id' })
  book: Book;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => TransactionType)
  @JoinColumn({ name: 'transaction_type_id' })
  transactionType: TransactionType;

  @ManyToOne(() => Conservation)
  @JoinColumn({ name: 'conservation_id' })
  conservation: Conservation;


  @ManyToMany(() => Location, location => location.adPlaces)
  @JoinTable({
    name: 'ad_place',
    joinColumn: {
      name: 'advertisement_id',
      referencedColumnName: 'advertisement_id',
    },
    inverseJoinColumn: {
      name: 'location_id',
      referencedColumnName: 'location_id',
    },
  })
  locations?: Location[];
}
