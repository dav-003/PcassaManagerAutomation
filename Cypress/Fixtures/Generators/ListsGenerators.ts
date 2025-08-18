import Chance from 'chance';
import {unitOfMeasurementNameField} from "../Models/ListsModels";
const chance = new Chance();

export class ListsGenerators {
    static unitOfMeasurementNameField = (): unitOfMeasurementNameField => {
        return {
            name: chance.string({ length: chance.integer({ min: 1, max: 20 }) })
        }
    }
}