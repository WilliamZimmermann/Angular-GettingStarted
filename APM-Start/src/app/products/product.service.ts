import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IProduct } from './product';

import * as LogRocket from 'logrocket';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private _http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.productUrl).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
      /**
       * In a real world app, we may send the server to some remote logging infrastructure
       * instead of just logging it to the console
       */
      let errorMessage = '';

      if(err.error instanceof ErrorEvent){
          // A client-side or network error ocurred. Handle it accordingly
          errorMessage = `An error ocurred: ${err.error.message}`;
      }else{
          /**
           * The backend returned an unsuccessful response code.
           * The response body may contain clues as to what went wrong
           */
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      LogRocket.log(errorMessage);
      return throwError(errorMessage);
  }
}