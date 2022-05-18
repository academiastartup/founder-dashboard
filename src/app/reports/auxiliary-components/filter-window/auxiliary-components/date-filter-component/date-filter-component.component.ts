import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-filter-component',
  templateUrl: './date-filter-component.component.html',
  styleUrls: ['./date-filter-component.component.css']
})
export class DateFilterComponentComponent implements OnInit {

  public showDefaultFilterWindw : boolean = false;
  public currentFilterTitle : string = 'Tudo';

  constructor() { }

  ngOnInit(): void {
  }

  showDefaultFilterOptionWindow() {
    this.showDefaultFilterWindw = !this.showDefaultFilterWindw;
  }

  setFilter(filterTitle : string) {
    this.currentFilterTitle = filterTitle;
  }
}
