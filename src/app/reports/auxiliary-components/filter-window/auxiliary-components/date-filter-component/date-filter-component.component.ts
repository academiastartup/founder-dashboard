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

  activeOption : string = 'Sem filtros customizados';
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
    this.setFilter({name : optionName, type : 'Date'});
  }

  ngOnInit(): void {  
    this.monthsOf2021 = this.dateService.getMonthsOf2021();
    this.monthsOf2022 = this.dateService.getMonthsOf2022();
    this.years = this.monthsOf2021.concat(this.monthsOf2022);
  }

  setFilter(filter : filterResult) {
    this.serviceFilterMessengerService.filterDataToSend.next(filter);
  }

  toggleSelectMenuBox() {
    this.isSelectMenuOpen = !this.isSelectMenuOpen;
  }

  activateMonth(month : month) {
    
    if (this.dateService.howManyActiveElemntsAreThere(this.years) == 2) {
      this.resetSelections();
    } else {
      let activeMonth = this.dateService.getActiveElementIndx(this.years);
      if (this.years.indexOf(month) < activeMonth) {
        this.resetSelections();
      }
    }

    this.dateService.activateMonth(month);
    this.monthsRange.push(month);
  }
  
  selectMonths(month : month) {
    if (this.dateService.howManyActiveElemntsAreThere(this.years) == 1) {
      
      this.dateService.deSelectMonths(this.years);
      let activeMonth = this.dateService.getActiveElementIndx(this.years);
      if ((activeMonth >= 0) && (this.years.indexOf(month) > activeMonth)) {
        this.dateService.selectPreviousMonths(month, activeMonth, this.years);
      }

    }
  }

  resetSelections() {
    this.dateService.deActivateAllMonths(this.years);
    this.dateService.deSelectMonths(this.years);
    this.monthsRange  = [];
  }

  constructCustomFiter(rangeOfMonths : Array<month>) : filterResult {

    let fromDate = '';
    let toDate = '';
    let filter = '';

    if (rangeOfMonths.length > 1) {
      fromDate = `${rangeOfMonths[0].name} 1, ${rangeOfMonths[0].year}`;
      toDate = `${rangeOfMonths[1].name} ${rangeOfMonths[1].numberOfDays}, ${rangeOfMonths[1].year}`;
      filter = `${fromDate} - ${toDate}`;
    } else if (rangeOfMonths.length == 1) {
      filter = `${rangeOfMonths[0].name} 1 - ${rangeOfMonths[0].name}  ${rangeOfMonths[0].numberOfDays}, ${rangeOfMonths[0].year}`;
    }
    
    return {name : filter, type : 'Date'}
  }

  setCustomFilter() {
    this.activeOption = this.constructCustomFiter(this.monthsRange).name;
    this.setFilter(this.constructCustomFiter(this.monthsRange))
  }

}
