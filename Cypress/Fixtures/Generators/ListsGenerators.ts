import Chance from 'chance';
import {
    cashRegisterTypesAddFields,
    categoryTypeNameField,
    listOfPaymentsNameField,
    listOfWarehousesNameField,
    unitOfMeasurementNameField
} from "../Models/ListsModels";
const chance = new Chance();

export class ListsGenerators {
    static unitOfMeasurementNameField = (): unitOfMeasurementNameField => {
        return {
            name: chance.string({ length: chance.integer({ min: 1, max: 20 }) })
        }
    }
    static categoryTypeNameField = (): categoryTypeNameField => {
        return {
            name: chance.string({ length: chance.integer({ min: 1, max: 20 }) })
        }
    }
    static listOfPaymentsNameField = (): listOfPaymentsNameField => {
        return {
            name: chance.string({ length: chance.integer({ min: 1, max: 20 }) })
        }
    }
    static listOfWarehousesNameField = (): listOfWarehousesNameField => {
        return {
            name: chance.string({ length: chance.integer({ min: 1, max: 20 }) })
        }
    }
    static cashRegisterTypesNameField = (): Partial<cashRegisterTypesAddFields> => {
        return {
            name: chance.string({length: chance.integer({min: 1, max: 20 }) })
        }
    }
    static cashRegisterTypesBankAccountField = (): Partial<cashRegisterTypesAddFields> => {
        return {
            bankAccount: chance.string({length: chance.integer({min: 1, max: 20 }) })
        }
    }
    static cashRegisterTypesDescriptionField = (): Partial<cashRegisterTypesAddFields> => {
        return {
            description: chance.string({length: chance.integer({min: 1, max: 20 }) })
        }
    }
}