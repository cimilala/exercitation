import {  Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AuthService {
  constructor(
   
    private readonly userService:UserService,
  ) {}
  //校验用户的用户名和密码
  async validateUser(username:string,password:string) {
    const person = await this.userService.login(username)
      if(person&&person.password === password){
        const {password,...userInfo} = person
        return userInfo;
      }else if(person&&person.password !== password){
     throw new  NotFoundException("密码错误");
      } else {
       
       throw new NotFoundException("用户不存在");
      }
       
  }
  
    
 
}
