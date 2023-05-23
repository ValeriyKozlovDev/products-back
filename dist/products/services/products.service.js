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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_constants_1 = require("../constants/products.constants");
const files_service_1 = require("../../files/files.service");
let ProductsService = class ProductsService {
    constructor(productsRepository, filesService) {
        this.productsRepository = productsRepository;
        this.filesService = filesService;
    }
    async createProduct(createProductDto, image) {
        const fileName = await this.filesService.createFile(image);
        const newProduct = await this.productsRepository.create(Object.assign(Object.assign({}, createProductDto), { image: fileName }));
        if (!newProduct) {
            throw new common_1.HttpException('Could not create', common_1.HttpStatus.BAD_REQUEST);
        }
        return await this.productsRepository.findOne({
            where: { id: newProduct.id },
        });
    }
    async getProductById(id) {
        const product = await this.productsRepository.findOne({
            where: { id },
        });
        if (!product) {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return product;
    }
    async getAllProducts() {
        const products = await this.productsRepository.findAll({
            attributes: ['id', 'name', 'price', 'image', 'description', 'createdAt', 'updatedAt']
        });
        if (!products[0]) {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return products;
    }
    async updateProduct(updateProductDto, image) {
        const fileName = await this.filesService.createFile(image);
        const id = updateProductDto.id;
        const isProductUpdate = await this.productsRepository.update(Object.assign(Object.assign({}, updateProductDto), { image: fileName }), {
            where: { id },
        });
        if (!isProductUpdate[0]) {
            throw new common_1.HttpException('Could not update', common_1.HttpStatus.BAD_REQUEST);
        }
        const product = await this.productsRepository.findOne({
            where: { id },
        });
        return product;
    }
    async deleteProduct(productId) {
        const product = await this.productsRepository.findOne({
            where: { id: productId },
        });
        await product.destroy().catch(() => {
            throw new common_1.HttpException('Could not delete', common_1.HttpStatus.BAD_REQUEST);
        });
        return { message: 'Deleted successfully' };
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(products_constants_1.PRODUCTS_REPOSITORY)),
    __metadata("design:paramtypes", [Object, files_service_1.FilesService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map