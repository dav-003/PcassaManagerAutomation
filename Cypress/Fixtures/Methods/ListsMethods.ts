import {ListsSelectors} from "../Selectors/ListsSelectors";
import {
    CategoryTypesTheadSequence,
    listOfWarehousesTheadSequence,
    unitOfMeasurementTheadSequence
} from "../Models/ListsModels";
import {ListsGenerators} from "../Generators/ListsGenerators";
import Chance from 'chance';
import {ActsSelectors} from "../Selectors/ActsSelectors";
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
    static AddCategoryType = () => {
        const name = ListsGenerators.categoryTypeNameField().name
        return ListsSelectors.categoryTypesAddButton()
            .click()
            .then(() => ListsSelectors.categoryTypesAddModalNameInput().type(name))
            .then(() => ListsSelectors.categoryTypesAddModalSaveButton().click())
            .then(() => ListsSelectors.categoryTypesSuccessAddToast().should('be.visible').click())
            .then(() => name)
    }

    static EditCategoryType = (name: string) => {
        const newName = chance.string({ length: chance.integer({ min: 1, max: 20 }) });
        return ListsSelectors.categoryTypesItems().then($items => {
            let rowIndex = -1;
            $items.each((index, row) => {
                if (Cypress.$(row).find('td').eq(CategoryTypesTheadSequence.Name).text().includes(name)) {
                    rowIndex = index;
                    return false;
                }
            })
            if (rowIndex === -1) {
                throw new Error('Row with name "' + name + '" not found');
            }
            return ListsSelectors.categoryTypesEditButton(rowIndex)
                .click()
                .then(() => ListsSelectors.categoryTypesEditModalNameInput().clear().type(newName))
                .then(() => ListsSelectors.categoryTypesEditModalSaveButton().click())
                .then(() => ListsSelectors.categoryTypesSuccessEditToast().should('be.visible').click())
                .then(() => ListsSelectors.categoryTypesEditModal().should('not.exist'))
                .then(() => newName)
        })
    }
    static AddListOfPayments = () => {
        const name = ListsGenerators.listOfPaymentsNameField().name
        return ListsSelectors.listOfPaymentsAddButton()
            .click()
            .then(() => ListsSelectors.listOfPaymentsAddModalNameInput().type(name))
            .then(() => ListsSelectors.listOfPaymentsAddModalSaveButton().click())
            .then(() => ListsSelectors.listOfPaymentsSuccessAddToast().should('be.visible').click())
            .then(() => name)
    }

    static EditListOfPayments = (name: string)=> {
        const newName = chance.string({ length: chance.integer({ min: 1, max: 20 }) });
        return ListsSelectors.categoryTypesItems().then($items => {
            let rowIndex = -1;
            $items.each((index, row) => {
                if (Cypress.$(row).find('td').eq(CategoryTypesTheadSequence.Name).text().includes(name)) {
                    rowIndex = index;
                    return false;
                }
            })
            if (rowIndex === -1) {
                throw new Error('Row with name "' + name + '" not found');
            }
            return ListsSelectors.listOfPaymentsEditButton(rowIndex)
                .click()
                .then(() => ListsSelectors.listOfPaymentsEditModalNameInput().clear().type(newName))
                .then(() => ListsSelectors.listOfPaymentsEditModalSaveButton().click())
                .then(() => ListsSelectors.listOfPaymentsSuccessEditToast().should('be.visible').click())
                .then(() => ListsSelectors.listOfPaymentsEditModal().should('not.exist'))
                .then(() => newName)
        })
    }
    static SelectDate = (day: number, month: string, year: number): Cypress.Chainable => {
        const maxAttempts = 36;
        let attempts = 0;

        const goToMonthYear = (): Cypress.Chainable => {
            return ActsSelectors.listOfActsDateFromInputMonthButton()
                .filter(':visible')
                .invoke('text')
                .then(currentMonth => {
                    return ActsSelectors.listOfActsDateFromInputYearButton()
                        .filter(':visible')
                        .invoke('text')
                        .then(currentYearText => {
                            const currentYear = parseInt(currentYearText.trim());
                            const currentMonthNormalized = currentMonth.trim().toUpperCase();
                            const targetMonthNormalized = month.trim().toUpperCase();

                            if (currentMonthNormalized === targetMonthNormalized && currentYear === year) {
                                return ActsSelectors.listOfActsDateFromDatepickerDay(day)
                                    .filter(':visible')
                                    .click();
                            }
                            if (attempts >= maxAttempts) {
                                throw new Error(`Не удалось найти месяц ${month} и год ${year} за ${maxAttempts} кликов`);
                            }

                            attempts++

                            return ActsSelectors.listOfActsDateFromInputPrevButton()
                                .filter(':visible')
                                .click()
                                .then(() => cy.wait(100))
                                .then(goToMonthYear);
                        })
                })
        }

        return goToMonthYear()
    }
    static AddListOfWarehouses = () => {
        const name = ListsGenerators.listOfWarehousesNameField().name
        return ListsSelectors.listOfWarehousesAddButton()
            .click()
            .then(() => ListsSelectors.listOfWarehousesAddModalNameInput().type(name))
            .then(() => ListsSelectors.listOfWarehousesAddModalSaveButton().click())
            .then(() => ListsSelectors.listOfWarehousesSuccessAddToast().should('be.visible').click())
            .then(() => name)
    }
    static EditListOfWarehouses = (name: string) => {
        const newName = chance.string({ length: chance.integer({ min: 1, max: 20 }) })
        return ListsSelectors.listOfWarehousesTbodyItems().then($items => {
            let rowIndex = -1;
            $items.each((index, row) => {
                if (Cypress.$(row).find('td').eq(listOfWarehousesTheadSequence.Name).text().includes(name)) {
                    rowIndex = index;
                    return false;
                }
            })
            if (rowIndex === -1) {
                throw new Error('Row with name "' + name + '" not found');
            }
            return ListsSelectors.listOfWarehousesEditButton(rowIndex)
                .click()
                .then(() => ListsSelectors.listOfWarehousesEditModalNameInput().clear().type(newName))
                .then(() => ListsSelectors.listOfWarehousesEditModalSaveButton().click())
                .then(() => ListsSelectors.listOfWarehousesSuccessEditToast().should('be.visible').click())
                .then(() => ListsSelectors.listOfWarehousesEditModal().should('not.exist'))
                .then(() => newName)
        })
    }
}