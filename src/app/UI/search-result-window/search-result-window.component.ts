import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { ServiceSearchResultMessengerService } from 'src/app/reports/service-messengers/service-search-result-messenger.service';

interface beneficiary {
  name : string;
  value : number,
  id : number
};

@Component({
  selector: 'app-search-result-window',
  templateUrl: './search-result-window.component.html',
  styleUrls: ['./search-result-window.component.css']
})
export class SearchResultWindowComponent implements OnInit, OnDestroy {

  @Input() userTypedInSearcData : string = '';
  @Input() searchResultWindwWidth : number = 75;
  @Output() onSearchResultClickEvent = new EventEmitter<beneficiary>();

  searchResults : Array<beneficiary> = [];

  searchResultSubscriber : Subscription = of().subscribe();

  constructor(private serviceSearchResultMessengerService : ServiceSearchResultMessengerService) { }

  ngOnInit(): void {
    this.searchResultSubscriber = this.serviceSearchResultMessengerService.getsearchResultToSendAsObservable().
      subscribe((value : any) => {
        this.searchResults = value;
      });
  }

  getWindwWidth() {
    return this.searchResultWindwWidth + '%';
  }

  emitSearchResultClickEmit(beneficiary : beneficiary) {
    this.onSearchResultClickEvent.emit(beneficiary);
  }  

  ngOnDestroy(): void {
    this.searchResultSubscriber.unsubscribe();
  }
}
