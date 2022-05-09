import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableOfReportsComponent } from './auxiliary-components/table-of-reports/table-of-reports.component';
import { ModalWindowComponent } from './auxiliary-components/modal-window/modal-window.component';
import { LoaderModule } from '../UI/loader/loader.module';
import { FilterWindowComponent } from './auxiliary-components/filter-window/filter-window.component';

const routes : Routes = [
  {path : '', component : HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    TableOfReportsComponent,
    ModalWindowComponent,
    FilterWindowComponent
  ],
  imports: [
    CommonModule,
    LoaderModule,
    RouterModule.forChild(routes)
  ]
})
export class ReportsModule { }
