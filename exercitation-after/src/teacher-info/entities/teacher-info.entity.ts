import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("teacher-info")
export class TeacherInfo {
  @PrimaryGeneratedColumn()
  id:number
  @Column()
  userId:number
  @Column()
  photo:string
}
