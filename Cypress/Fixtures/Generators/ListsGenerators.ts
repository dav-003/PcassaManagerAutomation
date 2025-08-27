import Chance from 'chance';
import {categoryTypeNameField, unitOfMeasurementNameField} from "../Models/ListsModels";
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
}