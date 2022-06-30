/*courtesy of : https://www.tsmean.com/articles/angular/implementing-a-live-search-aka-search-as-you-type-with-angular/ */

import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators'
import { ServiceSearchResultMessengerService } from 'src/app/reports/service-messengers/service-search-result-messenger.service';
import { SearchResultService } from '../search-result-service/search-result.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit, OnDestroy {

  @Input() placeholder: string = '';
  @Input() debounceTime = 300;

  @Output() textChange = new EventEmitter<string>();

  inputValue = new Subject<string>();

  inputFieldOnFocus : boolean = false;
  

  trigger = this.inputValue.pipe( 
    debounceTime(this.debounceTime),
    distinctUntilChanged()
  );

  subscriptions : Subscription[] = [];
  searchResultSubscription : Subscription = of().subscribe();

  constructor(
    private searchResultService : SearchResultService,
    private serviceSearchResultMessengerService : ServiceSearchResultMessengerService
  ) { }

  ngOnInit(): void {
    const subscription = this.trigger.subscribe(currentValue => {
      this.textChange.emit(currentValue);
    });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onInput(e : any) {
    this.searchResultSubscription.unsubscribe();
    this.inputValue.next(e.target.value);
    this.searchResultSubscription = this.searchResultService.getUsers(e.target.value.toLocaleLowerCase()).
      subscribe((value : any) => {
        this.serviceSearchResultMessengerService.searchResultToSend.next(value);  
      });
  }

  onFocus() {
    this.inputFieldOnFocus = true;
  }

  notOnFocus() {
    this.inputFieldOnFocus = false;
  }

}
