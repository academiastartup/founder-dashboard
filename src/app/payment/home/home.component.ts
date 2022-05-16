import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommunicationServiceService } from '../../shared-services/communication-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  /* ////////  SUBSCRIPTIONS  //////// */
  getPayOptionSelectedSubscription! : Subscription;


  /* ///////   */
  stepsFilled : Array<boolean> = [
    false, false, false, false
  ];

  constructor(
    private router : Router,
    private comunicationService : CommunicationServiceService
  ) { }

  goHome() {
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.getPayOptionSelectedSubscription = this.comunicationService.getfirstPayOptionSelected().
      subscribe((value) => {
        
        switch(value) {
          // step 01 has been completed
          case 1:
            this.stepsFilled[0] = true;
            break;
          // step 02 has been completed
          case 2:
            this.stepsFilled[1] = true;
            break;
          // step 03 has been completed
          case 3:
            this.stepsFilled[2] = true;
            break;
          case 4:
            this.stepsFilled[3] = true;
            break;
        }       
      });
  }

  ngOnDestroy(): void {
    this.getPayOptionSelectedSubscription.unsubscribe();
  }

}
