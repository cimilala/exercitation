import { Body, Controller,  Delete,  Get,  Param,  Patch, Post } from "@nestjs/common";
import { AskLeaveService } from "./askleave.service";
import { createALDto } from "./dto/createAskLeave.dto";
import { UpdateAskLeaveDto } from "./dto/updateAskLeave.dto";
@Controller("/scteacher")
export class AskLeaveController {
    constructor(private readonly askLeaveService:AskLeaveService){}
    @Get(":id")
    findOne(@Param("id") id:string){
        return this.askLeaveService.findOne(id)
    }
    @Get()
    findAll(){
        return this.askLeaveService.findAll()
    }
   @Post()
    add(@Body() body:createALDto){
        return this.askLeaveService.add(body)
   }
   @Patch(":id")
   update<T extends keyof UpdateAskLeaveDto>(@Param("id") id:string,@Body() entityLike:T) {
        return this.askLeaveService.update(id,entityLike)
   }
   @Delete(":id")
   delete(@Param("id") id:string) {
    return this.askLeaveService.delete(id)
   }
}