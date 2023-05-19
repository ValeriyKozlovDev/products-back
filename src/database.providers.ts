import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';

import { Product } from './schemas/product.schema';
import { User } from './schemas/user.schema';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'database.cs08r8ibthr5.eu-north-1.rds.amazonaws.com',
        port: 5432,
        username: 'postgres',
        password: 'Vgk990731',
        database: 'nest',
      });
      sequelize.addModels([
        User,
        Product,
      ]);
      await sequelize.sync();
      return sequelize;

    },
  },
];