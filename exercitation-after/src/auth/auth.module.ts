import {Module, } from "@nestjs/common";
import { JwtModule,} from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { StuUserModule } from "../students/stu-user/stu-user.module";
import { JwtStrategy } from "./jwt.strategy";
import { jwtConstants } from "./constants";
import { LocalStrategy } from "./local.strategy";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
@Module({
    imports:[StuUserModule,PassportModule,
    JwtModule.register({
        secret:jwtConstants.secret,
        signOptions: { expiresIn: '12h' },
    })],
   controllers:[AuthController],
    providers:[AuthService,LocalStrategy,JwtStrategy],
    exports:[AuthService],
  
}
  

)
export class AuthModule{
  
}