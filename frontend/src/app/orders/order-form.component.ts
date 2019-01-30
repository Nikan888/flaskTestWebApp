import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrdersApiService} from "./orders-api.service";
import {Router} from "@angular/router";
import { Employee } from '../employees/employee.model';
import { Transaction } from '../transactions/transaction.model';

@Component({
  selector: 'order-form',
  template: `
    <div>
      <h2>New order</h2>
      <label for="order-description">Description</label>
      <input id="order-description" (keyup)="updateDescription($event)">
      <label for="order-withdraw">Withdraw</label>
      <input id="order-withdraw" (keyup)="updateWithdraw($event)">
      <label for="order-invest">Invest</label>
      <input id="order-invest" (keyup)="updateInvest($event)">
      <label for="order-employee">Employee</label>
      <input id="order-employee" (keyup)="updateEmployee($event)">
      <label for="order-transaction">Transaction</label>
      <input id="order-transaction" (keyup)="updateTransaction($event)">
      <button (click)="saveOrder()">Save order</button>
    </div>
  `
})
export class OrderFormComponent /*implements OnInit*/ {
    /*ngOnInit(): void {
        this.order = Form
    }
  order: FormGroup;*/ 

  order = {
    description: '',
    withdraw: 0,
    invest: 0,
    employee: new Employee(''),
    transaction: new Transaction('', new Date()),
  };

  constructor(/*private formBuilder: FormBuilder,*/ private ordersApi: OrdersApiService, private router: Router) { }

  updateDescription(event: any) {
    this.order.description = event.target.value;
  }

  updateWithdraw(event: any) {
    this.order.withdraw = event.target.value;
  }

  updateInvest(event: any) {
    this.order.invest = event.target.value;
  }

  updateEmployee(event: any) {
    this.order.employee._id = event.target.value;
  }

  updateTransaction(event: any) {
    this.order.transaction._id = event.target.value;
  }

  saveOrder() {
    this.ordersApi
      .saveOrder(this.order)
      .subscribe(
        () => this.router.navigate(['/']),
        error => alert(error.message)
      );
  }
}