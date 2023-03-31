import { Body, Controller, Get,Param,Patch,Post,Request, UseGuards,Query } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { CreateStuUserDto } from 'src/students/stu-user/dto/create-stu-user.dto';
import { StuUserService } from 'src/students/stu-user/stu-user.service';
import { AuthService } from './auth.service';
import { SetToken } from './setToken.decorator';

@Controller()
export class AuthController {
  constructor(
    private readonly  jwtService:JwtService,
    private readonly  stuUserService:StuUserService,
    private readonly authService:AuthService
    ){}
  @UseGuards(AuthGuard("local"))//从body中提取username,password
  @Post("/login")
  validateUser(@Request() req,@SetToken() setToken) {
    if(req.user){
      const payload = { username: req.user.username, sub: req.user.id };
      const access_token =this.jwtService.sign(payload)
      setToken.header("Authorization",access_token)
      setToken.header("Access-Control-Expose-Headers","*")//允许公用所有请求头
    }
    return req.user
 
  }
  @Get("/getUser")
  getUserInfo(@Request() req) {
    if(req.user) {
      const {username} = req.user
      return this.authService.getUserInfo(username)
    }
  }
  
 
  // @Post("/test") 
  // create(@Body() body:CreateStuUserDto) {
  //   return this.stuUserService.create(body)
  // }
  // @Patch("/:id")
  // update(@Param() id:string,@Body() body:UpdateStuUserDto){
  //   return this.stuUserService.update(id,body)
  // }
  // @Get("/qsq")
  // find(@Query() query){
  //   return this.stuUserService.find(query)
  // }
}
