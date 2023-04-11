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
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
