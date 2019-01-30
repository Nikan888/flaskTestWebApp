import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { throwError } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import {API_URL} from '../env';
import {Order} from './order.model';

@Injectable()
export class OrdersApiService {

  constructor(private http: HttpClient) {
  }

  private handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || 'Error: Unable to complete request.');
  }

  // GET list
  getOrders(): Observable<Order[]> {
    return this.http
      .get<Order[]>(`${API_URL}/orders`)
      .pipe(catchError(this.handleError));
  }

  // POST
  saveOrder(order: Order): Observable<any> {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.http
      .post(`${API_URL}/orders`, order, {headers})
      //.post(`${API_URL}/orders`, order)
      .pipe(catchError(this.handleError));
  }
}