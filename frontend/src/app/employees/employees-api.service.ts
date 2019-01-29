import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {API_URL} from '../env';
import {Employee} from './employee.model';

@Injectable()
export class EmployeesApiService {

  constructor(private http: HttpClient) {
  }

  private handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list
  getEmployees(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(`${API_URL}/employees`)
      .pipe(catchError(this.handleError));
  }
}