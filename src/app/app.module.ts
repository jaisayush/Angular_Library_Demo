import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestLibsModule, TEST_PROVIDER_CLASS } from 'projects/test-libs/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestAppServiceService } from './services/test-app-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestLibsModule
  ],
  providers: [{
    provide: TEST_PROVIDER_CLASS,
    useClass: TestAppServiceService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
