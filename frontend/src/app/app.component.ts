import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {EmployeesApiService} from './employees/employees-api.service';
import {Employee} from './employees/employee.model';
import {TransactionsApiService} from './transactions/transactions-api.service';
import {Transaction} from './transactions/transaction.model';
import {OrdersApiService} from './orders/orders-api.service';
import {Order} from './orders/order.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  employeesListSubs: Subscription;
  employeesList: Employee[];
  transactionsListSubs: Subscription;
  transactionsList: Transaction[];
  ordersListSubs: Subscription;
  ordersList: Order[];

  constructor(private employeesApi: EmployeesApiService,
    private transactionsApi: TransactionsApiService, private ordersApi: OrdersApiService ) {
  }

  ngOnInit() {
    this.employeesListSubs = this.employeesApi
      .getEmployees()
      .subscribe(res => {
          this.employeesList = res;
        },
        console.error
      );
    this.transactionsListSubs = this.transactionsApi
      .getTransactions()
      .subscribe(res => {
          this.transactionsList = res;
        },
        console.error
      );
    this.ordersListSubs = this.ordersApi
      .getOrders()
      .subscribe(res => {
          this.ordersList = res;
        },
        console.error
      );
  }

  ngOnDestroy() {
    this.employeesListSubs.unsubscribe();
    this.transactionsListSubs.unsubscribe();
    this.ordersListSubs.unsubscribe();
  }
}