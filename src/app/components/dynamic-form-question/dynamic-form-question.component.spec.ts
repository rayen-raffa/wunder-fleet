import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { MatInputModule } from '@angular/material/input';
import { TextboxQuestion } from '../../utils/question-textbox';

describe('DynamicFormQuestionComponent', () => {
  let component: DynamicFormQuestionComponent;
  let fixture: ComponentFixture<DynamicFormQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFormQuestionComponent],
      imports: [MatInputModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormQuestionComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({
      x: new FormControl('', Validators.required),
      y: new FormControl('', Validators.required),
      z: new FormControl('', Validators.required),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
