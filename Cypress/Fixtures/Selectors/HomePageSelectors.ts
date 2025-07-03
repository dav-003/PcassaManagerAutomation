export class HomePageSelectors {
    static pcassaSvg = () => cy.get('[alt="Pcassa"][class*=\'_logo\']')

    static burgerButton = () => cy.get('[class*="_navbar_menu"]')

    static searchField = () => cy.get('[class*=\'_burger\'] [class*="_search"]')

    static licenseInfoText = () => cy.get('[class*=\'_license_info\']')

    static paymentsButton = () => cy.get('[class*=\'payment\']')

    static paymentsModal = () => cy.get('div[tabindex="-1"] > [class*=\'payment_form\']')

    static paymentMethodButton = () => cy.get('[class*=\'payment_methods\']')

    static paymentDeadlineSelect = () => cy.get('[class*=\'deadline_select\']')

    static paymentDeadlineSelectModal = () => cy.get('[class*=\'deadline_select\'] [role=\'listbox\']')

    static paymentDeadlineOptions = (index: number) => cy.get('[class*=\'deadline_select\'] [role=\'option\']').eq(index)

    static paymentPrice = () => cy.get('[class*=\'price\'] div').last()

    static payButton = () => cy.get('[class*=\'payment_form\'] [class*=\'_pay\'][type="button"]')

    static paymentModalCloseButton = () => cy.get('[class*=\'payment_form\'] [class*=\'_close\']')

    static languageButton = () => cy.get('[aria-haspopup="menu"] [class*=\'language\']')

    static languageDropdown = () => cy.get('[role="menu"]')

    static languageDropdownOptions = (index: number) => cy.get('[role="menu"] [role="menuitem"]').eq(index)

    static fullScreenButton = () => cy.get('[class*=\'_full_screen\']')

    static profileButton = () => cy.get('[class*=\'_admin_dropdown\']')

    static profileSettingsButton = () => cy.get('[role=\'menu\'] button[role=\'menuitem\']').first()

    static logOutButton = () => cy.get('[role=\'menu\'] button[role=\'menuitem\']').last()

    static headerText = () => cy.get('[class*=\'_content_title\']')

    static dateFilterSelect = () => cy.get('[class*=\'_datepicker\']')

    static chartsUserInfo = () => cy.get('[class*=\'_chart1\']')

    static chartsRevenues = () => cy.get('[class*=\'_chart2\']')

    static chartsRevenueByCurrency = () => cy.get('[class*=\'_chart3\']')

    static chartsBestSellingProducts = () => cy.get('[class*=\'_chart4\']')

    static chartsBestSellingProductsShowAllButton = () => cy.get('[class*=\'_chart4\'] button')

    static chartsBestSellingProductsTable = () => cy.get('[class*=\'_chart4\'] table tbody')

    static chartsBestSellingProductsTableRows = (index: number) => cy.get('[class*=\'_chart4\'] tbody tr').eq(index)

    static chartsBestSellingProductsRowData = (tr: number, td: number) => cy.get('[class*=\'_chart4\'] tbody tr').eq(tr).find('td').eq(td)

    static chartsNonCashTurnover = () => cy.get('[class*=\'_chart5\']')

    static chartsProfitLoss = () => cy.get('[class*=\'_chart6\']')

    static sidebarMenu = () => cy.get('[class*=\'_sidebar_menu\']')

    static sidebarHomePageButton = () => cy.get('[class*=\'_menu_title\'] + [class*=_menu_item]')

    static sidebarProductsButton = () => cy.get('[class*=\'_menu_title\'] + [class*=_menu_item] + [class*=_menu_item]')

    static sidebarListsButton = () => cy.get('[class*=\'_menu_title\'] + [class*=_menu_item] + [class*=_menu_item] + [class]')

    static sidebarListsUnitOfMeasurementsButton = () => cy.get('[class*=_menu_item] + [class*=_menu_item] + [class] [class*="_page_1"]').eq(0)

    static sidebarListsCategoriesButton = () => cy.get('[class*=_menu_item] + [class*=_menu_item] + [class] [class*="_page_1"]').eq(1)

    static sidebarListsPaymentListButton = () => cy.get('[class*=_menu_item] + [class*=_menu_item] + [class] [class*="_page_1"]').eq(2)

    static sidebarListsWarehousesButton = () => cy.get('[class*=_menu_item] + [class*=_menu_item] + [class] [class*="_page_1"]').eq(3)

    static sidebarListsCashRegisterTypesButton = () => cy.get('[class*=_menu_item] + [class*=_menu_item] + [class] [class*="_page_1"]').eq(4)

    static sidebarListsProductColorButton = () => cy.get('[class*=_menu_item] + [class*=_menu_item] + [class] [class*="_page_1"]').eq(5)

    static sidebarListsSizeButton = () => cy.get('[class*=_menu_item] + [class*=_menu_item] + [class] [class*="_page_1"]').eq(6)

    static sidebarListsCurrenciesButton = () => cy.get('[class*=_menu_item] + [class*=_menu_item] + [class] [class*="_page_1"]').eq(7)

    static sidebarListsDiscountsButton = () => cy.get('[class*=_menu_item] + [class*=_menu_item] + [class] [class*="_page_1"]').eq(8)

    static sidebarListsPartnersButton = () => cy.get('[class*=_menu_item] + [class*=_menu_item] + [class] [class*="_page_1"]').eq(9)
}


