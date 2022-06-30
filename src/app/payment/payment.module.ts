import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { StepTrackerModule } from '../UI/step-tracker/step-tracker.module';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { RecurringPaymentComponent } from './recurring-payment/recurring-payment.component';
import { PayTeamsComponent } from './pay-teams/pay-teams.component';
import { OtherPaymentsComponent } from './other-payments/other-payments.component';
import { SearchInputModule } from '../UI/search-input/search-input.module';
import { SearchResultWindowModule } from '../UI/search-result-window/search-result-window.module';
import { NoDataComponentModule } from '../no-data-component/no-data-component.module';
import { CodeInsertModalWindowComponent } from './auxiliary-component/code-insert-modal-window/code-insert-modal-window.component';
import { PaymentDetailsModalWindowComponent } from './auxiliary-component/payment-details-modal-window/payment-details-modal-window.component';
import { FormsModule } from '@angular/forms';

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
    CodeInsertModalWindowComponent,
    RecurringPaymentComponent,
    PayTeamsComponent,
    OtherPaymentsComponent,
    PaymentDetailsModalWindowComponent
  ],
  imports: [
    CommonModule,
    StepTrackerModule,
    FormsModule,
    NoDataComponentModule,
    SearchResultWindowModule,
    SearchInputModule,
    RouterModule.forChild(routes)
  ]
})
export class PaymentModule { }
