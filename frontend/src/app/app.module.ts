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
import { TransactionsListComponent } from './transactions/transactions-list/transactions-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { TransactionDetailComponent } from './transactions/transaction-detail/transaction-detail.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'new-employee', component: EmployeeFormComponent },
  { path: 'employees', component: EmployeesListComponent},
  { path: 'new-transaction', component: TransactionFormComponent },
  { path: 'transactions', component: TransactionsListComponent},
  { path: 'new-order', component: OrderFormComponent },
  { path: 'orders', component: OrderListComponent},
  { path: 'details/:id', component: TransactionDetailComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeFormComponent,
    EmployeesComponent,
    TransactionFormComponent,
    TransactionsComponent,
    OrderFormComponent,
    OrdersComponent,
    TransactionsListComponent,
    OrderListComponent,
    TransactionDetailComponent,
    EmployeesListComponent,
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
