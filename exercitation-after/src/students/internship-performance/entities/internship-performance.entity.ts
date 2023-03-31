import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity("internship_performance")
export class InternshipPerformance {
    @PrimaryGeneratedColumn()
    id:number
    //表达能力
    @Column()
    expression:number
    //专业知识
    @Column()
    pro_knowledge:number
    //沟通能力
    @Column()
    communication:number
    //解决问题的能力
    @Column()
    solve_problem:number
    //出勤率
    @Column()
    attendance_rate:number
    //个人素质
    @Column()
    per_quakity:number
    @Column()
    total_source:number

}
