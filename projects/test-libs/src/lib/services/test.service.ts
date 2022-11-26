import { Injectable, Inject } from '@angular/core';
import { TEST_PROVIDER_CLASS } from '../models/di';
import { TestData, TestModel } from '../models/test.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    @Inject(TEST_PROVIDER_CLASS)
    private testProviderClass: TestModel
  ) { }

  fetchData(): Observable<any> {
    return this.testProviderClass.getTestData();
  }

  postData(data: TestData[]): Observable<any> {
    return this.testProviderClass.sendTestdata(data);
  }
}
