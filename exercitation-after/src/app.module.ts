import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RoleModule } from './role/role.module';
import { StuInfoModule } from './stu_info/stu_info.module';
import { MenuModule } from './menu/menu.module';
import { RoleMenuModule } from './role_menu/role_menu.module';
import { UserModule } from './user/user.module';
import { DayNewsModule } from './day-news/day-news.module';
import { InternshipChangeModule } from './internship-change/internship-change.module';
import { InternshipLeaveModule } from './internship-leave/internship-leave.module';
import { TestModule } from './test/test.module';
import { InstituteModule } from './institute/institute.module';
import { GradeModule } from './grade/grade.module';
import { SelfApplyModule } from './self-apply/self-apply.module';
import { TeacherInfoModule } from './teacher-info/teacher-info.module';
@Module({
  imports: [
    AuthModule,
    UploadModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '888888',
      database: 'exercitation',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join('__dirname', '..', 'public'),
      exclude: ['/api*'],
      serveRoot: '/',
    }),
    RoleModule,
    StuInfoModule,
    MenuModule,
    UserModule,
    DayNewsModule,
    InternshipChangeModule,
    InternshipLeaveModule,
    TestModule,
    InstituteModule,
    GradeModule,
    SelfApplyModule,
    TeacherInfoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
