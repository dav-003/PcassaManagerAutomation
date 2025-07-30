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

    static profileModal = () => cy.get('[tabindex="-1"][role="menu"]')

    static profileButton = () => cy.get('[class*=\'_admin_dropdown\']')

    static profileSettingsButton = () => cy.get('[role=\'menu\'] button[role=\'menuitem\']').eq(0)

    static logOutButton = () => cy.get('[role=\'menu\'] button[role=\'menuitem\']').eq(1)

    static headerText = () => cy.get('[class*=\'_content_title\']')

    static dateFilterSelect = () => cy.get('[class*=\'_datepicker\'] input')

    static dateFilterLeftModal = () => cy.get('[class*=\'_datepicker\'] [class*=\'mt-2.5\'] div[class*=\'w-full\']').eq(0)

    static dateFilterRightModal = () => cy.get('[class*=\'_datepicker\'] [class*=\'mt-2.5\'] div[class*=\'w-full\']').eq(1)

    static dateFilterLeftModalMonthSelect = () => cy.get('[class*=\'_datepicker\'] [class*=\'mt-2.5\'] div[class*=\'flex flex-1\'] button[type=\'button\']').eq(0)

    static dateFilterLeftModalYearSelect = () => cy.get('[class*=\'_datepicker\'] [class*=\'mt-2.5\'] div[class*=\'flex flex-1\'] button[type=\'button\']').eq(1)

    static dateFilterRightModalMonthSelect = () => cy.get('[class*=\'_datepicker\'] [class*=\'mt-2.5\'] div[class*=\'flex flex-1\'] button[type=\'button\']').eq(2)

    static dateFilterRightModalYearSelect = () => cy.get('[class*=\'_datepicker\'] [class*=\'mt-2.5\'] div[class*=\'flex flex-1\'] button[type=\'button\']').eq(3)

    static dateFilterLeftModalLeftButton = () => cy.get('[class*=\'_datepicker\'] svg.h-5.w-5').eq(1)

    static dateFilterLeftModalRightButton = () => cy.get('[class*=\'_datepicker\'] svg.h-5.w-5').eq(2)

    static dateFilterRightModalLeftButton = () => cy.get('[class*=\'_datepicker\'] svg.h-5.w-5').eq(3)

    static dateFilterRightModalRightButton = () => cy.get('[class*=\'_datepicker\'] svg.h-5.w-5').eq(4)

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

    static sidebarHomePageButton = () => cy.get('[class*=_sidebar_menu_] > :nth-child(2)')

    static sidebarProductsButton = () => cy.get('[class*=_sidebar_menu_] > :nth-child(3)')

    static sidebarCalculationButton = () => cy.get('[class*=_sidebar_menu_] > :nth-child(4)')

    static sidebarListsButton = () => cy.get('[class*=_sidebar_menu_] > :nth-child(5) > .flex')

    static sidebarListsUnitOfMeasurementsButton = () => cy.get(':nth-child(5) > .overflow-hidden > .block > :nth-child(1) > a')

    static sidebarListsCategoriesButton = () => cy.get(':nth-child(5) > .overflow-hidden > .block > :nth-child(2) > a')

    static sidebarListsPaymentListButton = () => cy.get(':nth-child(5) > .overflow-hidden > .block > :nth-child(3) > a')

    static sidebarListsWarehousesButton = () => cy.get(':nth-child(5) > .overflow-hidden > .block > :nth-child(4) > a')

    static sidebarListsCashRegisterTypesButton = () => cy.get(':nth-child(5) > .overflow-hidden > .block > :nth-child(5) > a')

    static sidebarListsProductColorButton = () => cy.get(':nth-child(5) > .overflow-hidden > .block > :nth-child(6) > a')

    static sidebarListsSizeButton = () => cy.get(':nth-child(5) > .overflow-hidden > .block > :nth-child(7) > a')

    static sidebarListsCurrenciesButton = () => cy.get(':nth-child(8) > a')

    static sidebarListsDiscountsButton = () => cy.get(':nth-child(9) > a')

    static sidebarListsPartnersButton = () => cy.get(':nth-child(10) > a')

    static sidebarInvoicesButton = () => cy.get(':nth-child(7) > .flex')

    static sidebarInvoicesListOfInvoicesButton = () => cy.get(":nth-child(7) > .overflow-hidden > .block > :nth-child(1) > a")

    static sidebarInvoicesPurchaseOrderButton = () => cy.get(":nth-child(7) > .overflow-hidden > .block > :nth-child(2) > a")

    static sidebarInvoicesWithdrawalButton = () => cy.get(":nth-child(7) > .overflow-hidden > .block > :nth-child(3) > a")

    static sidebarInvoicesWriteOffButton = () => cy.get(":nth-child(7) > .overflow-hidden > .block > :nth-child(4) > a")

    static sidebarInvoicesInternalTransferButton = () => cy.get(":nth-child(7) > .overflow-hidden > .block > :nth-child(5) > a")

    static sidebarInvoicesReturnToProviderButton = () => cy.get(":nth-child(7) > .overflow-hidden > .block > :nth-child(6) > a")

    static sidebarInvoicesBuyerReturnButton = () => cy.get(":nth-child(7) > .overflow-hidden > .block > :nth-child(7) > a")

    static sidebarCashOrderButton = () => cy.get("[class*=_sidebar_menu_] > :nth-child(8) > .flex")

    static sidebarCashOrderListOfCashOrdersButton = () => cy.get(":nth-child(8) > .overflow-hidden > .block > :nth-child(1) > a")

    static sidebarCashOrderCreateCashOrderButton = () => cy.get(":nth-child(8) > .overflow-hidden > .block > :nth-child(2) > a")

    static sidebarActsButton = () => cy.get("[class*=_sidebar_menu_] > :nth-child(9) > .flex")

    static sidebarActsListOfActsButton = () => cy.get(":nth-child(9) > .overflow-hidden > .block > :nth-child(1) > a")

    static sidebarCreateAnActButton = () => cy.get(":nth-child(9) > .overflow-hidden > .block > :nth-child(2) > a")

    static sidebarInventoryButton = () => cy.get("[class*=_sidebar_menu_] > :nth-child(10) > .flex")

    static sidebarInventoryListOfInventoriesButton = () => cy.get(":nth-child(10) > .overflow-hidden > .block > :nth-child(1) > a")

    static sidebarInventoryCreateInventoryButton = () => cy.get(":nth-child(10) > .overflow-hidden > .block > :nth-child(2) > a")

    static sidebarReportsButton = () => cy.get("[class*=_sidebar_menu_] > :nth-child(12) > .flex")

    static sidebarReportsChecksButton = () => cy.get(":nth-child(12) > .overflow-hidden > .block > :nth-child(1) > a")

    static sidebarReportsImplementationReportButton = () => cy.get(":nth-child(12) > .overflow-hidden > .block > :nth-child(2) > a")

    static sidebarReportsCounterpartiesButton = () => cy.get(":nth-child(12) > .overflow-hidden > .block > :nth-child(3) > a")

    static sidebarReportsRevenuesButton = () => cy.get(":nth-child(12) > .overflow-hidden > .block > :nth-child(4) > a")

    static sidebarReportsFinancesButton = () => cy.get(":nth-child(12) > .overflow-hidden > .block > :nth-child(5) > a")

    static sidebarReportsProductReportsButton = () => cy.get(":nth-child(12) > .overflow-hidden > .block > :nth-child(6) > a")

}


