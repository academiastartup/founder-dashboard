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
    loadChildren : () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path : 'creditos',
    loadChildren : () => import('./credits/credits.module').then(m => m.CreditsModule)
  },
  {
    path : 'pagamentos',
    loadChildren : () => import('./payment/payment.module').then(m => m.PaymentModule)
  },
  {
    path : 'investidores',
    loadChildren : () => import('./investors/investors.module').then(m => m.InvestorsModule)
  },
  {
    path : 'notificacoes',
    loadChildren : () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
  },
  {
    path : 'criar-projecto',
    loadChildren : () => import('./project-creation-form/project-creation-form.module').then(m => m.ProjectCreationFormModule)
  },
  {
    path : 'eventos',
    loadChildren : () => import('./events/events.module').then(m => m.EventsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
