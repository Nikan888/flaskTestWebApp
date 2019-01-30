import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { throwError } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import {API_URL} from '../env';
import {Transaction} from './transaction.model';

@Injectable()
export class TransactionsApiService {

  constructor(private http: HttpClient) {
  }

  private handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || 'Error: Unable to complete request.');
  }

  // GET list
  getTransactions(): Observable<Transaction[]> {
    return this.http
      .get<Transaction[]>(`${API_URL}/transactions`)
      .pipe(catchError(this.handleError));
  }

  // POST
  saveTransaction(transaction: Transaction): Observable<any> {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.http
      .post(`${API_URL}/transactions`, transaction, {headers})
      //.post(`${API_URL}/transactions`, transaction)
      .pipe(catchError(this.handleError));
  }
}