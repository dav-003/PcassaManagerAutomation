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

    static sidebarInvoicesButton = () => cy.get('[class*=\'_accordion\'] button[type=\'button\']').eq(1)

    static sidebarInvoicesListOfInvoicesButton = () => cy.get("[class*=\'_page_1\'] [href=\'/list-of-invoices\']")

    static sidebarInvoicesPurchaseOrderButton = () => cy.get("[class*='_page_1'] [href='/create-receipt-invoice']")

    static sidebarInvoicesWithdrawalButton = () => cy.get("[class*='_page_1'] [href='/create-withdrawal-invoice']")

    static sidebarInvoicesWriteOffButton = () => cy.get("[class*='_page_1'] [href='/create-write-off-invoice']")

    static sidebarInvoicesInternalTransferButton = () => cy.get("[class*='_page_1'] [href='/create-internal-transfer-invoice']")

    static sidebarInvoicesReturnToProviderButton = () => cy.get("[class*='_page_1'] [href='/create-return-to-provider-invoice']")

    static sidebarInvoicesBuyerReturnButton = () => cy.get("[class*='_page_1'] [href='/create-return-to-buyer-invoice']")

    static sidebarCashOrderButton = () => cy.get("[class*=\'_accordion\'] button[type=\'button\']").eq(2)

    static sidebarCashOrderListOfCashOrdersButton = () => cy.get("[class*='_page_1'] [href='/list-of-cash-order']")

    static sidebarCashOrderCreateCashOrderButton = () => cy.get("[class*='_page_1'] [href='/create-cash-order']")

    static sidebarActsButton = () => cy.get("[class*=\'_accordion\'] button[type=\'button\']").eq(3)

    static sidebarActsListOfActsButton = () => cy.get("[class*='_page_1'] [href='/list-of-acts']")

    static sidebarCreateAnActButton = () => cy.get("[class*='_page_1'] [href='/create-act']")

    static sidebarInventoryButton = () => cy.get("[class*=\'_accordion\'] button[type=\'button\']").eq(4)

    static sidebarInventoryListOfInventoriesButton = () => cy.get("[class*='_page_1'] [href='/list-of-inventories']")

    static sidebarInventoryCreateInventoryButton = () => cy.get("[class*='_page_1'] [href='/create-inventory']")

    static sidebarSalesButton = () => cy.get("[class*=\'_accordion\'] button[type=\'button\']").eq(5)

    static sidebarSalesListSalesButton = () => cy.get("[class*='_page_1'] [href='/list-of-sales']")

    static sidebarSalesInvoiceButton = () => cy.get("[class*='_page_1'] [href='/new-sale']")

    static sidebarReportsButton = () => cy.get("[class*=\'_accordion\'] button[type=\'button\']").eq(6)

    static sidebarReportsChecksButton = () => cy.get("[class*='_page_1'] [href='/checks']")

    static sidebarReportsImplementationReportButton = () => cy.get("[class*='_page_1'] [href='/implementation-report']")

    static sidebarReportsCounterpartiesButton = () => cy.get("[class*='_page_1'] [href='/counterparties']")

    static sidebarReportsRevenuesButton = () => cy.get("[class*='_page_1'] [href='/revenue']")

    static sidebarReportsFinancesButton = () => cy.get("[class*='_page_1'] [href='/finances']")

    static sidebarReportsProductReportsButton = () => cy.get("[class*='_page_1'] [href='/product-reports']")

    static sidebarVendorsButton = () => cy.get("[class*=\'_accordion\'] button[type=\'button\']").eq(7)

    static sidebarVendorsPurchasesButton = () => cy.get("[class*='_page_1'] [href='/list-of-vendors']")

    static sidebarVendorsPurchaseOrderButton = () => cy.get("[class*='_page_1'] [href='/new-purchase']")

    static sidebarVendorsExpenseButton = () => cy.get("[class*='_page_1'] [href='/expense']")
}


