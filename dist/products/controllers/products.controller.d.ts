import { UpdateProductDto } from '../dto/update-product.dto';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductsService } from '../services/products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    uploadImage(image: any): Promise<any>;
    createProduct(createProductDto: CreateProductDto): Promise<import("../../schemas/product.schema").Product>;
    getAll(): Promise<import("../../schemas/product.schema").Product[]>;
    getProductById(productId: number): Promise<import("../../schemas/product.schema").Product>;
    updateProduct(productId: number, updateProductDto: UpdateProductDto): Promise<import("../../schemas/product.schema").Product>;
    deleteProduct(productId: number): Promise<object>;
}
