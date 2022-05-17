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

  objForPaySelected : {stepFilled : number, mainPageTitle : string} = {
    stepFilled : 1, 
    mainPageTitle : ''
  };

  ngOnInit(): void {
  }

  goToRecurringPaymentPage() {
    this.objForPaySelected.mainPageTitle = 'PREENCHA OS CAMPOS ABAIXO, PARA INCIAR PAGAMENTO RECORRENTE';
    this.communicationServiceService.firstPayOptionSelected.next(this.objForPaySelected);
    this.router.navigateByUrl('/pagamentos/pagamento-recorrente');
  }

  goToPayTeamsPage() {
    this.objForPaySelected.mainPageTitle = 'SELECIONE UMA OU MAIS PESSOAS E COMEÇE A PAGAR';
    this.communicationServiceService.firstPayOptionSelected.next(this.objForPaySelected);
    this.router.navigateByUrl('/pagamentos/pagar-equipas');
  }

  goToOtherPaymentPage() {
    this.objForPaySelected.mainPageTitle = 'PREENCHA OS CAMPOS ABAIXO, PARA INCIAR OUTROS PAGAMENTOS';
    this.communicationServiceService.firstPayOptionSelected.next(this.objForPaySelected);
    this.router.navigateByUrl('/pagamentos/outros-pagamentos');
  }

}
