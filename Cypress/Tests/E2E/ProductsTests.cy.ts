import {ProductsSelectors} from "../../Fixtures/Selectors/ProductsSelectors";
import {SignInMethods} from "../../Fixtures/Methods/SignInMethods";
import {SignInGenerators} from "../../Fixtures/Generators/SignInGenerators";
import {HomePageMethods} from "../../Fixtures/Methods/HomePageMethods";
import {Languages} from "../../Fixtures/Models/HomePageModels";
import {HomePageSelectors} from "../../Fixtures/Selectors/HomePageSelectors";
import {ProductsMethods} from "../../Fixtures/Methods/ProductsMethods";
import {ProductTheadRowSequence} from "../../Fixtures/Models/ProductsModels";
import Chance from 'chance';
const chance = new Chance();

describe('Products', () => {
    let randomGroupName = Chance().string({length: 10})

    context('Positive cases', () => {
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
        it('Should check cases with product group tools', () => {
            HomePageSelectors.sidebarProductsButton().click()
            ProductsSelectors.groupsSearchButton().click()
            ProductsSelectors.groupsSearchField().should('have.attr', 'placeholder', 'Search')
            ProductsSelectors.addGroupButton().click()
            ProductsSelectors.groupsSearchField().should('have.attr', 'placeholder', 'Add Group')
            ProductsSelectors.expandAllGroupsButton().click()
            ProductsSelectors.groupsTreeGroups().then(($groups) => {
                const allHaveOpen = [...$groups].every((el) =>
                    el.className.includes('_open')
                )
                expect(allHaveOpen).to.be.true
            })
            ProductsSelectors.foldGroupsButton().click()
            ProductsSelectors.groupsTreeGroups().then(($groups) => {
                const noneHaveOpen = [...$groups].every((el) =>
                    !el.className.includes('_open')
                )
                expect(noneHaveOpen).to.be.true
            })
            ProductsSelectors.deletedProductsButton().click()
            ProductsSelectors.deletedGroup().should('exist')
            ProductsSelectors.deletedProductsButton().click()
            ProductsSelectors.deletedGroup().should('not.be.visible')
            ProductsSelectors.addGroupButton().click()
            ProductsSelectors.addGroupField().type(randomGroupName).type('{enter}')
            ProductsSelectors.groupsTree().contains(randomGroupName).should('be.visible')
            ProductsSelectors.groupsTree().contains(randomGroupName).rightclick()
            cy.wait(400)
            ProductsSelectors.groupRightClickModalDeleteOption().click()
            ProductsSelectors.deleteNotificationModal().should('be.visible')
            ProductsSelectors.deleteNotificationModalDeleteOption().click()
            ProductsSelectors.groupsTree().contains(randomGroupName).should('not.exist')
            ProductsSelectors.groupSectionCloseButton().click()
            ProductsSelectors.productGroupsSection().should('not.be.visible')
            ProductsSelectors.groupSectionOpenButton().click()
            ProductsSelectors.productGroupsSection().should('be.visible')
        })
        it('Should check cases with product add modal', () => {
            HomePageSelectors.sidebarProductsButton().click()
            ProductsSelectors.productsAddButton().click()
            ProductsSelectors.addProductSidebarModal().should('be.visible')
            ProductsSelectors.addProductModalCloseButton().click()
            ProductsSelectors.addProductSidebarModal().should('not.be.visible')
            ProductsMethods.AddRandomProduct()
        })
        it('Should check select all checkbox cases', () => {
            HomePageSelectors.sidebarProductsButton().click()
            ProductsSelectors.productsTbodyAllCheckboxes().should('be.visible')
            ProductsSelectors.selectAllProductsCheckbox().check()
            ProductsSelectors.productsTbodyAllCheckboxes().should('be.checked')
            ProductsSelectors.selectAllProductsCheckbox().uncheck()
            ProductsSelectors.productsTbodyAllCheckboxes().should('not.be.checked')
        })
        it('Should check filtering cases', () => {
            const randomNumber = chance.integer({min: 1, max: 100})
            const randomNum1_10 = chance.integer({min: 1, max: 10})
            const wholesalePrice = 1500
            const retailPrice = 2000
            HomePageSelectors.sidebarProductsButton().click()
            ProductsSelectors.productsTbody().should('be.visible')
            ProductsSelectors.productsFilterButton().click()
            ProductsSelectors.productsFilterSection().should('be.visible')
            ProductsSelectors.productsFilterByCodeField().type(String(randomNumber))
            cy.wait(3000)
            ProductsSelectors.productsTbodyAllRows().each(($row) => {
                cy.wrap($row).find('td').eq(ProductTheadRowSequence.Code).contains(String(randomNumber))
            })
            ProductsSelectors.productsFilterByCodeField().clear()
            ProductsSelectors.productsFilterByNameField().type(String(randomNum1_10))
            cy.wait(3000)
            ProductsSelectors.productsTbodyAllRows().each(($row) => {
                cy.wrap($row).find('td').eq(ProductTheadRowSequence.Name).contains(String(randomNum1_10))
            })
            ProductsSelectors.productsFilterByNameField().clear()
            ProductsSelectors.productsFilterByBarcodeField().type(String(randomNumber))
            cy.wait(3000)
            ProductsSelectors.productsTbodyAllRows().each(($row) => {
                cy.wrap($row).find('td').eq(ProductTheadRowSequence.Barcode).contains(String(randomNumber))
            })
            ProductsSelectors.productsFilterByBarcodeField().clear()
            ProductsSelectors.productsFilterByBarcodeGroupField().type(String(randomNumber))
            cy.wait(3000)
            ProductsSelectors.productsTbodyAllRows().each(($row) => {
                cy.wrap($row).find('td').eq(ProductTheadRowSequence.BarcodeGroup).contains(String(randomNumber))
            })
            ProductsSelectors.productsFilterByBarcodeGroupField().clear()
            ProductsSelectors.productsFilterByWholesalePriceField().type(String(wholesalePrice))
            cy.wait(3000)
            ProductsSelectors.productsTbodyAllRows().each(($row) => {
                cy.wrap($row).find('td').eq(ProductTheadRowSequence.WholesalePrice).contains(String(wholesalePrice))
            })
            ProductsSelectors.productsFilterByWholesalePriceField().clear()
            ProductsSelectors.productsFilterByRetailPriceField().type(String(retailPrice))
            cy.wait(3000)
            ProductsSelectors.productsTbodyAllRows().each(($row) => {
                cy.wrap($row).find('td').eq(ProductTheadRowSequence.RetailPrice).contains(String(retailPrice))
            })
            ProductsSelectors.productsFilterByRetailPriceField().clear()
            ProductsSelectors.productsFilterButton().click()
            ProductsSelectors.productsFilterSection().should('not.be.visible')
        })
        it('Should check pagination work', () => {
            HomePageSelectors.sidebarProductsButton().click()
            ProductsSelectors.productsTbody().should('be.visible')
            ProductsSelectors.productsPaginationButton().click()
            ProductsSelectors.productsPaginationPagesOption5items().click()
            ProductsSelectors.productsTbodyAllRows().should('have.length', 5)
            ProductsSelectors.productsPaginationButton().click()
            ProductsSelectors.productsPaginationPagesOption10items().click()
            ProductsSelectors.productsTbodyAllRows().should('have.length', 10)
            ProductsSelectors.productsPaginationButton().click()
            ProductsSelectors.productsPaginationPagesOption15items().click()
            ProductsSelectors.productsTbodyAllRows().should('have.length', 15)
            ProductsSelectors.productsPaginationButton().click()
            ProductsSelectors.productsPaginationPagesOption30items().click()
            ProductsSelectors.productsTbodyAllRows().should('have.length', 30)
            ProductsSelectors.productsPaginationButton().click()
            ProductsSelectors.productsPaginationPagesOption50items().click()
            ProductsSelectors.productsTbodyAllRows().should('have.length', 50)
        })
        it('Should check product edit', () => {
            HomePageSelectors.sidebarProductsButton().click()
            ProductsSelectors.productsTbody().should('be.visible')
            ProductsMethods.editRandomProduct()
        })
        it('Should check product copy & delete', () => {
            HomePageSelectors.sidebarProductsButton().click()
            ProductsSelectors.productsTbodyRow(1).rightclick()
            ProductsSelectors.productRightClickModalCopyButton().click()
            ProductsSelectors.addProductModalNameInput().invoke('val').then(originalName => {
                const newName = originalName + ' copy'
                ProductsSelectors.addProductModalNameInput().clear().type(newName)
                ProductsSelectors.addProductModalAddButton().click()
                ProductsSelectors.successAddToastify().should('be.visible').click()
                ProductsSelectors.addProductSidebarModal().should('not.be.visible')
                ProductsSelectors.productsTbody().contains(newName).should('be.visible').rightclick()
                ProductsSelectors.productRightClickModalDeleteButton().click()
                ProductsSelectors.deleteNotificationModal().should('be.visible')
                ProductsSelectors.deleteNotificationModalDeleteOption().click()
                ProductsSelectors.productsTbody().contains(newName).should('not.exist')
            })
        })
        it('Should check grouped products edit', () => {
            HomePageSelectors.sidebarProductsButton().click()
            ProductsSelectors.productsTbodyRowCheckbox(0).check()
            ProductsSelectors.productsTbodyRowCheckbox(1).check()
            ProductsSelectors.actionsWithSelectedProductsButton().should('be.visible').click()
            ProductsSelectors.actionsWithSelectedProductsModalEditSelectedProductsButton().should('be.visible').click()
            ProductsMethods.editChoosedProductsAndValidateEdit([0,1])
        })
    })
})