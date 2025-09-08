import {ListsSelectors} from "../../Fixtures/Selectors/ListsSelectors";
import {ListsMethods} from "../../Fixtures/Methods/ListsMethods";
import {SignInMethods} from "../../Fixtures/Methods/SignInMethods";
import {SignInGenerators} from "../../Fixtures/Generators/SignInGenerators";
import {HomePageMethods} from "../../Fixtures/Methods/HomePageMethods";
import {Languages} from "../../Fixtures/Models/HomePageModels";
import {HomePageSelectors} from "../../Fixtures/Selectors/HomePageSelectors";
import {ActsSelectors} from "../../Fixtures/Selectors/ActsSelectors";
import {
    cashRegisterTypesTheadSequence,
    CategoryTypesTheadSequence,
    listOfPaymentsTheadSequence, listOfWarehousesTheadSequence,
    unitOfMeasurementTheadSequence
} from "../../Fixtures/Models/ListsModels";
import {ProductsSelectors} from "../../Fixtures/Selectors/ProductsSelectors";
import {ProductTheadSequence} from "../../Fixtures/Models/ProductsModels";
import {ActsListTheadSequence} from "../../Fixtures/Models/ActsModels";
import {ListsGenerators} from "../../Fixtures/Generators/ListsGenerators";
import {ActsMethods} from "../../Fixtures/Methods/ActsMethods";
import {CashOrderSelectors} from "../../Fixtures/Selectors/CashOrderSelectors";
import {CashOrderMethods} from "../../Fixtures/Methods/CashOrderMethods";
import {CashOrderListTheadSequence} from "../../Fixtures/Models/CashOrderModels";

