import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { StepTrackerModule } from '../UI/step-tracker/step-tracker.module';

const routes : Routes = [
  {
    path : '', component : HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    StepTrackerModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectCreationFormModule { }
