import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stu_status")
export class StuStatus {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    userId:number
    @Column()
    internship_applyId:number
    @Column()
    apply_status:number
    @Column()
    select_id:number
}
