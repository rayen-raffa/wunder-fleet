import { Injectable } from '@angular/core';

import { QuestionBase } from '../../models/question-base';
import { TextboxQuestion } from '../../models/question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  // TODO: get question metadata from store
  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        placeholder: 'Rayen',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'lastName',
        label: 'Last name',
        placeholder: 'RAFFA',
        required: true,
        order: 2
      }),
      new TextboxQuestion({
        key: 'telephone',
        label: 'Telephone',
        placeholder: '+216 27 085 029',
        required: true,
        order: 3
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}