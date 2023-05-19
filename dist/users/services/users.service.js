"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_constants_1 = require("../constants/users.constants");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(createUserDto) {
        const newUser = await this.userRepository.create(createUserDto);
        if (!newUser) {
            throw new common_1.HttpException('Could not create', common_1.HttpStatus.BAD_REQUEST);
        }
        return newUser;
    }
    async findUserByEmailWithPassword(email) {
        const user = await this.userRepository.findOne({
            where: { email },
        });
        if (!user) {
        }
        return user;
    }
    async findUserById(id) {
        const user = await this.userRepository.findOne({
            where: { id },
            attributes: { exclude: ['password'] },
        });
        if (!user) {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async editUserProfile(id, updateUserDto) {
        const isUserUpdated = await this.userRepository.update(updateUserDto, {
            where: { id },
        });
        return await this.userRepository.findOne({
            where: { id },
            attributes: { exclude: ['password'] },
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(users_constants_1.USERS_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map