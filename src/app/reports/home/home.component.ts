import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { ServiceFilterMessengerService } from '../service-messengers/service-filter-messenger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  openDownloadReportModalWindow : boolean = false;
  openFilterWindow : boolean = false;
  activeFilters : Array<{name : string, type : string}> = [];

  dataReadyToShow : boolean = false;

  // vector to store subscriptions
  filterSubscriber : any = [];

  constructor(
    private serviceFilterMessengerService : ServiceFilterMessengerService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dataReadyToShow = true;
    }, 2000);

    this.filterSubscriber = this.serviceFilterMessengerService.getFilterDataToSendAsObservable().
      subscribe((value : any) => {
        let newFilter = value;

        // ensures mutual exclusivity for same type filter
        this.activeFilters = this.activeFilters.filter(filter => filter.type != newFilter.type);
        this.activeFilters.push(newFilter);
      });
  }

  toggleDownloadReportModalWindow() {
    this.openDownloadReportModalWindow = !this.openDownloadReportModalWindow;
  }

  toggleFilterWindow() {
    this.openFilterWindow = !this.openFilterWindow;
  }

  removeFilter(filterId : number) {
    this.activeFilters.splice(filterId, 1);
  }

  closeDownloadReportModalWindow() {
    this.openDownloadReportModalWindow = false;
  }

  ngOnDestroy(): void {
    this.filterSubscriber.unsubscribe();
  }

  

}
