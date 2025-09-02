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
