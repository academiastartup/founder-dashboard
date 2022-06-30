import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceSearchResultMessengerService {

  searchResultToSend = new Subject();

  constructor() { }

  getsearchResultToSendAsObservable() {
    return this.searchResultToSend.asObservable();
  }
  
  
}
