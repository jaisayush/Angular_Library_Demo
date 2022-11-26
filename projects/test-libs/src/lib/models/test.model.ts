import { Observable } from 'rxjs';

export interface TestModel {
    getTestData(): Observable<any>;
    sendTestdata(data: TestData[]): Observable<any>;
}

export interface TestData {
    Name: string;
    Age: number;
}