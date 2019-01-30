import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Transaction} from './transaction.model';
import {TransactionsApiService} from './transactions-api.service';

@Component({
  selector: 'transactions',
  template: `
    <div>
      <h2>Here are the transactions created so far: </h2>
      <button routerLink="/new-transaction">New transaction</button>
      <ul>
        <li *ngFor="let transaction of transactionsList">
          ({{transaction.id}}) {{transaction.name}}, {{transaction.date}}
        </li>
      </ul>
    </div>
  `
})
export class TransactionsComponent implements OnInit, OnDestroy {
  transactionsListSubs: Subscription;
  transactionsList: Transaction[];

  constructor(private transactionsApi: TransactionsApiService) {
  }

  ngOnInit() {
    this.transactionsListSubs = this.transactionsApi
      .getTransactions()
      .subscribe(res => {
          this.transactionsList = res;
        },
        console.error
      );
  }

  ngOnDestroy() {
    this.transactionsListSubs.unsubscribe();
  }
}