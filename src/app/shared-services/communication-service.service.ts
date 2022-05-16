import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {

  firstPayOptionSelected = new Subject();

  /*///////////  METHODS TO EMIT EVENTS AND RETURN OBSERVABLES  ///////////*/
  getfirstPayOptionSelected() {
    return this.firstPayOptionSelected.asObservable();
  }

  constructor() { }
}
