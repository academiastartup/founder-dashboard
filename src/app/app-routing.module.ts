import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Home/main/main.component';

const routes: Routes = [
  {
    path : '', 
    component : MainComponent
  },
  {
    path : 'relatorios', 
    loadChildren : () => import('./reports/reports.module').then(m => m.ReportsModule)
  },
  {
    path : 'definicoes',
    loadChildren : () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path : 'projetos',
    loadChildren :() => import('./projects/projects.module').then(m => m.ProjectsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
