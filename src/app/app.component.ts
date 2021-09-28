import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { QuestionService } from './services/question/question.service';
import { QuestionBase } from './models/question-base';
import { IAppState } from './store/state/app.state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:  [QuestionService]
})
export class AppComponent implements OnInit{
  title = 'wunder-fleet';

  constructor(private _store: Store<IAppState>) {
  }

  ngOnInit() {
    console.log('hi')
  }
}
