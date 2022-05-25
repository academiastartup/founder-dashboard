import { Injectable } from '@angular/core';

export interface month  {
  name : string,
  numberOfDays : string,
  year : number,
  numberOfClicks : number,
  selected : boolean,
  index : number,
  active : boolean
} 

@Injectable({
  providedIn: 'root'
})
export class DateService {
  
  public date;

  public months : Array<month> = [
    {
      name : 'Jan', numberOfDays : '31',
      year : 2022,
      numberOfClicks : 0,
      selected : false,
      index : 0,
      active : false
    },
    {
      name : 'Fev', numberOfDays : '28',
      year : 2022,
      numberOfClicks : 0,
      selected : false,
      index : 1,
      active : false
    },
    {
      name : 'Mar', numberOfDays : '31',
      year : 2022,
      numberOfClicks : 0,
      selected : false,
      index : 2,
      active : false
    },
    {
      name : 'Abr', numberOfDays : '30',
      year : 2022,
      numberOfClicks : 0,
      selected : false,
      index : 3,
      active : false
    },
    {
      name : 'Mai', numberOfDays : '31',
      year : 2022,
      numberOfClicks : 0,
      selected : false,
      index : 4,
      active : false
    },
    {
      name : 'Jun', numberOfDays : '31',
      year : 2022,
      numberOfClicks : 0,
      selected : false,
      index : 5,
      active : false
    },
    {
      name : 'Jul', numberOfDays : '31',
      year : 2022,
      numberOfClicks : 0,
      selected : false,
      index : 6,
      active : false
    },
    {
      name : 'Ago', numberOfDays : '31',
      year : 2022,
      numberOfClicks : 0,
      selected : false,
      index : 7,
      active : false
    },
    {
      name : 'Set', numberOfDays : '30',
      year : 2022,
      numberOfClicks : 0,
      selected : false,
      index : 8,
      active : false
    },
    {
      name : 'Out', numberOfDays : '31',
      year : 2022,
      numberOfClicks : 0,
      selected : false,
      index : 9,
      active : false
    },
    {
      name : 'Nov', numberOfDays : '30',
      year : 2022,
      numberOfClicks : 0,
      selected : false,
      index : 10,
      active : false
    },
    {
      name : 'Dez', numberOfDays : '31',
      year : 2022,
      numberOfClicks : 0,
      selected : false,
      index : 11,
      active : false
    },
  ];

  constructor() {
    this.date = new Date();
  }

  getMonths() : Array<month>{
    return this.months;
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

  countClicks(month : month) : number {
    return month.numberOfClicks;
  }

  activateMonth(month : month) {
    month.active = true;
  }

  getActiveElementIndx(months : Array<month>) : number {
    for (let i = 0; i < months.length; i++) {
      if (months[i].active == true) {
        return months[i].index;
      }
    }
    return NaN;
  }

  selectPreviousMonths(month : month, activeMonthIndx : number, months : Array<month>) {
    let i = activeMonthIndx + 1
    for (; i < month.index; i++) {
      months[i].selected = true;
    }
  }


}
