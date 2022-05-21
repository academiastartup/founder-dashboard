import { Component, OnInit } from '@angular/core';
import { ServiceFilterMessengerService } from 'src/app/reports/service-messengers/service-filter-messenger.service';


@Component({
  selector: 'app-quantity-filter-component',
  templateUrl: './quantity-filter-component.component.html',
  styleUrls: ['./quantity-filter-component.component.css']
})
export class QuantityFilterComponentComponent implements OnInit {

  public transactionDirection! : string;
  public rangeOperatorAndValue! : string;
  
  public qtyFilterInputs : Array<{
      name : string, 
      value : string, 
      isActive : boolean, 
      isDisabled : boolean, 
      error : boolean,
      errorMsg : string
    }> = [
      {
        name : 'Quantia Especifica', 
        value : '', 
        isActive : false, 
        isDisabled : false,
        error : false,
        errorMsg : ''
      },
      {
        name : 'Pelo menos de...', 
        value : '', 
        isActive : false, 
        isDisabled : false,
        error : false,
        errorMsg : ''
      },
      {
        name : 'Não mais que...', 
        value : '', 
        isActive : false, 
        isDisabled : false,
        error : false,
        errorMsg : ''
      }
  ];
  
  constructor(
    private serviceFilterMessengerService : ServiceFilterMessengerService
  ) { }

  ngOnInit(): void {
  }

  setRangeOperatorAndValue(rangeOperatorAndValue : string, qtyInputEle : HTMLInputElement, index : number) {
    this.rangeOperatorAndValue = `,${rangeOperatorAndValue} AOA${qtyInputEle.value}`;
    this.qtyFilterInputs[index].value = qtyInputEle.value;
    this.qtyFilterInputs[index].isActive = true;
    this.disableAllQtyInputBut(index);
    this.setFilter();

    if (qtyInputEle.value == '' && index == 0) this.setInputFiltersToDefault();
    if (qtyInputEle.value == '' && index > 0) this.setInputFilterToDefault(qtyInputEle, index);

    this.checkCorrectInterval();
  }

  setTransactionDirection(direction : string) {
    this.transactionDirection = direction;
    this.setFilter();
  }

  disableAllQtyInputBut(indx : number) {

    /*
    * disable only the equal input filter when either 
    * at-least or no-more-than value filters are active
    */
    if (indx == 0) {
      this.qtyFilterInputs.forEach((filter, index)=>{
        if (index != indx) {
          filter.isDisabled = true;
        }
      })  
    } else this.qtyFilterInputs[0].isDisabled = true;
  }

  setInputFiltersToDefault(equalQty? : HTMLInputElement,atLeastQty? : HTMLInputElement,noMoreThanQty? : HTMLInputElement) {
    this.qtyFilterInputs.forEach(filter => filter.isDisabled = false);
    this.qtyFilterInputs.forEach(filter => filter.value = '');

    equalQty!.value = '';
    atLeastQty!.value = '';
    noMoreThanQty!.value = '';
  }

  setInputFilterToDefault(inputEle : HTMLInputElement, inputEleIndx : number) {
    inputEle.value = '';
    this.qtyFilterInputs[inputEleIndx].value = '';
    if (this.areAllInputEleEmpty()) this.setInputFiltersToDefault();

    this.removeErrorsFromInputElemnts();
  }

  setFilter() {
    this.serviceFilterMessengerService.filterDataToSend.next(
      {
        name : `${this.transactionDirection} ${this.rangeOperatorAndValue ? this.rangeOperatorAndValue : ''}`,
        type : 'quantity'
      }
    );
  }

  /*
  * HELPERS *************************
  */

  areAllInputEleEmpty() : boolean {
    let countTrue = 0;
    this.qtyFilterInputs.forEach((input) => {
      if (input.value == '') countTrue++;
    });
    return countTrue == 3;
  }

  removeErrorsFromInputElemnts() {
    this.qtyFilterInputs[1].error = false;
    this.qtyFilterInputs[1].errorMsg = '';

    this.qtyFilterInputs[2].error = false;
    this.qtyFilterInputs[2].errorMsg = '';
  }

  checkCorrectInterval() {
    if (this.qtyFilterInputs[1].value != '' && this.qtyFilterInputs[2].value != '') {
      if (+this.qtyFilterInputs[1].value > +this.qtyFilterInputs[2].value) {
        this.qtyFilterInputs[1].error = true; 
        this.qtyFilterInputs[2].error = true;
  
        this.qtyFilterInputs[1].errorMsg = 'Deve ser menor que o valor de \'Não mais que...\''; 
        this.qtyFilterInputs[2].errorMsg = 'Deve ser maior que o valor de \'Pelo menos de....\'';
      } else {
        this.qtyFilterInputs[1].error = false; 
        this.qtyFilterInputs[2].error = false;
  
        this.qtyFilterInputs[1].errorMsg = ''; 
        this.qtyFilterInputs[2].errorMsg = '';
      }
    }
  }


}
