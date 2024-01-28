import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbuttonComponent } from './shared/components/navbutton/navbutton.component';
import { DepositComponent } from './features/deposit/deposits/deposit.component';
import { WithdrawalComponent } from './features/withdrawal/withdrawals/withdrawal.component';
import { BillComponent } from './features/bill/bills/bill.component';
import { AccountComponent } from './features/account/accounts/account.component';
import { CustomerComponent } from './features/customer/customers/customer.component';
import { TableComponent } from './shared/components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DepositDetailComponent } from './features/deposit/deposit-detail/deposit-detail.component';
import { WithdrawalDetailComponent } from './features/withdrawal/withdrawal-detail/withdrawal-detail.component';
import { BillDetailComponent } from './features/bill/bill-detail/bill-detail.component';
import { AccountDetailComponent } from './features/account/account-detail/account-detail.component';

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
    DepositDetailComponent,
    WithdrawalDetailComponent,
    BillDetailComponent,
    AccountDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
