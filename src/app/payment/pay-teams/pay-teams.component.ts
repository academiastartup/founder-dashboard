import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from 'src/app/shared-services/communication-service.service';
import { HttpServiceService } from 'src/app/shared-services/http-service.service';

interface beneficiary {
  name : string;
  value : number,
  id : number
};

interface stepType {
  stepFilled : number,
  mainPageTitle : string
}

const paySteps = [
  {
    stepFilled : 1, 
    mainPageTitle : 'POR FAVOR, ESCOLHA UM TIPO DE OPERAÇÃO'
  },
  {
    stepFilled : 2, 
    mainPageTitle : 'CLIQUE EM PAGAR PARA TERMINAR A OPERAÇÃO'
  }
]

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

  public beneficiaries : Array<beneficiary> = [];
  
  public openModalWindow : boolean = false;
  public backgroundCover : boolean = false;
  public openSmsAuthWindow : boolean = false;

  public currentPayStep = 0;


  ngOnInit(): void {
  }

  onTextChange(value : string) {
    this.userTypedInSearcData = value;
  }

  goNextStep() {
    this.communicationServiceService.firstPayOptionSelected.next(
      this.goToTheNextPayStep()
    );
  }

  toggleModalWindow() {
    this.openModalWindow = !this.openModalWindow;
    this.backgroundCover = !this.backgroundCover;
  }

  closeAllModalWindw() {
    this.openModalWindow = false;
    this.backgroundCover = false;
    this.openSmsAuthWindow = false;
  }

  openSmsAuthModalWindow() {
    this.openSmsAuthWindow = true;
    this.openModalWindow = false;
  }

  getInitials(name : string) : string {
    let lastCharIndx = name.length - 1;
    return `${name.charAt(0).toLocaleUpperCase()} ${name.charAt(lastCharIndx).toLocaleUpperCase()}`
  }

  addBeneficiary($event : beneficiary) {
    if (this.beneficiaries.filter(ben => ben.id == $event.id).length == 0)
      this.beneficiaries.push($event);
  }

  goToTheNextPayStep() : stepType  {
    this.currentPayStep += 1;
    return paySteps[this.currentPayStep];
  }

  removeBeneficiary(beneficiary : beneficiary) {
    let index = this.beneficiaries.indexOf(beneficiary);
    this.beneficiaries.splice(index, 1);
  }

}
