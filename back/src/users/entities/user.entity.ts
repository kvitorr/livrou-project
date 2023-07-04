import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'user_table' })
export class User {
  @PrimaryGeneratedColumn('increment')
  user_id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  registration_date: Date;

  @Column()
  birth_date: Date;

  @Column({nullable: true})
  phone: string;

  @Column({ default: false })
  removed: boolean;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({name: 'is_admin', default: false })
  isAdmin: boolean;

}