describe('Lists', ()=> {

    context('Unit Of Measurements Positive', () => {
        beforeEach(() => {
            cy.session('user4004', () => {
                cy.visit('/')
                SignInMethods.SignIn(
                    SignInGenerators.User4004.username,
                    SignInGenerators.User4004.password
                )
            })
            cy.visit('/')
            HomePageMethods.changeLanguage(Languages.English)
        })
        afterEach(() => {
            cy.clearCookies();
            cy.window().then(win => {
                Object.keys(win.localStorage).forEach(key => {
                    if (['admin', 'code', 'deviceId'].indexOf(key) === -1) {
                        win.localStorage.removeItem(key);
                    }
                })
            })
        })
        it('Should add unit of measurement and Edit', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsUnitOfMeasurementsButton().click()
            ListsMethods.AddUnitOfMeasurement().then(name => {
                ListsSelectors.unitOfMeasurementAddModal().should('not.be.visible');
                ListsMethods.EditUnitOfMeasurement(name).then(newName => {
                    ListsSelectors.unitOfMeasurementItems()
                        .find('td')
                        .eq(unitOfMeasurementTheadSequence.Name)
                        .contains(newName);
                })
            })
        })
        it('Should delete added unit of measurement', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsUnitOfMeasurementsButton().click()
            ListsSelectors.unitOfMeasurementItems().last().find('td').eq(unitOfMeasurementTheadSequence.Name).invoke("text").then((deletedItemName) => {
                ListsSelectors.unitOfMeasurementDeleteButtons().last().click()
                ListsSelectors.unitOfMeasurementDeleteModal().should('be.visible')
                ListsSelectors.unitOfMeasurementDeleteModalDeleteButton().click()
                ListsSelectors.unitOfMeasurementDeleteModal().should('not.be.visible')
                ListsSelectors.unitOfMeasurementSuccessDeleteToast().should('be.visible')
                ListsSelectors.unitOfMeasurementItems().should('not.contain', deletedItemName.trim())
            })
        })
        it('Should check used unit delete and edit case', () => {
            HomePageSelectors.sidebarProductsButton().click()
            ProductsSelectors.productsTbodyRow(0)
                .find('td')
                .eq(ProductTheadSequence.UnitOfMeasurement)
                .invoke("text")
                .then((unit) => {
                    HomePageSelectors.sidebarListsButton().click()
                    HomePageSelectors.sidebarListsUnitOfMeasurementsButton().click()
                    ListsSelectors.unitOfMeasurementItems()
                        .contains('td', unit)
                        .parents('tr')
                        .within(() => {
                            ListsSelectors.unitOfMeasurementDeleteButtons().click()
                        })
                    ListsSelectors.unitOfMeasurementDeleteModal().should('be.visible')
                    ListsSelectors.unitOfMeasurementDeleteModalDeleteButton().click()
                    ListsSelectors.unitOfMeasurementDeleteModal().should('not.be.visible')
                    ListsSelectors.unitOfMeasurementInvalidDeleteToast().should('be.visible')
                    ListsSelectors.unitOfMeasurementItems()
                        .contains('td', unit)
                        .parents('tr')
                        .within(() => {
                            ListsSelectors.unitOfMeasurementEditButtons().click()
                        })
                    ListsSelectors.unitOfMeasurementEditModal().should('be.visible')
                    ListsSelectors.unitOfMeasurementEditModalNameInput().type('123')
                    ListsSelectors.unitOfMeasurementEditModalSaveButton().click()
                    ListsSelectors.unitOfMeasurementInvalidEditToast().should('be.visible')
                })
        })
    })
    context('Unit Of Measurements Negative', () => {
        beforeEach(() => {
            cy.session('user4004', () => {
                cy.visit('/')
                SignInMethods.SignIn(
                    SignInGenerators.User4004.username,
                    SignInGenerators.User4004.password
                )
            })
            cy.visit('/')
        })
        afterEach(() => {
            cy.clearCookies();
            cy.window().then(win => {
                Object.keys(win.localStorage).forEach(key => {
                    if (['admin', 'code', 'deviceId'].indexOf(key) === -1) {
                        win.localStorage.removeItem(key);
                    }
                })
            })
        })
        it('Should check unit of measurement invalid create', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsUnitOfMeasurementsButton().click()
            ListsSelectors.unitOfMeasurementAddButton().click()
            ListsSelectors.unitOfMeasurementAddModal().should('be.visible')
            ListsSelectors.unitOfMeasurementAddModalNameInput().type('   ')
            ListsSelectors.unitOfMeasurementAddModalSaveButton().click()
            ListsSelectors.unitOfMeasurementValidationErrorMessage().should('be.visible')
            ListsSelectors.unitOfMeasurementAddModalNameInput().type('/,.1231232131233123213213213.,/')
            ListsSelectors.unitOfMeasurementAddModalSaveButton().click()
            ListsSelectors.unitOfMeasurementValidationErrorMessage().should('be.visible')
        })
        it('Should check unit of measurement create with the same name', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsUnitOfMeasurementsButton().click()
            ListsSelectors.unitOfMeasurementItem(0).find('td').eq(unitOfMeasurementTheadSequence.Name).invoke("text").then((name) => {
                ListsSelectors.unitOfMeasurementAddButton().click()
                ListsSelectors.unitOfMeasurementAddModal().should('be.visible')
                ListsSelectors.unitOfMeasurementAddModalNameInput().type(name)
                ListsSelectors.unitOfMeasurementAddModalSaveButton().click()
                ListsSelectors.unitOfMeasurementExistUnitToast().should('be.visible')
            })
        })
    })
    context('Category Types Positive', () => {
        beforeEach(() => {
            cy.session('user4004', () => {
                cy.visit('/')
                SignInMethods.SignIn(
                    SignInGenerators.User4004.username,
                    SignInGenerators.User4004.password
                )
            })
            cy.visit('/')
            HomePageMethods.changeLanguage(Languages.English)
        })
        afterEach(() => {
            cy.clearCookies();
            cy.window().then(win => {
                Object.keys(win.localStorage).forEach(key => {
                    if (['admin', 'code', 'deviceId'].indexOf(key) === -1) {
                        win.localStorage.removeItem(key);
                    }
                })
            })
        })
        it('Should add category type & edit', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsCategoriesButton().click()
            ListsMethods.AddCategoryType().then(name => {
                ListsSelectors.categoryTypesAddModal().should('not.be.visible')
                ListsMethods.EditCategoryType(name).then(newName => {
                    ListsSelectors.categoryTypesItems()
                        .find('td')
                        .eq(CategoryTypesTheadSequence.Name)
                        .contains(newName)
                })
            })
        })
        it('Should delete added category type', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsCategoriesButton().click()
            ListsSelectors.categoryTypesItems().last().find('td').eq(CategoryTypesTheadSequence.Name).invoke("text").then((deletedItemName) => {
                ListsSelectors.categoryTypesDeleteButtons().last().click()
                ListsSelectors.categoryTypesDeleteModal().should('be.visible')
                ListsSelectors.categoryTypesDeleteModalDeleteButton().click()
                ListsSelectors.categoryTypesDeleteModal().should('not.be.visible')
                ListsSelectors.categoryTypesSuccessDeleteToast().should('be.visible')
                ListsSelectors.categoryTypesItems().should('not.contain', deletedItemName.trim())
            })
        })
        it('Should check used unit delete and edit case', () => {
            HomePageSelectors.sidebarProductsButton().click()
            ProductsSelectors.productsTbodyRow(0).rightclick()
            ProductsSelectors.productRightClickModalEditButton().click()
            ProductsSelectors.editProductSidebarModal().should('be.visible')
            ProductsSelectors.productEditSidebarProductCategorySelect().invoke('text').then((category) => {
                ProductsSelectors.productEditSidebarCloseButton().click()
                HomePageSelectors.sidebarListsButton().click()
                HomePageSelectors.sidebarListsCategoriesButton().click()
                ListsSelectors.categoryTypesItems()
                    .contains('td', category)
                    .parents('tr')
                    .within(() => {
                        ListsSelectors.categoryTypesDeleteButtons().click()
                    })
                ListsSelectors.categoryTypesDeleteModal().should('be.visible')
                ListsSelectors.categoryTypesDeleteModalDeleteButton().click()
                ListsSelectors.categoryTypesDeleteModal().should('not.be.visible')
                ListsSelectors.categoryTypesInvalidDeleteToast().should('be.visible')
                ListsSelectors.categoryTypesItems()
                    .contains('td', category)
                    .parents('tr')
                    .within(() => {
                        ListsSelectors.categoryTypesEditButtons().click()
                    })
                ListsSelectors.categoryTypesEditModal().should('be.visible')
                ListsSelectors.categoryTypesEditModalNameInput().type('123')
                ListsSelectors.categoryTypesEditModalSaveButton().click()
                ListsSelectors.categoryTypesInvalidEditToast().should('be.visible')
            })
        })
    })
    context('Category Types Negative', () => {
        beforeEach(() => {
            cy.session('user4004', () => {
                cy.visit('/')
                SignInMethods.SignIn(
                    SignInGenerators.User4004.username,
                    SignInGenerators.User4004.password
                )
            })
            cy.visit('/')
            HomePageMethods.changeLanguage(Languages.English)
        })
        afterEach(() => {
            cy.clearCookies();
            cy.window().then(win => {
                Object.keys(win.localStorage).forEach(key => {
                    if (['admin', 'code', 'deviceId'].indexOf(key) === -1) {
                        win.localStorage.removeItem(key);
                    }
                })
            })
        })
        it('Should check category type invalid create', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsCategoriesButton().click()
            ListsSelectors.categoryTypesAddButton().click()
            ListsSelectors.categoryTypesAddModal().should('be.visible')
            ListsSelectors.categoryTypesAddModalSaveButton().click()
            ListsSelectors.categoryTypesValidationErrorMessage().should('be.visible')
            ListsSelectors.categoryTypesAddModalNameInput().type('   ')
            ListsSelectors.categoryTypesAddModalSaveButton().click()
            ListsSelectors.categoryTypesValidationErrorMessage().should('be.visible')
            ListsSelectors.categoryTypesAddModalNameInput().clear().type('/,.1231232131233123213213213.,/')
            ListsSelectors.categoryTypesAddModalSaveButton().click()
            ListsSelectors.categoryTypesValidationErrorMessage().should('be.visible')
        })
        it('Should check category type create with the same name', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsCategoriesButton().click()
            ListsSelectors.categoryTypesItem(0).find('td').eq(CategoryTypesTheadSequence.Name).invoke("text").then((name) => {
                ListsSelectors.categoryTypesAddButton().click()
                ListsSelectors.categoryTypesAddModal().should('be.visible')
                ListsSelectors.categoryTypesAddModalNameInput().type(name)
                ListsSelectors.categoryTypesAddModalSaveButton().click()
                ListsSelectors.categoryTypesExistCategoryToast().should('be.visible')
            })
        })
    })
    context('List Of Payments Positive', () => {
        beforeEach(() => {
            cy.session('user4004', () => {
                cy.visit('/')
                SignInMethods.SignIn(
                    SignInGenerators.User4004.username,
                    SignInGenerators.User4004.password
                )
            })
            cy.visit('/')
            HomePageMethods.changeLanguage(Languages.English)
        })
        it('Should add list of payment & edit', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsPaymentListButton().click()
            ListsMethods.AddListOfPayments().then(name => {
                ListsSelectors.listOfPaymentsAddModal().should('not.be.visible')
                ListsMethods.EditListOfPayments(name).then(newName => {
                    ListsSelectors.listOfPaymentsTbodyItems()
                        .find('td')
                        .eq(listOfPaymentsTheadSequence.Name)
                        .contains(newName)
                })
            })
        })
        it('Should delete added list of payment', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsPaymentListButton().click()
            ListsSelectors.listOfPaymentsTbodyItems().last().find('td').eq(listOfPaymentsTheadSequence.Name).invoke("text").then((deletedItemName) => {
                ListsSelectors.listOfPaymentsDeleteButtons().last().click()
                ListsSelectors.listOfPaymentsDeleteModal().should('be.visible')
                ListsSelectors.listOfPaymentsDeleteModalDeleteButton().click()
                ListsSelectors.listOfPaymentsDeleteModal().should('not.be.visible')
                ListsSelectors.listOfPaymentsSuccessDeleteToast().should('be.visible')
                ListsSelectors.listOfPaymentsTbodyItems().should('not.contain', deletedItemName.trim())
            })
        })
        it('Should check used list of payment delete and edit case', () => {
            HomePageSelectors.sidebarActsButton().click()
            HomePageSelectors.sidebarActsListOfActsButton().click()
            ActsSelectors.listOfActsDateFromInput().click()
            ActsSelectors.listOfActsDateFromModal().should('be.visible')
            ActsMethods.SelectDate(1, "JAN", 2024)
            ActsSelectors.listOfActsTbodyRow(0).find('td').eq(ActsListTheadSequence.paymentType).invoke("text").then((paymentType) => {
                HomePageSelectors.sidebarListsButton().click()
                HomePageSelectors.sidebarListsPaymentListButton().click()
                ListsSelectors.listOfPaymentsTbodyItems()
                    .contains('td', paymentType)
                    .parents('tr')
                    .within(() => {
                        ListsSelectors.listOfPaymentsDeleteButtons().click()
                    })
                ListsSelectors.listOfPaymentsDeleteModal().should('be.visible')
                ListsSelectors.listOfPaymentsDeleteModalDeleteButton().click()
                ListsSelectors.listOfPaymentsDeleteModal().should('not.be.visible')
                ListsSelectors.listOfPaymentsInvalidDeleteToast().should('be.visible')
                ListsSelectors.listOfPaymentsTbodyItems()
                    .contains('td', paymentType)
                    .parents('tr').within(() => {
                        ListsSelectors.listOfPaymentsEditButtons().click()
                    })
                ListsSelectors.listOfPaymentsEditModal().should('be.visible')
                ListsSelectors.listOfPaymentsEditModalNameInput()
                    .clear()
                    .type(paymentType.trim() + '123')
                ListsSelectors.listOfPaymentsEditModalSaveButton().click()
                ListsSelectors.listOfPaymentsSuccessEditToast().should('be.visible')
                ListsSelectors.listOfPaymentsTbodyItems()
                    .should(($tbody) => {
                        expect($tbody.text()).to.include(paymentType.trim() + '123')
                    })
            })
        })
    })
    context('List Of Payments Negative', () => {
        beforeEach(() => {
            cy.session('user4004', () => {
                cy.visit('/')
                SignInMethods.SignIn(
                    SignInGenerators.User4004.username,
                    SignInGenerators.User4004.password
                )
            })
            cy.visit('/')
            HomePageMethods.changeLanguage(Languages.English)
        })
        it('Should check list of payment invalid create', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsPaymentListButton().click()
            ListsSelectors.listOfPaymentsAddButton().click()
            ListsSelectors.listOfPaymentsAddModal().should('be.visible')
            ListsSelectors.listOfPaymentsAddModalSaveButton().click()
            ListsSelectors.listOfPaymentsValidationErrorMessage().should('be.visible')
            ListsSelectors.listOfPaymentsAddModalNameInput().type('   ')
            ListsSelectors.listOfPaymentsAddModalSaveButton().click()
            ListsSelectors.listOfPaymentsValidationErrorMessage().should('be.visible')
            ListsSelectors.listOfPaymentsAddModalNameInput().clear().type('/,.1231232131233123213213213.,/')
            ListsSelectors.listOfPaymentsAddModalSaveButton().click()
            ListsSelectors.listOfPaymentsValidationErrorMessage().should('be.visible')
        })
        it('Should check list of payment creation with the same name', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsPaymentListButton().click()
            ListsSelectors.listOfPaymentsTbodyItem(0).find('td').eq(listOfPaymentsTheadSequence.Name).invoke("text").then((name) => {
                ListsSelectors.listOfPaymentsAddButton().click()
                ListsSelectors.listOfPaymentsAddModalNameInput().type(name)
                ListsSelectors.listOfPaymentsAddModalSaveButton().click()
                ListsSelectors.listOfPaymentsExistPaymentToast().should('be.visible')
            })
        })
        it('Should check list of payment edit cases', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsPaymentListButton().click()
            ListsSelectors.listOfPaymentsTbodyItem(1).find('td').eq(listOfPaymentsTheadSequence.Name).invoke("text").then((name) => {
                ListsSelectors.listOfPaymentsEditButton(0).click()
                ListsSelectors.listOfPaymentsEditModal().should('be.visible')
                ListsSelectors.listOfPaymentsEditModalNameInput().clear()
                ListsSelectors.listOfPaymentsEditModalSaveButton().click()
                ListsSelectors.listOfPaymentsValidationErrorMessage().should('be.visible')
                ListsSelectors.listOfPaymentsEditModalNameInput().type(name)
                ListsSelectors.listOfPaymentsEditModalSaveButton().click()
                ListsSelectors.listOfPaymentsExistPaymentToast().should('be.visible')
            })
        })
    })
    context('List of warehouses Positive', () => {
        beforeEach(() => {
            cy.session('user4004', () => {
                cy.visit('/')
                SignInMethods.SignIn(
                    SignInGenerators.User4004.username,
                    SignInGenerators.User4004.password
                )
            })
            cy.visit('/')
            HomePageMethods.changeLanguage(Languages.English)
        })
        it('Should add list of warehouses & edit', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsWarehousesButton().click()
            ListsMethods.AddListOfWarehouses().then(name => {
                ListsSelectors.listOfWarehousesAddModal().should('not.be.visible')
                ListsMethods.EditListOfWarehouses(name).then(newName => {
                    ListsSelectors.listOfWarehousesTbodyItems()
                        .find('td')
                        .eq(listOfWarehousesTheadSequence.Name)
                        .contains(newName)
                })
            })
        })
        it('Should delete added list of warehouses', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsWarehousesButton().click()
            ListsSelectors.listOfWarehousesTbodyItems().last().find('td').eq(listOfWarehousesTheadSequence.Name).invoke("text").then((deletedItemName) => {
                ListsSelectors.listOfWarehousesDeleteButtons().last().click()
                ListsSelectors.listOfWarehousesDeleteModal().should('be.visible')
                ListsSelectors.listOfWarehousesDeleteModalDeleteButton().click()
                ListsSelectors.listOfWarehousesDeleteModal().should('not.be.visible')
                ListsSelectors.listOfWarehousesSuccessDeleteToast().should('be.visible')
                ListsSelectors.listOfWarehousesTbodyItems().should('not.contain', deletedItemName.trim())
            })
        })
        it('Should check used list of warehouse delete and edit case', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsWarehousesButton().click()

            ListsSelectors.listOfWarehousesDeleteButtons().then(($buttons) => {
                let btnToClick
                if ($buttons.eq(0).is(':disabled')) {
                    btnToClick = $buttons.eq(1)
                } else {
                    btnToClick = $buttons.eq(0)
                }

                cy.wrap(btnToClick).click()
                ListsSelectors.listOfWarehousesDeleteModal().should('be.visible')
                ListsSelectors.listOfWarehousesDeleteModalDeleteButton().click()
                ListsSelectors.listOfWarehousesDeleteModal().should('not.be.visible')
                ListsSelectors.listOfWarehousesInvalidDeleteToast().should('be.visible')

                ListsSelectors.listOfWarehousesTbodyItem(0)
                    .find('td')
                    .eq(listOfWarehousesTheadSequence.Name)
                    .invoke('text')
                    .then((name) => {
                        ListsSelectors.listOfWarehousesEditButton(0).click()
                        ListsSelectors.listOfWarehousesEditModal().should('be.visible')
                        ListsSelectors.listOfWarehousesEditModalNameInput().clear().type('123')
                        ListsSelectors.listOfWarehousesEditModalSaveButton().click()
                        ListsSelectors.listOfWarehousesSuccessEditToast().should('be.visible')

                        ListsSelectors.listOfWarehousesTbodyItem(0)
                            .find('td')
                            .eq(listOfWarehousesTheadSequence.Name)
                            .should('have.text', '123')

                        ListsSelectors.listOfWarehousesEditButton(0).click()
                        ListsSelectors.listOfWarehousesEditModal().should('be.visible')
                        ListsSelectors.listOfWarehousesEditModalNameInput().clear().type(name.trim())
                        ListsSelectors.listOfWarehousesEditModalSaveButton().click()
                        ListsSelectors.listOfWarehousesSuccessEditToast().should('be.visible')

                        ListsSelectors.listOfWarehousesTbodyItem(0)
                            .find('td')
                            .eq(listOfWarehousesTheadSequence.Name)
                            .should('have.text', name.trim())
                    })
            })
        })
    })
    context('List of warehouses Negative', () => {
        beforeEach(() => {
            cy.session('user4004', () => {
                cy.visit('/')
                SignInMethods.SignIn(
                    SignInGenerators.User4004.username,
                    SignInGenerators.User4004.password
                )
            })
            cy.visit('/')
            HomePageMethods.changeLanguage(Languages.English)
        })
        it('Should check list of warehouses invalid create', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsWarehousesButton().click()
            ListsSelectors.listOfWarehousesAddButton().click()
            ListsSelectors.listOfWarehousesAddModal().should('be.visible')
            ListsSelectors.listOfWarehousesAddModalSaveButton().click()
            ListsSelectors.listOfWarehousesValidationErrorMessage().should('be.visible')
            ListsSelectors.listOfWarehousesAddModalNameInput().type('   ')
            ListsSelectors.listOfWarehousesAddModalSaveButton().click()
            ListsSelectors.listOfWarehousesValidationErrorMessage().should('be.visible')
            ListsSelectors.listOfWarehousesAddModalNameInput().clear().type('/,.1231232131233123213213213.,/')
            ListsSelectors.listOfWarehousesAddModalSaveButton().click()
            ListsSelectors.listOfWarehousesValidationErrorMessage().should('be.visible')
        })
        it('Should check list of warehouses creation with the same name', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsWarehousesButton().click()
            ListsSelectors.listOfWarehousesTbodyItem(0).find('td').eq(listOfWarehousesTheadSequence.Name).invoke("text").then((name) => {
                ListsSelectors.listOfWarehousesAddButton().click()
                ListsSelectors.listOfWarehousesAddModalNameInput().type(name)
                ListsSelectors.listOfWarehousesAddModalSaveButton().click()
                ListsSelectors.listOfWarehousesExistWarehouseToast().should('be.visible')
            })
        })
        it('Should check list of warehouses edit cases', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsWarehousesButton().click()
            ListsSelectors.listOfWarehousesTbodyItem(1).find('td').eq(listOfWarehousesTheadSequence.Name).invoke("text").then((name) => {
                ListsSelectors.listOfWarehousesEditButton(0).click()
                ListsSelectors.listOfWarehousesEditModal().should('be.visible')
                ListsSelectors.listOfWarehousesEditModalNameInput().clear()
                ListsSelectors.listOfWarehousesEditModalSaveButton().click()
                ListsSelectors.listOfWarehousesValidationErrorMessage().should('be.visible')
                ListsSelectors.listOfWarehousesEditModalNameInput().type(name)
                ListsSelectors.listOfWarehousesEditModalSaveButton().click()
                ListsSelectors.listOfWarehousesExistWarehouseToast().should('be.visible')
            })
        })
    })
    context("Cash register types Positive", () => {
        beforeEach(() => {
            cy.session('user4004', () => {
                cy.visit('/')
                SignInMethods.SignIn(
                    SignInGenerators.User4004.username,
                    SignInGenerators.User4004.password
                )
            })
            cy.visit('/')
            HomePageMethods.changeLanguage(Languages.English)
        })
        it('Should add cash register type & edit', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsCashRegisterTypesButton().click()
            ListsMethods.AddCashRegisterType({
                name: ListsGenerators.cashRegisterTypesNameField().name,
                bankAccount: ListsGenerators.cashRegisterTypesBankAccountField().bankAccount,
                description: ListsGenerators.cashRegisterTypesDescriptionField().description
            }).then(cashRegister => {
                ListsSelectors.cashRegisterTypesSuccessAddToast().should('be.visible').click()
                ListsSelectors.cashRegisterTypesTbodyItem(0)
                    .find('td')
                    .eq(cashRegisterTypesTheadSequence.Name)
                    .should('contain.text', cashRegister.name)
                ListsSelectors.cashRegisterTypesTbodyItem(0)
                    .find('td')
                    .eq(cashRegisterTypesTheadSequence.BankAccount)
                    .should('contain.text', cashRegister.bankAccount)
                ListsSelectors.cashRegisterTypesTbodyItem(0)
                    .find('td')
                    .eq(cashRegisterTypesTheadSequence.Description)
                    .should('contain.text', cashRegister.description)
                ListsMethods.EditCashRegisterType({
                    name: ListsGenerators.cashRegisterTypesNameField().name,
                    bankAccount: ListsGenerators.cashRegisterTypesBankAccountField().bankAccount,
                    description: ListsGenerators.cashRegisterTypesDescriptionField().description
                }, 0)
                ListsSelectors.cashRegisterTypesSuccessEditToast().should('be.visible').click()
            })
        })
        it('Should delete added cash register type', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsCashRegisterTypesButton().click()
            ListsSelectors.cashRegisterTypesTbodyItems().last().find('td').eq(cashRegisterTypesTheadSequence.Name).invoke("text").then((deletedItemName) => {
                ListsSelectors.cashRegisterTypesDeleteButtons().last().click()
                ListsSelectors.cashRegisterTypesDeleteModal().should('be.visible')
                ListsSelectors.cashRegisterTypesDeleteModalDeleteButton().click()
                ListsSelectors.cashRegisterTypesDeleteModal().should('not.be.visible')
                ListsSelectors.cashRegisterTypesSuccessDeleteToast().should('be.visible')
                ListsSelectors.cashRegisterTypesTbodyItems().should('not.contain', deletedItemName.trim())
            })
        })
        it('Should check used cash register type delete and edit case', () => {
            HomePageSelectors.sidebarCashOrderButton().click()
            HomePageSelectors.sidebarCashOrderListOfCashOrdersButton().click()
            CashOrderSelectors.listOfCashOrderDateFromInput().click()
            CashOrderSelectors.listOfCashOrderDateFromModal().should('be.visible')
            CashOrderMethods.SelectDate(1, "DEC", 2024)
            CashOrderSelectors.listOfCashOrderTbodyRow(0).find('td').eq(CashOrderListTheadSequence.cashRegisterType).invoke("text").then((cashRegisterType) => {
                HomePageSelectors.sidebarListsButton().click()
                HomePageSelectors.sidebarListsCashRegisterTypesButton().click()
                ListsSelectors.cashRegisterTypesTbodyItems().contains('td', cashRegisterType).parents('tr').within(() => {
                    ListsSelectors.cashRegisterTypesDeleteButtons().click()
                })
                ListsSelectors.cashRegisterTypesDeleteModal().should('be.visible')
                ListsSelectors.cashRegisterTypesDeleteModalDeleteButton().click()
                ListsSelectors.cashRegisterTypesDeleteModal().should('not.be.visible')
                ListsSelectors.cashRegisterTypesInvalidDeleteToast().should('be.visible')
                ListsSelectors.cashRegisterTypesTbodyItems().contains('td', cashRegisterType).parents('tr').within(() => {
                    ListsSelectors.cashRegisterTypesEditButtons().click()
                })
                ListsSelectors.cashRegisterTypesEditModal().should('be.visible')
                ListsSelectors.cashRegisterTypesEditModalNameInput().clear().type(cashRegisterType.trim() + '123')
                ListsSelectors.cashRegisterTypesEditModalSaveButton().click()
                ListsSelectors.cashRegisterTypesSuccessEditToast().should('be.visible')
                ListsSelectors.cashRegisterTypesTbodyItems().should(($tbody) => {
                    expect($tbody.text()).to.include(cashRegisterType.trim() + '123')
                })
            })
        })
    })
    context("Cash register types Negative", () => {
        beforeEach(() => {
            cy.session('user4004', () => {
                cy.visit('/')
                SignInMethods.SignIn(
                    SignInGenerators.User4004.username,
                    SignInGenerators.User4004.password
                )
            })
            cy.visit('/')
            HomePageMethods.changeLanguage(Languages.English)
        })
        it('Should check cash register type empty create', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsCashRegisterTypesButton().click()
            ListsMethods.AddCashRegisterType({})
            ListsSelectors.cashRegisterTypesValidationErrorMessage().should('be.visible').and('have.length', 3)
            ListsSelectors.cashRegisterTypesAddModal().should('be.visible')
        })
        it('Should check cash register type create with only name', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsCashRegisterTypesButton().click()
            ListsMethods.AddCashRegisterType({
                name: ListsGenerators.cashRegisterTypesNameField().name
            })
            ListsSelectors.cashRegisterTypesValidationErrorMessage().should('be.visible').and('have.length', 2)
            ListsSelectors.cashRegisterTypesAddModal().should('be.visible')
        })
        it('Should check cash register type create with only bank account', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsCashRegisterTypesButton().click()
            ListsMethods.AddCashRegisterType({
                bankAccount: ListsGenerators.cashRegisterTypesBankAccountField().bankAccount
            })
            ListsSelectors.cashRegisterTypesValidationErrorMessage().should('be.visible').and('have.length', 2)
            ListsSelectors.cashRegisterTypesAddModal().should('be.visible')
        })
        it('Should check cash register type create with only description', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsCashRegisterTypesButton().click()
            ListsMethods.AddCashRegisterType({
                description: ListsGenerators.cashRegisterTypesDescriptionField().description
            })
            ListsSelectors.cashRegisterTypesValidationErrorMessage().should('be.visible').and('have.length', 2)
            ListsSelectors.cashRegisterTypesAddModal().should('be.visible')
        })
        it('Should check cash register type creation without name', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsCashRegisterTypesButton().click()
            ListsMethods.AddCashRegisterType({
                bankAccount: ListsGenerators.cashRegisterTypesBankAccountField().bankAccount,
                description: ListsGenerators.cashRegisterTypesDescriptionField().description
            })
            ListsSelectors.cashRegisterTypesValidationErrorMessage().should('be.visible').and('have.length', 1)
            ListsSelectors.cashRegisterTypesAddModal().should('be.visible')
        })
        it('Should check cash register type creation without bank account', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsCashRegisterTypesButton().click()
            ListsMethods.AddCashRegisterType({
                name: ListsGenerators.cashRegisterTypesNameField().name,
                description: ListsGenerators.cashRegisterTypesDescriptionField().description
            })
            ListsSelectors.cashRegisterTypesValidationErrorMessage().should('be.visible').and('have.length', 1)
            ListsSelectors.cashRegisterTypesAddModal().should('be.visible')
        })
        it('Should check cash register type creation without description', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsCashRegisterTypesButton().click()
            ListsMethods.AddCashRegisterType({
                name: ListsGenerators.cashRegisterTypesNameField().name,
                bankAccount: ListsGenerators.cashRegisterTypesBankAccountField().bankAccount
            })
            ListsSelectors.cashRegisterTypesValidationErrorMessage().should('be.visible').and('have.length', 1)
            ListsSelectors.cashRegisterTypesAddModal().should('be.visible')
        })
        it('Should check cash register type creation with long names', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsCashRegisterTypesButton().click()
            ListsSelectors.cashRegisterTypesAddButton().click()
            ListsSelectors.cashRegisterTypesAddModalNameInput().type('/1231!~^@~@^(__~_(+({}{L:":/.,mz@$^&#x351sa1234')
            ListsSelectors.cashRegisterTypesAddModalBankAccountInput().type('/1231!~^@~@^(__~_(+({}{L:":/.,mz@$^&#x351sa1234')
            ListsSelectors.cashRegisterTypesAddModalDescriptionInput().type('/1231!~^@~@^(__~_(+({}{L:":/.,mz@$^&#x351sa1234')
            ListsSelectors.cashRegisterTypesAddModalSaveButton().click()
            ListsSelectors.cashRegisterTypesValidationErrorMessage().should('be.visible').and('have.length', 3)
            ListsSelectors.cashRegisterTypesAddModal().should('be.visible')
        })
        it('Should check cash register type creation with same name', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsCashRegisterTypesButton().click()
            ListsSelectors.cashRegisterTypesTbodyItem(0).find('td').eq(cashRegisterTypesTheadSequence.Name).invoke("text").then((name) => {
                ListsMethods.AddCashRegisterType({
                    name: name,
                    bankAccount: ListsGenerators.cashRegisterTypesBankAccountField().bankAccount,
                    description: ListsGenerators.cashRegisterTypesDescriptionField().description
                })
                ListsSelectors.cashRegisterTypesExistCashRegisterTypeToast().should('be.visible')
            })
        })
        it('Should check cash register type edit cases', () => {
            HomePageSelectors.sidebarListsButton().click()
            HomePageSelectors.sidebarListsCashRegisterTypesButton().click()
            ListsSelectors.cashRegisterTypesTbodyItem(1).find('td').eq(cashRegisterTypesTheadSequence.Name).invoke("text").then((name) => {
                ListsSelectors.cashRegisterTypesEditButton(0).click()
                ListsSelectors.cashRegisterTypesEditModal().should('be.visible')
                ListsSelectors.cashRegisterTypesEditModalNameInput().clear()
                ListsSelectors.cashRegisterTypesEditModalSaveButton().click()
                ListsSelectors.cashRegisterTypesValidationErrorMessage().should('be.visible')
                ListsSelectors.cashRegisterTypesEditModalNameInput().type(name)
                ListsSelectors.cashRegisterTypesEditModalSaveButton().click()
                ListsSelectors.cashRegisterTypesExistCashRegisterTypeToast().should('be.visible')
                ListsSelectors.cashRegisterTypesEditModalBankAccountInput().clear()
                ListsSelectors.cashRegisterTypesEditModalSaveButton().click()
                ListsSelectors.cashRegisterTypesValidationErrorMessage().should('be.visible')
                ListsSelectors.cashRegisterTypesEditModalDescriptionInput().clear()
                ListsSelectors.cashRegisterTypesEditModalSaveButton().click()
                ListsSelectors.cashRegisterTypesValidationErrorMessage().should('be.visible')
                ListsSelectors.cashRegisterTypesEditModal().should('be.visible')
            })
        })
    })
})