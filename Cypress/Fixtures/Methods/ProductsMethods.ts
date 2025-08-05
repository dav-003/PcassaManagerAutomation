import {ProductsSelectors} from "../Selectors/ProductsSelectors";
import {ProductAddModal} from "../Models/ProductsModels";
import {ProductsGenerators} from "../Generators/ProductsGenerators";
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
        if(data.sku) ProductsSelectors.addProductModalSKUInput().type(data.sku)
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
        ProductsSelectors.addProductSidebarModal().should('not.be.visible')
    }
}