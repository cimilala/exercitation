import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("role_menu")
export class RoleMenu {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    menuId:number
    @Column()
    roleId:number
}
