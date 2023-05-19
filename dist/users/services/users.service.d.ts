import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../../schemas/user.schema';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: typeof User);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findUserByEmailWithPassword(email: string): Promise<User>;
    findUserById(id: number): Promise<User>;
    editUserProfile(id: number, updateUserDto: UpdateUserDto): Promise<User>;
}
