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

  public monthsOf2021 : Array<month> = [];
  public monthsOf2022 : Array<month> = [];

  constructor(
    private serviceFilterMessengerService : ServiceFilterMessengerService,
    private dateService : DateService
  ) { }

  setCustomOption(optionName : string) {
    this.activeOption = optionName;
    this.setFilter({name : optionName, type : 'Date'});
  }

  ngOnInit(): void {  
    this.monthsOf2021 = this.dateService.getMonthsOf2021();
    this.monthsOf2022 = this.dateService.getMonthsOf2022();
  }

  setFilter(filter : filterResult) {
    this.serviceFilterMessengerService.filterDataToSend.next(filter);
  }

  toggleSelectMenuBox() {
    this.isSelectMenuOpen = !this.isSelectMenuOpen;
  }

  activateMonth(month : month, year : Array<month>) {
    
    if (this.dateService.howManyActiveElemntsAreThere(year) == 2) {
      this.resetSelections(year);
    } else {
      let activeMonth = this.dateService.getActiveElementIndx(year);
      if (month.index < activeMonth) {
        this.resetSelections(year);
      }
    }

    this.dateService.activateMonth(month);
    this.monthsRange.push(month);
    console.log(this.monthsRange);
  }
  
  selectMonths(month : month, year : Array<month>) {
    debugger
    if (this.dateService.howManyActiveElemntsAreThere(year) == 1) {
      
      this.dateService.deSelectMonths(year);
      let activeMonth = this.dateService.getActiveElementIndx(year);
      if ((activeMonth >= 0) && (month.index > activeMonth)) {
        this.dateService.selectPreviousMonths(month, activeMonth, year);
      }

    }
  }

  resetSelections(year : Array<month>) {
    this.dateService.deActivateAllMonths(year);
    this.dateService.deSelectMonths(year);
    this.monthsRange  = [];
  }

}
