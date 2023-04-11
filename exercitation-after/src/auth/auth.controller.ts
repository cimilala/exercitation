import {  Controller, Get,Post,Request, UseGuards,Query } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { SetToken } from './setToken.decorator';

@Controller()
export class AuthController {
  constructor(
    private readonly  jwtService:JwtService,
  
    ){}
  @UseGuards(AuthGuard("local"))//从body中提取username,password
  @Post("/login")
  validateUser(@Request() req,@SetToken() setToken) {
    if(req.user){
      const payload = { username: req.user.username, sub: req.user.id };
      const access_token =this.jwtService.sign(payload)
      setToken.header("Authorization",access_token)
      setToken.header("Access-Control-Expose-Headers","*")//允许公开所有请求头
    }
    return req.user
  }
 
  
 
  
}
