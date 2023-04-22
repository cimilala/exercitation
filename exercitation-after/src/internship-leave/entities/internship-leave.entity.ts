import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("internship_leave")
export class InternshipLeave {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    userId:number
    @Column()
    type:string
    @Column()
    days:number
    @Column()
    reason:string
    @Column()
    start_time:string
    @Column()
    end_time:string
    @Column()
    proveImages:string
    @Column()
    isDraft:boolean
    @Column()
    status:number
    @Column()
    operation:number
}
