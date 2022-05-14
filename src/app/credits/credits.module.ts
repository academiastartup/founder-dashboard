import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderComponent } from '../UI/loader/loader.component';
import { LoaderModule } from '../UI/loader/loader.module';
import { NoDataComponentModule } from '../no-data-component/no-data-component.module';

const routes : Routes = [
  {
    path : '',
    component : HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LoaderModule,
    NoDataComponentModule,
    RouterModule.forChild(routes)
  ]
})
export class CreditsModule { }
