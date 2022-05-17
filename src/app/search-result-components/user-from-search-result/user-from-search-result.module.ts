import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFromSearchResultComponent } from './user-from-search-result.component';


@NgModule({
  declarations: [
    UserFromSearchResultComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    UserFromSearchResultComponent
  ]
})
export class UserFromSearchResultModule { }
