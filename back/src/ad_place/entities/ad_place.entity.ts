import { Advertisement } from 'src/advertisement/entities/advertisement.entity';
import { Location } from 'src/location/entities/location.entity';
import { Entity, ManyToMany, JoinTable, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'ad_place' })
export class AdPlace {
  @PrimaryColumn({ name: 'location_id' })
  locationId: number;

  @PrimaryColumn({ name: 'advertisement_id' })
  advertisementId: number;


  @ManyToOne(() => Advertisement, advertisement => advertisement.advertisement_id)
  @JoinColumn({ name: 'advertisement_id' })
  advertisement: Advertisement[];

  @ManyToOne(() => Location, location => location.location_id)
  @JoinColumn({ name: 'location_id' })
  locations: Location[];
}
