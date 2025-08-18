import {ListsSelectors} from "../../Fixtures/Selectors/ListsSelectors";
import {ListsMethods} from "../../Fixtures/Methods/ListsMethods";
import {ListsGenerators} from "../../Fixtures/Generators/ListsGenerators";
import {SignInMethods} from "../../Fixtures/Methods/SignInMethods";
import {SignInGenerators} from "../../Fixtures/Generators/SignInGenerators";
import {HomePageMethods} from "../../Fixtures/Methods/HomePageMethods";
import {Languages} from "../../Fixtures/Models/HomePageModels";
import {HomePageSelectors} from "../../Fixtures/Selectors/HomePageSelectors";
import {unitOfMeasurementTheadSequence} from "../../Fixtures/Models/ListsModels";

describe('Lists', ()=> {

    context('UnitOfMeasurementsPositive', () => {
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
            HomePageSelectors.sidebarListsButton().click();
            HomePageSelectors.sidebarListsUnitOfMeasurementsButton().click();
            ListsMethods.AddUnitOfMeasurement().then(name => {
                ListsSelectors.unitOfMeasurementAddModal().should('not.be.visible');
                ListsMethods.EditUnitOfMeasurement(name).then(newName => {
                    ListsSelectors.unitOfMeasurementItems()
                        .find('td')
                        .eq(unitOfMeasurementTheadSequence.Name)
                        .contains(newName);
                });
            });
        });
    })
})