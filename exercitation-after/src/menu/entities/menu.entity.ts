import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity("menu")
export class Menu {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    type:number
    @Column()
    path:string
    @Column()
    icon:string
    @Column()
    index:string
    @Column()
    parent_id:number
    
}
