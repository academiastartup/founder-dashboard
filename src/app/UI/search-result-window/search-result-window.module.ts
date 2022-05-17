import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultWindowComponent } from './search-result-window.component';

@NgModule({
  declarations: [
    SearchResultWindowComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    SearchResultWindowComponent
  ]
})
export class SearchResultWindowModule { }
