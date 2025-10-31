import {ListsSelectors} from "../Selectors/ListsSelectors";
import {
    cashRegisterTypesAddFields,
    CategoryTypesTheadSequence,
    listOfWarehousesTheadSequence,
    productCurrenciesAddFields, productCurrenciesCheckboxes,
    productCurrenciesCurrencyTypes, productCurrenciesPaymentTypes,
    productSizeFields,
    productSizeTheadSequence,
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
            })
            .then(() => {
                return cy.wrap(data)
            })
    }
    static clickRandomInSection(element: Cypress.Chainable<JQuery<HTMLElement>>) {
        element.then($el => {
            const width = $el.width() ?? 0
            const height = $el.height() ?? 0

            const x = Math.floor(Math.random() * width)
            const y = Math.floor(Math.random() * height)

            cy.wrap($el).click(x, y)
        })
    }
    static sizeGroupAdd = ({
                               groupName,
                               expectSuccess,
                           }: {
        groupName?: string
        expectSuccess?: boolean
    }) => {
        ListsSelectors.sizeGroupAddButton().click()
        if (groupName) {
            ListsSelectors.sizeGroupAddField()
                .should("be.visible")
                .type(groupName, { parseSpecialCharSequences: false })
                .type("{enter}")
        } else {
            ListsSelectors.sizeGroupAddField()
                .should("be.visible")
                .type("{enter}")
        }
        const successExpected = expectSuccess ?? !!groupName
        if (successExpected) {
            ListsSelectors.sizeSuccessAddToast().should("be.visible")
            ListsSelectors.sizeGroupListItems().should("contain", groupName)
        }
        ListsSelectors.sizeGroupCloseButton().click()
        ListsSelectors.sizeGroupAddField().should("not.be.visible")
    }

    static sizeGroupEdit = (
        editGroup: Cypress.Chainable<JQuery<HTMLElement>>,
        newName: Pick<productSizeFields, "groupName">
    ) => {
        editGroup.trigger('mouseover').then(($editGroup) => {
            cy.wrap($editGroup).find('button#edit-button').click({ force: true })
            ListsSelectors.sizeGroupEditInput()
                .should('be.visible')
                .clear()
                .type(newName.groupName, { parseSpecialCharSequences: false })
                .type('{enter}')
        })
    }

    static sizeGroupDelete = (group: Cypress.Chainable<JQuery<HTMLElement>>) => {
        group.trigger("mouseover").then(($group) => {
            cy.wrap($group).find('[class*="delete-block"] button').click({ force: true })
            ListsSelectors.sizeDeleteModal().should("be.visible");
            ListsSelectors.sizeDeleteModalDeleteButton().click();
            cy.wrap($group).should("not.exist");
        })
    }
    static sizeAdd = ({
                          name,
                          expectSuccess,
                      }: {
        name?: string
        expectSuccess?: boolean
    }) => {
        ListsSelectors.sizeGroupListItem(0).click()
        ListsSelectors.sizeAddButton().click()
        if (name) {
            ListsSelectors.sizeAddModalNameInput()
                .should("be.visible")
                .type(name, { parseSpecialCharSequences: false })
                .type("{enter}")
        } else {
            ListsSelectors.sizeAddModalNameInput()
                .should("be.visible")
                .type("{enter}")
        }
        const successExpected = expectSuccess ?? !!name
        if (successExpected) {
            ListsSelectors.sizeSuccessAddToast().should("be.visible")
            ListsSelectors.sizeTbodyItems()
                .last()
                .find("td")
                .eq(productSizeTheadSequence.Name)
                .should("contain", name)
        }
    }
    static sizeEdit = (
        editSize: Cypress.Chainable<JQuery<HTMLElement>>,
        name?: string,
        expectSuccess?: boolean
    ) => {
        editSize.trigger("mouseover").then(($editSize) => {
            cy.wrap($editSize)
                .find("td:nth-child(3) button")
                .click({ force: true })
        })
        if (name) {
            ListsSelectors.sizeEditModalNameInput()
                .should("be.visible")
                .clear()
                .type(name, { parseSpecialCharSequences: false })
                .type("{enter}")
        } else {
            ListsSelectors.sizeEditModalNameInput()
                .should("be.visible")
                .clear()
                .type("{enter}")
        }
        const successExpected = expectSuccess ?? !!name
        if (successExpected) {
            ListsSelectors.sizeSuccessEditToast().should("be.visible")
            ListsSelectors.sizeTbodyItems()
                .last()
                .find("td")
                .eq(productSizeTheadSequence.Name)
                .should("contain", name)
        }
    }
    static currencyAdd = ({
                              data,
                              currencyType,
                              paymentType,
                              checkboxes,
                          }: {
        data: productCurrenciesAddFields
        currencyType?: productCurrenciesCurrencyTypes
        paymentType?: productCurrenciesPaymentTypes
        checkboxes?: productCurrenciesCheckboxes
    }) => {
        const invokedObj: { currType?: string; payType?: string; name?: string } = {}
        ListsSelectors.currenciesAddButton().should('be.visible').click()
        ListsSelectors.currenciesAddModal().should('be.visible')
        if (data.name) {
            ListsSelectors.currenciesAddModalNameInput().clear().type(data.name)
        }
        if (data.shortName) {
            ListsSelectors.currenciesAddModalShortNameInput().clear().type(data.shortName)
        }
        if (data.rounding) {
            ListsSelectors.currenciesAddModalRoundingInput().type(String(data.rounding))
        }
        if (currencyType) {
            ListsSelectors.currenciesAddModalCurrencyTypeSelect().click({ force: true })
            ListsSelectors.currenciesAddModalCurrencyTypeSelectOptions().should('be.visible')
            ListsSelectors.currenciesAddModalCurrencyTypeSelectOption(currencyType).click({ force: true })
            ListsSelectors.currenciesAddModalCurrencyTypeSelectOptions().should('not.exist')
        }
        if (paymentType) {
            ListsSelectors.currenciesAddModalPaymentTypeSelect().click({ force: true })
            ListsSelectors.currenciesAddModalPaymentTypeSelectOptions().should('be.visible')
            ListsSelectors.currenciesAddModalPaymentTypeSelectOption(paymentType).click({ force: true })
            ListsSelectors.currenciesAddModalPaymentTypeSelectOptions().should('not.exist')
        }
        if (checkboxes) {
            ListsSelectors.currenciesAddModalCheckboxes(checkboxes).check({ force: true })
        }
        cy.wait(500)
        ListsSelectors.currenciesAddModalCurrencyTypeSelect().invoke('text').then((text) => {
            invokedObj.currType = text.trim()
        })
        ListsSelectors.currenciesAddModalPaymentTypeSelect().invoke('text').then((text) => {
            invokedObj.payType = text.trim()
        })
        ListsSelectors.currenciesAddModalNameInput().invoke('val').then((val) => {
            invokedObj.name = val?.toString().trim()
        })
        ListsSelectors.currenciesAddModalSaveButton().should('be.visible').click()
        return cy.wrap(null).then(() => invokedObj)
    }

    static currencyEdit = ({
                               editCurrency,
                               data,
                               currencyType,
                               paymentType,
                               checkboxes,
                           }: {
        editCurrency: Cypress.Chainable<JQuery<HTMLElement>>;
        data: Partial<productCurrenciesAddFields>;
        currencyType?: productCurrenciesCurrencyTypes;
        paymentType?: productCurrenciesPaymentTypes;
        checkboxes?: productCurrenciesCheckboxes;
    }) => {
        const invokedObj: { currType?: string; payType?: string; name?: string } = {}

        editCurrency.closest('tr').within(() => {
            ListsSelectors.currenciesTbodyEditButtons().should("be.visible").click()
        })
        ListsSelectors.currenciesEditModal().should("be.visible")

        if (data.name) {
            ListsSelectors.currenciesEditModalNameInput()
                .clear()
                .type(data.name)
                .should("have.value", data.name)
        }

        if (data.shortName) {
            ListsSelectors.currenciesEditModalShortNameInput()
                .clear()
                .type(data.shortName)
                .should("have.value", data.shortName)
        }

        if (data.rounding) {
            ListsSelectors.currenciesEditModalRoundingInput()
                .clear()
                .type(String(data.rounding))
                .should("have.value", String(data.rounding))
        }
        if (currencyType) {
            ListsSelectors.currenciesEditModalCurrencyTypeSelect().click({ force: true })
            ListsSelectors.currenciesEditModalCurrencyTypeSelectOptions().should("be.visible")
            ListsSelectors.currenciesEditModalCurrencyTypeSelectOption(currencyType).click({ force: true })
            ListsSelectors.currenciesEditModalCurrencyTypeSelectOptions().should("not.exist")
        }

        if (paymentType) {
            ListsSelectors.currenciesEditModalPaymentTypeSelect().click({ force: true })
            ListsSelectors.currenciesEditModalPaymentTypeSelectOptions().should("be.visible")
            ListsSelectors.currenciesEditModalPaymentTypeSelectOption(paymentType).click({ force: true })
            ListsSelectors.currenciesEditModalPaymentTypeSelectOptions().should("not.exist")
        }
        if (checkboxes) {
            ListsSelectors.currenciesEditModalCheckboxes(checkboxes).check({ force: true })
        }
        cy.wait(500)
        ListsSelectors.currenciesEditModalCurrencyTypeSelect().invoke("text").then((text) => {
            invokedObj.currType = text.trim()
        })
        ListsSelectors.currenciesEditModalPaymentTypeSelect().invoke("text").then((text) => {
            invokedObj.payType = text.trim()
        })
        ListsSelectors.currenciesEditModalNameInput().invoke("val").then((val) => {
            invokedObj.name = val?.toString().trim()
        })
        ListsSelectors.currenciesEditModalSaveButton().should("be.visible").click()
        return cy.wrap(null).then(() => invokedObj)
    }
}