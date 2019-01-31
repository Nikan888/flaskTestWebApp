import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { OrdersApiService } from '../orders-api.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[];

  constructor(private ordersService: OrdersApiService) { }

  ngOnInit() {
    this.ordersService.getOrders().subscribe(
      (data: Order[]) => {
        this.orders = data;
      }
    );
  }

}
