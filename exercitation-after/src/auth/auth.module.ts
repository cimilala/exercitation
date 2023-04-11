import {Module, } from "@nestjs/common";
import { JwtModule,} from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";
import { jwtConstants } from "./constants";
import { LocalStrategy } from "./local.strategy";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
@Module({
    imports:[PassportModule,UserModule,
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