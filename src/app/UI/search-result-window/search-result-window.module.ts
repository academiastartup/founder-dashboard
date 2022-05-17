import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultWindowComponent } from './search-result-window.component';
import { UserFromSearchResultModule } from 'src/app/search-result-components/user-from-search-result/user-from-search-result.module';

@NgModule({
  declarations: [
    SearchResultWindowComponent
  ],
  imports: [
    UserFromSearchResultModule,
    CommonModule
  ],
  exports : [
    SearchResultWindowComponent
  ]
})
export class SearchResultWindowModule { }
