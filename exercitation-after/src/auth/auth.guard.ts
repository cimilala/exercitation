import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        // 在这里添加自定义的认证逻辑
        const ctx = context.switchToHttp()
        const request = ctx.getRequest<Request>()
        if(request.url.includes("/login")) return true
        // 例如调用 super.logIn(request) 来建立一个session
        return super.canActivate(context);
      }

}
