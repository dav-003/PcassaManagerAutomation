import Chance from 'chance';
import {
    cashRegisterTypesAddFields,
    categoryTypeNameField,
    listOfPaymentsNameField,
    listOfWarehousesNameField, productSizeFields,
    unitOfMeasurementNameField
} from "../Models/ListsModels";
const chance = new Chance();
const allChars = ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~`
const poolWithoutExclamation = allChars.replace(/!/g, '')

export class ListsGenerators {
    static unitOfMeasurementNameField = (): unitOfMeasurementNameField => {
        return {
            name: chance.string({ length: chance.integer({ min: 1, max: 20 }), pool: poolWithoutExclamation }),

        }
    }
    static categoryTypeNameField = (): categoryTypeNameField => {
        return {
            name: chance.string({ length: chance.integer({ min: 1, max: 20 }), pool: poolWithoutExclamation })
        }
    }
    static listOfPaymentsNameField = (): listOfPaymentsNameField => {
        return {
            name: chance.string({ length: chance.integer({ min: 1, max: 20 }), pool: poolWithoutExclamation })
        }
    }
    static listOfWarehousesNameField = (): listOfWarehousesNameField => {
        return {
            name: chance.string({ length: chance.integer({ min: 1, max: 20 }), pool: poolWithoutExclamation })
        }
    }
    static cashRegisterTypesNameField = (): Partial<cashRegisterTypesAddFields> => {
        return {
            name: chance.string({length: chance.integer({min: 1, max: 20 }), pool: poolWithoutExclamation })
        }
    }
    static cashRegisterTypesBankAccountField = (): Partial<cashRegisterTypesAddFields> => {
        return {
            bankAccount: chance.string({length: chance.integer({min: 1, max: 20 }), pool: poolWithoutExclamation })
        }
    }
    static cashRegisterTypesDescriptionField = (): Partial<cashRegisterTypesAddFields> => {
        return {
            description: chance.string({length: chance.integer({min: 1, max: 20 }), pool: poolWithoutExclamation })
        }
    }
    static sizeGroupNameField = (): Pick<productSizeFields, "groupName"> => {
        return {
            groupName: chance.string({length: chance.integer({ min: 1, max: 20 }), pool: poolWithoutExclamation })
        }
    }
    static sizeNameField = (): Pick<productSizeFields, "name"> => {
        return {
            name: chance.string({length: chance.integer({ min: 1, max: 20 }), pool: poolWithoutExclamation })
        }
    }
}