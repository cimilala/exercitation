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
    total_number:number;
    @IsNumberString()
    @IsNotEmpty()
    current_number:number;
    @IsString()
    start_time:string;
    @IsString()
    end_time:string;
    @IsString()
    @IsNotEmpty()
    teacher:string
    @IsNotEmpty()
    @IsEnum(IntershipType)
    type:IntershipType
}
