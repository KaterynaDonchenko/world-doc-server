import { IsEmail, IsString, MinLength } from "class-validator"

export class LoginDto {
    @IsEmail()
    email: string

    @MinLength(8, {
        message: 'Password must be at least 8 characters leter'
    })
    @IsString()
    password: string

}