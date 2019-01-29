import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {API_URL} from '../env';
import {Transaction} from './transaction.model';

@Injectable()
export class TransactionsApiService {

  constructor(private http: HttpClient) {
  }

  private handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list
  getTransactions(): Observable<Transaction[]> {
    return this.http
      .get<Transaction[]>(`${API_URL}/transactions`)
      .pipe(catchError(this.handleError));
  }
}