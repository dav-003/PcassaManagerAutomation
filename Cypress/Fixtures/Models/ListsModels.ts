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

export interface productSizeNameField {
    groupName: string;
    name: string;
}
