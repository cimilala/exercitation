import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity("stu-user")
export class StuUser {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    username:string
    @Column()
    password:string
    @Column()
    name:string
    @Column()
    stu_number:string
    @Column()
    sex:string
    @Column()
    internship_apply_id:number
    @Column()
    role_id:number
    @Column()
    apply_status:number
    @Column()
    select_id:number
    @Column()
    photo:string
}
