import {HomePageSelectors} from "../Selectors/HomePageSelectors";
import {Languages} from "../Models/HomePageModels";

export class HomePageMethods {

    static OpenSideBar = () => {
        HomePageSelectors.burgerButton().click()
        HomePageSelectors.sidebarMenu().should('be.visible')
    }
    static changeLanguage = (language: Languages) => {
        HomePageSelectors.languageButton().click()
        HomePageSelectors.languageDropdownOptions(language).click()
    }
}