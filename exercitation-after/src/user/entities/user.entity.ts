import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    username:string
    @Column()
    roleId:number
    @Column()
    password:string
    @Column()
    sex:string
    @Column()
    name:string
    @Column()
    photo:string
}
 