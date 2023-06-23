import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'conservation' })
export class Conservation {
  @PrimaryColumn({ name: 'conservation_id' })
  conservationId: number;

  @Column({ name: 'conservation_state' })
  conservationState: string;
}
