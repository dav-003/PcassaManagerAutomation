import Chance from 'chance';
import {ProductAddModal} from "../Models/ProductsModels";
const chance = new Chance();
const allChars = ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~`
const poolWithoutExclamation = allChars.replace(/!/g, '')

export class ProductsGenerators {
    static generatedProduct(): ProductAddModal[] {
        return [
            {
                name: chance.name().split(' ')[0],
                alternativeName: chance.name().split(' ')[0],
                description: chance.string({ length: chance.integer({ min: 1, max: 149}), pool: poolWithoutExclamation }),
                barcode: chance.string({ length: chance.integer({ min: 1, max: 20 }), pool: poolWithoutExclamation }),
                barcodeGroup: chance.string({ length: chance.integer({ min: 1, max: 20 }), pool: poolWithoutExclamation }),
                wholesalePrice: chance.integer({min:1, max: 10000}),
                retailPrice: chance.integer({min:1, max: 10000}),
                department: chance.integer({min: 1, max: 1000}),
                fiscalRegister: chance.integer({min: 1, max: 100}),
                serviceFee: chance.integer({min: 1, max: 1000}),
                returnLimitation: chance.integer({min: 1, max: 365}),
                maxDiscount: chance.integer({min: 1, max: 100}),
                discount: chance.integer({min: 1, max: 100}),
                adgCode: chance.string({ length: chance.integer({ min: 1, max: 10 }), pool: poolWithoutExclamation }),
                sku: chance.string({ length: chance.integer({ min: 1, max: 40 }), pool: poolWithoutExclamation })
            }
        ]
    }
    static invalidGeneratedProduct(): ProductAddModal[] {
        return [
            {
                name: chance.string({ length: chance.integer({ min: 101, max: 200 }), pool: poolWithoutExclamation }),
                alternativeName: chance.string({ length: chance.integer({ min: 101, max: 200 }), pool: poolWithoutExclamation }),
                description: chance.string({ length: chance.integer({ min: 151, max: 200 }), pool: poolWithoutExclamation }),
                barcodeGroup: chance.string({ length: chance.integer({ min: 41, max: 100 }), pool: poolWithoutExclamation }),
                barcode: chance.string({ length: chance.integer({ min: 41, max: 100 }), pool: poolWithoutExclamation }),
                wholesalePrice: chance.integer({min: 99999999, max: 100000000000}),
                retailPrice: chance.integer({min: 99999999, max: 10000000000}),
                adgCode: chance.string({ length: chance.integer({ min: 20, max: 200 }), pool: poolWithoutExclamation }),
                sku: chance.string({ length: chance.integer({ min: 50, max: 200 }), pool: poolWithoutExclamation }),
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
