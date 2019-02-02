import {Component, OnDestroy, OnInit, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {Transaction} from './transaction.model';
import {TransactionsApiService} from './transactions-api.service';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { Order } from '../orders/order.model';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html'
})
export class TransactionsComponent implements OnInit {
  @Input() transaction: Transaction;
  // @Input() detail: Order

  constructor(private transactionService : TransactionsApiService) {

  }

  ngOnInit() {
    
  }

  delete(transactionID: number): void {
    this.transactionService.deleteTransaction(transactionID).subscribe();
  }
}