import { TestBed } from '@angular/core/testing';

import { IssuesServiceService } from './issues-service.service';

describe('IssuesServiceService', () => {
  let service: IssuesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
