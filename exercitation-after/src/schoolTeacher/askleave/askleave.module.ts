import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AskLeaveController } from "./askleave.controller";
import { AskLeaveService } from "./askleave.service";
import { AskLeave } from "./entity/askleavelist";

@Module({
    imports:[TypeOrmModule.forFeature([AskLeave])],
    controllers:[AskLeaveController],
    providers:[AskLeaveService]
})
export class AskLeaveModule {

}