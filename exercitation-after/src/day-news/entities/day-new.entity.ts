import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("day_news")
export class DayNew {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    title:string
    @Column()
    unit:string
    @Column()
    time:string
    @Column()
    week:string
    @Column()
    content:string
    @Column()
   status:number
   @Column()
   userId:number
   @Column()
   operation:number
   @Column()
   isDraft:boolean
}
