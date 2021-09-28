import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { QuestionService } from './services/question/question.service';
import { QuestionBase } from './models/question-base';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:  [QuestionService]
})
export class AppComponent {
  title = 'wunder-fleet';
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
