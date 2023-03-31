import { Controller, Param, Patch} from '@nestjs/common';
import { BodyObj } from './decorator/body-obj.decorator';
import { UpdateStuUserDto } from './dto/update-stu-user.dto';
import { StuUserService } from './stu-user.service';
@Controller()
export class StuUserController {
  constructor(private readonly stuUserService:StuUserService) {}
  @Patch("/stuUpdate/:id")
  update(@Param() id:string,@BodyObj() entityLike:UpdateStuUserDto) {
    return this.stuUserService.update(id,entityLike)
  }
}
