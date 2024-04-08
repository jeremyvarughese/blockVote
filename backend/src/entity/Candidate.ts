import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Poll } from "./Poll";

@Entity()
export class Candidate extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

 // @ManyToOne(() => Poll, (poll) => poll.id)
  poll!: number;

  @Column()
  info!: string
  
}
