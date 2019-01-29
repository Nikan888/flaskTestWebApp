import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {API_URL} from '../env';
import {Test} from './test.model';

@Injectable()
export class TestsApiService {

  constructor(private http: HttpClient) {
  }

  private handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list
  getTests(): Observable<Test[]> {
    return this.http
      .get<Test[]>(`${API_URL}/tests`)
      .pipe(catchError(this.handleError));
  }
}