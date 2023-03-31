import { Module } from "@nestjs/common";
import { AskLeaveModule } from "./askleave/askleave.module";

@Module({
    imports:[AskLeaveModule]
})
export class ScTeacherCommonModule {

}