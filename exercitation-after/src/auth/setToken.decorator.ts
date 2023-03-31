import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const  SetToken = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        
        return ctx.switchToHttp().getResponse();
      },
)