import {  Injectable, NotFoundException } from '@nestjs/common';
import { StuUserService } from '../students/stu-user/stu-user.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly  stuUserService:StuUserService,
  ) {}
  //校验用户的用户名和密码
  async validateUser(username:string,password:string) {
    const person = await this.stuUserService.findOne(username);
      if(person&&person.password === password){
     
        
        const {password,...userInfo} = person
        return userInfo;
      }else if(person&&person.password !== password){
     throw new  NotFoundException("密码错误");
      } else {
       
       throw new NotFoundException("用户不存在");
      }
       
  }
  
    
 //用户成功登录后获取该用户信息
  async getUserInfo(username:string){
  const person = await this.stuUserService.findOne(username);
  const {password,...userInfo} = person
  return userInfo
 } 
}
