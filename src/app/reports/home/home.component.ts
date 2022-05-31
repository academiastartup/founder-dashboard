import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { ServiceFilterMessengerService } from '../service-messengers/service-filter-messenger.service';
import { ServiceForDataService, transactionType } from '../services-for-data/service-for-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  transactionsData : Array<transactionType> = [];
  totalOfTransactionsInValue : number = 0;

  openDownloadReportModalWindow : boolean = false;
  openFilterWindow : boolean = false;
  activeFilters : Array<{name : string, type : string}> = [];

  dataReadyToShow : boolean = false;

  // vector to store subscriptions
  subscriber$ : any;

  constructor(
    private serviceFilterMessengerService : ServiceFilterMessengerService,
    private serviceForDataService : ServiceForDataService
  ) { }

  ngOnInit(): void {
    
    this.loadTransactions();
  
    this.subscriber$ = this.serviceFilterMessengerService.getFilterDataToSendAsObservable().
      subscribe((value : any) => {
        let newFilter = value;

        // ensures mutual exclusivity for same type filter
        if (newFilter.type == 'Date')
          this.activeFilters = this.activeFilters.filter(filter => filter.type != 'Date');
        
        this.activeFilters.push(newFilter);

        // comunicate with the reports table once a new filter is added
        this.sendFilterAndTransactionData();

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
    // comunicate with the reports table once a new filter is added
    this.sendFilterAndTransactionData();
  }

  closeDownloadReportModalWindow() {
    this.openDownloadReportModalWindow = false;
  }

  ngOnDestroy(): void {
    this.subscriber$.unsubscribe();
  }

  loadTransactions() {
    return this.serviceForDataService.getTransactions().subscribe((data : Array<transactionType>) => {
      this.transactionsData = data;
      this.dataReadyToShow = true;
      this.totalOfTransactionsInValue = this.getSumOfTransactionsInValue(data);
    });
  }

  sendFilterAndTransactionData() {
    this.serviceFilterMessengerService.filterAndTransactionToSend.next(
      {
        filterArr : this.activeFilters,
        transactionsData : this.transactionsData
      }
    )
  }

  setTransactionsTotalInValueFromEvent($event : number) {
    this.totalOfTransactionsInValue = $event;
  }

  /*helpers*/
  getSumOfTransactionsInValue(transasctions : Array<transactionType>) : number {
    let sum = 0;
    transasctions.forEach((transasction : transactionType) => {
      sum += +transasction.value;
    })
    return sum;
  }

}
