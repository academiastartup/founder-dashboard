import { Component, OnInit } from '@angular/core';
import { ServiceFilterMessengerService } from 'src/app/reports/service-messengers/service-filter-messenger.service';

interface filterType {
  direction : string, 
  specificAmountInputVal : string,
  noMoreThanInputElVal : string,
  atLeastInputElVal : string,
  result : string 
}

interface filterResult {
  name : string,
  type : string
}

@Component({
  selector: 'app-quantity-filter-component',
  templateUrl: './quantity-filter-component.component.html',
  styleUrls: ['./quantity-filter-component.component.css']
})
export class QuantityFilterComponentComponent implements OnInit {
  
  public filter : filterType = {
    direction : "", 
    specificAmountInputVal : "",
    noMoreThanInputElVal : "",
    atLeastInputElVal : "",
    result : ""
  };

  public intervalError : boolean = false;
  
  public interValErrorMsgs : Array<{errorMsg : string}> = [
    {errorMsg : 'Deve ser menor que \'Não mais que...\''},
    {errorMsg : 'Deve ser maior que \'Pelo menos até...\''}
  ]
  
  constructor(
    private serviceFilterMessengerService : ServiceFilterMessengerService
  ) { }

  ngOnInit(): void {
  }

  moneyIn() {
    this.filter.direction = 'Entradas';
  }

  moneyOut() {
    this.filter.direction = 'Saídas';
  }

  moneyInAndOut() {
    this.filter.direction = '';
  }

  removeSpecificAmountInputVal() {
    this.filter.specificAmountInputVal = "";
  }
  
  removeNoMoreThanInputElVal() {
    this.filter.noMoreThanInputElVal = "";
  }

  removeAtLeastInputElVal() {
    this.filter.atLeastInputElVal = ""
  }

  isThereAnIntervalError() : boolean {
      if (this.filter.atLeastInputElVal != "" && this.filter.noMoreThanInputElVal != "") 
        return +this.filter.atLeastInputElVal > +this.filter.noMoreThanInputElVal;
      return false;
  }
  
  clearsFilterResult() {
    this.filter.result = "";
  }

  activatesIntervalError() {
    this.intervalError = true;
  }

  deActivatesIntervalError() {
    this.intervalError = false;
  }

  setFilterResultToRange() {
    this.intervalError = false;
    
    // interval error
    if (this.isThereAnIntervalError()) {
      this.intervalError = true;
      this.filter.result = 'error';
    } 
    
    // filter set for a maximum value
    if (!this.filter.atLeastInputElVal && this.filter.noMoreThanInputElVal) {
      this.filter.result += ` <Kz${this.filter.noMoreThanInputElVal}`;
    }

    // filter set for minimum value
    if (this.filter.atLeastInputElVal && !this.filter.noMoreThanInputElVal) {
      this.filter.result += ` >Kz${this.filter.atLeastInputElVal}`;
    }

    // filter set for a range [a-b] b is bigger
    if ((this.filter.atLeastInputElVal != "" && this.filter.noMoreThanInputElVal != "") &&
    (+this.filter.atLeastInputElVal < +this.filter.noMoreThanInputElVal)
    ) {
      this.filter.result += ` Kz${this.filter.atLeastInputElVal}-Kz${this.filter.noMoreThanInputElVal}`;
    }
    
    // filter set to [b-b]
    if ((this.filter.atLeastInputElVal != "" && this.filter.noMoreThanInputElVal != "") &&
    (this.filter.atLeastInputElVal == this.filter.noMoreThanInputElVal)
    ) {
      this.filter.result += ` =Kz${this.filter.atLeastInputElVal}`;
    }
      
  }

  setFilterResultToSpecificAmount() {
    if (this.filter.specificAmountInputVal) {
      this.filter.result += ` =Kz${this.filter.specificAmountInputVal}`;
    }
  }

  activateFilter() {
    this.clearsFilterResult();
    this.filter.result += this.filter.direction;

    this.setFilterResultToRange();
    this.setFilterResultToSpecificAmount();

    if (this.filter.result != 'error') {
      if (this.filter.result != "")
        this.setFilter({name : this.filter.result, type : 'quantity'})
    }
  }

  setFilter(filter : filterResult) {
    this.serviceFilterMessengerService.filterDataToSend.next(filter);
  }

}
