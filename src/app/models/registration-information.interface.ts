export interface IPersonalInformation {
    firstName: string,
    lastName: string,
    telephone: string
}

export interface IAddress {
    street: string,
    houseNumber: string,
    zipCode: string,
    city: string
}

export interface IPaymentInformation {
    owner: string,
    iban: string,
    paymentDataId: string
}

export interface INextOrPreviousStep {
    stepDirection: string,
    submittedInfo?: any
}

export interface IRegisrationInformation {
    personalInfo: IPersonalInformation,
    address: IAddress,
    paymentInfo: IPaymentInformation
}