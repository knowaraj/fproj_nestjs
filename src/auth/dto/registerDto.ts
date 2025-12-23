import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class RegisterDto{
    @IsEmail()
    email: string

    @IsNotEmpty()
    name: string

    @IsString()
    @IsStrongPassword({minLength:8})
    password: string
}