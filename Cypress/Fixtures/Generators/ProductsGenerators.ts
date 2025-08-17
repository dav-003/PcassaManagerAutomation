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
                wholesalePrice: chance.integer({min:1, max: 10000}),
                retailPrice: chance.integer({min:1, max: 10000}),
                department: chance.integer({min: 1, max: 1000}),
                fiscalRegister: chance.integer({min: 1, max: 100}),
                serviceFee: chance.integer({min: 1, max: 1000}),
                returnLimitation: chance.integer({min: 1, max: 365}),
                maxDiscount: chance.integer({min: 1, max: 100}),
                discount: chance.integer({min: 1, max: 100}),
                adgCode: chance.string({ length: chance.integer({ min: 1, max: 10 }) }),
                sku: chance.string({ length: chance.integer({ min: 1, max: 40 }) })
            }
        ]
    }
    static invalidGeneratedProduct(): ProductAddModal[] {
        return [
            {
                name: chance.string({ length: chance.integer({ min: 101, max: 200 }) }),
                alternativeName: chance.string({ length: chance.integer({ min: 101, max: 200 }) }),
                description: chance.string({ length: chance.integer({ min: 151, max: 200 }) }),
                barcodeGroup: chance.string({ length: chance.integer({ min: 41, max: 100 }) }),
                barcode: chance.string({ length: chance.integer({ min: 41, max: 100 }) }),
                wholesalePrice: chance.integer({min: 99999999, max: 100000000000}),
                retailPrice: chance.integer({min: 99999999, max: 10000000000}),
                adgCode: chance.string({ length: chance.integer({ min: 20, max: 200 }) }),
                sku: chance.string({ length: chance.integer({ min: 50, max: 200 }) }),
                department: 0,
                fiscalRegister: 0,
                serviceFee: 0,
                returnLimitation: 0,
                maxDiscount: 0,
                discount: 0
            }
        ]
    }
}
