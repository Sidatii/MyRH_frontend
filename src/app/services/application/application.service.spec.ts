import { TestBed } from '@angular/core/testing';

import { ApplicationserviceService } from './application.service';

describe('ApplicationserviceService', () => {
  let service: ApplicationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
