import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';

import { UpdateProductDto } from '../dto/update-product.dto';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductsService } from '../services/products.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/products')
export class ProductsController {
    constructor(private productsService: ProductsService) { }
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    async createProduct(
        @Body() createProductDto: CreateProductDto,
        @UploadedFile() image
    ) {
        return await this.productsService.createProduct(createProductDto, image);
    }

    @Get()
    async getAll() {
        return await this.productsService.getAllProducts();
    }

    @Get('/:productId')
    async getProductById(@Param('productId') productId: number) {
        return await this.productsService.getProductById(productId)
    }

    @Put('/:productId')
    @UseInterceptors(FileInterceptor('image'))
    async updateProduct(
        @Param('productId') productId: number,
        @Body() updateProductDto: UpdateProductDto,
        @UploadedFile() image,
    ) {
        return await this.productsService.updateProduct(updateProductDto, image);
    }

    @Delete('/:productId')
    async deleteProduct(@Param('productId') productId: number) {
        return await this.productsService.deleteProduct(productId);
    }
}
