import { RouterReducerState } from "@ngrx/router-store";

import { IRegisterState, initialRegisterState } from "./register.state";
import { IRegisrationInformation } from "src/app/models/registration-information.interface";

export interface IAppState {
    router?: RouterReducerState,
    registerState: IRegisterState
    registeredUsers: IRegisrationInformation[]
}

export const initialAppState: IAppState = {
    registerState: initialRegisterState,
    registeredUsers: []
}

export function getInitialState(): IAppState {
    return initialAppState;
}