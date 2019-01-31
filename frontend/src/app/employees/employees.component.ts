import {Component, OnDestroy, OnInit, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {Employee} from './employee.model';
import {EmployeesApiService} from './employees-api.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html'
})
export class EmployeesComponent implements OnInit {
  @Input() employee: Employee;

  constructor() {

  }

  ngOnInit() {
    
  }

}