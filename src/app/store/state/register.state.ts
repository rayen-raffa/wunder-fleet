import { TextboxQuestion } from 'src/app/models/question-textbox';
import {
  IPersonalInformation,
  IAddress,
  IPaymentInformation,
} from 'src/app/models/registration-information.interface';
import { IRegistrationQuestions } from 'src/app/models/registration-questions.interface';

export interface IRegisterState {
  currentRegistrationStep: string;
  personalInfo: IPersonalInformation;
  address: IAddress;
  paymentInfo: IPaymentInformation;
  regisrationQuestions: IRegistrationQuestions;
}

// TODO : create initial register questions
export const initialPersonalInfoState: IPersonalInformation = {
  firstName: '',
  lastName: '',
  telephone: '',
};

export const initialAddressState: IAddress = {
  street: '',
  houseNumber: '',
  zipCode: '',
  city: '',
};

export const initialPaymentInfo: IPaymentInformation = {
  owner: '',
  iban: '',
  paymentDataId: '',
};

export const initialRegistrationQuestionsState: IRegistrationQuestions = {
  personalInfo: [
    new TextboxQuestion({
      key: 'firstName',
      label: 'First name',
      placeholder: 'Rayen',
      required: true,
      order: 1,
    }),
    new TextboxQuestion({
      key: 'lastName',
      label: 'Last name',
      placeholder: 'RAFFA',
      required: true,
      order: 2,
    }),
    new TextboxQuestion({
      key: 'telephone',
      label: 'Telephone',
      placeholder: '+216 27 085 029',
      required: true,
      order: 3,
    }),
  ],
  address: [],
  paymentInfo: [],
};

export const initialRegisterState: IRegisterState = {
  currentRegistrationStep: 'personalInfo',
  personalInfo: initialPersonalInfoState,
  address: initialAddressState,
  paymentInfo: initialPaymentInfo,
  regisrationQuestions: initialRegistrationQuestionsState,
};
