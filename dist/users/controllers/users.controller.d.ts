import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersService } from '../services/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("../../schemas/user.schema").User>;
    get(userId: number): Promise<import("../../schemas/user.schema").User>;
    editProfile(userId: number, updateUserDto: UpdateUserDto): Promise<import("../../schemas/user.schema").User>;
}
