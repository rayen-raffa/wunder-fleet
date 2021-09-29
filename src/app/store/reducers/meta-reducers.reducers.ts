import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { IAppState } from '../state/app.state';

export function localStorageSyncReducer(
  reducer: ActionReducer<IAppState>
): ActionReducer<IAppState> {
  return localStorageSync({
    keys: [
      {
        registerState: [
          'currentRegistrationStep',
          'personalInfo',
          'address',
          'paymentInfo',
          'regisrationQuestions',
        ],
      },
    ],
    rehydrate: true
  })(reducer);
}

export const metaReducers: Array<MetaReducer<IAppState, any>> = [
  localStorageSyncReducer,
];
