import { Component, OnInit } from '@angular/core';
import { ServiceFilterMessengerService } from 'src/app/reports/service-messengers/service-filter-messenger.service';

@Component({
  selector: 'app-date-filter-component',
  templateUrl: './date-filter-component.component.html',
  styleUrls: ['./date-filter-component.component.css']
})
export class DateFilterComponentComponent implements OnInit {

  public showDefaultFilterWindw : boolean = false;
  public currentFilterTitle : string = 'Tudo';

  constructor(
    private serviceFilterMessengerService : ServiceFilterMessengerService
  ) { }

  ngOnInit(): void {
  }

  showDefaultFilterOptionWindow() {
    this.showDefaultFilterWindw = !this.showDefaultFilterWindw;
  }

  setFilter(filterTitle : string) {
    this.serviceFilterMessengerService.filterDataToSend.next(
      {
        name : filterTitle,
        type : 'date'
      }
    );
  }
}
