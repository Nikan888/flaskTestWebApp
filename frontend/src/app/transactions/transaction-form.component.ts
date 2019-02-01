import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TransactionsApiService} from "./transactions-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'transaction-form',
  template: `
    <div>
      <h2>New transaction</h2>
      <label for="transaction-name">Name</label>
      <input id="transaction-name" (keyup)="updateName($event)">
      <label for="transaction-date">Date</label>
      <input id="transaction-date" (keyup)="updateDate($event)">
      <button (click)="saveTransaction()">Save transaction</button>
    </div>
  `
})
export class TransactionFormComponent /*implements OnInit*/ {
    /*ngOnInit(): void {
        this.transaction = Form
    }
  transaction: FormGroup;*/ 

  transaction = {
    name: '',
    date: new Date(),
  };

  constructor(/*private formBuilder: FormBuilder,*/ private transactionsApi: TransactionsApiService, private router: Router) { }

  updateName(event: any) {
    this.transaction.name = event.target.value;
  }

  updateDate(event: any) {
    this.transaction.date = event.target.value;
  }

  saveTransaction() {
    this.transactionsApi
      .addTransaction(this.transaction)
      .subscribe(
        () => this.router.navigate(['/']),
        error => alert(error.message)
      );
  }
}