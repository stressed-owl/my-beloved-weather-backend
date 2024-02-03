import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: '',
  })
  name: string;

  @Column({
    default: '',
  })
  email: string;

  @Column({
    default: '',
  })
  phone: string;

  @Column({
    default: '',
  })
  message: string;
}
