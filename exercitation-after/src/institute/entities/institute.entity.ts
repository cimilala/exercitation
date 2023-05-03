import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("institute")
export class Institute {
  @PrimaryGeneratedColumn()
  id:number
  @Column()
  name:string
  @Column()
  parent_id:number
  @CreateDateColumn({type:"timestamp"})
  created_time: Date;
  @UpdateDateColumn({type:"timestamp"})
  updated_time: Date;
}
