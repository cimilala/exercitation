import { Sextype } from "src/students/stu-user/dto/type.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ask-leave")
export class AskLeave {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    stuName:string
    @Column()
    name:string
    @Column()
    sex:Sextype
    @Column()
    grade:string
    @Column()
    startTime:string
    @Column()
    endTime:string
    @Column()
    type:string
    @Column()
    days:number
   
}