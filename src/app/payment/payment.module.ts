import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { StepTrackerModule } from '../UI/step-tracker/step-tracker.module';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { RecurringPaymentComponent } from './recurring-payment/recurring-payment.component';
import { PayTeamsComponent } from './pay-teams/pay-teams.component';
import { OtherPaymentsComponent } from './other-payments/other-payments.component';

const routes : Routes = [
  {
    path : '', component : HomeComponent,
    children : [
      {
        path : '', 
        component : PaymentOptionsComponent
      },
      {
        path : 'pagamento-recorrente',
        component : RecurringPaymentComponent
      },
      {
        path : 'pagar-equipas',
        component : PayTeamsComponent
      },
      {
        path : 'outros-pagamentos',
        component : OtherPaymentsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    RecurringPaymentComponent,
    PayTeamsComponent,
    OtherPaymentsComponent
  ],
  imports: [
    CommonModule,
    StepTrackerModule,
    RouterModule.forChild(routes)
  ]
})
export class PaymentModule { }
