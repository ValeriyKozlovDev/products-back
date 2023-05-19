"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsProviders = void 0;
const products_constants_1 = require("../constants/products.constants");
const product_schema_1 = require("../../schemas/product.schema");
exports.ProductsProviders = [
    {
        provide: products_constants_1.PRODUCTS_REPOSITORY,
        useValue: product_schema_1.Product,
    },
];
//# sourceMappingURL=products.providers.js.map