import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToMany } from 'typeorm';
import { AdPlace } from 'src/ad_place/entities/ad_place.entity';

@Entity({ name: 'location_table' })
@Index(['city', 'state'], { unique: true })
export class Location {
  @PrimaryGeneratedColumn()
  location_id: number;

  @Column()
  city: string;

  @Column()
  state: string;

  @ManyToMany(() => AdPlace, adPlace => adPlace.location)
  adPlaces?: AdPlace[];
}
