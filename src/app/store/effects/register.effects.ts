import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import { INextOrPreviousStep } from 'src/app/models/registration-information.interface';
import {
  ERegisterActions,
  RegisterActions,
  SubmitPersonalInformation,
  SubmitAddress,
  SubmitPaymentInformation,
} from '../actions/register.actions';
import { selectCurrentRegisterStep } from '../selectors/register.selectors';
import { of } from 'rxjs';

@Injectable()
export class RegistgerEffects {
  nextOrPreviousStep$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ERegisterActions.NextOrPreviousStep),
      map((action) => action.payload),
      withLatestFrom(this._store.pipe(select(selectCurrentRegisterStep))),
      switchMap(([{ stepDirection, submittedInfo }, currentStep]) => {
        if (currentStep === 'personalInfo') {
          return of(new SubmitPersonalInformation(submittedInfo));
        } else if (currentStep === 'address') {
          return of(new SubmitAddress(submittedInfo));
        } else {
          return of(new SubmitPaymentInformation(submittedInfo));
        }
      })
    )
  );

  constructor(
    private actions$: Actions<RegisterActions>,
    private _store: Store<IAppState>
  ) {}
}
