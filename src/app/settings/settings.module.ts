import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditModalWindowComponent } from './auxiliary-components/edit-modal-window/edit-modal-window.component';
import { LoaderModule } from '../UI/loader/loader.module';

const routes : Routes = [
  {path : '', component : HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    EditModalWindowComponent
  ],
  imports: [
    CommonModule,
    LoaderModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingsModule { }
