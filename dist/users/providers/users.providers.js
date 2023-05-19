"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersProviders = void 0;
const user_schema_1 = require("../../schemas/user.schema");
const users_constants_1 = require("../constants/users.constants");
exports.UsersProviders = [
    {
        provide: users_constants_1.USERS_REPOSITORY,
        useValue: user_schema_1.User,
    },
];
//# sourceMappingURL=users.providers.js.map