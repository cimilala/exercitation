import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("internship_change")
export class InternshipChange {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    initInter:string
    @Column()
    changeInter:string
    @Column()
    initPosition:string
    @Column()
    changePosition:string
    @Column()
    reason:string
    @Column()
    isDraft:true
    @Column()
    userId:number
    @Column()
    status:number
    @Column()
    operation:number
}
