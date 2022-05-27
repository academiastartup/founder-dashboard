import { Injectable } from '@angular/core';

export interface month  {
  name : string,
  numberOfDays : string,
  year : number,
  selected : boolean,
  active : boolean
} 

@Injectable({
  providedIn: 'root'
})
export class DateService {
  
  public date;

  public monthsOf2021 : Array<month> = [
    {
      name : 'Jan', numberOfDays : '31',
      year : 2021,
      selected : false,
      active : false
    },
    {
      name : 'Fev', numberOfDays : '28',
      year : 2021,
      selected : false,
      active : false
    },
    {
      name : 'Mar', numberOfDays : '31',
      year : 2021,
      selected : false,
      active : false
    },
    {
      name : 'Abr', numberOfDays : '30',
      year : 2021,
      selected : false,
      active : false
    },
    {
      name : 'Mai', numberOfDays : '31',
      year : 2021,
      selected : false,
      active : false
    },
    {
      name : 'Jun', numberOfDays : '31',
      year : 2021,
      selected : false,
      active : false
    },
    {
      name : 'Jul', numberOfDays : '31',
      year : 2021,
      selected : false,
      active : false
    },
    {
      name : 'Ago', numberOfDays : '31',
      year : 2021,
      selected : false,
      active : false
    },
    {
      name : 'Set', numberOfDays : '30',
      year : 2021,
      selected : false,
      active : false
    },
    {
      name : 'Out', numberOfDays : '31',
      year : 2021,
      selected : false,
      active : false
    },
    {
      name : 'Nov', numberOfDays : '30',
      year : 2021,
      selected : false,
      active : false
    },
    {
      name : 'Dez', numberOfDays : '31',
      year : 2021,
      selected : false,
      active : false
    },
  ];

  public monthsOf2022 : Array<month> = [
    {
      name : 'Jan', numberOfDays : '31',
      year : 2022,
      selected : false,
      active : false
    },
    {
      name : 'Fev', numberOfDays : '28',
      year : 2022,
      selected : false,
      active : false
    },
    {
      name : 'Mar', numberOfDays : '31',
      year : 2022,
      selected : false,
      active : false
    },
    {
      name : 'Abr', numberOfDays : '30',
      year : 2022,
      selected : false,
      active : false
    },
    {
      name : 'Mai', numberOfDays : '31',
      year : 2022,
      selected : false,
      active : false
    },
    {
      name : 'Jun', numberOfDays : '31',
      year : 2022,
      selected : false,
      active : false
    },
    {
      name : 'Jul', numberOfDays : '31',
      year : 2022,
      selected : false,
      active : false
    },
    {
      name : 'Ago', numberOfDays : '31',
      year : 2022,
      selected : false,
      active : false
    },
    {
      name : 'Set', numberOfDays : '30',
      year : 2022,
      selected : false,
      active : false
    },
    {
      name : 'Out', numberOfDays : '31',
      year : 2022,
      selected : false,
      active : false
    },
    {
      name : 'Nov', numberOfDays : '30',
      year : 2022,
      selected : false,
      active : false
    },
    {
      name : 'Dez', numberOfDays : '31',
      year : 2022,
      selected : false,
      active : false
    },
  ];

  constructor() {
    this.date = new Date();
  }

  getMonthsOf2021() : Array<month>{
    return this.monthsOf2021;
  }

  getMonthsOf2022() : Array<month> {
    return this.monthsOf2022;
  }

  deActivateAllMonths(months : Array<month>) {
    months.forEach(month => month.active = false);
  }

  howManyActiveElemntsAreThere(months : Array<month>) : number {
    return months.filter(month => month.active == true).length;
  }

  deSelectMonths(months : Array<month>) {
    months.forEach(month => month.selected = false);
  }

  activateMonth(month : month) {
    month.active = true;
  }

  getActiveElementIndx(months : Array<month>) : number {
    for (let i = 0; i < months.length; i++) {
      if (months[i].active == true) {
        return i;
      }
    }
    return NaN;
  }

  selectPreviousMonths(month : month, activeMonthIndx : number, months : Array<month>) {
    let i = activeMonthIndx + 1
    for (; i <= months.indexOf(month); i++) {
      months[i].selected = true;
    }
  }

}
