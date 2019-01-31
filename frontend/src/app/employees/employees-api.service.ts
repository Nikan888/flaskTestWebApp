import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { throwError } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import {API_URL} from '../env';
import {Employee} from './employee.model';

@Injectable()
export class EmployeesApiService {

  constructor(private http: HttpClient) {
  }

  private handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || 'Error: Unable to complete request.');
  }

  // GET list
  getEmployees(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(`${API_URL}/api/employees`)
      .pipe(catchError(this.handleError));
  }

  // Get list (with balance value)
  getEmployeesBalance(): Observable<Employee[]>{
    return this.http
      .get<Employee[]>(`${API_URL}/api/employees/employeeBalance`)
      .pipe(catchError(this.handleError));
  }

  // POST
  saveEmployee(employee: Employee): Observable<any> {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.http
      .post(`${API_URL}/api/employees`, employee, {headers})
      //.post(`${API_URL}/employees`, employee)
      .pipe(catchError(this.handleError));
  }
}