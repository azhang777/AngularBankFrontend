import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbuttonComponent } from './shared/components/navbutton/navbutton.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { BillComponent } from './bill/bill.component';
import { AccountComponent } from './account/account.component';
import { CustomerComponent } from './customer/customer.component';
import { TableComponent } from './shared/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NavbuttonComponent,
    DepositComponent,
    WithdrawalComponent,
    BillComponent,
    AccountComponent,
    CustomerComponent,
    TableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
