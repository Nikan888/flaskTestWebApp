import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Employee} from './employee.model';
import {EmployeesApiService} from './employees-api.service';

@Component({
  selector: 'employees',
  template: `
    <div>
      <h2>Here are the employees created so far: </h2>
      <button routerLink="/new-employee">New employee</button>
      <ul>
        <li *ngFor="let employee of employeesList">
          ({{employee.id}}) {{employee.name}}
        </li>
      </ul>
    </div>
  `
})
export class EmployeesComponent implements OnInit, OnDestroy {
  employeesListSubs: Subscription;
  employeesList: Employee[];

  constructor(private employeesApi: EmployeesApiService) {
  }

  ngOnInit() {
    this.employeesListSubs = this.employeesApi
      .getEmployees()
      .subscribe(res => {
          this.employeesList = res;
        },
        console.error
      );
  }

  ngOnDestroy() {
    this.employeesListSubs.unsubscribe();
  }
}