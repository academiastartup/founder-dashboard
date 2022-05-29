/*
* SERVICE CONFIGURATION A COURTESY OF https://www.positronx.io/angular-httpclient-http-tutorial-build-consume-restful-api/
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {environment as devEnv} from '../../../../src/environments/environment';
import '../../../../src/environments/environment.prod';

export interface transactionType {
  date: string,
  recipient: string,
  beneficiary: string,
  type : string,
  direction : string,
  value : string,
  status : string,
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class ServiceForDataService {

  baseurl = devEnv.devURL
  constructor(private http : HttpClient) { }

  // Http Headers
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json  '
    })
  }

  getTransactions() {
    return this.http
      .get<Array<transactionType>>(this.baseurl + '/transactions')
      .pipe(retry(1), catchError(this.errorHandl))
  }

  getTransaction(id : number) {}

  errorHandl(error : any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message
    } else {
      errorMessage = `Error code : ${error.status}\nMessage: ${error.message}`
    }
    return throwError(() => {
      return errorMessage
    })
  }
}
