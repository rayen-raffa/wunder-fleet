import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IRegisterState } from '../state/register.state';

const selectRegisterState = (state: IAppState) => state.registerState;

export const selectCurrentRegisterStep = createSelector(
  selectRegisterState,
  (state: IRegisterState) => state.currentRegistrationStep
);

export const selectPersonalInfo = createSelector(
  selectRegisterState,
  (state: IRegisterState) => state.personalInfo
);

export const selectAddress = createSelector(
  selectRegisterState,
  (state: IRegisterState) => state.address
);

export const selectPaymentInfo = createSelector(
  selectRegisterState,
  (state: IRegisterState) => state.paymentInfo
);

export const selectRegistrationQuestions = createSelector(
  selectRegisterState,
  (state: IRegisterState) => state.regisrationQuestions
);
