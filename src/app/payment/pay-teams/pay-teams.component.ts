import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from 'src/app/shared-services/communication-service.service';
import { HttpServiceService } from 'src/app/shared-services/http-service.service';

@Component({
  selector: 'app-pay-teams',
  templateUrl: './pay-teams.component.html',
  styleUrls: ['./pay-teams.component.css']
})
export class PayTeamsComponent implements OnInit {

  constructor(
    private communicationServiceService : CommunicationServiceService,
    private httpService : HttpServiceService
  ) { }
  public userTypedInSearcData : string = '';

  

  ngOnInit(): void {
  }

  onTextChange(value : string) {
    this.userTypedInSearcData = value;
  }

  goNextStep() {
    this.communicationServiceService.firstPayOptionSelected.next(
      {
        stepFilled : 2, 
        mainPageTitle : 'ESTABELEÇA A QUANTIA'
      }
    );
  }

}
