import { Action } from '@ngrx/store';

import {
  IPersonalInformation,
  IAddress,
  IPaymentInformation,
} from 'src/app/models/registration-information.interface';

export enum ERegisterActions {
  StartRegister = '[Register] Start',
  SubmitPersonalInformation = '[Register] Submit Personal Information',
  SubmitAddress = '[Register] Submit Address',
  SubmitPaymentInformatioin = '[Register] Submit Payment Information',
  RegisterSuccess = '[Register] Registration Successful',
}

export class StartRegister implements Action {
  public readonly type = ERegisterActions.StartRegister;
}

export class SubmitPersonalInformation implements Action {
  public readonly type = ERegisterActions.SubmitPersonalInformation;
  constructor(public payload: IPersonalInformation) {}
}

export class SubmitAddress implements Action {
  public readonly type = ERegisterActions.SubmitAddress;
  constructor(public payload: IAddress) {}
}

export class SubmitPaymentInformation implements Action {
  public readonly type = ERegisterActions.SubmitPaymentInformatioin;
  constructor(public payload: IPaymentInformation) {}
}

export class RegisterSuccess implements Action {
  public readonly type = ERegisterActions.RegisterSuccess;
  constructor(public payload: IPaymentInformation['paymentDataId']) {}
}

export type RegisterActions =
  | StartRegister
  | SubmitPersonalInformation
  | SubmitAddress
  | SubmitPaymentInformation
  | RegisterSuccess;
