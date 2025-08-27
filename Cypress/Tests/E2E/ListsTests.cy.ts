import {ListsSelectors} from "../../Fixtures/Selectors/ListsSelectors";
import {ListsMethods} from "../../Fixtures/Methods/ListsMethods";
import {ListsGenerators} from "../../Fixtures/Generators/ListsGenerators";
import {SignInMethods} from "../../Fixtures/Methods/SignInMethods";
import {SignInGenerators} from "../../Fixtures/Generators/SignInGenerators";
import {HomePageMethods} from "../../Fixtures/Methods/HomePageMethods";
import {Languages} from "../../Fixtures/Models/HomePageModels";
import {HomePageSelectors} from "../../Fixtures/Selectors/HomePageSelectors";
import {CategoryTypesTheadSequence, unitOfMeasurementTheadSequence} from "../../Fixtures/Models/ListsModels";
import {ProductsSelectors} from "../../Fixtures/Selectors/ProductsSelectors";
import {ProductTheadSequence} from "../../Fixtures/Models/ProductsModels";

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
            ListsSelectors.unitOfMeasurementEmptyFieldErrorMessage().should('be.visible')
            ListsSelectors.unitOfMeasurementAddModalNameInput().type('/,.1231232131233123213213213.,/')
            ListsSelectors.unitOfMeasurementAddModalSaveButton().click()
            ListsSelectors.unitOfMeasurementEmptyFieldErrorMessage().should('be.visible')
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
    context.only('Category Types Positive', () => {
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
})