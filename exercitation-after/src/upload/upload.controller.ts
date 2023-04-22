import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { UploadService } from './upload.service';
import { Express } from 'express';
@Controller()
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @UseInterceptors(FileInterceptor('file'))
  @Post('/upload')
  upload(@UploadedFile() file: Express.Multer.File) {
    return file;
  }
}
