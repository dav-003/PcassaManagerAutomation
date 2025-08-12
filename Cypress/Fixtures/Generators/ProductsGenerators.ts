import Chance from 'chance';
import {ProductAddModal} from "../Models/ProductsModels";
const chance = new Chance();

export class ProductsGenerators {
    static generatedProduct(): ProductAddModal[] {
        return [
            {
                name: chance.name().split(' ')[0],
                alternativeName: chance.name().split(' ')[0],
                description: chance.string({ length: chance.integer({ min: 1, max: 149}) }),
                barcode: chance.string({ length: chance.integer({ min: 1, max: 20 }) }),
                barcodeGroup: chance.string({ length: chance.integer({ min: 1, max: 20 }) }),
                wholesalePrice: chance.integer({min:1, max: 7}),
                retailPrice: chance.integer({min:1, max: 7}),
                department: chance.integer({min: 1, max: 1000}),
                fiscalRegister: chance.integer({min: 1, max: 100}),
                serviceFee: chance.integer({min: 1, max: 1000}),
                returnLimitation: chance.integer({min: 1, max: 365}),
                maxDiscount: chance.integer({min: 1, max: 100}),
                discount: chance.integer({min: 1, max: 100}),
                adgCode: chance.string({ length: chance.integer({ min: 1, max: 10 }) }),
                sku: chance.string({ length: chance.integer({ min: 1, max: 20 }) }),
            }
        ]
    }
}
