import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FormModalWindowComponent } from './auxiliary-components/form-modal-window/form-modal-window.component';

const routes : Routes = [
  {path : '', component : HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    FormModalWindowComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }
