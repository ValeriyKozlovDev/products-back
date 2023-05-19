import { LoginUserDto } from './../dto/login-user.dto';
import { UsersService } from './../../users/services/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(userDto: LoginUserDto): Promise<{
        token: string;
    }>;
    signUp(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    private generateToken;
    private validateUser;
}
