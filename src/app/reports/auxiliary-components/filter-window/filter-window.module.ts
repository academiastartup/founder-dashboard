import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterWindowComponent } from './filter-window.component';
import { DateFilterComponentComponent } from './auxiliary-components/date-filter-component/date-filter-component.component';

@NgModule({
  declarations: [
    FilterWindowComponent, 
    DateFilterComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    FilterWindowComponent
  ]
})
export class FilterWindowModule { }
