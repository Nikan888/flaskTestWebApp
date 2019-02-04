import {Component, OnDestroy, OnInit, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {Order} from './order.model';
import {OrdersApiService} from './orders-api.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrdersComponent implements OnInit {
  @Input() order: Order;
  // @Input() orders: Order[];

  constructor(private orderService: OrdersApiService) {

  }

  ngOnInit() {
    
  }

  delete(order: Order): void {
    this.orderService.deleteOrder(order).subscribe();
  }

}