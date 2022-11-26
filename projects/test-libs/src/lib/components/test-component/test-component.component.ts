import { Component, Input, OnInit } from '@angular/core';
import { TestData } from '../../models/test.model';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'lib-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {
  @Input() pageTitile = '';
  rowData: TestData[] = []
  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.fetchData().subscribe(data => {
      this.rowData = data;
      console.log(this.rowData, this.pageTitile);

    })
  }


}
