export interface ProductAddModal {
    name?: string;
    alternativeName?: string;
    description?: string;
    barcode?: string;
    barcodeGroup?: string;
    adgCode?: string;
    sku?: string;
    wholesalePrice?: number;
    retailPrice?: number;
    department?: number;
    fiscalRegister?: number;
    serviceFee?: number;
    returnLimitation?: number;
    maxDiscount?: number;
    discount?: number;
}

export interface ProductsEditModal {
    alternativeName?: string;
    sku?: string;
    adgCode?: string;
    barcodeGroup?: string;
    wholesalePrice?: number;
    retailPrice?: number;
    departments?: number;
    fiscalRegister?: number;
    returnLimitation?: number;
    serviceFee?: number;
    discount?: number
}

export enum ProductTheadSequence {
    SelectAllCheckbox = 0,
    Code = 1,
    Name = 2,
    UnitOfMeasurement = 3,
    RetailPrice = 4,
    WholesalePrice = 5,
    Barcode = 6,
    BarcodeGroup = 7,
    SKU = 8,
    Size = 9,
    Image = 10
}

export enum ProductTheadRowSequence {
    SelectAllCheckbox = 0,
    Code = 1,
    Name = 2,
    UnitOfMeasurement = 3,
    RetailPrice = 4,
    WholesalePrice = 5,
    Barcode = 6,
    BarcodeGroup = 7,
    SKU = 8,
    Size = 9,
    Image = 10
}