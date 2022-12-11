import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestLibsModule, TEST_PROVIDER_CLASS } from 'projects/test-libs/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptInterceptor } from './core/intercept.interceptor';
import { TestAppServiceService } from './services/test-app-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestLibsModule,
    HttpClientModule
  ],
  providers: [{
    provide: TEST_PROVIDER_CLASS,
    useClass: TestAppServiceService
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
