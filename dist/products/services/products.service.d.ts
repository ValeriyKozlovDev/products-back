import { Product } from '../../schemas/product.schema';
import { UpdateProductDto } from '../dto/update-product.dto';
import { CreateProductDto } from '../dto/create-product.dto';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: typeof Product);
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    getProductById(id: number): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    updateProduct(updateProductDto: UpdateProductDto): Promise<Product>;
    deleteProduct(productId: number): Promise<object>;
}
