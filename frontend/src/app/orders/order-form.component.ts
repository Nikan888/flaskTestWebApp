import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrdersApiService} from "./orders-api.service";
import {Router} from "@angular/router";
import { Employee } from '../employees/employee.model';
import { Transaction } from '../transactions/transaction.model';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html'
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
    employee: new Employee('', 0),
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
      .addOrder(this.order)
      .subscribe(
        () => this.router.navigate(['/']),
        error => alert(error.message)
      );
  }
}