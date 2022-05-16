import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from 'src/app/shared-services/communication-service.service';

@Component({
  selector: 'app-pay-teams',
  templateUrl: './pay-teams.component.html',
  styleUrls: ['./pay-teams.component.css']
})
export class PayTeamsComponent implements OnInit {

  constructor(private communicationServiceService : CommunicationServiceService) { }

  ngOnInit(): void {
  }

  goNextStep() {
    this.communicationServiceService.firstPayOptionSelected.next(2);
  }

}
