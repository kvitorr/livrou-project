import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'transaction_type' })
export class TransactionType {
  @PrimaryColumn({ name: 'transaction_type_id' })
  transactionTypeId: number;

  @Column({ name: 'transaction_type' })
  transactionType: string;
}
