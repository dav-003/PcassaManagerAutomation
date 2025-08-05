export class ProductsSelectors {

    static productGroupsSection = () => cy.get('[class*=\'products\'] > [class*=\'_group\']')

    static productsSection = () => cy.get('[class*=\'products\'] > [class*=\'_product\']')

    static productsTbody = () => cy.get('[class*=\'products\'] > [class*=\'_product\'] tbody')

    static productsTbodyAllRows = () => cy.get('[class*=\'_product_items\'] [class*="_tbody_"] tr[class]')

    static productsTbodyRow = (index: number) => cy.get('[class*=\'products\'] > [class*=\'_product\'] tbody tr').eq(index)

    static productsTbodyAllCheckboxes = () => cy.get('tbody input[type="checkbox"]')

    static productsTbodyRowCheckbox = (index: number) => cy.get('[class*=\'products\'] > [class*=\'_product\'] tbody tr input').eq(index)

    static groupsSearchButton = () => cy.get('[role=\'tablist\'] [role=\'tab\']').eq(0)

    static groupsSearchField = () => cy.get('[class*=\'mt-3\'] [class] input')

    static addGroupButton = () => cy.get('[role=\'tablist\'] [role=\'tab\']').eq(1)

    static addGroupField = () => cy.get('input[name="caption"]')

    static expandAllGroupsButton = () => cy.get('[class*=\'product_tools\'] [class*=\'_tools\'] button[type="button"]').eq(0)

    static foldGroupsButton = () => cy.get('[class*=\'product_tools\'] [class*=\'_tools\'] button[type="button"]').eq(1)

    static deletedProductsButton = () => cy.get('[class*=\'product_tools\'] [class*=\'_tools\'] button[type="button"]').eq(2)

    static groupsTree = () => cy.get('#groups_tree')

    static groupsTreeGroups = () => cy.get('#groups_tree [class*="_subgroup_"]')

    static deletedGroup = () => cy.get('[class*="_groups_tree"] [class*="_delete_product"]')

    static groupRightClickModalDeleteOption = () => cy.get('[role="menu"] > :nth-child(4)')

    static groupRightClickModalRenameOption = () => cy.get('[role="menu"] > :nth-child(2)')

    static groupRightClickModalAddSubgroupOption = () => cy.get('[role="menu"] > :nth-child(1)')

    static groupRightClickModalMoveOption = () => cy.get('[role="menu"] > :nth-child(3)')

    static deleteNotificationModal = () => cy.get('[class*=_delete_notification_]')

    static deleteNotificationModalDeleteOption = () => cy.get('[class*=_delete_btn] > .bg-gray-900')

    static deleteNotificationModalCancelOption = () => cy.get('[class*=_delete_btn] > .text-gray-900')

    static groupSectionCloseButton = () => cy.get('.pl-\\[7px\\] > .gap-3 > .relative')

    static groupSectionOpenButton = () => cy.get('.pl-\\[7px\\] > .gap-3 > .relative')

    static productsFilterButton = () => cy.get('[class*="_product_items_"] [class*="border-b-deep"] [class*="gap-2 items"]  [class*="font-medium"]')

    static productsFilterSection = () => cy.get('[class*="_product_items_"] [class*="px-[10px] pb-[10px]"]')

    static productsFilterByCodeField = () => cy.get('[class*=\'_product_filter\'] [class] input').eq(0)

    static productsFilterByNameField = () => cy.get('[class*=\'_product_filter\'] [class] input').eq(1)

    static productsFilterByBarcodeField = () => cy.get('[class*=\'_product_filter\'] [class] input').eq(2)

    static productsFilterByBarcodeGroupField = () => cy.get('[class*=\'_product_filter\'] [class] input').eq(3)

    static productsFilterBySKUField = () => cy.get('[class*=\'_product_filter\'] [class] input').eq(4)

    static productsFilterByWholesalePriceField = () => cy.get('[class*=\'_product_filter\'] [class] input').eq(5)

    static productsFilterByRetailPriceField = () => cy.get('[class*=\'_product_filter\'] [class] input').eq(6)

    static productsPaginationButton = () => cy.get('[class*=\'react-select\']')

    static productsPaginationPagesOption5Pages = () => cy.get('#react-select-2-option-0')

    static productsPaginationPagesOption10Pages = () => cy.get('#react-select-2-option-1')

    static productsPaginationPagesOption15Pages = () => cy.get('#react-select-2-option-2')

    static productsPaginationPagesOption30Pages = () => cy.get('#react-select-2-option-3')

    static productsPaginationPagesOption50Pages = () => cy.get('#react-select-2-option-4')

    static productsAddButton = () => cy.get('[class*="pl-[7px]"] [class*="react-select"] + [type="button"]')

    static addProductModal = () => cy.get('[class*="_add_product_item"]')

    static addProductSidebarModal = () => cy.get('div[tabindex="-1"] > [class*="_add_product_item"]')

    static addProductModalCloseButton = () => cy.get('[class*="flex gap-3 items-center"] [class*="_close_"]')

    static addProductModalAddPhotoButton = () => cy.get('[class*=_file_] > label')

    static addProductModalNameInput = () => cy.get('[class*="_add_product_item"] input[name="name"]')

    static addProductModalOtherNameInput = () => cy.get('[class*="_add_product_item"] input[name="kname"]')

    static addProductModalDescriptionInput = () => cy.get('[class*="_add_product_item"] textarea[name="description"]')

    static addProductModalStatusCheckbox = () => cy.get('label[for=":r1i:"] input[type="checkbox"]')

    static addProductModalTopCheckbox = () => cy.get('label[for=":r1j:"] input[type="checkbox"]')

    static addProductModalGroupSelect = () => cy.get('[class*="_add_product_item"] button.border-gray-900.text-gray-900.w-full')

    static addProductModalGroupModalSearchField = () => cy.get('.flex-col > .gap-2 > [class*=_form_input_] > [class*=_form_control_] > input')

    static addProductModalGroupModalCloseButton = () => cy.get('[class*="w-full flex flex-col gap-3"] [class*="cursor-pointer"]')

    static addProductModalGroupModalGroups = () => cy.get('[class*="_add_product_"] [class*="_drawer_"] [class*="_groups_"] [class*="_group_three_"]')

    static addProductModalGroupModalSelectGroupButton = () => cy.get('[class*="w-full flex flex-col gap-3"] + [class*="_groups"] + button:enabled')

    static addProductModalProductCategorySelect = () => cy.get('#react-select-4-placeholder')

    static addProductModalProductCategoryOptions = () => cy.get('div[id^="react-select-4-option"]')

    static addProductModalProductCategoryListAdd = () => cy.get('.py-1')

    static addProductModalProductCategoryAddNewCategoryModal = () => cy.get('#\\:r256\\:')

    static addProductModalProductCategoryAddNewCategoryModalNameField = () => cy.get('form > [class*=_form_input_] > [class*=_form_control_] > input')

    static addProductModalProductCategoryAddNewCategoryModalAddButton = () => cy.get('form > .align-middle')

    static addProductModalProductCategoryAddNewCategoryModalCloseButton = () => cy.get('.absolute > .fill-black > path')

    static addProductModalUnitOfMeasurementSelect = () => cy.get('#react-select-5-placeholder')

    static addProductModalUnitOfMeasurementSelectOptions = () => cy.get('div[id^="react-select-5-option"]')

    static addProductModalUnitOfMeasurementListAdd = () => cy.get('.py-1')

    static addProductModalUnitOfMeasurementAddNewUnitOfMeasurementModal = () => cy.get('#\\:r25a\\:')

    static addProductModalUnitOfMeasurementAddNewUnitOfMeasurementModalNameField = () => cy.get('form > [class*=_form_input_] > [class*=_form_control_] > input')

    static addProductModalUnitOfMeasurementAddNewUnitOfMeasurementModalAddButton = () => cy.get('form > .align-middle')

    static addProductModalUnitOfMeasurementAddNewUnitOfMeasurementModalCloseButton = () => cy.get('.absolute > .fill-black > path')

    static addProductModalBarcodeInput = () => cy.get('[class*="_add_product_item"] input[name="barcode"]')

    static addProductModalBarcodeGroupInput = () => cy.get('[class*="_add_product_item"] input[name="barcode_grupp"]')

    static addProductModalADGCodeInput = () => cy.get('[class*="_add_product_item"] input[name="adg"]')

    static addProductModalSKUInput = () => cy.get('[class*="_add_product_item"] input[name="artikul"]')

    static addProductModalWholesalePriceInput = () => cy.get('[class*="_add_product_item"] input[name="price_o_o"]')

    static addProductModalRetailPriceInput = () => cy.get('[class*="_add_product_item"] input[name="price_o_r"]')

    static addProductModalSizeSelect = () => cy.get('#react-select-6-placeholder')

    static addProductModalSizeOptions = () => cy.get('div[id^="react-select-6-option"]')

    static addProductModalColorSelect = () => cy.get('#react-select-7-placeholder')

    static addProductModalColorOptions = () => cy.get('div[id^="react-select-7-option"]')

    static addProductModalColorListAddButton = () => cy.get('.py-1')

    static addProductModalColorAddNewColorModal = () => cy.get('#\\:r4am\\:')

    static addProductModalColorAddNewColorModalAddButton = () => cy.get('form > .align-middle')

    static addProductModalColorAddNewColorModalCloseButton = () => cy.get('.absolute > .fill-black > path')

    static addProductModalSettingsButton = () => cy.get('[class*="_product_header"] [class*="flex gap-3"] [type="button"]')

    static addProductModalSettingsDepartmentsInput = () => cy.get('[class*="_add_product_item"] input[name="dep"]')

    static addProductModalSettingsFiscalRegisterInput = () => cy.get('[class*="_add_product_item"] input[name="hdm"]')

    static addProductModalSettingsServiceFeeInput = () => cy.get('[class*="_add_product_item"] input[name="nacenka"]')

    static addProductModalSettingsReturnLimitationInput = () => cy.get('[class*="_add_product_item"] input[name="vozvrat"]')

    static addProductModalSettingsMaxDiscountInput = () => cy.get('[class*="_add_product_item"] input[name="priznak_sk"]')

    static addProductModalSettingsDiscountInput = () => cy.get('[class*="_add_product_item"] input[name="discount"]')

    static addProductModalSettingsPrinterSelect = () => cy.get('#react-select-3-placeholder')

    static addProductModalSettingsPrinterOptions = () => cy.get('div[id^="react-select-3-option"]')

    static addProductModalSettingsNotDiscountCheckbox = () => cy.get('label[for=":r1e:"] input[type="checkbox"]')

    static addProductModalSettingsExciseCheckbox = () => cy.get('label[for=":r1f:"] input[type="checkbox"]')

    static addProductModalSettingsTaxCheckbox = () => cy.get('label[for=":r1g:"] input[type="checkbox"]')

    static addProductModalAddButton = () => cy.get('[class*="_add_product_item_"] button[type="submit"]')

    static paginationPreviousButton = () => cy.get('.previous > a')

    static paginationNextButton = () => cy.get('.next > a')

    static showAllSelectedProductsButton = () => cy.get('#\\:r49p\\:')

    static selectAllProductsCheckbox = () => cy.get('th[class*="_thead"] label[for=":r16:"] > input[type="checkbox"]')

    static productRightClickModal = () => cy.get('.rounded-xl > .flex-col')

    static productRightClickModalEditButton = () => cy.get('.rounded-xl > .flex-col > :nth-child(1)')

    static productRightClickModalCopyButton = () => cy.get('.rounded-xl > .flex-col > :nth-child(2)')

    static productRightClickModalPrintButton = () => cy.get('.rounded-xl > .flex-col > :nth-child(3)')

    static productRightClickModalPrintModal = () => cy.get('#\\:r4hv\\:')

    static productRightClickModalPrintModalOptions = (index: number) => cy.get(`#\\:r4i7\\: > :nth-child(${index})`)

    static productRightClickModalDeleteButton = () => cy.get('.rounded-xl > .flex-col > :nth-child(4)')

    static actionsWithSelectedProductsButton = () => cy.get('#\\:r4io\\: > .relative')

    static actionsWithSelectedProductsModal = () => cy.get('#\\:r4in\\:')

    static actionsWithSelectedProductsModalCancelAllSelectedProductsButton = () => cy.get('#\\:r4in\\: > :nth-child(1)')

    static actionsWithSelectedProductsModalEditSelectedProductsButton = () => cy.get('#\\:r4in\\: > :nth-child(2)')

    static actionsWithSelectedProductsModalPrintButton = () => cy.get('#\\:r4jn\\:')

    static actionsWithSelectedProductsModalPrintModal = () => cy.get('#\\:r4jq\\:')

    static actionsWithSelectedProductsModalPrintModalOptions = (index: number) => cy.get(`#\\:r4ju\\: > :nth-child(${index})`)

    static actionsWithSelectedProductsEditModal = () => cy.get('[class*=_edit_group_products_]')

    static actionsWithSelectedProductsEditModalOtherNameInput = () => cy.get('[class*=_fields_wrapper_] > :nth-child(1) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalArticulInput = () => cy.get('[class*=_fields_wrapper_] > :nth-child(2) > :nth-child(1) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalADGCodeInput = () => cy.get('[class*=_fields_wrapper_] > :nth-child(2) > :nth-child(2) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalGroupBarcodeInput = () => cy.get('[class*=_fields_wrapper_] > :nth-child(3) > :nth-child(1) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalGroupBarcodeCheckbox = () => cy.get('#\\:r26o\\:')

    static actionsWithSelectedProductsEditModalWholesalePriceInput = () => cy.get('[class*=_fields_wrapper_] > :nth-child(4) > :nth-child(1) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalRetailPriceInput = () => cy.get('[class*=_fields_wrapper_] > :nth-child(4) > :nth-child(2) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalDepartmentsInput = () => cy.get('[class*=_form_input_].mt-2 > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalFiscalRegisterInput = () => cy.get(':nth-child(6) > :nth-child(1) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalReturnLimitationInput = () => cy.get(':nth-child(6) > :nth-child(2) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalPrinterSelect = () => cy.get('#react-select-18-placeholder')

    static actionsWithSelectedProductsEditModalPrinterList = () => cy.get('#react-select-18-listbox')

    static actionsWithSelectedProductsEditModalPrinterListOptions = (index: number) => cy.get(`#react-select-18-option-${index}`)

    static actionsWithSelectedProductsEditModalServiceFeeInput = () => cy.get('.gap-2.my-2 > :nth-child(1) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalDiscountInput = () => cy.get('.gap-2.my-2 > :nth-child(2) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalProductCategorySelect = () => cy.get('')

    static actionsWithSelectedProductsEditModalProductCategoryList = () => cy.get('')

    static actionsWithSelectedProductsEditModalProductCategoryListAdd = () => cy.get('')

    static actionsWithSelectedProductsEditModalProductCategoryAddNewCategoryModal = () => cy.get('')

    static actionsWithSelectedProductsEditModalProductCategoryAddNewCategoryModalNameField = () => cy.get('')

    static actionsWithSelectedProductsEditModalProductCategoryAddNewCategoryModalAddButton = () => cy.get('')

    static actionsWithSelectedProductsEditModalProductCategoryAddNewCategoryModalCloseButton = () => cy.get('')

    static actionsWithSelectedProductsEditModalTopSelect = () => cy.get(':nth-child(1) > .react-select > .select__control > .select__value-container')

    static actionsWithSelectedProductsEditModalTopList = () => cy.get('#react-select-19-listbox')

    static actionsWithSelectedProductsEditModalTopListOptions = (index: number) => cy.get(`#react-select-19-option-${index}`)

    static actionsWithSelectedProductsEditModalStatusSelect = () => cy.get('.gap-4 > :nth-child(2) > .react-select > .select__control > .select__value-container')

    static actionsWithSelectedProductsEditModalStatusList = () => cy.get('#react-select-20-listbox')

    static actionsWithSelectedProductsEditModalStatusListOptions = (index: number) => cy.get(`#react-select-20-option-${index}`)

    static actionsWithSelectedProductsEditModalDiscountSelect = () => cy.get('.gap-4 > :nth-child(3) > .react-select > .select__control > .select__value-container')

    static actionsWithSelectedProductsEditModalDiscountList = () => cy.get('#react-select-21-listbox')

    static actionsWithSelectedProductsEditModalDiscountListOptions = (index: number) => cy.get(`#react-select-21-option-${index}`)

    static actionsWithSelectedProductsEditModalSaveButton = () => cy.get('[class*=_edit_product_fields_] > :nth-child(2) > .bg-gray-900')

    static actionsWithSelectedProductsEditModalCloseButton = () => cy.get('[class*=_edit_product_fields_] > :nth-child(2) > .text-gray-900')

    static actionsWithSelectedProductsEditModalFilterButton = () => cy.get('.items-start > .items-center > .relative')

    static actionsWithSelectedProductsEditModalFilterSection = () => cy.get('.mt-3 > .block > .pb-\\[10px\\]')

    static actionsWithSelectedProductsEditModalFilterSectionCodeField = () => cy.get('.mt-3 > .block > .pb-\\[10px\\] > :nth-child(1) > :nth-child(1) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalFilterSectionNameField = () => cy.get('.mt-3 > .block > .pb-\\[10px\\] > :nth-child(1) > :nth-child(2) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalFilterSectionBarcodeField = () => cy.get('.mt-3 > .block > .pb-\\[10px\\] > :nth-child(1) > :nth-child(3) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalFilterSectionBarcodeGroupField = () => cy.get('.mt-3 > .block > .pb-\\[10px\\] > :nth-child(1) > :nth-child(4) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalFilterSectionSKUField = () => cy.get('.mt-3 > .block > .pb-\\[10px\\] > :nth-child(2) > :nth-child(1) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalFilterSectionWholesalePriceField = () => cy.get('.mt-3 > .block > .pb-\\[10px\\] > :nth-child(2) > :nth-child(2) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalFilterSectionRetailPriceField = () => cy.get('.mt-3 > .block > .pb-\\[10px\\] > :nth-child(2) > :nth-child(3) > [class*=_form_control_] > input')

    static actionsWithSelectedProductsEditModalPaginationSelect = () => cy.get('.items-start > .items-center > .react-select > .select__control > .select__value-container')

    static actionsWithSelectedProductsEditModalPaginationList = () => cy.get('#react-select-22-listbox')

    static actionsWithSelectedProductsEditModalPaginationListOptions = (index: number) => cy.get(`#react-select-22-option-${index}`)

    static actionsWithSelectedProductsEditModalAllProductsCheckbox = () => cy.get('#\\:r27i\\:')

    static actionsWithSelectedProductsEditModalProductRow = (index: number) => cy.get('[class*=_edit_group_products_] tbody tr').eq(index)

    static actionsWithSelectedProductsEditModalProductsRowCheckbox = (index: number) => cy.get('[class*=_edit_group_products_] tbody tr input').eq(index)

    static actionsWithSelectedProductsEditModalPaginationPreviousButton = () => cy.get('[class*=_edit_group_products_] .previous > a')

    static actionsWithSelectedProductsEditModalPaginationNextButton = () => cy.get('[class*=_edit_group_products_] .next > a')

    static actionsWithSelectedProductsEditModalPaginationCurrentPage = () => cy.get('.mt-\\[10px\\] > [class*=_paginate_] > .selected > a')
}