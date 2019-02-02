import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { throwError } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import {API_URL} from '../env';
import {Transaction} from './transaction.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
      .get<Transaction[]>(`${API_URL}/api/transactions`)
      .pipe(catchError(this.handleError));
  }

  /** POST: add a new transaction to the server */
  addTransaction(transaction: Transaction): Observable<any> {
    return this.http.post<Transaction>(`${API_URL}/api/transactions`, transaction, httpOptions)
    .pipe(catchError(this.handleError));
  }

  /** DELETE: delete the transaction from the server */
  deleteTransaction(id: number): Observable<Transaction> {
    const url = `${API_URL}/api/transactions/${id}`;

    return this.http.delete<Transaction>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  /** PUT: update the transaction on the server */
  updateTransaction (transaction: Transaction): Observable<any> {
    return this.http.put(`${API_URL}/api/transactions`, transaction, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}