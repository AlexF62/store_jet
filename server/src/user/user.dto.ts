
import { UserRole } from "@prisma/client";
import { IsEmail, IsEnum, IsString } from "class-validator";

export class UserDto {
    @IsEmail()
    email: string

    @IsString()
    password?: string

    @IsString()
    firstName: string

    @IsEnum(UserRole)
    role: UserRole
 

    phone?: string
}



