import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StuCommonModule } from './students/stuCommon.module';
import { ScTeacherCommonModule } from './schoolTeacher/scTeacherCom.module';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    AuthModule,
    StuCommonModule,
    ScTeacherCommonModule,
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
