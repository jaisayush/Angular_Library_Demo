import { TestBed } from '@angular/core/testing';

import { TestAppServiceService } from './test-app-service.service';

describe('TestAppServiceService', () => {
  let service: TestAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
