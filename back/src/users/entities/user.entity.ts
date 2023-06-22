import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  user_id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  registration_date: Date;

  @Column()
  birth_date: Date;

  @Column()
  phone: number;

  @Column({ default: false })
  removed: boolean;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

}
