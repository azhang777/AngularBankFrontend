import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './features/customer/customers/customer.component';
import { AccountComponent } from './features/account/accounts/account.component';
import { BillComponent } from './features/bill/bills/bill.component';
import { WithdrawalComponent } from './features/withdrawal/withdrawals/withdrawal.component';
import { DepositComponent } from './features/deposit/deposits/deposit.component';
import { CustomerDetailComponent } from './features/customer/customer-detail/customer-detail.component';
import { AccountDetailComponent } from './features/account/account-detail/account-detail.component';
import { CreateAccountComponent } from './features/account/create-account/create-account.component';
import { CreateCustomerComponent } from './features/customer/create-customer/create-customer.component';

const routes: Routes = [
  { path: 'customers', component: CustomerComponent },
  { path: 'create', component: CreateCustomerComponent },
  { path: 'customers/:id', component: CustomerDetailComponent },
  { path: 'customers/:id/create', component: CreateAccountComponent },
  { path: 'accounts', component: AccountComponent },
  { path: 'accounts/:id', component: AccountDetailComponent },
  { path: 'bills', component: BillComponent },
  { path: 'withdrawals', component: WithdrawalComponent },
  { path: 'deposits', component: DepositComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
