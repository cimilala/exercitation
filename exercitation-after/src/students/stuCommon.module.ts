import { Module } from "@nestjs/common/decorators";
import { InternshipApplyModule } from './internship-apply/internship-apply.module';
import { InternshipPerformanceModule } from './internship-performance/internship-performance.module';
@Module({
    imports:[ 
        InternshipApplyModule,
         InternshipPerformanceModule,
         ]
})
export class StuCommonModule{}