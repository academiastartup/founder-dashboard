import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepTrackerComponent } from './step-tracker.component';

@NgModule({
  declarations: [
    StepTrackerComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    StepTrackerComponent
  ]
})
export class StepTrackerModule { }
