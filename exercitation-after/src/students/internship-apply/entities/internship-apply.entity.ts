import { StuUser } from "src/students/stu-user/entities/stu-user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IntershipType } from "../dto/internship";

@Entity("internship_apply")
export class InternshipApply {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    position:string;
    @Column()
    place:string;
    @Column()
    totalNumber:number;
    @Column()
    currentNumber:number;
    @Column()
    startTime:string;
    @Column()
    endTime:string;
    @Column()
    teacher:string
    @Column()
    type:IntershipType
}
