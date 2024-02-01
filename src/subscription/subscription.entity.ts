import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  card: string;

  @Column()
  valid: string;

  @Column()
  cvv: string;

  @Column()
  country: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;
}
