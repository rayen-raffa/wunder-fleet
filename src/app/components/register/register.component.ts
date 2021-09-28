import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';

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
import { JsonPipe } from '@angular/common';

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
    this.form = this.qcs.toFormGroup(
      this.currentQuestions as QuestionBase<string>[]
    );
  }

  onSubmit() {
    this.payload = this.form.getRawValue();
    this.payloadStringyfied = JSON.stringify(this.payload);
    this.currentRegisterStep$.subscribe((step) => {
      switch (step) {
        case 'personalInfo': {
          this._store.dispatch(new SubmitPersonalInformation(this.payload));
        }
      }
    });
  }
}
