import { Product } from '../../schemas/product.schema';
import { UpdateProductDto } from '../dto/update-product.dto';
import { CreateProductDto } from '../dto/create-product.dto';
import { FilesService } from 'src/files/files.service';
export declare class ProductsService {
    private readonly productsRepository;
    private filesService;
    constructor(productsRepository: typeof Product, filesService: FilesService);
    createProduct(createProductDto: CreateProductDto, image: any): Promise<Product>;
    getProductById(id: number): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    updateProduct(updateProductDto: UpdateProductDto, image: any): Promise<Product>;
    deleteProduct(productId: number): Promise<object>;
}
