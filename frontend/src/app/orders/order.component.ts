import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Order} from './order.model';
import {OrdersApiService} from './orders-api.service';

@Component({
  selector: 'orders',
  template: `
    <div>
      <h2>Here are the orders created so far: </h2>
      <button routerLink="/new-order">New order</button>
      <ul>
        <li *ngFor="let order of ordersList">
          ({{order.id}}) {{order.employee.name}}, {{order.transaction.name}}
        </li>
      </ul>
    </div>
  `
})
export class OrdersComponent implements OnInit, OnDestroy {
  ordersListSubs: Subscription;
  ordersList: Order[];

  constructor(private ordersApi: OrdersApiService) {
  }

  ngOnInit() {
    this.ordersListSubs = this.ordersApi
      .getOrders()
      .subscribe(res => {
          this.ordersList = res;
        },
        console.error
      );
  }

  ngOnDestroy() {
    this.ordersListSubs.unsubscribe();
  }
}