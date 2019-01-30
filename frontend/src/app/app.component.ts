import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>MAIN</h1>
      <nav>
        <a routerLink="/employees" routerLinkActive="active">Employees</a>
        <a routerLink="/transactions" routerLinkActive="active">Transactions</a>
        <a routerLink="/orders" routerLinkActive="active">Orders</a>
      </nav>
  
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }