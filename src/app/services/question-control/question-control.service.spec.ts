import { TestBed } from '@angular/core/testing';

import { QuestionControlService } from './question-control.service';

describe('QuestionControlService', () => {
  let service: QuestionControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionControlService]
    });
    service = TestBed.inject(QuestionControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
