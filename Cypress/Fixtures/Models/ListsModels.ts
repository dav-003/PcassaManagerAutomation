export enum unitOfMeasurementTheadSequence {
    ID = 0,
    Name = 1,
    Edit = 2,
    Delete = 3
}

export enum CategoryTypesTheadSequence {
    ID = 0,
    Name = 1,
    Edit = 2,
    Delete = 3
}

export enum listOfPaymentsTheadSequence {
    ID = 0,
    Name = 1,
    Edit = 2,
    Delete = 3
}

export enum listOfWarehousesTheadSequence {
    ID = 0,
    Code = 1,
    Name = 2,
    Edit = 3,
    Delete = 4
}

export enum cashRegisterTypesTheadSequence {
    ID = 0,
    Name = 1,
    BankAccount = 2,
    Description = 3,
    Edit = 4,
    Delete = 5
}

export enum productColorTheadSequence {
    ID = 0,
    Name = 1,
    Color = 2,
    Edit = 3,
    Delete = 4
}

export enum productSizeTheadSequence {
    ID = 0,
    Name = 1,
    Edit = 2,
    Delete = 3
}

export enum productCurrenciesTheadSequence {
    ID = 0,
    Name = 1,
    ShortName = 2,
    Rounding = 3,
    PaymentType = 4,
    Main = 5,
    Enabled = 6,
    Edit = 7,
    Delete = 8
}

export enum productCurrenciesCurrencyTypes {
    Cash = 0,
    CashLess = 1,
    Duty = 2
}

export enum productCurrenciesPaymentTypes {
    NoFiscal = 0,
    Fiscal = 1,
    Bonus = 2,
    Deposit = 3
}

export enum productCurrenciesCheckboxes {
    Main = 0,
    Enabled = 1
}

export interface unitOfMeasurementNameField {
    name: string;
}

export interface categoryTypeNameField {
    name: string;
}

export interface listOfPaymentsNameField {
    name: string;
}

export interface listOfWarehousesNameField {
    name: string;
}

export interface cashRegisterTypesAddFields {
    name?: string;
    bankAccount?: string;
    description?: string;
}

export interface productSizeFields {
    groupName: string;
    name: string;
}

export interface productCurrenciesAddFields {
    name?: string;
    shortName?: string;
    rounding?: number
}
