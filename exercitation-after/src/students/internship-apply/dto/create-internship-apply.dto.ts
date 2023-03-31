import {IsEnum, IsNotEmpty, IsNumberString, IsString } from "class-validator";
import { IntershipType } from "./internship";

export class CreateInternshipApplyDto {
    @IsString()
    @IsNotEmpty()
    position:string;
    @IsString()
    @IsNotEmpty()
    place:string;
    @IsNumberString()
    @IsNotEmpty()
    totalNumber:number;
    @IsNumberString()
    @IsNotEmpty()
    currentNumber:number;
    @IsString()
    startTime:string;
    @IsString()
    endTime:string;
    @IsString()
    @IsNotEmpty()
    teacher:string
    @IsNotEmpty()
    @IsEnum(IntershipType)
    type:IntershipType
}
