import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultWindowComponent } from './search-result-window.component';
import { UserFromSearchResultModule } from 'src/app/search-result-components/user-from-search-result/user-from-search-result.module';
import { TransactionFromSearchResultModule } from 'src/app/search-result-components/transactions-from-search-result/transaction-from-search-result.module';
import { PageFromSearchResultModule } from 'src/app/search-result-components/page-from-search-result/page-from-search-result.module';

@NgModule({
  declarations: [
    SearchResultWindowComponent
  ],
  imports: [
    UserFromSearchResultModule,
    TransactionFromSearchResultModule,
    PageFromSearchResultModule,
    CommonModule
  ],
  exports : [
    SearchResultWindowComponent
  ]
})
export class SearchResultWindowModule { }
