import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../transaction.model';
import { TransactionsApiService } from '../transactions-api.service';
import { TransactionDetailComponent } from '../transaction-detail/transaction-detail.component';
import { Order } from 'src/app/orders/order.model';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {
  transactions: Transaction[];

  constructor(private transactionsService: TransactionsApiService) { }

  ngOnInit() {
    this.transactionsService.getTransactions().subscribe(
      (data: Transaction[]) => {
        this.transactions = data;
      }
    );
  }

  add(name: string, date: Date): void {
    name = name.trim();
    if (!name || !date) { return; }
    this.transactionsService.addTransaction({ name, date } as Transaction)
      .subscribe(transaction => {
        this.transactions.push(transaction);
      });
  }
}
