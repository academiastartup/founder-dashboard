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

  isThereAMonthActive(months : Array<month>) : boolean {
    return months.filter(month => month.active == true).length > 0;
  }

  deSelectMonths(months : Array<month>) {
    months.forEach(month => month.selected = false);
  }

  



}
