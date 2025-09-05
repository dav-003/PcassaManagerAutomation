import {ListsSelectors} from "../Selectors/ListsSelectors";
import {
    cashRegisterTypesAddFields,
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
    static AddCashRegisterType = (
        fields: Partial<cashRegisterTypesAddFields> = {}
    ): Cypress.Chainable<Partial<cashRegisterTypesAddFields>> => {
        const data: Partial<cashRegisterTypesAddFields> = { ...fields }

        return ListsSelectors.cashRegisterTypesAddButton().click()
            .then(() => {
                if (data.name) {
                    ListsSelectors.cashRegisterTypesAddModalNameInput().type(data.name)
                }
                if (data.bankAccount) {
                    ListsSelectors.cashRegisterTypesAddModalBankAccountInput().type(data.bankAccount)
                }
                if (data.description) {
                    ListsSelectors.cashRegisterTypesAddModalDescriptionInput().type(data.description)
                }

                ListsSelectors.cashRegisterTypesAddModalSaveButton().click()
                ListsSelectors.cashRegisterTypesSuccessAddToast().should('be.visible').click()
            })
            .then(() => {
                return cy.wrap(data)
            })
    }

    static EditCashRegisterType = (
        fields: Partial<cashRegisterTypesAddFields> = {},
        index: number
    ): Cypress.Chainable<Partial<cashRegisterTypesAddFields>> => {
        const data: Partial<cashRegisterTypesAddFields> = { ...fields }

        return ListsSelectors.cashRegisterTypesEditButton(index).click()
                .then(() => {
                    ListsSelectors.cashRegisterTypesEditModal().should('be.visible')
                if (data.name) {
                    const newName = data.name ?? ListsGenerators.cashRegisterTypesNameField().name
                    ListsSelectors.cashRegisterTypesEditModalNameInput()
                        .clear()
                        .type(newName)
                    data.name = newName
                }
                if (data.bankAccount) {
                    const newBank = data.bankAccount ?? ListsGenerators.cashRegisterTypesBankAccountField().bankAccount
                    ListsSelectors.cashRegisterTypesEditModalBankAccountInput()
                        .clear()
                        .type(newBank)
                    data.bankAccount = newBank
                }
                if (data.description) {
                    const newDesc = data.description ?? ListsGenerators.cashRegisterTypesDescriptionField().description
                    ListsSelectors.cashRegisterTypesEditModalDescriptionInput()
                        .clear()
                        .type(newDesc)
                    data.description = newDesc
                }

                ListsSelectors.cashRegisterTypesEditModalSaveButton().click()
                ListsSelectors.cashRegisterTypesSuccessEditToast().should('be.visible').click()
            })
            .then(() => {
                return cy.wrap(data)
            })
    }

}