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

  activeMonth(month : month) {
    this.dateService.deActivateAllMonths(this.monthsObj);
    this.activeMonthIndex = month.index;
    month.active = true;
    
  }

  
  selectMonths(month : month) {
    this.dateService.deSelectMonths(this.monthsObj);
    if (month.index > 0) {
      for (let i = this.activeMonthIndex; i < month.index; i++) {
        if (i != this.activeMonthIndex)
          this.monthsObj[i].selected = true;
      }
    }
  }

}
