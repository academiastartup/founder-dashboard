import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface beneficiary {
  name : string;
  value : number,
  id : number
};

@Component({
  selector: 'app-payment-details-modal-window',
  templateUrl: './payment-details-modal-window.component.html',
  styleUrls: ['./payment-details-modal-window.component.css']
})
export class PaymentDetailsModalWindowComponent implements OnInit {

  @Output() closeModalWindow = new EventEmitter<any>();
  @Output() openSmsAuthWindow = new EventEmitter<any>();

  @Input() beneficiaries: Array<beneficiary> = [];

  constructor() { }

  closeModalWindowEvent() {
    this.closeModalWindow.emit(true);
  }

  openAuthModalWindow() {
    this.openSmsAuthWindow.emit(true);
  }

  ngOnInit(): void {
  }

  getInitials(name : string) : string {
    let nameSplits =  name.split(" ");

    let firstNameInitial = nameSplits[0].charAt(0);
    let lastNameInitial = nameSplits[nameSplits.length - 1].charAt(0);
    return `${firstNameInitial} ${lastNameInitial}`;
  }

}
