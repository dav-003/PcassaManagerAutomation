import {ProductsSelectors} from "../../Fixtures/Selectors/ProductsSelectors";
import {SignInMethods} from "../../Fixtures/Methods/SignInMethods";
import {SignInGenerators} from "../../Fixtures/Generators/SignInGenerators";
import {HomePageMethods} from "../../Fixtures/Methods/HomePageMethods";
import {Languages} from "../../Fixtures/Models/HomePageModels";
import {HomePageSelectors} from "../../Fixtures/Selectors/HomePageSelectors";
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
        it('Should check cases with product tools', () => {
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
            ProductsSelectors.groupRightClickModalDeleteOption().click()
            ProductsSelectors.deleteNotificationModalDeleteOption().click()
            ProductsSelectors.groupsTree().contains(randomGroupName).should('not.exist')
        })
    })
})