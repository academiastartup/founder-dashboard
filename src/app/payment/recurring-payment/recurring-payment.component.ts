import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from 'src/app/shared-services/communication-service.service';

@Component({
  selector: 'app-recurring-payment',
  templateUrl: './recurring-payment.component.html',
  styleUrls: ['./recurring-payment.component.css']
})
export class RecurringPaymentComponent implements OnInit {

  constructor(private communicationServiceService : CommunicationServiceService) { }

  ngOnInit(): void {
  }

  goNextStep() {
    this.communicationServiceService.firstPayOptionSelected.next(
      {
        stepFilled : 2, 
        mainPageTitle : 'POR FAVOR, PREENCHA OS DETALHES DA OPERAÇÃO'
      }
    );
  }

}
