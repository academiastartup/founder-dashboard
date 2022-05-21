import { Component, OnInit } from '@angular/core';
import { ServiceFilterMessengerService } from 'src/app/reports/service-messengers/service-filter-messenger.service';


@Component({
  selector: 'app-quantity-filter-component',
  templateUrl: './quantity-filter-component.component.html',
  styleUrls: ['./quantity-filter-component.component.css']
})
export class QuantityFilterComponentComponent implements OnInit {
  
  public filter : {direction : string, value : string } = {direction : "", value : ""};
  public isThereAnIntervalError : boolean = false;
  public interValErrorMsgs : Array<{errorMsg : string}> = [
    {errorMsg : 'Deve ser menor que \'Não mais que...\''},
    {errorMsg : 'Deve ser maior que \'Pelo menos até..\''}
  ] 
 
  constructor(
    private serviceFilterMessengerService : ServiceFilterMessengerService
  ) { }

  ngOnInit(): void {
  }

  // set filter direction
  moneyIn() {
    this.filter.direction = 'Entradas';
  }

  moneyOut() {
    this.filter.direction = 'Saídas';
  }

  moneyInAndOut() {
    this.filter.direction = '';
  }

  // set filter value
  specificAmount(value : string) {
    this.filter.value = `,=AOA${value}`;
  }

  atLeast(value : string) {
    this.setValue(value, () => this.filter.value = `,>AOA${value}`)
  }

  noMoreThan(value : string) {
    this.setValue(value, () => this.filter.value = `,<AOA${value}`);
  }

  // removes filter value
  removesValue() {
    this.filter.value = '';
  }

  // helper method to block input element
  doesValueContain(operator : string) : boolean {
    return this.filter.value.indexOf(operator) != -1;
  }

  // the basic logic behind set value for the filter
  setValue(value : string, cb : Function) {
    if (this.filter.value == '') {
      cb();
    } else {
      let firstValue = this.filter.value.slice(5), secondValue = value;
      let operator = firstValue.split('')[1]; // helps us determine whether 1st value is < ou >.

      if (operator == '>') {
        if (+firstValue > +secondValue) this.isThereAnIntervalError = true;
        else this.filter.value = `,AOA${firstValue}-AOA${secondValue}`; 
      } else {
        if (+firstValue < +secondValue) this.isThereAnIntervalError = true;
        else this.filter.value = `,AOA${firstValue}-AOA${secondValue}`; 
      }
    }
  }



}
