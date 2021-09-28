import {
  IPersonalInformation,
  IAddress,
  IPaymentInformation,
} from 'src/app/models/registration-information.interface';
import { IRegistrationQuestions } from 'src/app/models/registration-questions.interface';

export interface IRegisterState {
    currentRegistrationStep: string,
    personalInfo: IPersonalInformation,
    address: IAddress,
    paymentInfo: IPaymentInformation,
    regisrationQuestions: IRegistrationQuestions
}

// TODO : create initial register questions
export const initialPersonalInfoState: IPersonalInformation = {
    firstName: '',
    lastName: '',
    telephone: ''
}

export const initialAddressState: IAddress = {
    street: '',
    houseNumber: '',
    zipCode: '',
    city: ''
}

export const initialPaymentInfo: IPaymentInformation = {
    owner: '',
    iban: '',
    paymentDataId: ''
}

export const initialRegistrationQuestionsState: IRegistrationQuestions = {
    personalInfo: [],
    address: [],
    paymentInfo: []
}

export const initialRegisterState: IRegisterState = {
    currentRegistrationStep: 'Not Started',
    personalInfo: initialPersonalInfoState,
    address: initialAddressState,
    paymentInfo: initialPaymentInfo,
    regisrationQuestions: initialRegistrationQuestionsState
}