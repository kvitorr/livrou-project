import { Advertisement } from 'src/advertisement/entities/advertisement.entity';
import { Location } from 'src/location/entities/location.entity';
import { Entity, ManyToMany, JoinTable, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'ad_place' })
export class AdPlace {
  @PrimaryColumn({ name: 'location_id' })
  locationId: number;

  @PrimaryColumn({ name: 'advertisement_id' })
  advertisementId: number;


  @ManyToOne(() => Advertisement, advertisement => advertisement.locations)
  @JoinColumn({ name: 'advertisement_id' })
  advertisement: Advertisement;

  @ManyToOne(() => Location, location => location.advertisements)
  @JoinColumn({ name: 'location_id' })
  location: Location;

}
