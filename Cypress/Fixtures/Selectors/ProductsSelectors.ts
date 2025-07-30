export class ProductsSelectors {

    static productGroupsSection = () => cy.get('[class*=\'products\'] > [class*=\'_group\']')

    static productsSection = () => cy.get('[class*=\'products\'] > [class*=\'_product\']')

    static productsTbody = () => cy.get('[class*=\'products\'] > [class*=\'_product\'] tbody')

    static productsTbodyRow = (index: number) => cy.get('[class*=\'products\'] > [class*=\'_product\'] tbody tr').eq(index)

    static productsTbodyRowCheckbox = (index: number) => cy.get('[class*=\'products\'] > [class*=\'_product\'] tbody tr input').eq(index)

    static groupsSearchButton = () => cy.get('[role=\'tablist\'] [role=\'tab\']').eq(0)

    static groupsSearchField = () => cy.get('[class*=\'mt-3\'] [class] input')

    static addGroupButton = () => cy.get('[role=\'tablist\'] [role=\'tab\']').eq(1)

    static addGroupField = () => cy.get('input[name="caption"]')

    static expandAllGroupsButton = () => cy.get('[class*=\'product_tools\'] [class*=\'_tools\'] button[type="button"]').eq(0)

    static foldGroupsButton = () => cy.get('[class*=\'product_tools\'] [class*=\'_tools\'] button[type="button"]').eq(1)

    static deletedProductsButton = () => cy.get('[class*=\'product_tools\'] [class*=\'_tools\'] button[type="button"]').eq(2)

    static deletedProductsGroup = () => cy.get('#groups_tree [class*=\'_group_\']')

    static groupsTree = () => cy.get('#groups_tree')

    static groupSectionCloseButton = () => cy.get('[class=\'flex gap-3 items-center\'] button')

    static groupSectionOpenButton = () => cy.get('[class=\'flex gap-3 items-center\'] button')

    static productsFilterButton = () => cy.get('[class*=\'_product_items\'] [class="flex gap-2 items-center"] button[style]')

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

    static productsAddButton = () => cy.get('div.gap-2 > .font-bold')

    static addProductModal = () => cy.get('[class*="_add_product_item"]')

    static addProductModalCloseButton = () => cy.get('[class*="_close"]')

    static addProductModaladdPhotoButton = () => cy.get('[class*=_file_] > label')

    static addProductModalNameInput = () => cy.get('.gap-5 > :nth-child(2) > :nth-child(1) > [class*=_form_control] > input')

    static addProductModalOtherNameInput = () => cy.get('.gap-5 > :nth-child(2) > :nth-child(2) > [class*=_form_control] > input')

    static addProductModalDescriptionInput = () => cy.get('.gap-5 > :nth-child(2) > :nth-child(3) > [class*=_form_control] > textarea')

    static addProductModalStatusCheckbox = () => cy.get('#\\:r26b\\:')

    static addProductModalTopCheckbox = () => cy.get('#\\:r26c\\:')

    static addProductModalGroupSelect = () => cy.get('div.w-full > .align-middle')

    static addProductModalGroupModalSearchField = () => cy.get('.flex-col > .gap-2 > [class*=_form_input_] > [class*=_form_control_] > input')

    static addProductModalGroupModalCloseButton = () => cy.get('[class*="w-full flex flex-col gap-3"] [class*="cursor-pointer"]')

    static addProductModalGroupModalGroupList = () => cy.get('[class*="w-full flex flex-col gap-3"] + [class*="_groups"]')

    static addProductModalGroupModalSelectGroupButton = () => cy.get('[class*="w-full flex flex-col gap-3"] + [class*="_groups"] + button')

    static addProductModalProductCategorySelect = () => cy.get('#react-select-3-placeholder')

    static addProductModalProductCategoryList = () => cy.get('#react-select-3-listbox')

    static addProductModalProductCategoryListAdd = () => cy.get('.py-1')

    static addProductModalProductCategoryAddNewCategoryModal = () => cy.get('#\\:r256\\:')

    static addProductModalProductCategoryAddNewCategoryModalNameField = () => cy.get('form > [class*=_form_input_] > [class*=_form_control_] > input')

    static addProductModalProductCategoryAddNewCategoryModalAddButton = () => cy.get('form > .align-middle')

    static addProductModalProductCategoryAddNewCategoryModalCloseButton = () => cy.get('.absolute > .fill-black > path')

    static addProductModalUnitOfMeasurementSelect = () => cy.get('#react-select-4-placeholder')

    static addProductModalUnitOfMeasurementList = () => cy.get('#react-select-4-listbox')

    static addProductModalUnitOfMeasurementListAdd = () => cy.get('.py-1')

    static addProductModalUnitOfMeasurementAddNewUnitOfMeasurementModal = () => cy.get('#\\:r25a\\:')

    static addProductModalUnitOfMeasurementAddNewUnitOfMeasurementModalNameField = () => cy.get('form > [class*=_form_input_] > [class*=_form_control_] > input')

    static addProductModalUnitOfMeasurementAddNewUnitOfMeasurementModalAddButton = () => cy.get('form > .align-middle')

    static addProductModalUnitOfMeasurementAddNewUnitOfMeasurementModalCloseButton = () => cy.get('.absolute > .fill-black > path')

    static addProductModalBarcodeInput = () => cy.get(':nth-child(4) > :nth-child(1) > [class*=_form_control_] > input')

    static addProductModalBarcodeGroupInput = () => cy.get(':nth-child(4) > :nth-child(2) > [class*=_form_control_] > input')

    static addProductModalADGCodeInput = () => cy.get(':nth-child(5) > :nth-child(1) > [class*=_form_control_] > input')

    static addProductModalSKUInput = () => cy.get(':nth-child(5) > :nth-child(2) > [class*=_form_control_] > input')

    static addProductModalWholesalePriceInput = () => cy.get(':nth-child(6) > :nth-child(1) > [class*=_form_control_] > input')

    static addProductModalRetailPriceInput = () => cy.get(':nth-child(6) > :nth-child(2) > [class*=_form_control_] > input')

    static addProductModalSizeSelect = () => cy.get('#react-select-5-placeholder')

    static addProductModalSizeList = () => cy.get('#react-select-5-listbox')

    static addProductModalColorSelect = () => cy.get('#react-select-6-placeholder')

    static addProductModalColorList = () => cy.get('#react-select-6-listbox')

    static addProductModalColorListAddButton = () => cy.get('.py-1')

    static addProductModalColorAddNewColorModal = () => cy.get('#\\:r4am\\:')

    static addProductModalColorAddNewColorModalAddButton = () => cy.get('form > .align-middle')

    static addProductModalColorAddNewColorModalCloseButton = () => cy.get('.absolute > .fill-black > path')

    static addProductModalSettingsButton = () => cy.get('.mt-5')

    static addProductModalSettingsDepartmentsInput = () => cy.get('.basis-full > :nth-child(1) > :nth-child(1) > [class*=_form_control_] > input')

    static addProductModalSettingsFiscalRegisterInput = () => cy.get('.basis-full > :nth-child(1) > :nth-child(2) > [class*=_form_control_] > input')

    static addProductModalSettingsServiceFeeInput = () => cy.get('.basis-full > :nth-child(2) > :nth-child(1) > [class*=_form_control] > input')

    static addProductModalSettingsReturnLimitationInput = () => cy.get('.basis-full > :nth-child(2) > :nth-child(2) > [class*=_form_control] > input')

    static addProductModalSettingsMaxDiscountInput = () => cy.get(':nth-child(3) > :nth-child(1) > [class*=_form_control_] > input')

    static addProductModalSettingsDiscountInput = () => cy.get(':nth-child(3) > :nth-child(2) > [class*=_form_control_] > input')

    static addProductModalSettingsPrinterSelect = () => cy.get('#react-select-7-placeholder')

    static addProductModalSettingsPrinterList = () => cy.get('#react-select-13-listbox')

    static addProductModalSettingsNotDiscountCheckbox = () => cy.get('#\\:r25h\\:')

    static addProductModalSettingsExciseCheckbox = () => cy.get('#\\:r25i\\:')

    static addProductModalSettingsTaxCheckbox = () => cy.get('#\\:r25j\\:')

    static addProductModalAddButton = () => cy.get('[class*=_footer_] > .align-middle')

    static paginationPreviousButton = () => cy.get('.previous > a')

    static paginationNextButton = () => cy.get('.next > a')

    static showAllSelectedProductsButton = () => cy.get('#\\:r49p\\:')

    static selectFirstProductCheckbox = () => cy.get('#\\:r49f\\:')

    static selectAllProductsCheckbox = () => cy.get('#\\:r49e\\:')

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