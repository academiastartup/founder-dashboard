import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoaderModule } from '../UI/loader/loader.module';

const routes : Routes = [
  {path : '', component : HomeComponent}
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LoaderModule,
    RouterModule.forChild(routes)
  ]
})
export class NotificationsModule { }
