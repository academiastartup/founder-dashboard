import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from 'src/app/shared-services/communication-service.service';

@Component({
  selector: 'app-other-payments',
  templateUrl: './other-payments.component.html',
  styleUrls: ['./other-payments.component.css']
})
export class OtherPaymentsComponent implements OnInit {

  constructor(private communicationServiceService : CommunicationServiceService) { }

  ngOnInit(): void {
  }

  goNextStep() {
    this.communicationServiceService.firstPayOptionSelected.next(2);
  }

}
