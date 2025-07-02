export enum SignInInputNames {
    Username = "Username",
    Password = "Password"
}
export enum LicenseCodes {
    Code_4004 = "1712317314990",
    Code_4003 = "1712562924834",
}

export interface SignInData {
    username ?: string;
    password ?: string;
}