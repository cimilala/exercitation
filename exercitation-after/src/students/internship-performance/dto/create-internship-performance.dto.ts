import { IsNumberString } from "class-validator"

export class CreateInternshipPerformanceDto {
    //表达能力
    @IsNumberString()
    expression:number
    //专业知识
    @IsNumberString()
    pro_knowledge:number
    //沟通能力
    @IsNumberString()
    communication:number
    //解决问题的能力
    @IsNumberString()
    solve_problem:number
    //出勤率
    @IsNumberString()
    attendance_rate:number
    //个人素质
    @IsNumberString()
    per_quakity:number
    @IsNumberString()
    total_source:number
}
