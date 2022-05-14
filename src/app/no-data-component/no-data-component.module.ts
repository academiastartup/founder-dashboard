import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoDataComponentComponent } from './no-data-component.component';

@NgModule({
  declarations: [
    NoDataComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    NoDataComponentComponent
  ]
})
export class NoDataComponentModule { }
