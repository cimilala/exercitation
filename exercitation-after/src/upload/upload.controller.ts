import {
  Controller, Get,
  Post,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common";
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { UploadService } from './upload.service';
import { Express, response } from "express";
@Controller()
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @UseInterceptors(FileInterceptor('file'))
  @Post('/upload')
  upload(@UploadedFile() file: Express.Multer.File) {
    return file;
  }
  @Get("/download")
  download(){
    response.download("/public/images/1682907562198.docx",(err)=>{
      if(!err) {
        console.log("success","download");
        return
      }
      response.send("下载失败")
    })
  }
}
