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

    static unitOfMeasurementDeleteButton = (index: number) => cy.get('tbody tr td:nth-child(4) button').eq(index)

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
}