import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    type m = {
      err:any
      message:any
      statusCode:any
      error:any
    }
    const {error,message,statusCode}= exception.getResponse() as m
    response
      .json({
        status:statusCode,
        error,
        message,
        timestamp: new Date().toISOString(),
        data:[],
      });
      
  }
}
