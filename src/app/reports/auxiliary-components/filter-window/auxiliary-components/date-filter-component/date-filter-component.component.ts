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
  public years : Array<month> = [];

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
    this.years = this.dateService.getMonthsOf2021().concat(this.dateService.getMonthsOf2022());
  }

  setFilter(filter : filterResult) {
    this.serviceFilterMessengerService.filterDataToSend.next(filter);
  }

  toggleSelectMenuBox() {
    this.isSelectMenuOpen = !this.isSelectMenuOpen;
  }

  activateMonth(month : month) {
    
    debugger
    if (this.dateService.howManyActiveElemntsAreThere(this.years) == 2) {
      this.resetSelections();
    } else {
      let activeMonth = this.dateService.getActiveElementIndx(this.years);
      if (month.index < activeMonth) {
        this.resetSelections();
      }
    }

    this.dateService.activateMonth(month);
    this.monthsRange.push(month);
    console.log(this.monthsRange);
  }
  
  selectMonths(month : month) {
    if (this.dateService.howManyActiveElemntsAreThere(this.years) == 1) {
      
      this.dateService.deSelectMonths(this.years);
      let activeMonth = this.dateService.getActiveElementIndx(this.years);
      if ((activeMonth >= 0) && (month.index > activeMonth)) {
        this.dateService.selectPreviousMonths(month, activeMonth, this.years);
      }

    }
  }

  resetSelections() {
    this.dateService.deActivateAllMonths(this.years);
    this.dateService.deSelectMonths(this.years);
    this.monthsRange  = [];
  }

}
