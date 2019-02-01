import {Component, OnDestroy, OnInit, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {Transaction} from './transaction.model';
import {TransactionsApiService} from './transactions-api.service';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { Order } from '../orders/order.model';

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html'
})
export class TransactionsComponent implements OnInit {
  @Input() transaction: Transaction;

  constructor() {

  }

  ngOnInit() {
    
  }

  

}