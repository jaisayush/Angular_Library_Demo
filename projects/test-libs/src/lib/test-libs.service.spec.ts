import { TestBed } from '@angular/core/testing';

import { TestLibsService } from './test-libs.service';

describe('TestLibsService', () => {
  let service: TestLibsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestLibsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
