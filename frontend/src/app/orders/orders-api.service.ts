import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {API_URL} from '../env';
import {Order} from './order.model';

@Injectable()
export class OrdersApiService {

  constructor(private http: HttpClient) {
  }

  private handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list
  getOrders(): Observable<Order[]> {
    return this.http
      .get<Order[]>(`${API_URL}/orders`)
      .pipe(catchError(this.handleError));
  }
}