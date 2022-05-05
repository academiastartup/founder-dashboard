import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './UI/navbar/navbar.component';
import { SearchbarComponent } from './UI/searchbar/searchbar.component';
import { SummaryComponent } from './Home/UI/summary/summary.component';
import { MainComponent } from './Home/main/main.component';
import { CreditBalanceComponent } from './Home/UI/credit-balance/credit-balance.component';
import { TransactionComponent } from './Home/UI/transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
    SummaryComponent,
    MainComponent,
    CreditBalanceComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
