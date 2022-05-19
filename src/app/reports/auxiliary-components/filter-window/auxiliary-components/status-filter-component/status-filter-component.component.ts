import { Component, OnInit } from '@angular/core';
import { ServiceFilterMessengerService } from 'src/app/reports/service-messengers/service-filter-messenger.service';


@Component({
  selector: 'app-status-filter-component',
  templateUrl: './status-filter-component.component.html',
  styleUrls: ['./status-filter-component.component.css']
})
export class StatusFilterComponentComponent implements OnInit {

  constructor(
    private serviceFilterMessengerService : ServiceFilterMessengerService
  ) { }

  ngOnInit(): void {
  }

  setFilter(filterTitle : string) {
    this.serviceFilterMessengerService.filterDataToSend.next(
      {
        name : filterTitle,
        type : 'status'
      }
    );
  }

}
