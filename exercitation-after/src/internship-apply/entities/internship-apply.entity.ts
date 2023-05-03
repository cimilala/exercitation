import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";
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
    total_number:number;
    @Column()
    current_number:number;
    @Column()
    start_time:string;
    @Column()
    end_time:string;
    @Column()
    teacher:string
    @Column()
    type:IntershipType
}
