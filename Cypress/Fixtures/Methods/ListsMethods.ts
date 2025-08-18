import {ListsSelectors} from "../Selectors/ListsSelectors";
import {unitOfMeasurementTheadSequence} from "../Models/ListsModels";
import {ListsGenerators} from "../Generators/ListsGenerators";
import Chance from 'chance';
const chance = new Chance();

export class ListsMethods {

    static AddUnitOfMeasurement = () => {
        const name = ListsGenerators.unitOfMeasurementNameField().name
        return ListsSelectors.unitOfMeasurementAddButton()
            .click()
            .then(() => ListsSelectors.unitOfMeasurementAddModalNameInput().type(name))
            .then(() => ListsSelectors.unitOfMeasurementAddModalSaveButton().click())
            .then(() => ListsSelectors.unitOfMeasurementSuccessAddToast().should('be.visible').click())
            .then(() => name)
    }

    static EditUnitOfMeasurement = (name: string) => {
        const newName = chance.string({ length: chance.integer({ min: 1, max: 20 }) });
        return ListsSelectors.unitOfMeasurementItems().then($items => {
            let rowIndex = -1;
            $items.each((index, row) => {
                if (Cypress.$(row).find('td').eq(unitOfMeasurementTheadSequence.Name).text().includes(name)) {
                    rowIndex = index;
                    return false;
                }
            })
            if (rowIndex === -1) {
                throw new Error('Row with name "' + name + '" not found');
            }
            return ListsSelectors.unitOfMeasurementEditButton(rowIndex)
                .click()
                .then(() => ListsSelectors.unitOfMeasurementEditModalNameInput().clear().type(newName))
                .then(() => ListsSelectors.unitOfMeasurementEditModalSaveButton().click())
                .then(() => ListsSelectors.unitOfMeasurementSuccessEditToast().should('be.visible').click())
                .then(() => ListsSelectors.unitOfMeasurementEditModal().should('not.exist'))
                .then(() => newName)
        })
    }
}