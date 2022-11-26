import { NgModule } from '@angular/core';
import { TestLibsComponent } from './test-libs.component';
import { TestComponentComponent } from './components/test-component/test-component.component';



@NgModule({
  declarations: [
    TestLibsComponent,
    TestComponentComponent
  ],
  imports: [
  ],
  exports: [
    TestLibsComponent
  ]
})
export class TestLibsModule { }
