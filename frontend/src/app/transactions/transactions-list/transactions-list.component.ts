import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction.model';
import { TransactionsApiService } from '../transactions-api.service';

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

}
