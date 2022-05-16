import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationServiceService } from 'src/app/shared-services/communication-service.service';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent implements OnInit {

  constructor(
    private router : Router,
    private communicationServiceService : CommunicationServiceService
  ) { }

  ngOnInit(): void {
  }

  goToRecurringPaymentPage() {
    this.communicationServiceService.firstPayOptionSelected.next(1);
    this.router.navigateByUrl('/pagamentos/pagamento-recorrente');
  }

  goToPayTeamsPage() {
    this.communicationServiceService.firstPayOptionSelected.next(1);
    this.router.navigateByUrl('/pagamentos/pagar-equipas');
  }

  goToOtherPaymentPage() {
    this.communicationServiceService.firstPayOptionSelected.next(1);
    this.router.navigateByUrl('/pagamentos/outros-pagamentos');
  }

}
