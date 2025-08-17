import {ProductsSelectors} from "../Selectors/ProductsSelectors";
import {ProductAddModal, ProductsEditModal} from "../Models/ProductsModels";
import {ProductsGenerators} from "../Generators/ProductsGenerators";
import {ProductTheadRowSequence} from "../Models/ProductsModels";
import Chance from 'chance';
const chance = new Chance();
export class ProductsMethods {

    static AddRandomProduct = () => {
        const [data]: ProductAddModal[] = ProductsGenerators.generatedProduct()
        ProductsSelectors.productsAddButton().click()
        ProductsSelectors.addProductSidebarModal().should('be.visible')
        if(data.name) ProductsSelectors.addProductModalNameInput().type(data.name)
        if(data.alternativeName) ProductsSelectors.addProductModalOtherNameInput().clear().type(data.alternativeName)
        if(data.description) ProductsSelectors.addProductModalDescriptionInput().type(data.description)
        if(data.barcode) ProductsSelectors.addProductModalBarcodeInput().type(data.barcode)
        if(data.barcodeGroup) ProductsSelectors.addProductModalBarcodeGroupInput().clear().type(data.barcodeGroup)
        if(data.adgCode) ProductsSelectors.addProductModalADGCodeInput().type(data.adgCode)
        if(data.sku) ProductsSelectors.addProductModalSKUInput().type(String(data.sku))
        if(data.wholesalePrice) ProductsSelectors.addProductModalWholesalePriceInput().type(String(data.wholesalePrice))
        if(data.retailPrice) ProductsSelectors.addProductModalRetailPriceInput().type(String(data.retailPrice))
        ProductsSelectors.addProductModalGroupSelect().click()
        ProductsSelectors.addProductModalGroupModalGroups().should('be.visible').then(($groups) => {
            const randomIndex = chance.integer({ min: 0, max: $groups.length - 1 });
            cy.wait(400)
            cy.wrap($groups[randomIndex]).scrollIntoView().click();
        })
        ProductsSelectors.addProductModalGroupModalSelectGroupButton().click()
        ProductsSelectors.addProductModalProductCategorySelect().click()
        ProductsSelectors.addProductModalProductCategoryOptions().should('be.visible').then(($categories) => {
            const randomIndex = chance.integer({ min: 1, max: $categories.length - 1 });
            cy.wrap($categories[randomIndex]).scrollIntoView().click({ force: true });
        })
        ProductsSelectors.addProductModalUnitOfMeasurementSelect().click()
        ProductsSelectors.addProductModalUnitOfMeasurementSelectOptions().should('be.visible').then(($units) => {
            const randomIndex = chance.integer({ min: 1, max: $units.length - 1 });
            cy.wrap($units[randomIndex]).scrollIntoView().click({ force: true });
        })
        ProductsSelectors.addProductModalSizeSelect().click()
        ProductsSelectors.addProductModalSizeOptions().should('be.visible').then(($sizes) => {
            const randomIndex = chance.integer({ min: 0, max: $sizes.length - 1 });
            cy.wrap($sizes[randomIndex]).scrollIntoView().click({ force: true });
        })
        ProductsSelectors.addProductModalColorSelect().click()
        ProductsSelectors.addProductModalColorOptions().should('be.visible').then(($colors) => {
            const randomIndex = chance.integer({ min: 1, max: $colors.length - 1 });
            cy.wrap($colors[randomIndex]).scrollIntoView().click({ force: true });
        })
        const shouldStatusBeChecked = chance.bool();

        if (shouldStatusBeChecked) {
            ProductsSelectors.addProductModalStatusCheckbox().check({ force: true });
        } else {
            ProductsSelectors.addProductModalStatusCheckbox().uncheck({ force: true });
        }
        const shouldTopChecked = chance.bool();

        if (shouldTopChecked) {
            ProductsSelectors.addProductModalTopCheckbox().check({ force: true });
        } else {
            ProductsSelectors.addProductModalTopCheckbox().uncheck({ force: true });
        }
        ProductsSelectors.addProductModalSettingsButton().click()
        if(data.department) ProductsSelectors.addProductModalSettingsDepartmentsInput().type(String(data.department))
        if(data.fiscalRegister) ProductsSelectors.addProductModalSettingsFiscalRegisterInput().type(String(data.fiscalRegister))
        if(data.serviceFee) ProductsSelectors.addProductModalSettingsServiceFeeInput().type(String(data.serviceFee))
        if(data.returnLimitation) ProductsSelectors.addProductModalSettingsReturnLimitationInput().type(String(data.returnLimitation))
        if(data.maxDiscount) ProductsSelectors.addProductModalSettingsMaxDiscountInput().type(String(data.maxDiscount))
        if(data.discount) ProductsSelectors.addProductModalSettingsDiscountInput().type(String(data.discount))
        const shouldNotDiscountBeChecked = chance.bool();
        if (shouldNotDiscountBeChecked) {
            ProductsSelectors.addProductModalSettingsNotDiscountCheckbox().check({ force: true });
        } else {
            ProductsSelectors.addProductModalSettingsNotDiscountCheckbox().uncheck({ force: true });
        }
        const shouldExciseBeChecked = chance.bool();
        if (shouldExciseBeChecked) {
            ProductsSelectors.addProductModalSettingsExciseCheckbox().check({ force: true });
        } else {
            ProductsSelectors.addProductModalSettingsExciseCheckbox().uncheck({ force: true });
        }
        const shouldTaxBeChecked = chance.bool();
        if (shouldTaxBeChecked) {
            ProductsSelectors.addProductModalSettingsTaxCheckbox().check({ force: true });
        } else {
            ProductsSelectors.addProductModalSettingsTaxCheckbox().uncheck({ force: true });
        }
        ProductsSelectors.addProductModalSettingsPrinterSelect().click()
        ProductsSelectors.addProductModalSettingsPrinterOptions().should('be.visible').then(($printers) => {
            const randomIndex = chance.integer({ min: 0, max: $printers.length - 1 });
            cy.wrap($printers[randomIndex]).scrollIntoView().click({ force: true });
        })
        ProductsSelectors.addProductModalAddButton().click()
        ProductsSelectors.successAddToastify().should('be.visible').click()
        ProductsSelectors.addProductSidebarModal().should('not.be.visible')
    }
    static editRandomProduct = () => {
        const randomNumber = chance.integer({min: 0, max: 5})
        const [data]: ProductAddModal[] = ProductsGenerators.generatedProduct()
        ProductsSelectors.productsTbodyRow(randomNumber).rightclick()
        ProductsSelectors.productRightClickModalEditButton().click()
        ProductsSelectors.editProductSidebarModal().should('be.visible')
        if(data.name) ProductsSelectors.productEditSidebarNameInput().clear().type(data.name)
        if(data.alternativeName) ProductsSelectors.productEditSidebarOtherNameInput().clear().type(data.alternativeName)
        if(data.description) ProductsSelectors.productEditSidebarDescriptionInput().clear().type(data.description)
        if(data.barcode) ProductsSelectors.productEditSidebarBarcodeInput().clear().type(data.barcode)
        if(data.barcodeGroup) ProductsSelectors.productEditSidebarBarcodeGroupInput().clear().type(data.barcodeGroup)
        if(data.adgCode) ProductsSelectors.productEditSidebarADGCodeInput().clear().type(data.adgCode)
        if(data.sku) ProductsSelectors.productEditSidebarSKUInput().clear().type(String(data.sku))
        if(data.wholesalePrice) ProductsSelectors.productEditSidebarWholesalePriceInput().clear().type(String(data.wholesalePrice))
        if(data.retailPrice) ProductsSelectors.productEditSidebarRetailPriceInput().clear().type(String(data.retailPrice))
        ProductsSelectors.productEditSidebarGroupSelect().click()
        ProductsSelectors.productEditSidebarGroupOptions().should('be.visible').then(($groups) => {
            const randomIndex = chance.integer({ min: 0, max: $groups.length - 1 });
            cy.wrap($groups[randomIndex]).scrollIntoView().click({ force: true });
            ProductsSelectors.productEditSidebarGroupOptionSubmitButton().click()
            ProductsSelectors.productEditSidebarGroupOptions().should('not.be.visible')
        })
        ProductsSelectors.productEditSidebarProductCategorySelect().click()
        ProductsSelectors.productEditSidebarProductCategoryOptions().should('be.visible').then(($categories) => {
            const randomIndex = chance.integer({ min: 1, max: $categories.length - 1 });
            cy.wrap($categories[randomIndex]).scrollIntoView().click({ force: true });
            ProductsSelectors.productEditSidebarProductCategoryOptions().should('not.exist')
        })
        ProductsSelectors.productEditSidebarUnitOfMeasurementSelect().click()
        ProductsSelectors.productEditSidebarUnitOfMeasurementOptions().should('be.visible').then(($units) => {
            const randomIndex = chance.integer({ min: 1, max: $units.length - 1 });
            cy.wrap($units[randomIndex]).scrollIntoView().click({ force: true });
            ProductsSelectors.productEditSidebarUnitOfMeasurementOptions().should('not.exist')
        })
        ProductsSelectors.productEditSidebarSizeSelect().click()
        ProductsSelectors.productEditSidebarSizeOptions().should('be.visible').then(($sizes) => {
            const randomIndex = chance.integer({ min: 0, max: $sizes.length - 1 });
            cy.wrap($sizes[randomIndex]).scrollIntoView().click({ force: true });
            ProductsSelectors.productEditSidebarSizeOptions().should('not.exist')
        })
        ProductsSelectors.productEditSidebarColorSelect().click()
        ProductsSelectors.productEditSidebarColorOptions().should('be.visible').then(($colors) => {
            const randomIndex = chance.integer({ min: 1, max: $colors.length - 1 });
            cy.wrap($colors[randomIndex]).scrollIntoView().click({ force: true });
            ProductsSelectors.productEditSidebarColorOptions().should('not.exist')
        })
        ProductsSelectors.productEditSidebarStatusCheckbox().click()
        ProductsSelectors.productEditSidebarTopCheckbox().click()
        ProductsSelectors.productEditSidebarSettingsButton().click()
        if(data.department) ProductsSelectors.productEditSidebarDepartmentsInput().clear().type(String(data.department))
        if(data.fiscalRegister) ProductsSelectors.productEditSidebarFiscalRegisterInput().clear().type(String(data.fiscalRegister))
        if(data.serviceFee) ProductsSelectors.productEditSidebarServiceFeeInput().clear().type(String(data.serviceFee))
        if(data.returnLimitation) ProductsSelectors.productEditSidebarReturnLimitationInput().clear().type(String(data.returnLimitation))
        if(data.discount) ProductsSelectors.productEditSidebarDiscountInput().clear().type(String(data.discount))
        ProductsSelectors.productEditSidebarNotDiscountCheckbox().click()
        ProductsSelectors.productEditSidebarExciseCheckbox().click()
        ProductsSelectors.productEditSidebarTaxCheckbox().click()
        ProductsSelectors.productEditSidebarPrinterSelect().click()
        ProductsSelectors.productEditSidebarPrinterOptions().should('be.visible').then(($printers) => {
            const randomIndex = chance.integer({ min: 0, max: $printers.length - 1 });
            cy.wrap($printers[randomIndex]).scrollIntoView().click({ force: true });
            ProductsSelectors.productEditSidebarPrinterOptions().should('not.exist')
        })
        ProductsSelectors.productEditSidebarSaveButton().click()
        ProductsSelectors.productEditSuccessToastify().should('be.visible').click()
        ProductsSelectors.productEditSuccessToastify().should('not.exist')
        ProductsSelectors.editProductSidebarModal().should('not.be.visible')
    }
    static editChoosedProductsAndValidateEdit = (rowsToCheck :number[]) => {
        const [data]: ProductAddModal[] = ProductsGenerators.generatedProduct()
        ProductsSelectors.actionsWithSelectedProductsEditModal().should('be.visible')

        const fields: {
            value: string | number | undefined | null
            selector: () => Cypress.Chainable<JQuery<HTMLElement>>
            columnIndex: ProductTheadRowSequence
        }[] = [
            {
                value: data.sku,
                selector: ProductsSelectors.actionsWithSelectedProductsEditModalSKUInput,
                columnIndex: ProductTheadRowSequence.SKU
            },
            {
                value: data.barcodeGroup,
                selector: ProductsSelectors.actionsWithSelectedProductsEditModalGroupBarcodeInput,
                columnIndex: ProductTheadRowSequence.BarcodeGroup
            },
            {
                value: data.wholesalePrice,
                selector: ProductsSelectors.actionsWithSelectedProductsEditModalWholesalePriceInput,
                columnIndex: ProductTheadRowSequence.WholesalePrice
            },
            {
                value: data.retailPrice,
                selector: ProductsSelectors.actionsWithSelectedProductsEditModalRetailPriceInput,
                columnIndex: ProductTheadRowSequence.RetailPrice
            }
        ]
        fields.forEach(({ value, selector }) => {
            if(value !== undefined && value !== null) {
                selector().clear().type(String(value))
            }
        })
        ProductsSelectors.actionsWithSelectedProductsEditModalSaveButton().click()
        cy.wait(3000)
        ProductsSelectors.actionsWithSelectedProductsEditModalSaveButton().should('be.disabled')
        ProductsSelectors.actionsWithSelectedProductsEditModalCloseButton().click()
        ProductsSelectors.actionsWithSelectedProductsEditModal().should('not.be.visible')

        rowsToCheck.forEach((rowIndex: number) => {
            fields.forEach(({ value, columnIndex }) => {
                if (value !== undefined && value !== null) {
                    cy.get('tbody tr')
                        .eq(rowIndex)
                        .find('td')
                        .eq(columnIndex)
                        .should('have.text', String(value))
                }
            })
        })
    }
    static AddInvalidProduct = () => {
        const [data]: ProductAddModal[] = ProductsGenerators.invalidGeneratedProduct();

        ProductsSelectors.addProductSidebarModal().should('be.visible');

        if(data.name) ProductsSelectors.addProductModalNameInput().type(data.name);
        if(data.alternativeName) ProductsSelectors.addProductModalOtherNameInput().clear().type(data.alternativeName);
        if(data.description) ProductsSelectors.addProductModalDescriptionInput().type(data.description);
        if(data.barcodeGroup) ProductsSelectors.addProductModalBarcodeGroupInput().type(data.barcodeGroup);
        if(data.barcode) ProductsSelectors.addProductModalBarcodeInput().type(data.barcode);
        if(data.wholesalePrice) ProductsSelectors.addProductModalWholesalePriceInput().type(String(data.wholesalePrice));
        if(data.retailPrice) ProductsSelectors.addProductModalRetailPriceInput().type(String(data.retailPrice));
        if(data.adgCode) ProductsSelectors.addProductModalADGCodeInput().type(data.adgCode);
        if(data.sku) ProductsSelectors.addProductModalSKUInput().type(String(data.sku));

        ProductsSelectors.addProductModalAddButton().click();

        ProductsSelectors.addProductSidebarModal().should('be.visible');
    }
}