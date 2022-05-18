import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsFromSearchResultComponent } from './transactions-from-search-result.component';

@NgModule({
  declarations: [
    TransactionsFromSearchResultComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    TransactionsFromSearchResultComponent
  ]
})
export class TransactionFromSearchResultModule { }
