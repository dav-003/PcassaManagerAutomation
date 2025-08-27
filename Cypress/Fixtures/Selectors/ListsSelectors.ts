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

    static unitOfMeasurementEmptyFieldErrorMessage = () => cy.get('[class*=_error_]')

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

    static categoryTypesExistCategoryToast = () => cy.get('#existCategory')
}