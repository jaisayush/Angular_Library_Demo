import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestData, TestModel } from 'projects/test-libs/src/public-api';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestAppServiceService implements TestModel {

  constructor(private http: HttpClient) { }
  getTestData(): Observable<any> {
    return of([{ Name: "test", Age: 12 }, { Name: "Ayush", Age: 24 }])
  }
  sendTestdata(data: TestData[]): Observable<any> {
    return of([])
  }
  getFakejsonData() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
}
