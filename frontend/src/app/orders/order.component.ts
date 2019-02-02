import {Component, OnDestroy, OnInit, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {Order} from './order.model';
import {OrdersApiService} from './orders-api.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html'
})
export class OrdersComponent implements OnInit {
  @Input() order: Order;
  // @Input() orders: Order[];

  constructor(private orderService: OrdersApiService) {

  }

  ngOnInit() {
    
  }

  delete(orderID: number): void {
    this.orderService.deleteOrder(orderID).subscribe();
  }

}