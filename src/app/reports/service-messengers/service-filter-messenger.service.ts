import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceFilterMessengerService {

  filterDataToSend = new Subject();
  filterAndTransactionToSend = new Subject();

  constructor() { }

  getFilterDataToSendAsObservable() {
    return this.filterDataToSend.asObservable();
  }

  getFilterAndTransactionToSendAsObservable() {
    return this.filterAndTransactionToSend.asObservable();
  }
}
