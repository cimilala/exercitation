import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("test")
export class Test {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    status:number
    @Column()
    type_id:number
    @Column()
    test_type:string
    @Column()
    userId:number
    @CreateDateColumn({type:"timestamp"})
    created_date: Date;
    @UpdateDateColumn({type:"timestamp"})
    updated_date: Date;
}
