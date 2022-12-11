import { Component, OnInit } from '@angular/core';
import { TestAppServiceService } from './services/test-app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title1 = 'test-angular-libs';
  pageTitile = 'Ayush';
  todos: any
  constructor(private testService: TestAppServiceService) { }
  ngOnInit(): void {
    this.testService.getFakejsonData().subscribe(data => this.todos = data);
  }
}
