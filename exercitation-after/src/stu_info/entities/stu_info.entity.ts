import internal from "stream";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stu_info")
export class StuInfo {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    stu_number:string
    @Column()
    class:string
    @Column()
    userId:number
}
