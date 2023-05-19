import { LoginUserDto } from './../dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from '../services/auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDto: LoginUserDto): Promise<{
        token: string;
    }>;
    signUp(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
}
