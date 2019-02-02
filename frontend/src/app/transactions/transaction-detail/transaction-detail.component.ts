import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Order } from 'src/app/orders/order.model';
import { OrdersApiService } from 'src/app/orders/orders-api.service';
import { Transaction } from '../transaction.model';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  details: Order[]

  constructor(private ordersService: OrdersApiService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ordersService.getTransactionOrders(id).subscribe(
      (data: Order[]) => {
        this.details = data;
      }
    );
  }

}
