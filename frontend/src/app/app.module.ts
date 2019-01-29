import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {EmployeesApiService} from './employees/employees-api.service';
import {TransactionsApiService} from './transactions/transactions-api.service';
import {OrdersApiService} from './orders/orders-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [EmployeesApiService, TransactionsApiService, OrdersApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
