import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("self_apply")
export class SelfApply {
  @PrimaryGeneratedColumn()
  id:number
  @Column()
  company_name:string
  @Column()
  place:string
  @Column()
  position:string
  @Column()
 start_time:string
  @Column()
  @Column()
  end_time:string
  @Column()
  prave:string
  @Column()
  userId:number
  @Column()
  status:number
  @Column()
  teacher:string
  @Column()
  type:string
  @CreateDateColumn({type:"timestamp"})
  created_date: Date;
  @UpdateDateColumn({type:"timestamp"})
  updated_date: Date;
}
