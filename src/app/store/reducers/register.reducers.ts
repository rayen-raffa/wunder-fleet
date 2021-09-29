import { RegisterActions, ERegisterActions } from '../actions/register.actions';

import { initialRegisterState, IRegisterState } from '../state/register.state';

export const registerReducers = (
  state = initialRegisterState,
  action: RegisterActions
): IRegisterState => {
  switch (action.type) {
    case ERegisterActions.StartRegister: {
      return {
        ...initialRegisterState,
      };
    }
    case ERegisterActions.SubmitPersonalInformation: {
      return {
        ...state,
        personalInfo: action.payload,
        currentRegistrationStep: 'address',
      };
    }
    case ERegisterActions.SubmitAddress: {
      return {
        ...state,
        address: action.payload,
        currentRegistrationStep: 'paymentInfo',
      };
    }
    case ERegisterActions.SubmitPaymentInformation: {
      return {
        ...state,
        paymentInfo: {
          ...state.paymentInfo,
          owner: action.payload.owner,
          iban: action.payload.iban
        },
        currentRegistrationStep: 'paymentInfo',
      };
    }
    case ERegisterActions.RegisterSuccess: {
      return {
        ...state,
        paymentInfo: {
          ...state.paymentInfo,
          paymentDataId: action.payload,
        },
        currentRegistrationStep: 'registerSuccess',
      };
    }
    default:
      return state;
  }
};
