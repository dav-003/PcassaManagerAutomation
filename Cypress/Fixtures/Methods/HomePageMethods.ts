import {HomePageSelectors} from "../Selectors/HomePageSelectors";

export class HomePageMethods {

    static OpenSideBar = () => {
        HomePageSelectors.burgerButton().click()
        HomePageSelectors.sidebarMenu().should('be.visible')
    }
}