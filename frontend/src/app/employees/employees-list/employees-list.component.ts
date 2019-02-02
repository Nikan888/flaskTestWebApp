import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeesApiService } from '../employees-api.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[];

  constructor(private employeesService: EmployeesApiService) { }

  ngOnInit() {
    this.employeesService.getEmployeesBalance().subscribe(
      (data: Employee[]) => {
        this.employees = data;
      }
    );
  }

  add(name: string): void {
    name = name.trim();
    if (!name ) { return; }
    this.employeesService.addEmployee({ name } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeesService.deleteEmployee(employee).subscribe();
  }

}
