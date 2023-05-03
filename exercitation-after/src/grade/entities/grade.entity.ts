import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("grade")
export class Grade {
  @PrimaryGeneratedColumn()
  id:number
  @Column()
  name:string
  @Column()
  instituteId:number
  @CreateDateColumn({type:"timestamp"})
  created_date: Date;
  @UpdateDateColumn({type:"timestamp"})
  updated_date: Date;
}
