"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const config_1 = require("@nestjs/config");
const sequelize_typescript_1 = require("sequelize-typescript");
const product_schema_1 = require("./schemas/product.schema");
const user_schema_1 = require("./schemas/user.schema");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        inject: [config_1.ConfigService],
        useFactory: async (configService) => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'vgk990731',
                database: 'nest',
            });
            sequelize.addModels([
                user_schema_1.User,
                product_schema_1.Product,
            ]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map