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
  address: [
    new TextboxQuestion({
      key: 'street',
      label: 'Street',
      placeholder: 'Damascus Street',
      required: true,
      order: 1,
    }),
    new TextboxQuestion({
      key: 'houseNumber',
      label: 'House Number',
      placeholder: '16',
      required: true,
      order: 2,
    }),
    new TextboxQuestion({
      key: 'zipCode',
      label: 'Zip Code',
      placeholder: '2111',
      required: true,
      order: 3,
    }),
    new TextboxQuestion({
      key: 'city',
      label: 'City',
      placeholder: 'Gafse',
      required: true,
      order: 4,
    }),
  ],
  paymentInfo: [
    new TextboxQuestion({
      key: 'owner',
      label: 'Account Owner',
      placeholder: 'Rayen RAFFA',
      required: true,
      order: 1,
    }),
    new TextboxQuestion({
      key: 'iban',
      label: 'IBAN',
      placeholder: 'IBAN 00216 27 085 029',
      required: true,
      order: 2,
    }),
  ],
};

export const initialRegisterState: IRegisterState = {
  currentRegistrationStep: 'personalInfo',
  personalInfo: initialPersonalInfoState,
  address: initialAddressState,
  paymentInfo: initialPaymentInfo,
  regisrationQuestions: initialRegistrationQuestionsState,
};
