import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeesApiService} from "./employees-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent {
  employee = {
    name: '',
    balance: 0,
  };

  constructor(private employeesApi: EmployeesApiService, private router: Router) { }

  updateName(event: any) {
    this.employee.name = event.target.value;
  }

  saveEmployee() {
    this.employeesApi
      .addEmployee(this.employee)
      .subscribe(
        () => this.router.navigate(['/']),
        error => alert(error.message)
      );
  }
}