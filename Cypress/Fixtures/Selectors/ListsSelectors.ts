export class ListsSelectors {

    static unitOfMeasurementHeaderText = () => cy.get('[class*="content_title"] [class*="_title"]')

    static unitOfMeasurementAddButton = () => cy.get('[class*="px-4 py-4"] button + button')

    static unitOfMeasurementTable = () => cy.get('[class*="_table_"]')

    static unitOfMeasurementItems = () => cy.get('[class*="_table_"] tbody tr')

    static unitOfMeasurementItem = (index: number) => cy.get('[class*="_table_"] tbody tr').eq(index)

    static unitOfMeasurementAddModal = () => cy.get('[class*="_measurement_"]')

    static unitOfMeasurementAddModalNameInput = () => cy.get('[class*="_measurement_"] input[name="name"]')

    static unitOfMeasurementAddModalCloseButton = () => cy.get('[class*="_measurement_"] [class*="right-0"]')

    static unitOfMeasurementAddModalSaveButton = () => cy.get('[class*="_measurement_"] button[type="submit"]')

    static unitOfMeasurementEditButton = (index: number) => cy.get('tbody tr td:nth-child(3) button').eq(index)

    static unitOfMeasurementEditButtons = () => cy.get('td:nth-child(3) button')

    static unitOfMeasurementDeleteButton = (index: number) => cy.get('tbody tr td:nth-child(4) button').eq(index)

    static unitOfMeasurementDeleteButtons = () => cy.get(' td:nth-child(4) button')

    static unitOfMeasurementEditModal = () => cy.get('[class*="_measurement_"]').contains('h4', 'Edit')

    static unitOfMeasurementEditModalNameInput = () => cy.get('[class*="_measurement_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_measurement_"]')
        .find('input[name="name"]')

    static unitOfMeasurementEditModalCloseButton = () => cy.get('[class*="_measurement_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_measurement_"]')
        .find('[class*="right-0"]')

    static unitOfMeasurementEditModalSaveButton = () => cy.get('[class*="_measurement_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_measurement_"]')
        .find('button[type="submit"]')

    static unitOfMeasurementDeleteModal = () => cy.get('[class*="_delete_notification"]')

    static unitOfMeasurementDeleteModalDeleteButton = () => cy.get('[class*="_delete_notification"] button[class*="shadow-gray-900/10"]')

    static unitOfMeasurementDeleteModalCancelButton = () => cy.get('[class*="_delete_notification"] button + button')

    static unitOfMeasurementSuccessAddToast = () => cy.get('#successAdd')

    static unitOfMeasurementSuccessEditToast = () => cy.get('#successEdit')

    static unitOfMeasurementSuccessDeleteToast = () => cy.get('#successDelete')

    static unitOfMeasurementInvalidDeleteToast = () => cy.get('#invalidMeasurementDelete')

    static unitOfMeasurementInvalidEditToast = () => cy.get('#already')

    static unitOfMeasurementExistUnitToast = () => cy.get('#existMeasurement')

    static unitOfMeasurementValidationErrorMessage = () => cy.get('[class*=_error_]')

    static categoryTypesHeaderText = () => cy.get('[class*="content_title"] [class*="_title"]')

    static categoryTypesTbody = () => cy.get('[class*="_tbody_"]')

    static categoryTypesItems = () => cy.get('[class*="_tbody_"] tr')

    static categoryTypesItem = (index: number) => cy.get('[class*="_tbody_"] tr').eq(index)

    static categoryTypesAddButton = () => cy.get('[class*="px-4 py-4"] button + button')

    static categoryTypesAddModal = () => cy.get('[class*="_category_types_"]')

    static categoryTypesAddModalNameInput = () => cy.get('[class*="_category_types_"] input[name="name"]')

    static categoryTypesAddModalCloseButton = () => cy.get('[class*="_category_types_"] [class*="right-0"]')

    static categoryTypesAddModalSaveButton = () => cy.get('[class*="_category_types_"] button[type="submit"]')

    static categoryTypesEditButtons = () => cy.get('td:nth-child(3) button')

    static categoryTypesEditButton = (index: number) => cy.get('tbody tr td:nth-child(3) button').eq(index)

    static categoryTypesDeleteButtons = () => cy.get(' td:nth-child(4) button')

    static categoryTypesDeleteButton = (index: number) => cy.get('tbody tr td:nth-child(4) button').eq(index)

    static categoryTypesEditModal = () => cy.get('[class*="_category_types_"]').contains('h4', 'Edit')

    static categoryTypesEditModalNameInput = () => cy.get('[class*="_category_types_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_category_types_"]')
        .find('input[name="name"]')

    static categoryTypesEditModalCloseButton = () => cy.get('[class*="_category_types_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_category_types_"]')
        .find('[class*="right-0"]')

    static categoryTypesEditModalSaveButton = () => cy.get('[class*="_category_types_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_category_types_"]')
        .find('button[type="submit"]')

    static categoryTypesDeleteModal = () => cy.get('[class*="_delete_notification"]')

    static categoryTypesDeleteModalDeleteButton = () => cy.get('[class*="_delete_notification"] button[class*="shadow-gray-900/10"]')

    static categoryTypesDeleteModalCancelButton = () => cy.get('[class*="_delete_notification"] button + button')

    static categoryTypesSuccessAddToast = () => cy.get('#successAdd')

    static categoryTypesSuccessEditToast = () => cy.get('#successEdit')

    static categoryTypesSuccessDeleteToast = () => cy.get('#successDelete')

    static categoryTypesInvalidDeleteToast = () => cy.get('#invalidCategoryTypeDelete')

    static categoryTypesInvalidEditToast = () => cy.get('#already')

    static categoryTypesExistCategoryToast = () => cy.get('#existCategoryType')

    static categoryTypesValidationErrorMessage = () => cy.get('[class*=_error_]')

    static listOfPaymentsHeaderText = () => cy.get('[class*="content_title"] [class*="_title"]')

    static listOfPaymentsTbody = () => cy.get('[class*="_tbody_"]')

    static listOfPaymentsTbodyItems = () => cy.get('[class*="_tbody_"] tr')

    static listOfPaymentsTbodyItem = (index: number) => cy.get('[class*="_tbody_"] tr').eq(index)

    static listOfPaymentsAddButton = () => cy.get('[class*="px-4 py-4"] button + button')

    static listOfPaymentsAddModal = () => cy.get('[class*="_payments_list_"]')

    static listOfPaymentsAddModalNameInput = () => cy.get('[class*="_payments_list_"] input[name="name"]')

    static listOfPaymentsAddModalCloseButton = () => cy.get('[class*="_payments_list_"] [class*="right-0"]')

    static listOfPaymentsAddModalSaveButton = () => cy.get('[class*="_payments_list_"] button[type="submit"]')

    static listOfPaymentsEditButtons = () => cy.get('td:nth-child(3) button')

    static listOfPaymentsEditButton = (index: number) => cy.get('tbody tr td:nth-child(3) button').eq(index)

    static listOfPaymentsDeleteButtons = () => cy.get(' td:nth-child(4) button')

    static listOfPaymentsDeleteButton = (index: number) => cy.get('tbody tr td:nth-child(4) button').eq(index)

    static listOfPaymentsEditModal = () => cy.get('[class*="_payments_list_"]').contains('h4', 'Edit')

    static listOfPaymentsEditModalNameInput = () => cy.get('[class*="_payments_list_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_payments_list_"]')
        .find('input[name="name"]')

    static listOfPaymentsEditModalCloseButton = () => cy.get('[class*="_payments_list_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_payments_list_"]')
        .find('[class*="right-0"]')

    static listOfPaymentsEditModalSaveButton = () => cy.get('[class*="_payments_list_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_payments_list_"]')
        .find('button[type="submit"]')

    static listOfPaymentsDeleteModal = () => cy.get('[class*="_delete_notification"]')

    static listOfPaymentsDeleteModalDeleteButton = () => cy.get('[class*="_delete_notification"] button[class*="shadow-gray-900/10"]')

    static listOfPaymentsDeleteModalCancelButton = () => cy.get('[class*="_delete_notification"] button + button')

    static listOfPaymentsSuccessAddToast = () => cy.get('#successAdd')

    static listOfPaymentsSuccessEditToast = () => cy.get('#successEdit')

    static listOfPaymentsSuccessDeleteToast = () => cy.get('#successDelete')

    static listOfPaymentsInvalidDeleteToast = () => cy.get('#invalidPaymentListDelete')

    static listOfPaymentsInvalidEditToast = () => cy.get('#already')

    static listOfPaymentsExistPaymentToast = () => cy.get('#existPaymentList')

    static listOfPaymentsValidationErrorMessage = () => cy.get('[class*=_error_]')

    static listOfWarehousesHeaderText = () => cy.get('[class*="content_title"] [class*="_title"]')

    static listOfWarehousesTbody = () => cy.get('[class*="_tbody_"]')

    static listOfWarehousesTbodyItems = () => cy.get('[class*="_tbody_"] tr')

    static listOfWarehousesTbodyItem = (index: number) => cy.get('[class*="_tbody_"] tr').eq(index)

    static listOfWarehousesAddButton = () => cy.get('[class*="px-4 py-4"] button + button')

    static listOfWarehousesAddModal = () => cy.get('[class*="_warehouses_list_"]')

    static listOfWarehousesAddModalNameInput = () => cy.get('[class*="_warehouses_list_"] input[name="name"]')

    static listOfWarehousesAddModalCloseButton = () => cy.get('[class*="_warehouses_list_"] [class*="right-0"]')

    static listOfWarehousesAddModalSaveButton = () => cy.get('[class*="_warehouses_list_"] button[type="submit"]')

    static listOfWarehousesEditButtons = () => cy.get('tbody tr td:nth-child(4) button')

    static listOfWarehousesEditButton = (index: number) => cy.get('tbody tr td:nth-child(4) button').eq(index)

    static listOfWarehousesDeleteButtons = () => cy.get(' td:nth-child(5) button')

    static listOfWarehousesDeleteButton = (index: number) => cy.get('tbody tr td:nth-child(5) button').eq(index)

    static listOfWarehousesEditModal = () => cy.get('[class*="_warehouses_list_"]').contains('h4', 'Edit')

    static listOfWarehousesEditModalNameInput = () => cy.get('[class*="_warehouses_list_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_warehouses_list_"]')
        .find('input[name="name"]')

    static listOfWarehousesEditModalCloseButton = () => cy.get('[class*="_warehouses_list_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_warehouses_list_"]')
        .find('[class*="right-0"]')

    static listOfWarehousesEditModalSaveButton = () => cy.get('[class*="_warehouses_list_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_warehouses_list_"]')
        .find('button[type="submit"]')

    static listOfWarehousesDeleteModal = () => cy.get('[class*="_delete_notification"]')

    static listOfWarehousesDeleteModalDeleteButton = () => cy.get('[class*="_delete_notification"] button[class*="shadow-gray-900/10"]')

    static listOfWarehousesDeleteModalCancelButton = () => cy.get('[class*="_delete_notification"] button + button')

    static listOfWarehousesSuccessAddToast = () => cy.get('#successAdd')

    static listOfWarehousesSuccessEditToast = () => cy.get('#successEdit')

    static listOfWarehousesSuccessDeleteToast = () => cy.get('#successDelete')

    static listOfWarehousesInvalidDeleteToast = () => cy.get('#invalidWarehouseListDelete')

    static listOfWarehousesInvalidEditToast = () => cy.get('#already')

    static listOfWarehousesExistWarehouseToast = () => cy.get('#existWarehouseList')

    static listOfWarehousesValidationErrorMessage = () => cy.get('[class*=_error_]')

    static cashRegisterTypesHeaderText = () => cy.get('[class*="content_title"] [class*="_title"]')

    static cashRegisterTypesTbody = () => cy.get('[class*="_tbody_"]')

    static cashRegisterTypesTbodyItems = () => cy.get('[class*="_tbody_"] tr')

    static cashRegisterTypesTbodyItem = (index: number) => cy.get('[class*="_tbody_"] tr').eq(index)

    static cashRegisterTypesAddButton = () => cy.get('[class*="px-4 py-4"] button + button')

    static cashRegisterTypesAddModal = () => cy.get('[class*="_cash_register_type_"]')

    static cashRegisterTypesAddModalNameInput = () => cy.get('[class*="_cash_register_type_"] input[name="name"]')

    static cashRegisterTypesAddModalBankAccountInput = () => cy.get('[class*="_cash_register_type_"] input[name="rshet"]')

    static cashRegisterTypesAddModalDescriptionInput = () => cy.get('[class*="_cash_register_type_"] textarea[name="prim"]')

    static cashRegisterTypesAddModalCloseButton = () => cy.get('[class*="_cash_register_type_"] [class*="right-0"]')

    static cashRegisterTypesAddModalSaveButton = () => cy.get('[class*="_cash_register_type_"] button[type="submit"]')

    static cashRegisterTypesEditButtons = () => cy.get('td:nth-child(5) button')

    static cashRegisterTypesEditButton = (index: number) => cy.get('tbody tr td:nth-child(5) button').eq(index)

    static cashRegisterTypesDeleteButtons = () => cy.get(' td:nth-child(6) button')

    static cashRegisterTypesDeleteButton = (index: number) => cy.get('tbody tr td:nth-child(6) button').eq(index)

    static cashRegisterTypesEditModal = () => cy.get('[class*="z-[9999]"]').contains('h4', 'Edit')

    static cashRegisterTypesEditModalNameInput = () => cy.get('[class*="z-[9999]"]')
        .contains('h4', 'Edit')
        .parents('[class*="z-[9999]"]')
        .find('input[name="name"]')

    static cashRegisterTypesEditModalBankAccountInput = () => cy.get('[class*="z-[9999]"]')
        .contains('h4', 'Edit')
        .parents('[class*="z-[9999]"]')
        .find('input[name="rshet"]')

    static cashRegisterTypesEditModalDescriptionInput = () => cy.get('[class*="z-[9999]"]')
        .contains('h4', 'Edit')
        .parents('[class*="z-[9999]"]')
        .find('textarea[name="prim"]')

    static cashRegisterTypesEditModalCloseButton = () => cy.get('[class*="z-[9999]"]')
        .contains('h4', 'Edit')
        .parents('[class*="z-[9999]"]')
        .find('[class*="right-0"]')

    static cashRegisterTypesEditModalSaveButton = () => cy.get('[class*="z-[9999]"]')
        .contains('h4', 'Edit')
        .parents('[class*="z-[9999]"]')
        .find('button[type="submit"]')

    static cashRegisterTypesDeleteModal = () => cy.get('[class*="_delete_notification"]')

    static cashRegisterTypesDeleteModalDeleteButton = () => cy.get('[class*="_delete_notification"] button[class*="shadow-gray-900/10"]')

    static cashRegisterTypesDeleteModalCancelButton = () => cy.get('[class*="_delete_notification"] button + button')

    static cashRegisterTypesSuccessAddToast = () => cy.get('#successAdd')

    static cashRegisterTypesSuccessEditToast = () => cy.get('#successEdit')

    static cashRegisterTypesSuccessDeleteToast = () => cy.get('#successDelete')

    static cashRegisterTypesInvalidDeleteToast = () => cy.get('#invalidCashRegisterTypeDelete')

    static cashRegisterTypesInvalidEditToast = () => cy.get('#already')

    static cashRegisterTypesExistCashRegisterTypeToast = () => cy.get('#existCashRegisterType')

    static cashRegisterTypesValidationErrorMessage = () => cy.get('[class*=_error_]')

    static productColorHeaderText = () => cy.get('[class*="content_title"] [class*="_title"]')

    static productColorTbody = () => cy.get('[class*="_tbody_"]')

    static productColorTbodyItems = () => cy.get('[class*="_tbody_"] tr')

    static productColorTbodyItem = (index: number) => cy.get('[class*="_tbody_"] tr').eq(index)

    static productColorAddButton = () => cy.get('[class*="px-4 py-4"] button + button')

    static productColorAddModal = () => cy.get('[class*="_product_colors_"]')

    static productColorAddModalColorToneSection = () => cy.get('[class*="_product_colors_"] [class="react-colorful"] > [class*="react-colorful__saturation"]')

    static productColorAddModalColorChoosingSection = () => cy.get('[class*="_product_colors_"] [class="react-colorful__hue"]')

    static productColorAddModalColorOpacitySection = () => cy.get('[class*="_product_colors_"] [class="react-colorful__alpha react-colorful__last-control"]')

    static productColorAddModalResultColorField = () => cy.get('[class*="_product_colors_"] [class*="w-full h-[50px]"]')

    static productColorAddModalSaveButton = () => cy.get('[class*="_product_colors_"] button[type="submit"]')

    static productColorAddModalCloseButton = () => cy.get('[class*="_product_colors_"] [class*="right-0"]')

    static productColorEditButtons = () => cy.get('td:nth-child(4) button')

    static productColorEditButton = (index: number) => cy.get('tbody tr td:nth-child(4) button').eq(index)

    static productColorDeleteButtons = () => cy.get(' td:nth-child(5) button')

    static productColorDeleteButton = (index: number) => cy.get('tbody tr td:nth-child(5) button').eq(index)

    static productColorTbodyColors = () => cy.get('[class*="_tbody_"] tr td:nth-child(3) div[style]')

    static productColorTbodyColor = (index: number) => cy.get('[class*="_tbody_"] tr td:nth-child(3) div[style]').eq(index)

    static productColorEditModal = () => cy.get('[class*="_product_colors_"]').contains('h4', 'Edit')

    static productColorEditModalColorToneSection = () => cy.get('[class*="_product_colors_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_product_colors_"]')
        .find('[class="react-colorful"] > [class*="react-colorful__saturation"]')

    static productColorEditModalColorChoosingSection = () => cy.get('[class*="_product_colors_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_product_colors_"]')
        .find('[class="react-colorful__hue"]')

    static productColorEditModalColorOpacitySection = () => cy.get('[class*="_product_colors_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_product_colors_"]')
        .find('[class="react-colorful__alpha react-colorful__last-control"]')

    static productColorEditModalResultColorField = () => cy.get('[class*="_product_colors_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_product_colors_"]')
        .find('[class*="w-full h-[50px]"]')

    static productColorEditModalSaveButton = () => cy.get('[class*="_product_colors_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_product_colors_"]')
        .find('button[type="submit"]')

    static productColorEditModalCloseButton = () => cy.get('[class*="_product_colors_"]')
        .contains('h4', 'Edit')
        .parents('[class*="_product_colors_"]')
        .find('[class*="right-0"]')

    static productColorDeleteModal = () => cy.get('[class*="_delete_notification"]')

    static productColorDeleteModalDeleteButton = () => cy.get('[class*="_delete_notification"] button[class*="shadow-gray-900/10"]')

    static productColorDeleteModalCancelButton = () => cy.get('[class*="_delete_notification"] button + button')

    static productColorSuccessAddToast = () => cy.get('#successAdd')

    static productColorSuccessEditToast = () => cy.get('#successEdit')

    static productColorSuccessDeleteToast = () => cy.get('#successDelete')

    static productColorInvalidDeleteToast = () => cy.get('#invalidProductColorDelete')

    static productColorInvalidEditToast = () => cy.get('#already')

    static productColorExistProductColorToast = () => cy.get('#existProductColor')

    static productColorValidationErrorMessage = () => cy.get('[class*=_error_]')
}