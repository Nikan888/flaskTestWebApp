import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {EmployeesApiService} from './employees/employees-api.service';
import {TransactionsApiService} from './transactions/transactions-api.service';
import {OrdersApiService} from './orders/orders-api.service';

import {RouterModule, Routes} from '@angular/router';
import {EmployeeFormComponent} from './employees/employee-form.component';
import {EmployeesComponent} from './employees/employees.component';
import {TransactionFormComponent} from './transactions/transaction-form.component';
import {TransactionsComponent} from './transactions/transaction.component';
import {OrderFormComponent} from './orders/order-form.component';
import {OrdersComponent} from './orders/order.component';

const appRoutes: Routes = [
  { path: '', component: EmployeesComponent},
  { path: 'new-employee', component: EmployeeFormComponent },
  { path: 'employees', component: EmployeesComponent},
  { path: 'new-transaction', component: TransactionFormComponent },
  { path: 'transactions', component: TransactionsComponent},
  { path: 'new-order', component: OrderFormComponent },
  { path: 'orders', component: OrdersComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeesComponent,
    TransactionFormComponent,
    TransactionsComponent,
    OrderFormComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [EmployeesApiService, TransactionsApiService, OrdersApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
