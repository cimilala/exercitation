import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/auth.guard';
import { HttpExceptionFilter } from './utils/filter/http-exception.filter';
import {  authMiddleware, } from './utils/middleware/auth-middleware';
import { TransformInterceptor } from './utils/interceptor/transformm.interceptor';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.use(authMiddleware)//全局中间件
  app.useGlobalGuards(new JwtAuthGuard());//全局守卫 校验token
  app.useGlobalInterceptors(new TransformInterceptor())//全局拦截器 (next.handle()执行前)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform:true,
    forbidNonWhitelisted:true
  }))//全局管道
 
  app.useGlobalFilters(new HttpExceptionFilter())//全局异常处理 请求发生错误时,统一发送错误信息
  // app.useGlobalInterceptors(new TransformInterceptor())全局拦截器 next.handle()执行后 统一响应格式
 app.use
  await app.listen(3000);
 
}

bootstrap();
