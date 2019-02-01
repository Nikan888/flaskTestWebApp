import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { throwError } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import {API_URL} from '../env';
import {Employee} from './employee.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

  /** POST: add a new employee to the server */
  addEmployee(employee: Employee): Observable<any> {
    return this.http.post<Employee>(`${API_URL}/api/employees`, employee, httpOptions)
    .pipe(catchError(this.handleError));
  }

  /** DELETE: delete the employee from the server */
  deleteEmployee(employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee._id;
    const url = `${API_URL}/api/employees/${id}`;

    return this.http.delete<Employee>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  /** PUT: update the employee on the server */
  updateEmployee (employee: Employee): Observable<any> {
    return this.http.put(`${API_URL}/api/employees`, employee, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}