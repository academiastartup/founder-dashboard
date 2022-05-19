import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterWindowComponent } from './filter-window.component';
import { DateFilterComponentComponent } from './auxiliary-components/date-filter-component/date-filter-component.component';
import { PasswordFilterComponentComponent } from './auxiliary-components/password-filter-component/password-filter-component.component';
import { QuantityFilterComponentComponent } from './auxiliary-components/quantity-filter-component/quantity-filter-component.component';
import { StatusFilterComponentComponent } from './auxiliary-components/status-filter-component/status-filter-component.component';
import { TeamsFilterComponentComponent } from './auxiliary-components/teams-filter-component/teams-filter-component.component';
import { SearchInputModule } from 'src/app/UI/search-input/search-input.module';
import { SearchResultWindowModule } from 'src/app/UI/search-result-window/search-result-window.module';
import { NoDataComponentModule } from 'src/app/no-data-component/no-data-component.module';

@NgModule({
  declarations: [
    FilterWindowComponent, 
    DateFilterComponentComponent, 
    PasswordFilterComponentComponent, 
    QuantityFilterComponentComponent, 
    StatusFilterComponentComponent, 
    TeamsFilterComponentComponent
  ],
  imports: [
    SearchInputModule,
    SearchResultWindowModule,
    NoDataComponentModule,
    CommonModule
  ],
  exports :[
    FilterWindowComponent
  ]
})
export class FilterWindowModule { }
