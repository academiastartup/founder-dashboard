import { Component, OnInit } from '@angular/core';
import { ServiceFilterMessengerService } from 'src/app/reports/service-messengers/service-filter-messenger.service';
import { DateService, month } from './services/date.service';

interface dateCustomType {
  name : string
}

interface filterResult {
  name : string,
  type : string
}

@Component({
  selector: 'app-date-filter-component',
  templateUrl: './date-filter-component.component.html',
  styleUrls: ['./date-filter-component.component.css']
})
export class DateFilterComponentComponent implements OnInit {

  activeOption : string = 'Todas as transações';
  isSelectMenuOpen : boolean = false;
  activeMonthIndex! : number;

  monthsRange : Array<month> = [];

  public customDateOptions : Array<dateCustomType> = [
    {name : 'Últimos 30 dias'},
    {name : 'Este mês'},
    {name : 'Mês passado'},
    {name : 'Este ano'},
    {name : 'Ano passado'},
    {name : 'Todas as transações'}
  ]

  public monthsObj : Array<month> = [];

  constructor(
    private serviceFilterMessengerService : ServiceFilterMessengerService,
    private dateService : DateService
  ) { }

  setCustomOption(optionName : string) {
    this.activeOption = optionName;
    this.setFilter({name : optionName, type : 'Date'});
  }

  ngOnInit(): void {  
    this.monthsObj = this.dateService.getMonths();
  }

  setFilter(filter : filterResult) {
    this.serviceFilterMessengerService.filterDataToSend.next(filter);
  }

  toggleSelectMenuBox() {
    this.isSelectMenuOpen = !this.isSelectMenuOpen;
  }

  activateMonth(month : month) {
    
    if (this.dateService.howManyActiveElemntsAreThere(this.monthsObj) == 2) {
      this.dateService.deActivateAllMonths(this.monthsObj);
      this.dateService.deSelectMonths(this.monthsObj);
      this.monthsRange  = [];
    } else {
      let activeMonth = this.dateService.getActiveElementIndx(this.monthsObj);
      if (month.index < activeMonth) {
        this.dateService.deActivateAllMonths(this.monthsObj);
        this.dateService.deSelectMonths(this.monthsObj);
        this.monthsRange = [];
      }
    }

    this.dateService.activateMonth(month);
    this.monthsRange.push(month);
    console.log(this.monthsRange);
  }
  
  selectMonths(month : month) {
    debugger
    if (this.dateService.howManyActiveElemntsAreThere(this.monthsObj) == 1) {
      
      this.dateService.deSelectMonths(this.monthsObj);
      let activeMonth = this.dateService.getActiveElementIndx(this.monthsObj);
      if ((activeMonth >= 0) && (month.index > activeMonth)) {
        this.dateService.selectPreviousMonths(month, activeMonth, this.monthsObj);
      }

    }
  }

}
