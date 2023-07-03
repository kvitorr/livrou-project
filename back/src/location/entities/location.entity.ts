import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToMany, JoinTable } from 'typeorm';
import { AdPlace } from 'src/ad_place/entities/ad_place.entity';
import { Advertisement } from 'src/advertisement/entities/advertisement.entity';

@Entity({ name: 'location_table' })
@Index(['city', 'state'], { unique: true })
export class Location {
  @PrimaryGeneratedColumn()
  location_id: number;

  @Column()
  city: string;

  @Column({unique: true})
  state: string;

  @ManyToMany(() => Advertisement, ad => ad.locations)
  advertisements?: Advertisement[];

}
