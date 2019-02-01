import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { throwError } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import {API_URL} from '../env';
import {Order} from './order.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrdersApiService {

  constructor(private http: HttpClient) {
  }

  private handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || 'Error: Unable to complete request.');
  }

  // GET list (all)
  getOrders(): Observable<Order[]> {
    return this.http
      .get<Order[]>(`${API_URL}/api/orders`)
      .pipe(catchError(this.handleError));
  }

  // GET orders for specific transaction
  getTransactionOrders(id: number): Observable<Order[]> {
    return this.http
      .get<Order[]>(`${API_URL}/api/orders/transactionOrders/${id}`)
      .pipe(catchError(this.handleError));
  }

  /** POST: add a new order to the server */
  addOrder(order: Order): Observable<any> {
    return this.http.post<Order>(`${API_URL}/api/orders`, order, httpOptions)
    .pipe(catchError(this.handleError));
  }

  /** DELETE: delete the order from the server */
  deleteOrder(order: Order | number): Observable<Order> {
    const id = typeof order === 'number' ? order : order._id;
    const url = `${API_URL}/api/orders/${id}`;

    return this.http.delete<Order>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  /** PUT: update the order on the server */
  updateOrder (order: Order): Observable<any> {
    return this.http.put(`${API_URL}/api/orders`, order, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}