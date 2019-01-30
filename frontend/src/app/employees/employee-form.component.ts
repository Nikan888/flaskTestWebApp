import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeesApiService} from "./employees-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'employee-form',
  template: `
    <div>
      <h2>New employee</h2>
      <label for="employee-name">Name</label>
      <input id="employee-name" (keyup)="updateName($event)">
      <button (click)="saveEmployee()">Save employee</button>
    </div>
  `
})
export class EmployeeFormComponent {
  employee = {
    name: '',
  };

  constructor(private employeesApi: EmployeesApiService, private router: Router) { }

  updateName(event: any) {
    this.employee.name = event.target.value;
  }

  saveEmployee() {
    this.employeesApi
      .saveEmployee(this.employee)
      .subscribe(
        () => this.router.navigate(['/']),
        error => alert(error.message)
      );
  }
}