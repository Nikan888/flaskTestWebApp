import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Flask/PostgreSQL/Angular test web application</h1>
      <ul>
        <li><a routerLink="/employees" routerLinkActive="active">Employees</a></li>
        <li><a routerLink="/transactions" routerLinkActive="active">Transactions</a></li>
        <li><a routerLink="/orders" routerLinkActive="active">Orders</a></li>
      </ul>
  
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }