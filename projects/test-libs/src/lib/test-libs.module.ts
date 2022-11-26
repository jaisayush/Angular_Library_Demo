import { NgModule } from '@angular/core';
import { TestLibsComponent } from './test-libs.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TestLibsComponent,
    TestComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TestLibsComponent,
    TestComponentComponent
  ]
})
export class TestLibsModule { }
