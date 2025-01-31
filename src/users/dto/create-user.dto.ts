import { IsEmail, IsArray, IsInt } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsArray()
    @IsInt({ each: true })
    categories: number[];
}