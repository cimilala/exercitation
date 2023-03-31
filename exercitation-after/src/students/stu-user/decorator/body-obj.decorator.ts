import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const BodyObj = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return Object(request.body);
  },
);