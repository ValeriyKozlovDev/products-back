import { Product } from '../../schemas/product.schema';
import { UpdateProductDto } from '../dto/update-product.dto';
import { CreateProductDto } from '../dto/create-product.dto';
import { FilesService } from 'src/files/files.service';
export declare class ProductsService {
    private readonly productsRepository;
    private filesService;
    constructor(productsRepository: typeof Product, filesService: FilesService);
    uploadImage(image: any): Promise<any>;
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    getProductById(id: number): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    updateProduct(updateProductDto: UpdateProductDto): Promise<Product>;
    deleteProduct(productId: number): Promise<object>;
}
