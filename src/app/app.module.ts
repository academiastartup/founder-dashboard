import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './UI/navbar/navbar.component';
import { SearchbarComponent } from './UI/searchbar/searchbar.component';
import { SummaryComponent } from './Home/UI/summary/summary.component';
import { MainComponent } from './Home/main/main.component';
import { CreditBalanceComponent } from './Home/UI/credit-balance/credit-balance.component';
import { TransactionComponent } from './Home/UI/transaction/transaction.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderModule } from './UI/loader/loader.module';
import { SearchInputModule } from './UI/search-input/search-input.module';
import { SearchResultWindowModule } from './UI/search-result-window/search-result-window.module';
import { HttpClientModule } from '@angular/common/http';

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
    BrowserModule,
    HttpClientModule,
    LoaderModule,
    SearchResultWindowModule,
    SearchInputModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
