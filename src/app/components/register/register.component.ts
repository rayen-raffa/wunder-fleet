import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';

import { QuestionBase } from '../../models/question-base';
import { QuestionControlService } from '../../services/question-control/question-control.service';
import {
  selectCurrentRegisterStep,
  selectRegistrationQuestions,
} from 'src/app/store/selectors/register.selectors';
import { IRegistrationQuestions } from 'src/app/models/registration-questions.interface';
import { IRegisterState } from 'src/app/store/state/register.state';
import { IAppState } from 'src/app/store/state/app.state';
import {
  RegisterActions,
  SubmitPersonalInformation,
  SubmitAddress,
  SubmitPaymentInformation,
} from 'src/app/store/actions/register.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [QuestionControlService],
})
export class RegisterComponent implements OnInit {
  currentQuestions: QuestionBase<string>[] = [];
  form!: FormGroup;
  payload: any;
  payloadStringyfied = ''; // debugging
  allQuestions$ = this._store.pipe(select(selectRegistrationQuestions));
  currentRegisterStep$ = this._store.pipe(select(selectCurrentRegisterStep));

  constructor(
    private _store: Store<IAppState>,
    private qcs: QuestionControlService
  ) {}

  createFormGroup() {
    this.form = this.qcs.toFormGroup(
      this.currentQuestions as QuestionBase<string>[]
    );
  }

  ngOnInit() {
    this.currentRegisterStep$.subscribe((step) => {
      switch (step) {
        case 'personalInfo':
        case 'address':
        case 'paymentInfo': {
          this.allQuestions$.subscribe(
            (questions) => (this.currentQuestions = questions[step])
          );
        }
      }
    });
    this.createFormGroup();
  }

  onSubmit() {
    this.payload = this.form.getRawValue();
    this.payloadStringyfied = JSON.stringify(this.payload);
    let step$ = this.currentRegisterStep$.pipe(take(1));
    step$.subscribe((step) => {
      switch (step) {
        case 'personalInfo': {
          this._store.dispatch(new SubmitPersonalInformation(this.payload));
          this.createFormGroup();
          return;
        }
        case 'address': {
          this._store.dispatch(new SubmitAddress(this.payload));
          this.createFormGroup();
          break;
        }
        case 'paymentInfo': {
          this._store.dispatch(new SubmitPaymentInformation(this.payload));
          this.createFormGroup();
          break;
        }
      }
    });
  }
}
