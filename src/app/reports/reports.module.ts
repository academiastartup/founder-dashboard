import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableOfReportsComponent } from './auxiliary-components/table-of-reports/table-of-reports.component';
import { ModalWindowComponent } from './auxiliary-components/modal-window/modal-window.component';
import { LoaderModule } from '../UI/loader/loader.module';
import { FilterWindowModule } from './auxiliary-components/filter-window/filter-window.module';
import { ServiceForDataService } from './services-for-data/service-for-data.service';

const routes : Routes = [
  {path : '', component : HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    TableOfReportsComponent,
    ModalWindowComponent
  ],
  imports: [
    CommonModule,
    LoaderModule,
    FilterWindowModule,
    RouterModule.forChild(routes)
  ],
  providers : [
    ServiceForDataService
  ]
})
export class ReportsModule { }
