import { Model } from 'sequelize-typescript';
export declare class Product extends Model<Product> {
    name: string;
    price: number;
    image: string;
    description: string;
}
